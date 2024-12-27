import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface TCard {
  Icon: IconType;
  data: string | number;
  title: string;
  classNameBg?: string;
  classNameIcon?: string;
}
const Card = ({ Icon, data, title, classNameBg, classNameIcon }: TCard) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow h-[125px] flex gap-x-4 items-center p-4">
      <div className={twMerge("rounded-full bg-sky-300 p-4", classNameBg)}>
        <Icon size={24} className={twMerge("text-sky-800", classNameIcon)} />
      </div>
      <div className="flex flex-col gap-y-1">
        <h5 className="text-4xl font-bold">{data}</h5>
        <p className="text-xs text-muted-foreground font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
