import React from 'react';
import { FaHome, FaDiceD20, FaDungeon } from 'react-icons/fa';
import SidebarLogo from "../Logo/Logo.tsx";
import SidebarItem from "../../Siderbar/SidebarItem/SidebarItem.tsx";
import SidebarExpandableItem from "../../Siderbar/SidebarExpandableItem/SidebarExpandableItem.tsx";
import SidebarFooter from "../../Siderbar/SidebarFooter/SidebarFooter.tsx";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col border-r border-gray-700">
      <SidebarLogo />

      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2">
        <SidebarItem icon={<FaHome />} label="Home" />
        <SidebarExpandableItem
          icon={<FaDiceD20 />}
          label="Meus Jogos"
          items={['Campanha A', 'Campanha B']}
        />
        <SidebarExpandableItem
          icon={<FaDungeon />}
          label="Minhas Mesas"
          items={['Mesa 1', 'Mesa 2', 'Mesa 3']}
        />
      </nav>

      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;