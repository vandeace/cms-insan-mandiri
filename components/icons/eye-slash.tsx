import { JSX, SVGProps } from "react";

export const EyeSlashIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.979 11.788C19.835 11.592 16.412 7 12.041 7c-4.372 0-7.795 4.592-7.939 4.787a.526.526 0 000 .623c.144.196 3.567 4.788 7.938 4.788 4.372 0 7.795-4.592 7.939-4.788a.525.525 0 000-.622zm-7.938 4.355c-3.22 0-6.01-3.048-6.836-4.045.825-.997 3.608-4.043 6.835-4.043 3.22 0 6.01 3.047 6.836 4.044-.825.998-3.608 4.044-6.836 4.044z"
        fill="#C1C1C1"
      />
      <path d="M20 7L4.5 17" stroke="#C1C1C1" strokeLinecap="round" />
      <path
        d="M12.04 8.934A3.177 3.177 0 008.86 12.1a3.177 3.177 0 003.18 3.165c1.755 0 3.182-1.42 3.182-3.165a3.177 3.177 0 00-3.181-3.165zm0 5.275c-1.169 0-2.12-.947-2.12-2.11 0-1.164.951-2.11 2.12-2.11 1.17 0 2.121.946 2.121 2.11 0 1.163-.95 2.11-2.12 2.11z"
        fill="#C1C1C1"
      />
    </svg>
  );
};
