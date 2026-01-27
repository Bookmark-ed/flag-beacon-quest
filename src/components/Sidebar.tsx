import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  active?: boolean;
}

const SidebarItem = ({ label, active }: SidebarItemProps) => (
  <button
    className={cn(
      "w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors text-left",
      active
        ? "bg-primary text-primary-foreground"
        : "bg-card text-sidebar-foreground border border-border hover:bg-muted"
    )}
  >
    {label}
  </button>
);

const Sidebar = () => {
  return (
    <aside className="w-56 flex flex-col gap-2 p-4">
      <SidebarItem label="General Information" />
      <SidebarItem label="Flags and Analysis" active />
      <SidebarItem label="Guardian Activities" />
      <SidebarItem label="Status History" />
      <SidebarItem label="Discover" />
      <SidebarItem label="Circulation History" />
      <SidebarItem label="Documents and Notes" />
    </aside>
  );
};

export default Sidebar;
