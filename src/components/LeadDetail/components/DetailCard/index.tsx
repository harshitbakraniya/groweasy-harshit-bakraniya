interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  className?: string;
}
const DetailCard = ({ icon, label, value, className }: DetailCardProps) => {
  return (
    <div
      className={`bg-gray-50 border border-gray-200 flex items-center p-3 rounded-lg ${className}`}
    >
      <span className="w-5">{icon}</span>
      <div className="ml-3">
        <label className="text-[12px] font-medium text-gray-400">{label}</label>
        {value}
      </div>
    </div>
  );
};

export default DetailCard;
