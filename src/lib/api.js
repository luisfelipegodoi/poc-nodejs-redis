const axios = require("axios");

const api = axios.create({
    baseURL: process.env.SPOTIFY_URL || "https://api.spotify.com/v1",
    headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    },
});

module.exports = api;