"use client";

import React from "react";
import { disconnect } from "@/app/api/lib/action";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      page
      <Button
        onClick={() => {
          disconnect();
        }}
      >
        logout
      </Button>
    </div>
  );
}
