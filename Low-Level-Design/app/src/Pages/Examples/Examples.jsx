import { Outlet } from "react-router-dom";
const SIDEBAR_MENUS = [
  {
    title: "Carousel",
    href: "/examples/carousel",
  },
  {
    title: "Draggable",
    href: "/examples/draggable",
  },
  {
    title: "Star Rating",
    href: "/examples/star-rating",
  },
];

const Examples = () => {
  return (
    <div className="flex gap-4 m-1 h-screen pt-20">
      <aside className="light-border sticky left-0 top-0 flex flex-col  overflow-y-auto border-r p-6 min-w-40">
        <ul className="space-y-2">
          {SIDEBAR_MENUS.map((menu) => (
            <li
              key={menu.title}
              className={`rounded-lg transition-all duration-200 group
                hover:bg-blue-100 dark:hover:bg-blue-900
                ${
                  window.location.pathname === menu.href
                    ? "bg-blue-200 dark:bg-blue-800"
                    : ""
                }
              `}
              // Remove inline backgroundColor to allow Tailwind hover to work
            >
              <a
                href={menu.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200
                  text-gray-900 dark:text-white-600
                  group-hover:text-white dark:group-hover:text-blue-300
                  ${
                    window.location.pathname === menu.href
                      ? "text-white dark:text-blue-100 font-semibold"
                      : ""
                  }
                `}
                // Remove inline color to allow Tailwind hover to work
              >
                <span>{menu.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="h-full mt-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Examples;
