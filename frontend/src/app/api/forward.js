// pages/api/proxy.js

import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
    try {
        const backendUrl = 'http://localhost:3333' + req.url;
        const backendResponse = await fetch(backendUrl, {
            method: req.method,
            headers: req.headers,
            body: req.method === 'GET' ? null : req.body // Only include body for non-GET requests
        });

        // Pass through the response from the backend server
        res.status(backendResponse.status).json(await backendResponse.json());
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ message: 'Proxy error' });
    }
}
