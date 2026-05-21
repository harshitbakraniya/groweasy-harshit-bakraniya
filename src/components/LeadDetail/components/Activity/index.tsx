import { singleLead } from "../../../../data";
import { formatString } from "../../../../utils/helpers";
import { PhoneCall, MessageSquare, Megaphone, Plus } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case "PHONE_CALL":
      return <PhoneCall size={16} />;
    case "WHATSAPP":
      return <MessageSquare size={16} />;
    case "CUSTOM":
      return <Megaphone size={16} />;
    case "NEW_LEAD":
      return <Plus size={16} />;
    default:
      return <MessageSquare size={16} />;
  }
};

const Activity = ({
  activity,
}: {
  activity: (typeof singleLead.activities)[0];
}) => {
  return (
    <div className="relative bg-white border border-gray-200 p-3 rounded-lg">
      <div className="absolute left-[-50px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm">
        {getIcon(activity.type)}
      </div>
      <div className="space-y-2">
        <div className="text-xs text-gray-500">
          {new Date(
            activity.created_at._seconds * 1000 +
              activity.created_at._nanoseconds / 1000000,
          ).toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </div>
        <h3 className="text-md mb-1 font-semibold text-[hsla(var(--color-primary))]">
          {activity.title}
        </h3>
        <p className="text-sm text-gray-500">{activity.description}</p>
        {activity?.metadata?.content && (
          <p className="whitespace-pre-line text-sm text-gray-500 bg-gray-50 border border-gray-200 p-3 rounded-md">
            {activity.metadata.content}₹
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2 border border-gray-200 p-2 rounded-lg">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 border border-gray-200">
            {formatString(activity.type)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
