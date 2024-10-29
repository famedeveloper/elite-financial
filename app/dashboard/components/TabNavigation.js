export default function TabNavigation({ tabs, activeTab, setActiveTab }) {
    return (
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 -mb-px text-sm font-medium border-b-2 ${
              activeTab === index
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
  