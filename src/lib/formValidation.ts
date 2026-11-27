/**
 * Pyrow Enterprise Input & Anti-Spam Validation Engine
 * Guards all lead capture, consultation bookings, and contact forms
 * from dummy entries, invalid phone numbers, spam, and bot submissions.
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  cleanedValue?: string;
}

/**
 * Production-Grade Regular Expressions
 */
export const VALIDATION_REGEX = {
  // Name: Must start with a letter, allows letters, spaces, hyphens, dots, apostrophes, 2 to 60 characters
  NAME: /^[a-zA-Z][a-zA-Z\s.'\-]{1,59}$/,
  
  // Strict Indian & International Mobile Number Regex:
  // Allows optional '+', optional country code (e.g. 91), optional '0', followed by 10-digit mobile starting with 6-9
  // OR standard international 10-15 digit format
  MOBILE_INDIA: /^(?:\+?91[\s.-]?|0)?[6-9]\d{9}$/,
  MOBILE_INTERNATIONAL: /^\+?[1-9]\d{9,14}$/,
  MOBILE_INPUT_ALLOWED: /^[0-9+\s\-()]*$/,

  // Email: Standard RFC-compliant email regex
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Repeated single character sequence (e.g., 'aaaaa', '1111111111')
  REPEATED_CHARS: /(.)\1{4,}/i,
  REPEATED_DIGITS: /^(\d)\1{9,}$/,
};

// Obvious spam, dummy names, and bot test patterns
const SPAM_NAME_PATTERNS = [
  'test', 'testing', 'tester', 'dummy', 'fake', 'sample', 'asdf', 'asdfgh',
  'qwerty', 'admin', 'administrator', 'root', 'user', 'none', 'null',
  'undefined', 'n/a', 'na', 'foo', 'bar', 'spam', 'temp', 'anonymous', 'unknown',
  'demo', 'trial', 'abc', 'xyz', 'no name', 'noname'
];

/**
 * Validates personal/client names via Regex.
 * - Regex: /^[a-zA-Z][a-zA-Z\s.'\-]{1,59}$/
 * - Must be at least 2 characters, starting with a letter
 * - Rejects digits, special symbols, URLs, repeated gibberish
 * - Rejects dummy/spam words (e.g. 'test', 'asdf', 'admin')
 */
export function validateName(name: string): ValidationResult {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Your name is required.' };
  }

  const trimmed = name.trim();

  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long.' };
  }

  if (trimmed.length > 60) {
    return { isValid: false, error: 'Name cannot exceed 60 characters.' };
  }

  // Reject if contains digits
  if (/\d/.test(trimmed)) {
    return { isValid: false, error: 'Name cannot contain numbers.' };
  }

  // Reject URLs or HTML
  if (/https?:\/\/|<|>|\.com|\.in|\.org/i.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid personal or business name.' };
  }

  // Check via Regex: Must only contain alphabetic letters, spaces, dots, hyphens, and apostrophes
  if (!VALIDATION_REGEX.NAME.test(trimmed)) {
    return { isValid: false, error: 'Name must start with a letter and contain only letters and spaces.' };
  }

  // Detect repeated characters (e.g., 'aaaaa', 'zzzzz') via regex
  if (VALIDATION_REGEX.REPEATED_CHARS.test(trimmed.toLowerCase())) {
    return { isValid: false, error: 'Please enter a genuine personal name.' };
  }

  // Detect dummy / spam names
  const lower = trimmed.toLowerCase();
  const words = lower.split(/[\s.'\-]+/).filter(Boolean);

  if (SPAM_NAME_PATTERNS.includes(lower)) {
    return { isValid: false, error: 'Please enter your actual name (test entries not accepted).' };
  }
  if (words.length > 0 && words.every((w) => SPAM_NAME_PATTERNS.includes(w))) {
    return { isValid: false, error: 'Please enter your actual name (test entries not accepted).' };
  }

  return { isValid: true, cleanedValue: trimmed };
}

/**
 * Validates international and domestic phone / WhatsApp numbers via Regex.
 * - Supports ALL countries worldwide (+1 USA/Canada, +44 UK, +971 UAE, +65 Singapore, +61 Australia, etc.)
 * - Domestic Indian mobile: 10 digits starting with 6, 7, 8, or 9 (with or without +91 / 0)
 * - International standard: E.164 (7 to 15 digits with international dialing code)
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, error: 'Phone number is required.' };
  }

  const trimmed = phone.trim();

  // Check character validity via regex: only allow digits, +, -, (, ), and spaces
  if (!VALIDATION_REGEX.MOBILE_INPUT_ALLOWED.test(trimmed)) {
    return { isValid: false, error: 'Phone number can only contain digits, spaces, and "+".' };
  }

  // Extract pure digits
  const digits = trimmed.replace(/\D/g, '');

  if (digits.length < 7) {
    return { isValid: false, error: 'Phone number must have at least 7 to 10 digits.' };
  }

  if (digits.length > 15) {
    return { isValid: false, error: 'Phone number cannot exceed 15 digits.' };
  }

  // Check all identical digits (e.g. 0000000000, 1111111111, 9999999999) via regex
  if (VALIDATION_REGEX.REPEATED_DIGITS.test(digits)) {
    return { isValid: false, error: 'Please enter a valid, active phone number.' };
  }

  // Check obvious sequence patterns
  const dummySequences = ['1234567890', '0123456789', '9876543210', '0000000000', '1122334455'];
  if (dummySequences.includes(digits) || dummySequences.includes(digits.slice(-10))) {
    return { isValid: false, error: 'Please enter a genuine phone number.' };
  }

  const isExplicitInternational = trimmed.startsWith('+');

  // Case 1: Explicit International with '+' (e.g. +1 USA, +44 UK, +971 UAE, +65 SG, +91 India)
  if (isExplicitInternational) {
    // If Indian (+91...)
    if (digits.startsWith('91') && digits.length === 12) {
      if (!/^91[6-9]\d{9}$/.test(digits)) {
        return { isValid: false, error: 'Indian mobile number after +91 must start with 6, 7, 8, or 9.' };
      }
    }
    // Any international number with + and 7 to 15 digits
    if (!/^\+[1-9]\d{6,14}$/.test(`+${digits}`)) {
      return { isValid: false, error: 'Please enter a valid international phone number with country code.' };
    }
    return { isValid: true, cleanedValue: `+${digits}` };
  }

  // Case 2: Numbers without '+'
  // If 12 digits starting with 91 (e.g. 919876543210)
  if (digits.length === 12 && digits.startsWith('91')) {
    if (!/^91[6-9]\d{9}$/.test(digits)) {
      return { isValid: false, error: 'Indian mobile number after 91 must start with 6, 7, 8, or 9.' };
    }
    return { isValid: true, cleanedValue: `+${digits}` };
  }

  // If 11 digits starting with 0 (e.g. 09876543210)
  if (digits.length === 11 && digits.startsWith('0')) {
    if (!/^0[6-9]\d{9}$/.test(digits)) {
      return { isValid: false, error: 'Mobile number must start with 6, 7, 8, or 9.' };
    }
    return { isValid: true, cleanedValue: `+91${digits.slice(1)}` };
  }

  // If 10 digits
  if (digits.length === 10) {
    if (/^[6-9]\d{9}$/.test(digits)) {
      return { isValid: true, cleanedValue: `+91${digits}` };
    } else {
      // 10-digit international local format (e.g. USA local 10-digit number)
      return { isValid: true, cleanedValue: digits };
    }
  }

  // Standard length 7 to 15 digits
  if (digits.length >= 7 && digits.length <= 15) {
    return { isValid: true, cleanedValue: digits };
  }

  return { isValid: false, error: 'Please enter a valid phone number (e.g. +91 98765 43210 or +1 212 555 0199).' };
}

/**
 * Validates email addresses via Regex.
 * - Regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 * - Strict RFC compliance
 * - Rejects dummy domains and junk addresses
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email address is required.' };
  }

  const trimmed = email.trim().toLowerCase();

  // Strict email regex
  if (!VALIDATION_REGEX.EMAIL.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g. name@domain.com).' };
  }

  const [localPart, domain] = trimmed.split('@');

  if (!domain || !domain.includes('.')) {
    return { isValid: false, error: 'Email must contain a valid domain (e.g. gmail.com, company.com).' };
  }

  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
    return { isValid: false, error: 'Email domain extension must contain only letters.' };
  }

  // Block obvious spam / test emails
  const blockedDomains = ['example.com', 'test.com', 'fake.com', 'tempmail.com', 'mailinator.com', 'trashmail.com', 'yopmail.com'];
  if (blockedDomains.includes(domain)) {
    return { isValid: false, error: 'Temporary or test email addresses are not accepted.' };
  }

  const blockedLocalParts = ['test', 'admin', 'root', 'dummy', 'fake', 'asdf'];
  if (blockedLocalParts.includes(localPart)) {
    return { isValid: false, error: 'Please enter your genuine email address.' };
  }

  return { isValid: true, cleanedValue: trimmed };
}

/**
 * Validates any form field by name.
 */
export function validateField(field: string, value: string): ValidationResult {
  switch (field) {
    case 'name':
    case 'fullName':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'phone':
    case 'contactNumber':
      return validatePhone(value);
    case 'message':
    case 'projectDescription':
      return validateMessage(value);
    default:
      return { isValid: true, cleanedValue: value };
  }
}

/**
 * Validates project description or notes.
 */
export function validateMessage(message: string, isRequired = true): ValidationResult {
  const trimmed = (message || '').trim();

  if (isRequired && trimmed.length < 10) {
    return { isValid: false, error: 'Please provide at least 10 characters describing your project or goals.' };
  }

  if (trimmed.length > 5000) {
    return { isValid: false, error: 'Message cannot exceed 5000 characters.' };
  }

  // Gibberish check if long
  if (/(.)\1{5,}/.test(trimmed)) {
    return { isValid: false, error: 'Please provide a clear project description.' };
  }

  return { isValid: true, cleanedValue: trimmed };
}
