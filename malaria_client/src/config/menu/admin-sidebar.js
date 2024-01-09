import {
  ChartPieIcon,
  CogIcon,
  FolderIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const sidebarMenu = () => [
  {
    name: "Doctors Page",
    menuItems: [
      // {
      //   name: "Dashboard",
      //   path: `/admin/dashboard`,
      //   icon: <ChartPieIcon />,
      // },
      {
        name: "Add Drugs",
        path: `/admin/add-drugs`,
        icon: <ShoppingCartIcon />,
      },
      {
        name: "Add Symptoms",
        path: `/admin/add-symptoms`,
        icon: <FolderIcon />,
      },
      {
        name: "Logout",
        path: `/app/logout`,
        icon: <CogIcon />,
      },
    ],
  },
];

export default sidebarMenu;
