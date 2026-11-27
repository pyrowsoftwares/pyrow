import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/**
 * Pyrow Official SweetAlert2 Notification Hub
 * Displays bottom-right toasts and UI-based confirmation modals.
 */

const baseToast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 4500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
  customClass: {
    popup: 'pyrow-sweetalert-toast',
  },
});

export const showEmailAlert = {
  success: (recipient: string, details = 'Dispatched from support@pyrow.in') => {
    baseToast.fire({
      icon: 'success',
      title: 'Mail Sent Successfully!',
      html: `
        <div style="font-family: monospace; font-size: 12px; margin-top: 6px; text-align: left; line-height: 1.5;">
          <div style="color: #ffffff; font-weight: 700; word-break: break-all;">
            ✉ ${recipient}
          </div>
          <div style="color: #a1a1aa; font-size: 11px; margin-top: 3px;">
            ${details}
          </div>
        </div>
      `,
      background: '#0d0b1a',
      color: '#ffffff',
      iconColor: '#10b981',
    });
  },

  sending: (recipient: string, actionName = 'Dispatching email confirmation...') => {
    baseToast.fire({
      icon: 'info',
      title: 'Sending Email...',
      html: `
        <div style="font-family: monospace; font-size: 12px; margin-top: 6px; text-align: left; line-height: 1.5;">
          <div style="color: #ffffff; font-weight: 700; word-break: break-all;">
            ✉ ${recipient}
          </div>
          <div style="color: #c4b5fd; font-size: 11px; margin-top: 3px;">
            ${actionName}
          </div>
        </div>
      `,
      timer: 2500,
      background: '#0d0b1a',
      color: '#ffffff',
      iconColor: '#8b5cf6',
    });
  },

  error: (recipient: string, errorMessage = 'Failed to deliver email') => {
    baseToast.fire({
      icon: 'error',
      title: 'Email Delivery Failed',
      html: `
        <div style="font-family: monospace; font-size: 12px; margin-top: 6px; text-align: left; line-height: 1.5;">
          <div style="color: #ffffff; font-weight: 700; word-break: break-all;">
            ✉ ${recipient}
          </div>
          <div style="color: #f87171; font-size: 11px; margin-top: 3px;">
            ${errorMessage}
          </div>
        </div>
      `,
      timer: 6000,
      background: '#190a14',
      color: '#ffffff',
      iconColor: '#ef4444',
    });
  },
};

/**
 * Universal UI-Based Confirmation Modal
 * Replaces window.confirm() with a sleek, branded UI modal.
 */
export async function confirmAction(options: {
  title: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  danger?: boolean;
}): Promise<boolean> {
  const result = await Swal.fire({
    title: options.title,
    text: options.text || '',
    icon: options.danger ? 'warning' : 'question',
    showCancelButton: true,
    confirmButtonText: options.confirmButtonText || (options.danger ? 'Yes, Delete' : 'Confirm'),
    cancelButtonText: options.cancelButtonText || 'Cancel',
    background: '#0d0b1a',
    color: '#ffffff',
    iconColor: options.danger ? '#ef4444' : '#8b5cf6',
    reverseButtons: true,
    customClass: {
      popup: 'pyrow-sweetalert-modal',
      confirmButton: options.danger ? 'pyrow-swal-confirm-danger' : 'pyrow-swal-confirm',
      cancelButton: 'pyrow-swal-cancel',
    },
    buttonsStyling: false,
  });

  return result.isConfirmed;
}

/**
 * Universal UI-Based Alert Modal
 * Replaces window.alert() with a sleek, branded UI modal.
 */
export async function showAlert(options: {
  title: string;
  text?: string;
  icon?: 'success' | 'error' | 'warning' | 'info';
}): Promise<void> {
  await Swal.fire({
    title: options.title,
    text: options.text || '',
    icon: options.icon || 'info',
    confirmButtonText: 'Understood',
    background: '#0d0b1a',
    color: '#ffffff',
    iconColor:
      options.icon === 'error'
        ? '#ef4444'
        : options.icon === 'success'
          ? '#10b981'
          : options.icon === 'warning'
            ? '#f59e0b'
            : '#8b5cf6',
    customClass: {
      popup: 'pyrow-sweetalert-modal',
      confirmButton: 'pyrow-swal-confirm',
    },
    buttonsStyling: false,
  });
}

/**
 * Quick Validation Warning Toast / Alert
 */
export async function showValidationError(errorMessage: string, fieldTitle = 'Invalid Entry'): Promise<void> {
  await Swal.fire({
    title: fieldTitle,
    text: errorMessage,
    icon: 'warning',
    confirmButtonText: 'Update Details',
    background: '#0d0b1a',
    color: '#ffffff',
    iconColor: '#f59e0b',
    customClass: {
      popup: 'pyrow-sweetalert-modal',
      confirmButton: 'pyrow-swal-confirm',
    },
    buttonsStyling: false,
  });
}

export default Swal;
