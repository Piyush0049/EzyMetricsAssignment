const express = require('express');
const connectDB = require('./db/connect');
const leadRoutes = require('./routes/leadroutes');
const csvRoutes = require('./routes/csv')
const campaignRoutes = require('./routes/campaignroutes');
const pdfRoutes = require('./routes/pdf')
const dotenv = require('dotenv');
const deleteRoutes = require('./routes/deleteRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api/leads', leadRoutes);
app.use('/api/delete', deleteRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/pdf', pdfRoutes);
app.use('/api/csv', csvRoutes);
app.get("/", (req,res)=>{
    res.send("My name is Piyush Joshi. This document serves as my submission for the Backend Developer position at EzyMetrics.")
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
