const Lead = require('../models/lead');
const Campaign = require('../models/campaign');
const { getLeads, getCampaigns } = require('./dummydataservice');

const loadLeads = async () => {
    const leads = getLeads();
    await Lead.insertMany(leads);
};

const loadCampaigns = async () => {
    const campaigns = getCampaigns();
    await Campaign.insertMany(campaigns);
};

const transformData = async () => {
    return await Lead.find().populate('campaigns');
};

module.exports = { loadLeads, loadCampaigns, transformData };
