import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true); // Always open in desktop
      } else {
        setSidebarOpen(false); // Hidden by default in mobile
      }
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          {/* Menu button on mobile */}
          {!isDesktop && (
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu />
            </button>
          )}
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} isDesktop={isDesktop} closeSidebar={() => setSidebarOpen(false)} />
        <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
