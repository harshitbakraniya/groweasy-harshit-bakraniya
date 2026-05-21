import type { ColumnDef, RowData } from "@tanstack/react-table";
import type { CRM, Lead, CustomFields, Source } from "@/data";
import { leads } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import {
  Calendar,
  Check,
  ChevronRight,
  CircleCheck,
  PencilLine,
  Search,
} from "lucide-react";
import CustomTable from "../Table/Table";
import LeadDetail from "../LeadDetail";
import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { useSidebar } from "@/contexts/SidebarContext";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    onRowAction?: (data: TData | string) => void;
  }
}

const getBadgeColor = (
  value: CRM["status"],
): { color: string; text: string; icon: React.ReactNode } => {
  switch (value) {
    case "DONE":
      return {
        color: "bg-[hsla(var(--color-secondary))]",
        text: "text-[hsla(var(--color-primary))]",
        icon: <CircleCheck />,
      };
    case "NOT_CALLED":
      return {
        color: "bg-[hsla(var(--color-primary))]",
        text: "text-white",
        icon: <Check />,
      };
    case "NOT_RESPONDED":
      return {
        color: "bg-[hsl(var(--color-primary))]",
        text: "text-white",
        icon: <Check />,
      };
    default:
      return { color: "bg-gray-500", text: "text-white", icon: <Check /> };
  }
};

const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: "name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "email",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "mobile",
    header: "contact",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "company",
    header: "company",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "status",
    cell: () => <Badge variant={"secondary"}>Not Dialed</Badge>,
  },
  {
    accessorKey: "quality",
    header: "quality",
    cell: () => <Badge variant={"secondary"}>-</Badge>,
  },
  {
    accessorKey: "lead_name",
    header: "lead owner",
    cell: (info) => (
      <Badge variant={"secondary"} className="rounded-lg">
        {info.getValue() as string}
        <PencilLine />
      </Badge>
    ),
  },
  {
    accessorKey: "source",
    header: "source",
    cell: (info) => (
      <Badge variant={"secondary"}>{(info.getValue() as Source)?.type}</Badge>
    ),
  },
  {
    accessorKey: "next_follow_up",
    header: "next follow up",
    cell: () => (
      <Badge variant={"secondary"} className="rounded-lg">
        <Calendar />
        Set Follow Up
      </Badge>
    ),
  },
  {
    accessorKey: "crm",
    header: "call status today",
    cell: (info) => {
      const data = getBadgeColor(
        (info.getValue() as CRM)?.status || "NOT_CALLED",
      );
      return (
        <Badge
          variant={"secondary"}
          className={`${data.color} ${data.text} rounded-lg cursor-pointer`}
        >
          {data.icon}
          {(info.getValue() as CRM)?.status?.toUpperCase() || "Mark done"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "custom_fields",
    header: "acquisition source",
    cell: (info) => (info.getValue() as CustomFields).acquisition_source,
  },
  {
    id: "actions",
    header: "actions",
    cell: ({ row, table }) => (
      <Button
        size={"sm"}
        variant={"outline"}
        className="gap-1 rounded-lg cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          // console.log(row.original?.org_id);
          table.options.meta?.onRowAction?.(
            row.original ? row.original.org_id : "",
          );
        }}
      >
        More <ChevronRight />
      </Button>
    ),
  },
];

const LeadsContainer = () => {
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [leadsData, setLeadsData] = useState(leads);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setIsCollapsed } = useSidebar();

  const handleFilter = () => {
    const search = inputRef.current?.value || "";
    const filteredLeads = leads.filter((lead) => {
      const searchValue = search.toLowerCase();
      if (!searchValue) return true;

      const email = String(lead.email || "").toLowerCase();
      const mobile = String(lead.mobile || "").toLowerCase();

      return email.includes(searchValue) || mobile.includes(searchValue);
    });

    setLeadsData(filteredLeads);
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center ml-auto relative">
        <Input
          placeholder="Enter email or phone number..."
          className="max-w-sm w-[20rem] rounded-lg"
          ref={inputRef}
        />
        <Button
          type="button"
          onClick={handleFilter}
          className="absolute right-0 top-0 text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary))] text-xs rounded-l-none rounded-r-lg cursor-pointer"
        >
          <Search />
        </Button>
      </div>
      <div
        className={`grid flex-1 gap-4 h-full mt-5 overflow-hidden ${selectedLeadId ? "grid-cols-[calc(56%-0.5rem)_calc(44%-0.5rem)]" : "grid-cols-[calc(100%-0.5rem)]"}`}
      >
        <CustomTable
          columns={columns}
          data={leadsData}
          tableMeta={{
            onRowAction: (lead: string) => {
              setIsCollapsed(true);
              setSelectedLeadId(lead);
            },
          }}
        />
        <LeadDetail
          selectedLeadId={selectedLeadId}
          setSelectedLeadId={setSelectedLeadId}
        />
      </div>
    </div>
  );
};

export default LeadsContainer;
