import type { Sidebar } from "../../types";
import { NavLink } from "react-router-dom";

const Menu = ({
  items,
  isCollapsed,
}: {
  items: Sidebar;
  isCollapsed: boolean;
}) => {
  return (
    <nav
      className={`w-full flex flex-col  p-3 ${isCollapsed ? "gap-5" : "gap-2"}`}
    >
      {items.map((item) => (
        <div
          key={item.category}
          className={`w-full flex flex-col ${isCollapsed ? "" : "gap-2"}`}
        >
          {!isCollapsed && (
            <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase px-4">
              {item.category}
            </h3>
          )}
          <div className="flex flex-col gap-1">
            {item.items.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `cursor-pointer hover:bg-[hsla(var(--color-secondary))] rounded-full font-medium ${
                    isActive
                      ? "bg-[hsla(var(--color-secondary))] text-[hsla(var(--color-primary))] font-semibold"
                      : ""
                  }`
                }
              >
                <button
                  className={`w-full ${
                    isCollapsed ? "justify-center" : "justify-start"
                  } flex items-center text-sm gap-2 px-4 py-2.5 cursor-pointer`}
                >
                  {menu.icon}
                  {!isCollapsed && menu.text}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
