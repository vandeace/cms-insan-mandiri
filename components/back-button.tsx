"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className={`flex w-full justify-start gap-2 hover:bg-transparent ${className ?? ""}`}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Kembali</span>
    </Button>
  );
};

export default BackButton;
