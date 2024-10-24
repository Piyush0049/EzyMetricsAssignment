const express = require('express');
const { fetchCampaigns } = require('../controllers/campaigncontroller');
const { sendEmail } = require("../services/emailservice");
const router = express.Router();
const Lead = require("../models/lead");
const { dummyCampaigns } = require("../utils/dummydata");

router.get('/', fetchCampaigns);

router.get('/addthese/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Lead.insertMany(dummyCampaigns);
        await sendEmail(id);
        res.json(dummyCampaigns);
        console.log(dummyCampaigns);
    } catch (error) {
        console.error('Error inserting leads or sending email:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
