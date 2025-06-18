/**
 * Utility helper functions for Student Progress Management backend
 */

/**
 * Formats a date to YYYY-MM-DD string.
 * @param {Date|string} date
 * @returns {string}
 */
function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Checks if a value is empty (null, undefined, or empty string/array/object).
 * @param {*} value
 * @returns {boolean}
 */
function isEmpty(value) {
    if (value == null) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (typeof value === 'object' && Object.keys(value).length === 0) return true;
    return false;
}

/**
 * Generates a random alphanumeric ID of given length.
 * @param {number} length
 * @returns {string}
 */
function generateId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

module.exports = {
    formatDate,
    isEmpty,
    generateId,
};