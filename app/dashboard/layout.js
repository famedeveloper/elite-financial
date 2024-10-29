import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-2/12 bg-gray-800 text-white">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="w-10/12 bg-white">{children}</div>
    </div>
  );
}
