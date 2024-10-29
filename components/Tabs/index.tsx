// components/Tabs.js
'use client';
import Link from 'next/link';

const tabs = [
  { name: 'All', key: 'all' },
  { name: 'Income Tax Return', key: 'income' },
  { name: 'Sales Tax Registration', key: 'sales' },
  { name: 'Company\'s Registration', key: 'company' },
  { name: 'Intellectual Property', key: 'intellectual' },
  { name: 'USA LLC & Tax filing', key: 'usa' },
];

export default function Tabs({ currentTab, onTabChange }) {
  return (
    <div className="flex space-x-4">
      {tabs.map((tabItem) => (
        <button
          key={tabItem.key}
          onClick={() => onTabChange(tabItem.key)}
          className={`px-3 py-2 font-medium text-sm rounded-md ${
            currentTab === tabItem.key ? 'bg-red-500 text-white bg-primary px-4' : 'bg-gray-100 text-gray-700'
          }`}
        >
          {tabItem.name}
        </button>
      ))}
    </div>
  );
}
