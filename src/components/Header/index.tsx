import { useMatches } from "react-router-dom";

interface RouteHandle {
  title?: string;
  subtitle?: string;
}

const Header = () => {
  const matches = useMatches();

  const route = matches.find((match) => (match.handle as RouteHandle)?.title);
  const title = (route?.handle as RouteHandle)?.title || "Dashboard";
  const subtitle = (route?.handle as RouteHandle)?.subtitle;

  return (
    <header className="w-full flex flex-col gap-1 px-6 py-3 border-b border-gray-200 bg-white">
      <h1 className="text-xl font-semibold text-black">{title}</h1>
      <div className="flex items-center gap-2">
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;
