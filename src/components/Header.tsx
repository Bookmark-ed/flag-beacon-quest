import { ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-header text-header-foreground h-14 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">OnShelf</span>
        </div>
        <Button variant="ghost" className="text-header-foreground hover:bg-header/80 gap-2">
          Bookmarked Middle School
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors">Home</a>
        <a href="#" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
          Library <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors">Students</a>
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors flex items-center gap-1">
          Circulation <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors">Reports</a>
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors">Alerts</a>
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors">LCA</a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="#" className="text-header-foreground/80 hover:text-header-foreground transition-colors">Help</a>
        <Button variant="outline" className="text-header-foreground border-header-foreground/30 hover:bg-header-foreground/10 gap-1">
          EN <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
