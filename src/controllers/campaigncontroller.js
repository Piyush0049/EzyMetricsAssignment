const Campaign = require('../models/campaign');
const { dummyCampaigns } = require('../utils/dummydata');

const fetchCampaigns = async (req, res) => {
    try {
        const Campaigns = await Campaign.find();
        res.json(Campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addinCRM = async (req, res) => {
    try {
        await Campaign.insertMany(dummyCampaigns);
        res.json(dummyCampaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { fetchCampaigns, addinCRM };
