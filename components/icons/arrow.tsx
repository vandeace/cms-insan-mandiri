import { JSX, SVGProps } from "react";

export const ArrowIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 3.926a.836.836 0 00-.242-.593.823.823 0 00-1.169 0L8.043 9.978 1.408 3.243a.823.823 0 00-1.168 0 .853.853 0 000 1.186l7.219 7.328a.823.823 0 001.168 0l7.13-7.238A.8.8 0 0016 3.926z"
        fill="currentColor"
      />
    </svg>
  );
};
