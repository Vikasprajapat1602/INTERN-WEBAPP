import { NavLink } from "react-router-dom";
import { Home, BarChart, Settings, UserCheck } from "lucide-react";
import clsx from "clsx";

export default function Sidebar({ isOpen, isDesktop, closeSidebar }) {
  const navItems = [
    { label: "Dashboard", to: "/dashboard", icon: <Home size={20} /> },
    { label: "Applicants", to: "/dashboard/admin/applicants", icon: <UserCheck size={20} /> },
    { label: "Reports", to: "/dashboard/reports", icon: <BarChart size={20} /> },
    { label: "Settings", to: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={clsx(
        "bg-white w-64 p-4 shadow-md h-full z-40 transition-transform duration-300 ease-in-out",
        {
          "fixed top-16 left-0": !isDesktop,
          "translate-x-0": isDesktop || isOpen,
          "-translate-x-full": !isDesktop && !isOpen,
          "static": isDesktop,
        }
      )}
    >
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={!isDesktop ? closeSidebar : undefined}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 p-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-[1.02]",
                "hover:bg-gradient-to-r hover:from-indigo-100 hover:to-indigo-200",
                {
                  "bg-indigo-100 font-semibold text-indigo-700": isActive,
                }
              )
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
