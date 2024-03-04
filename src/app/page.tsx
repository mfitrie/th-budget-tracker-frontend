"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppSelector } from "@/lib/store/hooks";
import { getBudgets } from "@/lib/store/reducer/budget";

export default function Home() {
  const { budgets } = useAppSelector(getBudgets);

  return (
    <div style={{ height: "90vh", }}>
      <div className="grid grid-rows-2 bg-yellow-200" style={{ height: "15%", }}>
        <div className="bg-red-200 flex items-center">
          <h1 className="font-bold">TH Budget Tracker</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs">Your balance</span>
          <span className="font-bold">RM 10000</span>
        </div>
      </div>

      <div className="bg-red-200" style={{ height: "75%", }}>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{ budgets["year2023"].listTransactionsCategories }</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
