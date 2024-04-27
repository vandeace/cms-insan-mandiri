import { IconType } from "react-icons";
import { BsCalendarCheck, BsEnvelopeFill } from "react-icons/bs";
import { FaUserClock } from "react-icons/fa";

export type MenuChild = {
  title: string;
  link: string;
};

export type Menu = {
  id: number;
  title: string;
  link?: string;
  icon: IconType;
  children?: MenuChild[];
};

export const menu: Menu[] = [
  {
    id: 1,
    title: "Master Data",
    icon: BsEnvelopeFill,
    children: [
      {
        title: "Employee",
        link: "/employee",
      },
      {
        title: "Branch",
        link: "/branches",
      },
    ],
  },
  {
    id: 3,
    title: "Perizinan",
    icon: BsEnvelopeFill,
    link: "/permission",
  },
  {
    id: 4,
    title: "Lemburan",
    icon: FaUserClock,
    link: "/overtime",
  },
  {
    id: 5,
    title: "Absensi",
    icon: BsCalendarCheck,
    link: "/absence",
  },
];
