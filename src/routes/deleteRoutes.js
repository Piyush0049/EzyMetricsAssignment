const express = require('express');
const router = express.Router();
const Lead = require('../models/lead');
const Campaign = require('../models/campaign');
const { sendDataDeleteEmail } = require("../services/emailservice");


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Lead.deleteMany({});
        await Campaign.deleteMany({});
        await sendDataDeleteEmail(id);
        res.status(200).send('All leads and campaigns have been deleted successfully.');
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).send('Error deleting data from the database');
    }
});

module.exports = router;
