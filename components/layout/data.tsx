import { IconType } from 'react-icons';
import { FaDatabase, FaFilePen, FaBuildingCircleCheck } from 'react-icons/fa6';

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
    title: 'Master Data',
    icon: FaDatabase,
    children: [
      {
        title: 'Employee',
        link: '/dashboard/employee',
      },
      {
        title: 'Branch',
        link: '/dashboard/branch',
      },
    ],
  },
  {
    id: 2,
    title: 'Approval',
    icon: FaFilePen,
    children: [
      {
        title: 'Permission',
        link: '/dashboard/permission',
      },
      {
        title: 'Overtime',
        link: '/dashboard/overtime',
      },
    ],
  },
  {
    id: 3,
    title: 'Attendance',
    icon: FaBuildingCircleCheck,
    children: [
      {
        title: 'Daily Report',
        link: '/dashboard/daily-report',
      },
      {
        title: 'Monthly Report',
        link: '/dashboard/monthly-report',
      },
    ],
  },
];
