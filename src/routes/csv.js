const express = require('express');
const { createObjectCsvStringifier } = require('csv-writer');
const router = express.Router();
const Lead = require('../models/lead');
const Campaign = require('../models/campaign');

router.get('/exportcsv', async (req, res) => {
    try {
        const leads = await Lead.find();
        const campaigns = await Campaign.find();
        res.setHeader('Content-disposition', 'attachment; filename=data.csv');
        res.setHeader('Content-type', 'text/csv');

        const leadCsvWriter = createObjectCsvStringifier({
            header: [
                { id: 'name', title: 'Name' },
                { id: 'email', title: 'Email' },
                { id: 'source', title: 'Source' }
            ]
        });
        const campaignCsvWriter = createObjectCsvStringifier({
            header: [
                { id: 'name', title: 'Campaign Name' },
                { id: 'status', title: 'Status' },
                { id: 'leadsCount', title: 'Leads Count' }
            ]
        });
        let csvOutput = '';
        if (leads.length > 0) {
            csvOutput += 'Lead Data:\n';
            csvOutput += leadCsvWriter.getHeaderString();
            csvOutput += leadCsvWriter.stringifyRecords(leads);
            csvOutput += '\n\n';
        }

        if (campaigns.length > 0) {
            csvOutput += 'Campaign Data:\n';
            csvOutput += campaignCsvWriter.getHeaderString();
            csvOutput += campaignCsvWriter.stringifyRecords(campaigns);
        }

        res.status(200).send(csvOutput);
    } catch (error) {
        console.error('Error generating CSV:', error);
        res.status(500).send('Error generating CSV file');
    }
});

module.exports = router;
