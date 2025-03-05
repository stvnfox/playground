import type { FC } from "react";

import logo from "@/assets/stvn.webp";

export const Header: FC = () => {
  return (
    <header>
      <div className="flex items-end justify-between gap-2 rounded-md border p-1.5">
        <img src={logo} alt="" className="size-12 rounded border" />
        <h1 className="mr-1 translate-y-[3px] font-semibold text-lg text-neutral-800">
          playground by steven.
        </h1>
      </div>
    </header>
  );
};
