const express = require('express');
const PDFDocument = require('pdfkit');
const router = express.Router();
const Lead = require("../models/lead");
const Campaign = require("../models/campaign");

router.get('/print', async(req, res) => {
    const doc = new PDFDocument();
    res.setHeader('Content-disposition', 'attachment; filename=data.pdf');
    res.setHeader('Content-type', 'application/pdf');

    doc.pipe(res);

    doc.fontSize(25).text('Lead Data Report', {
        underline: true,
        align: 'center'
    });
    
    doc.moveDown();

    const leads = await Lead.find();
    leads.forEach((lead, index) => {
        doc.fontSize(12).text(`Lead ${index + 1}:`);
        doc.text(`Name: ${lead.name}`);
        doc.text(`Email: ${lead.email}`);
        doc.text(`Source: ${lead.source}`);
        doc.moveDown(); 
    });

    const Campaigns = await Campaign.find();
    Campaigns.forEach((campaign, index) => {
        doc.fontSize(12).text(`Lead ${index + 1}:`);
        doc.text(`Name: ${campaign.name}`);
        doc.text(`Status: ${campaign.status}`);
        doc.text(`LeadsCount: ${campaign.leadsCount}`);
        doc.moveDown();
    });

    doc.end();
});

module.exports = router;
