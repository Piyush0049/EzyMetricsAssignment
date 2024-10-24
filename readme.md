# EzyMetrics Backend Developer Assignment

## Greetings, EzyMetrics!

My name is **Piyush Joshi**, and I am currently pursuing a B.Tech in Computer Science at **Netaji Subhas University of Technology, Dwarka, Delhi**.

This document serves as my submission for the **Backend Developer** position at EzyMetrics. In this project, I have utilized the following technologies:

- **Frontend**: React
- **Backend**: JavaScript (Node.js/Express)
- **Database**: MongoDB
- **Email Service**: Nodemailer

## API Endpoints

- **GET** `/api/leads/`: Fetch and display all details of campaigns and leads.

- **GET** `/api/leads/addthese/:ID`: Add lead data to the MongoDB database. The `ID` parameter represents the email address entered by the user, which will be used to send a notification email regarding the addition of data.

- **GET** `/api/campaigns/addthese/:ID`: Add campaign data to the MongoDB database. Similar to the leads endpoint, the `ID` parameter is the email address used for sending notification emails.

- **GET** `/api/delete/:ID`: Delete all dummy data, allowing for the re-execution of the addthese APIs after clearing existing data. The `ID` parameter is the email address used for sending notification emails.

- **GET** `/api/pdf`: Download a PDF containing all data.

- **GET** `/api/csv`: Download a CSV file containing all data.

## Thank You

Thank you for considering my application. I am eager to contribute to your team and look forward to the opportunity.

Best regards,  
**Piyush Joshi**
