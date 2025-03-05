import type { FC } from "react";

import logo from "@/assets/stvn.webp";

import { ThemeSwitcher } from "@/components/layout/theme-switcher";

export const Header: FC = () => {
  return (
    <header>
      <div className="flex items-end justify-between gap-2 rounded-md border p-1.5 transition-colors">
        <img
          src={logo}
          alt=""
          className="size-12 rounded border transition-colors"
        />
        <h1 className="mr-1 translate-y-[3px] font-semibold text-lg text-neutral-800 transition-colors dark:text-white">
          playground by steven.
        </h1>
      </div>
      <div className="mt-2 text-end">
        <ThemeSwitcher />
      </div>
    </header>
  );
};
