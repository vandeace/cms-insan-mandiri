import { SVGProps } from "react";

export const MagnifyIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.435 10.967L8.75 8.276a4.716 4.716 0 10-.466.466l2.687 2.69a.324.324 0 00.465 0 .33.33 0 000-.465zM1.14 5.19a4.05 4.05 0 118.1.003 4.05 4.05 0 01-8.1-.003z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.098.4a4.786 4.786 0 013.745 7.872l2.641 2.646a.401.401 0 01-.282.682.404.404 0 01-.281-.118m0 0L8.28 8.835A4.786 4.786 0 115.098.401m6.288 10.614L8.654 8.28l.042-.048a4.647 4.647 0 10-.458.459l.049-.042 2.732 2.736c.049.049.115.077.184.078a.253.253 0 00.183-.077.264.264 0 000-.37zM5.968 1.287a3.982 3.982 0 00-4.76 3.903A3.987 3.987 0 005.19 9.173a3.982 3.982 0 00.778-7.886zM1.07 5.19A4.125 4.125 0 005.19 9.31 4.12 4.12 0 101.07 5.19z"
        fill="currentColor"
      />
    </svg>
  );
};
