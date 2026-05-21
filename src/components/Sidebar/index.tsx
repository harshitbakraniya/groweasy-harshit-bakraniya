import {
  CircleUser,
  Database,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  PanelLeftClose,
  PanelRightClose,
  PhoneCall,
  Rocket,
  Table2,
  UserPlus,
  Users,
} from "lucide-react";
import type { Sidebar as SidebarType } from "./types";
import AccountSwitcher from "./components/AccountSwitcher";
import Menu from "./components/Menu";
import Logo from "../../assets/logo.png";
import { useSidebar } from "@/contexts/SidebarContext";

const menuConfig: SidebarType = [
  {
    category: "main",
    items: [
      {
        path: "/dashboard",
        text: "Dashboard",
        icon: <LayoutDashboard size={16} />,
      },
      {
        path: "/generate-leads",
        text: "Generate Leads",
        icon: <Rocket size={16} />,
      },
      {
        path: "/manage-leads",
        text: "Manage Leads",
        icon: <Database size={16} />,
      },
      {
        path: "/engage-leads",
        text: "Engage Leads",
        icon: <MessageSquare size={16} />,
      },
    ],
  },
  {
    category: "control center",
    items: [
      {
        path: "/team-members",
        text: "Team Members",
        icon: <Users size={16} />,
      },
      {
        path: "/lead-sources",
        text: "Lead Sources",
        icon: <Megaphone size={16} />,
      },
      {
        path: "/ad-accounts",
        text: "Ad Accounts",
        icon: <UserPlus size={16} />,
      },
      {
        path: "/whatsapp-account",
        text: "WhatsApp Account",
        icon: <MessageSquare size={16} />,
      },
      {
        path: "/tele-calling",
        text: "Tele Calling",
        icon: <PhoneCall size={16} />,
      },
      {
        path: "/crm-fields",
        text: "CRM Fields",
        icon: <Table2 size={16} />,
      },
    ],
  },
];

const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  return (
    <aside
      className={`${isCollapsed ? "w-[80px]" : "w-[280px]"} min-h-screen bg-white border-r border-gray-200 flex flex-col relative transition-all duration-300`}
    >
      <div
        className="cursor-pointer absolute top-6 right-[-14px] border border-gray-200 rounded-full p-1 bg-white z-10 hover:bg-gray-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <PanelRightClose size={18} />
        ) : (
          <PanelLeftClose size={18} />
        )}
      </div>
      <div
        className={`flex items-center ${isCollapsed ? "justify-center" : ""} gap-3 px-6 py-3`}
      >
        <img src={Logo} alt="logo" className="w-7" />
        {!isCollapsed && (
          <span className="text-xl font-semibold text-black whitespace-nowrap">
            GrowEasy
          </span>
        )}
      </div>
      <div className="px-2 py-2.5">
        <AccountSwitcher isCollapsed={isCollapsed} />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <Menu items={menuConfig} isCollapsed={isCollapsed} />
      </div>
      <div className="px-6 py-8 border-t border-gray-200">
        <div
          className={`flex items-center ${isCollapsed ? "justify-center" : ""} gap-2 text-sm`}
        >
          <CircleUser />
          {!isCollapsed && <p>Business Center</p>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
