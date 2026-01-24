import SidebarNav from "./SidebarNav";
import UserCredits from "./UserCredits";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 md:block">
      <div className="sticky top-24 rounded-2xl border border-border bg-card/80 p-5 shadow-sm">
        <div className="pb-6">
          <UserCredits />
        </div>
        <SidebarNav />
      </div>
    </aside>
  );
}
