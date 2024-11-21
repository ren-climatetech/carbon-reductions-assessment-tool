# Project Title

Carbon Reductions Assessment Tool

## Overview

On June 8, 2022, the Government of Canada launched its Greenhouse Gas (GHG) Offset Credit System to incentivize businesses to implement projects that reduce greenhouse gas emissions, including initiatives targeting refrigeration systems.

This app enables businesses to evaluate their eligibility for carbon credit issuance by analyzing their current refrigeration-related GHG emissions and estimating the potential annual credits they could generate through emission reduction projects.

### Problem Space

Businesses in sectors like retail, food storage, and industrial refrigeration face challenges in accurately assessing their greenhouse gas (GHG) emissions from refrigeration systems. Many struggle to determine their eligibility for carbon credits under programs like Canada’s GHG Offset Credit System and to quantify potential benefits of retrofitting or upgrading systems. This gap leaves businesses uncertain about the financial and environmental advantages of transitioning to low-GWP refrigerants or implementing emissions reduction projects.

### User Profile

The primary users would be business owners that manage refrigeration systems as part of their business (e.g., supermarkets, cold storage, food processing). The will be able to enter their equipment type (eg. condensing units, chillers, commercial air conditioning system, etc.), the type of coolant used, and the amount of coolant purchased each year, to evaluate current refrigeration emissions. Users can use the assessment tool to determine if they are eligible to participate in the carbon credit issuance program and can also see in real-time a estimate of the financial and environmental benefits of reducing emissions.

### Features

1. GHG Emissions Calculator: Users input refrigerant details such as type of refrigerant equipment, system specifications (coolant type), and amount of coolant purchased (kg or lbs)
2. Eligibility Assessment: Compare user data against criteria for Canada’s GHG Offset Credit System to determine project eligibility. (ie. does current coolant's GWP exceed the eligible refrigerant GWP limit)
3. Credit Estimation: Estimate the number of carbon credits the user’s projects could generate annually (based on average cost of $30-$50)

## Implementation

### Tech Stack

Frontend: React (UI components)
Backend: Node.js with Express for API development
Database: MySQL for storing refrigerant data, user inputs, and calculation results.
Libraries: Axios for API requests. (Chart.js may be implemented for visualizing emissions data)

### APIs

- EPA's GHG Emission Factors Hub will be the database source for refrigerant GWP data.
- Canada’s GHG Offset Credit System reference datasets will be used a database source for coolant eligibility

### Sitemap

Home

- Brief overview of consulting services offered and links to features.

Assessment

- This page will render as the Carbon Credit Assessment Tool
- Uers will be required to ipput fields for refrigerant data

Login Page

- This page will allow users to access their assessment

Eligibility

- Emissions calculation results will appear on this page for each equipment type and its associated coolant
- Results showing eligibility with offset program criteria and additional information on next steps

Contact Page

- Allows users to submit contact information to request more information

### Mockups

![Home Page] (mockups/HomePage.png)

![Assessment] (mockups/Assessment.png) 

![Eligibility Results] (mockups/eligibilityResults.png) 

![Contact] (mockups/Contact.png)

### Data

Entities:

Refrigeration Systems (Equipment ID, Coolant name/type, volume purchased).

Emission Estimates (Equipment ID, annual emissions, credits generated).

Relationships:

Refrigerants → Systems: One-to-One
Systems → Emission Estimates: One-to-Many.

### Endpoints

Method:

1. GET: /refrigerants ...to retrieve refrigerant data (GWP values, limits).
2. POST: /calculate-emissions ...submit system data to calculate emissions.
3. POST: /check-eligibility ...assess project eligibility for carbon credits.
4. GET: /assessment ...retrieve summary of data and credit estimates

Example for /refrigerants
{
"coolantType": "R-410A",
"GWP": "2,088",
}

Example for /calculate-emissions
{
"equipmentType": "Commercial Refrigeration"
"coolantType": "R-410A",
"annualAmount": 115,
"unitAmount": lbs"
}

## Roadmap

Day 1-2: Initialize the project:

- [ ] Research and finalize data sources (EPA GHG Hub, Canada’s Offset System).
- [ ] Set up React for the frontend and Node.js with Express for the backend.
- [ ] Set up MySQL database and connect to backend.

Day 3-5: Build Core Pages and Authentication

- [ ] Create Home and Contact pages with static content.
- [ ] Implement mock user authentication
- [ ] Set up backend authentication endpoints and user data storage.
- [ ] Test navigation and user session management.

Day 6-8: Build GHG Emissions Calculator and connect calculator functionality.

- [ ] Create React form for refrigerant input.
- [ ] Implement backend logic for /calculate-emissions endpoint using refrigerant GWP data.
- [ ] Display emissions calculation results dynamically on the page.
- [ ] Create a subpage under the calculator to display results
- [ ] Implement /check-eligibility endpoint to validate refrigerant data against GWP thresholds.
- [ ] Display real-time eligibility results with next-step suggestions.

Day 9-11: Develop Credit Estimation feature

- [ ] Add backend logic to estimate potential credits based on emissions data.
- [ ] Connect estimation results to eligibility results page.
- [ ] Finalize all styling with SaSS
- [ ] Ensure responsive design for mobile, tablet, and desktop

Day 12-13: Testing and Deployment

- [ ] Conduct end-to-end testing for all features:
- [ ] Assessment → Login → Eligibility → Credit Estimation.
- [ ] Validate data persistence in MySQL.
- [ ] Debug and optimize backend API calls for efficiency.
- [ ] Deploy the app to Heroku

---

## Future Implementations

- Create a dashboard page to visualize emissions per equipment type in a graph format
- Incorporate predictive analytics for cost savings based on retrofitting scenarios.
