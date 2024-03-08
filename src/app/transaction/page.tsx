"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icon } from '@iconify/react';
import { useState } from "react";
import TransactionItem from "@/components/transaction-item"


export default function Transaction() {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState("");

  // const frameworks = [
  //   {
  //     value: "next.js",
  //     label: "Next.js",
  //   },
  //   {
  //     value: "sveltekit",
  //     label: "SvelteKit",
  //   },
  //   {
  //     value: "nuxt.js",
  //     label: "Nuxt.js",
  //   },
  //   {
  //     value: "remix",
  //     label: "Remix",
  //   },
  //   {
  //     value: "astro",
  //     label: "Astro",
  //   },
  // ];


  return (
    <div style={{ height: "90vh", }}>
      <div
        className="container mx-auto grid grid-rows-2 text-white"
        style={{ height: "20%", backgroundColor: "#26C165",}}
      >
        <div className="flex items-center border-b-1">
          <h1 className="font-bold text-xl">TH Budget Tracker</h1>
        </div>
        <div>
          <span>Transaction History</span>
          {/* TODO: use Select component for sorting */}
        </div>
      </div>

      <div
        className="container mx-auto py-4 overflow-auto" 
        style={{ height: "80%", maxHeight: "80%" }}
      >
        <Card>
          <CardContent className="px-2">
            {
              Array(40).fill(null).map((item, index) => (
                <TransactionItem
                  key={index}
                  expenseName="Pen"
                  date="7 Mar 2024 - 11:43 AM"
                  amount={60}
                />
              ))
            }
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
