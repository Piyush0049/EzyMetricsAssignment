const dummyLeads = [
    { id: 1, name: "Rishu", email: "piyush@gmail.com", campaign: "Campaign B", createdAt: new Date() },
    { id: 2, name: "Joshi", email: "piyush81204@gmail.com", campaign: "Campaign C", createdAt: new Date() },
    { id: 3, name: "Piyush", email: "piyushjoshi81204@gmail.com", campaign: "Campaign A", createdAt: new Date() },
];

const dummyCampaigns = [
    { id: 1, name: "Campaign A", status: "Active", leadsCount: 50 },
    { id: 2, name: "Campaign B", status: "Paused", leadsCount: 30 },
    { id: 3, name: "Campaign C", status: "Ended", leadsCount: 20 },
];

module.exports = { dummyLeads, dummyCampaigns };
