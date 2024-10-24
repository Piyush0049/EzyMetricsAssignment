const dummyLeads = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', source: 'CRM' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', source: 'Marketing' },
];

const dummyCampaigns = [
    { name: 'Winter Sale', startDate: new Date(), endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
];

const getLeads = () => dummyLeads;
const getCampaigns = () => dummyCampaigns;

module.exports = { getLeads, getCampaigns };
