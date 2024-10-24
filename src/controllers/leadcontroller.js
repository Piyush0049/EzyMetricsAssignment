const Lead = require('../models/lead');
const { dummyLeads } = require('../utils/dummydata');

const fetchLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addinCRM = async (req, res) => {
    try {
        await Lead.insertMany(dummyLeads);
        res.json(dummyLeads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { fetchLeads, addinCRM };
