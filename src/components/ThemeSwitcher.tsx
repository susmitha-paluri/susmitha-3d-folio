import { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "red" | "blue" | "purple" | "green";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState<Theme>("red");

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "red");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleDarkMode}
        className="bg-card/80 backdrop-blur-sm border-border hover:bg-card neon-glow"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-card/80 backdrop-blur-sm border-border hover:bg-card neon-glow"
          >
            <Palette className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-sm border-border">
          <DropdownMenuItem onClick={() => changeTheme("red")} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <span>Red Theme</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme("blue")} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <span>Blue Theme</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme("purple")} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500" />
              <span>Purple Theme</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme("green")} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span>Green Theme</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
