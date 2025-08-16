/**
 * Utility functions for converting between English and Persian numbers
 */

// Mapping of English digits to Persian digits
const englishToPersianMap: Record<string, string> = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹'
};

// Mapping of Persian digits to English digits
const persianToEnglishMap: Record<string, string> = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
};

/**
 * Convert English numbers to Persian numbers
 * @param input - String or number to convert
 * @returns String with Persian digits
 */
export const toPersianNumbers = (input: string | number): string => {
    if (input === null || input === undefined) return '';

    const str = input.toString();
    return str.replace(/[0-9]/g, (digit) => englishToPersianMap[digit] || digit);
};

/**
 * Convert Persian numbers to English numbers
 * @param input - String with Persian digits
 * @returns String with English digits
 */
export const toEnglishNumbers = (input: string): string => {
    if (!input) return '';

    return input.replace(/[۰-۹]/g, (digit) => persianToEnglishMap[digit] || digit);
};

/**
 * Check if a string contains Persian digits
 * @param input - String to check
 * @returns Boolean indicating if Persian digits are found
 */
export const hasPersianNumbers = (input: string): boolean => {
    return /[۰-۹]/.test(input);
};

/**
 * Check if a string contains English digits
 * @param input - String to check
 * @returns Boolean indicating if English digits are found
 */
export const hasEnglishNumbers = (input: string): boolean => {
    return /[0-9]/.test(input);
};

/**
 * Format a number with Persian digits and thousand separators
 * @param input - Number or string to format
 * @returns Formatted string with Persian digits
 */
export const formatPersianNumber = (input: string | number): string => {
    if (input === null || input === undefined) return '';

    const num = typeof input === 'string' ? parseFloat(toEnglishNumbers(input)) : input;

    if (isNaN(num)) return '';

    // Format with thousand separators and convert to Persian
    const formatted = new Intl.NumberFormat('en-US').format(num);
    return toPersianNumbers(formatted);
};

/**
 * Clean and normalize a phone number (remove non-digits and convert to English)
 * @param input - Phone number string
 * @returns Cleaned phone number with English digits
 */
export const cleanPhoneNumber = (input: string): string => {
    if (!input) return '';

    // Convert Persian to English first
    const englishNumber = toEnglishNumbers(input);

    // Remove all non-digit characters
    return englishNumber.replace(/\D/g, '');
};

/**
 * Format a phone number for display (with Persian digits)
 * @param input - Phone number string
 * @returns Formatted phone number with Persian digits
 */
export const formatPhoneNumber = (input: string): string => {
    const cleaned = cleanPhoneNumber(input);

    if (cleaned.length === 11 && cleaned.startsWith('09')) {
        // Format: 09XX XXX XXXX
        const formatted = cleaned.replace(/^(\d{4})(\d{3})(\d{4})$/, '$1 $2 $3');
        return toPersianNumbers(formatted);
    }

    return toPersianNumbers(cleaned);
};

/**
 * Convert any mixed number string to pure English digits
 * @param input - Mixed number string
 * @returns String with only English digits
 */
export const normalizeToEnglish = (input: string): string => {
    return toEnglishNumbers(input).replace(/\D/g, '');
};

/**
 * Utility object with all number conversion methods
 */
export const PersianNumbers = {
    toPersian: toPersianNumbers,
    toEnglish: toEnglishNumbers,
    hasPersian: hasPersianNumbers,
    hasEnglish: hasEnglishNumbers,
    format: formatPersianNumber,
    cleanPhone: cleanPhoneNumber,
    formatPhone: formatPhoneNumber,
    normalize: normalizeToEnglish
};

export default PersianNumbers;
