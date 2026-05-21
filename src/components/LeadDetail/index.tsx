import {
  X,
  Pencil,
  PhoneCall,
  Bot,
  Share2,
  Mail,
  Tag,
  UserRound,
  Check,
  Calendar,
} from "lucide-react";
import { singleLead } from "../../data";
import { Badge } from "../ui/badge";
import WhatsApp from "@/Icons/WhatsApp";
import DetailCard from "./components/DetailCard";
import Activity from "./components/Activity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSidebar } from "@/contexts/SidebarContext";

const LeadDetail = ({
  selectedLeadId,
  setSelectedLeadId,
}: {
  selectedLeadId: string | null;
  setSelectedLeadId: (id: string | null) => void;
}) => {
  const { setIsCollapsed } = useSidebar();
  return (
    <div
      className="p-4 bg-white rounded-2xl flex-col h-full overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        display: selectedLeadId ? "flex" : "none",
      }}
    >
      <div className="sticky top-0 w-full flex items-start justify-between pb-4">
        <div className="flex items-start">
          <h3 className="text-lg font-semibold text-black max-w-1/2 whitespace-nowrap">
            {singleLead.lead.name}
          </h3>
          <div className="flex flex-wrap gap-2 ml-2">
            <Badge variant="destructive">
              Bad Lead <Pencil />
            </Badge>
            <Badge variant="ghost">Quality -</Badge>
            <Badge variant="secondary">
              Owned by SHIVAM YADAV <Pencil />
            </Badge>
          </div>
        </div>
        <X
          className="cursor-pointer border border-gray-300 h-7 w-7 p-1 rounded-full"
          onClick={() => {
            setSelectedLeadId(null);
            setIsCollapsed(false);
          }}
        />
      </div>

      <div className="overflow-y-auto flex-1">
        <div className="mt-5">
          <div className="flex items-center gap-2">
            <span className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all">
              <PhoneCall size={16} />
            </span>
            <span className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all">
              <WhatsApp size={16} />
            </span>
            <span className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all">
              <Share2 size={16} />
            </span>
            <span className="border border-[hsla(var(--color-primary))]/20 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all bg-[hsla(var(--color-secondary))] text-[">
              <Bot size={16} />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <DetailCard
              icon={<Mail size={20} color="gray" />}
              label="EMAIL"
              value={
                <p className="text-sm font-medium">{singleLead.lead.email}</p>
              }
            />
            <DetailCard
              icon={<PhoneCall size={20} color="gray" />}
              label="CONTACT NUMBER"
              value={
                <p className="text-sm font-medium">{singleLead.lead.mobile}</p>
              }
            />

            <DetailCard
              icon={<Tag size={20} color="gray" />}
              label="STATUS"
              value={
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Bed Lead</Badge>
                  <Pencil size={14} className="ml-1" />
                </div>
              }
            />

            <DetailCard
              icon={<UserRound size={20} color="gray" />}
              label="QUANTITY"
              value={<p className="text-sm font-medium">-</p>}
            />

            <DetailCard
              icon={<UserRound size={20} color="gray" />}
              label="OWNER"
              value={<p className="text-sm font-medium">Harshit Gajjar</p>}
            />

            <DetailCard
              icon={<Mail size={20} color="gray" />}
              label="SOURCE"
              value={
                <p className="text-sm font-medium">
                  {singleLead?.lead?.source?.type}
                </p>
              }
            />
          </div>
          <div className="flex items-center gap-2 mt-4 p-4 border border-gray-200 rounded-xl">
            <span className="bg-[hsla(var(--color-secondary))] p-3 rounded-full w-10 h-10 flex justify-center items-center">
              <PhoneCall size={20} color="hsla(var(--color-primary))" />
            </span>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col justify-between">
                <h4 className="text-base font-semibold">Call Status Today</h4>
                <p className="text-sm text-gray-500">
                  You have called this lead today
                </p>
              </div>
              <Badge
                variant="outline"
                className="p-4 rounded-lg bg-[hsla(var(--color-secondary))] text-[hsla(var(--color-primary))] border-[hsla(var(--color-primary))]/10"
              >
                <Check />
                Done
              </Badge>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4 p-4 border border-gray-200 rounded-xl">
            <span className="font-semibold text-sm">Follow up</span>
            <label className="flex text-sm font-medium items-center text-[hsla(var(--color-primary))] gap-1 cursor-pointer">
              <Calendar />
              Set Follow Up Date
            </label>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full mt-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Lead Summary</AccordionTrigger>
              <AccordionContent>
                <p className="flex text-sm items-center text-gray-400 gap-1 cursor-pointer">
                  No summary available
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="relative pl-13 border-gray-200 space-y-8 font-sans mt-5">
          <div className="h-full w-px bg-gray-200 absolute left-[18px] top-0"></div>
          {singleLead?.activities?.map((activity) => {
            return <Activity key={activity.id} activity={activity} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LeadDetail;
