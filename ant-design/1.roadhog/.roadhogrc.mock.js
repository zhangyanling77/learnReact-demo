export default {
    'GET /api/users': { users: [1, 2] },

    'GET /api/users/1': { id: 1 },

    'POST /api/users/create': (req, res) => { res.end('OK'); },
};