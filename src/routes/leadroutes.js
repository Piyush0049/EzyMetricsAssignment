const express = require('express');
const { fetchLeads } = require('../controllers/leadcontroller');
const { sendEmail } = require("../services/emailservice");
const router = express.Router();
const Lead = require("../models/lead");
const { dummyLeads } = require("../utils/dummydata");

router.get('/', fetchLeads);

router.get('/addthese/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Lead.insertMany(dummyLeads);
        await sendEmail(id);
        res.json(dummyLeads);
        console.log(dummyLeads);
    } catch (error) {
        console.error('Error inserting leads or sending email:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
