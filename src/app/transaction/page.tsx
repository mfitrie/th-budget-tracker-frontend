"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icon } from '@iconify/react';
import { useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { getBudgets } from "@/lib/store/reducer/budget";
import TransactionItem from "@/components/transaction-item"
import dayjs from "dayjs";


export default function Transaction() {
  const { budget } = useAppSelector(getBudgets);

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
          {/* <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
      </div>

      <div
        className="container mx-auto py-4 overflow-auto" 
        style={{ height: "80%", maxHeight: "80%" }}
      >
        <Card>
          <CardContent className="px-2">
            {
              budget.transactions.map((item, index) => (
                <TransactionItem
                  key={ index }
                  expenseName={ item.expenseName }
                  date={ dayjs(item.timestamp).format("D MM YYYY - h:mm a") }
                  amount={ item.amount }
                />
              ))
            }
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
