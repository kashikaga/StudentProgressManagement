const axios = require('axios');

const CODEFORCES_API_BASE = 'https://codeforces.com/api';

/**
 * Fetches user information from Codeforces.
 * @param {string} handle - The Codeforces user handle.
 * @returns {Promise<Object>} - The user info object.
 */
async function getUserInfo(handle) {
    try {
        const response = await axios.get(`${CODEFORCES_API_BASE}/user.info`, {
            params: { handles: handle }
        });
        if (response.data.status === 'OK') {
            return response.data.result[0];
        } else {
            throw new Error(response.data.comment || 'Unknown error');
        }
    } catch (error) {
        throw new Error(`Failed to fetch user info: ${error.message}`);
    }
}

/**
 * Fetches user submissions from Codeforces.
 * @param {string} handle - The Codeforces user handle.
 * @param {number} [count=10] - Number of submissions to fetch.
 * @returns {Promise<Array>} - Array of submission objects.
 */
async function getUserSubmissions(handle, count = 10) {
    try {
        const response = await axios.get(`${CODEFORCES_API_BASE}/user.status`, {
            params: { handle, count }
        });
        if (response.data.status === 'OK') {
            return response.data.result;
        } else {
            throw new Error(response.data.comment || 'Unknown error');
        }
    } catch (error) {
        throw new Error(`Failed to fetch user submissions: ${error.message}`);
    }
}

module.exports = {
    getUserInfo,
    getUserSubmissions
};