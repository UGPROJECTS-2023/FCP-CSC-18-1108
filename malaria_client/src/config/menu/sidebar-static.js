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
    name: "Admin Page",
    menuItems: [
      // {
      //   name: "Dashboard",
      //   path: `/app/dashboard`,
      //   icon: <ChartPieIcon />,
      // },
      {
        name: "Unapproved Drugs",
        path: `/app/unapproved-drugs`,
        icon: <ShoppingCartIcon />,
      },
      {
        name: "Approved Drugs",
        path: `/app/approved-drugs`,
        icon: <FolderIcon />,
      },
      {
        name: "Verified Doctors",
        path: `/app/verified-doctors`,
        icon: <ChartBarIcon />,
      },
      {
        name: "Unverified Doctors",
        path: `/app/unverified-doctors`,
        icon: <UserGroupIcon />,
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
