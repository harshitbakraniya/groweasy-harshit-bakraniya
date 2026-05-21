import { ChevronRight, Plus } from "lucide-react";
import AccountImg from "../../../../assets/account-img.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { organizations } from "../../../../data";
import { useState } from "react";

const AccountSwitcher = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const [activeItem, setActiveItem] = useState(organizations[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex items-center border-gray-200 border p-1.5 rounded-xl cursor-pointer ${isCollapsed ? "justify-center w-13 m-auto" : ""}`}
        >
          <div className="w-10">
            <img src={AccountImg} alt="logo" className="rounded-md" />
          </div>
          {!isCollapsed && (
            <div className="right flex items-center justify-between flex-1 ml-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium">{activeItem?.name}</span>
                <span className="text-xs text-gray-500 font-semibold">
                  {activeItem?.role}
                </span>
              </div>
              <ChevronRight size={16} color="rgba(0,0,0,0.2)" />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 rounded-lg">
        {organizations?.map((org) => {
          return (
            <DropdownMenuItem
              className={`rounded-none ${activeItem?.id === org.id ? "bg-[hsla(var(--color-secondary))]" : ""}`}
              key={org.id}
              onClick={() => setActiveItem(org)}
            >
              <div className="w-10">
                <img
                  src={AccountImg}
                  alt="logo"
                  className="w-[40px] h-[40px] rounded-md"
                />
              </div>
              <div className="flex items-center justify-between flex-1">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{org?.name}</span>
                  <span className="text-xs text-gray-500 font-semibold">
                    {org?.role}
                  </span>
                </div>
                <ChevronRight size={16} color="rgba(0,0,0,0.2)" />
              </div>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2 rounded-none  mb-2">
          <Button
            size="sm"
            variant="default"
            className="p-0 h-8 w-8 bg-transparent text-inherit hover:bg-transparent border border-gray-300 cursor-pointer rounded-full"
          >
            <Plus />
          </Button>
          Add Business
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountSwitcher;
