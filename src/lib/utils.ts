import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a numerical amount into formal Indian Currency English words
 * e.g. 39000 -> "INR Thirty Nine Thousand Only"
 */
export function numberToIndianWords(num: number): string {
  const integerPart = Math.round(Number(num) || 0);
  if (integerPart <= 0) return 'INR Zero Only';

  const ones = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const convertTwoDigits = (n: number): string => {
    if (n < 20) return ones[n];
    const t = tens[Math.floor(n / 10)];
    const o = ones[n % 10];
    return o ? `${t} ${o}` : t;
  };

  const convertThreeDigits = (n: number): string => {
    const hundred = Math.floor(n / 100);
    const rest = n % 100;
    const parts: string[] = [];
    if (hundred > 0) parts.push(`${ones[hundred]} Hundred`);
    if (rest > 0) parts.push(convertTwoDigits(rest));
    return parts.join(' and ');
  };

  const crore = Math.floor(integerPart / 10000000);
  const lakh = Math.floor((integerPart % 10000000) / 100000);
  const thousand = Math.floor((integerPart % 100000) / 1000);
  const remainder = integerPart % 1000;

  const result: string[] = [];
  if (crore > 0) result.push(`${convertTwoDigits(crore)} Crore`);
  if (lakh > 0) result.push(`${convertTwoDigits(lakh)} Lakh`);
  if (thousand > 0) result.push(`${convertTwoDigits(thousand)} Thousand`);
  if (remainder > 0) result.push(convertThreeDigits(remainder));

  return `INR ${result.join(' ').trim()} Only`;
}

