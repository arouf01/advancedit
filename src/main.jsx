import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Services from "./Components/Services.jsx";
import Faq from "./Components/Faq.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Root from "./Components/Root.jsx";
// import BlogDetails from "./Components/BlogDetails.jsx";
import BlogList from "./Components/BlogList.jsx";
import ZohoCRMBlueprint from "./Components/blogs/ZohoCRMBlueprint.jsx";
import ZohoCampaignsVsMarketingAutomation from "./Components/blogs/ZohoCampaignsVsMarketingAutomation.jsx";
import ZohoMultiSelectLookup from "./Components/blogs/ZohoMultiSelectLookup.jsx";
import MiddleEastSaaSMarket from "./Components/blogs/MiddleEastSaaSMarket.jsx";
import AutomateRFQsZohoCreatorBooks from "./Components/blogs/AutomateRFQsZohoCreatorBooks.jsx";
import NavigatingElectronicSignatures from "./Components/blogs/NavigatingElectronicSignatures.jsx";
import ZohoBiginQ32025 from "./Components/blogs/ZohoBiginQ32025.jsx";
import WriteDelugeScripts from "./Components/blogs/WriteDelugeScripts.jsx";
import ZohoWebsiteDesign from "./Components/blogs/ZohoWebsiteDesign.jsx";
import ZohoCreatorAppDevelopment from "./Components/blogs/ZohoCreatorAppDevelopment.jsx";
import ZohoSalesIQEngagement from "./Components/blogs/ZohoSalesIQEngagement.jsx";
import Windows10EndSupport from "./Components/blogs/Windows10EndSupport.jsx";
import ZohoRecruitZiaAI from "./Components/blogs/ZohoRecruitZiaAI.jsx";
import ZohoCreatorRFQ from "./Components/blogs/ZohoCreatorRFQ.jsx";
import AICoCreatorZohoCreator from "./Components/blogs/AICoCreatorZohoCreator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <BlogList />,
      },

      ///////////////////////////////
      /* Blog Details Page Routers */
      //////////////////////////////
      {
        path: "/blogs/zoho-crm-blueprint-streamline-your-business-processes",
        element: <ZohoCRMBlueprint />,
      },
      {
        path: "/blogs/understanding-zoho-crm-multi-select-lookup-and-linking-module",
        element: <ZohoMultiSelectLookup />,
      },
      {
        path: "/blogs/difference-between-zoho-campaigns-and-zoho-marketing-automation",
        element: <ZohoCampaignsVsMarketingAutomation />,
      },
      {
        path: "/blogs/future-of-work-middle-east-saas-market",
        element: <MiddleEastSaaSMarket />,
      },
      {
        path: "/blogs/automate-rfqs-with-zoho-creator-and-zoho-books",
        element: <AutomateRFQsZohoCreatorBooks />,
      },
      {
        path: "/blogs/navigating-the-future-of-electronic-signatures",
        element: <NavigatingElectronicSignatures />,
      },
      {
        path: "/blogs/zoho-bigin-q3-2025-updates",
        element: <ZohoBiginQ32025 />,
      },
      {
        path: "/blogs/write-custom-deluge-scripts-for-any-zoho-apps",
        element: <WriteDelugeScripts />,
      },
      {
        path: "/blogs/design-and-develop-a-responsive-website-using-zoho-sites-and-zoho-commerce",
        element: <ZohoWebsiteDesign />,
      },
      {
        path: "/blogs/custom-app-development-with-zoho-creator",
        element: <ZohoCreatorAppDevelopment />,
      },
      {
        path: "/blogs/boost-customer-engagement-with-zoho-salesiq",
        element: <ZohoSalesIQEngagement />,
      },
      {
        path: "/blogs/windows-10-end-support",
        element: <Windows10EndSupport />,
      },
      {
        path: "/blogs/smarter-hiring-with-ai-zoho-recruit-zia",
        element: <ZohoRecruitZiaAI />,
      },
      {
        path: "/blogs/simplify-rfq-management-with-zoho-creator",
        element: <ZohoCreatorRFQ />,
      },
      {
        path: "/blogs/smartest-fastest-development-team",
        element: <AICoCreatorZohoCreator />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
