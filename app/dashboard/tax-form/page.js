"use client";

import { useState } from "react";
import TabNavigation from "../components/TabNavigation";
import PersonalInfo from "./components/PersonalInfo";
import Income from "./components/Income";
import TaxCredit from "./components/TaxCredit";
import TaxDeducted from "./components/TaxDeducted";

// Define the tabs and associate them with components
const TABS = [
  { label: "Personal Info", component: PersonalInfo },
  { label: "Income", component: Income },
  { label: "Tax Credit", component: TaxCredit },
  { label: "Tax Deducted", component: TaxDeducted },
];

export default function TaxFormPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Function to render the active component
  const renderTabContent = () => {
    const ActiveComponent = TABS[activeTab].component;
    return <ActiveComponent />;
  };

  return (
    <div className="px-8 py-6">
      {/* Tabs Navigation */}
      <TabNavigation tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Render the content of the active tab */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
}
