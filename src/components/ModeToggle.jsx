import { CheckIcon, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfigSelector } from "@/redux/selectors";
import { setTheme } from "@/redux/slices/configSlice";
import { useDispatch } from "react-redux";

const themes = ["light", "dark", "system"];

export function ModeToggle() {
  const { theme } = useConfigSelector();
  const dispatch = useDispatch();

  const defineTheme = (value) => () => {
    dispatch(setTheme(value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((value, index) => (
          <DropdownMenuItem
            key={index}
            className="flex justify-between capitalize"
            onClick={defineTheme(value)}
          >
            {value} {value === theme && <CheckIcon />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
