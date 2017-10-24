const mongoLabApiKey = '?apiKey=FmIllpfosmgRaRMQtSEVwizeCBTLl2w1';

const API_ROOT = `https://api.mlab.com/api/1/databases/resolute/collections`;

export const USERS = `${API_ROOT}/users${mongoLabApiKey}`;
export const USER = (userId) => `${API_ROOT}/users/${userId}${mongoLabApiKey}`;