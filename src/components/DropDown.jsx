"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuCheckboxes({button,links}) {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>{button}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2  text-tangled rounded-none mt-10">

        {
          links.map((link)=>{ return <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
          className="text-xl"
        >
          {link}
        </DropdownMenuCheckboxItem>})
        }

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
