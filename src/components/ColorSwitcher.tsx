import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colorThemes = [
  { name: "Red", value: "red", color: "hsl(0, 84%, 60%)" },
  { name: "Blue", value: "blue", color: "hsl(217, 91%, 60%)" },
  { name: "Purple", value: "purple", color: "hsl(270, 75%, 60%)" },
  { name: "Green", value: "green", color: "hsl(142, 76%, 50%)" },
];

export const ColorSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("red");

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") || "red";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("color-theme", theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => changeTheme(theme.value)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="w-5 h-5 rounded-full border-2 border-border"
              style={{ backgroundColor: theme.color }}
            />
            <span className={currentTheme === theme.value ? "font-bold text-primary" : ""}>
              {theme.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
