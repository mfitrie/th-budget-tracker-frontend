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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { changeMonthBudget, getBudgets, getChartData, replenishTotalBudget } from "@/lib/store/reducer/budget";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import AlertCustom from "@/components/alert-custom"
import { AppState } from "@/lib/store/store"
import Lottie from "lottie-react";
import noDataAnimation from "@/assets/no-data-animation.json"
import { ChangeEvent, FormEvent, useState } from "react"

export default function Home() {
  const dispatch = useAppDispatch();
  const { budget } = useAppSelector(getBudgets);
  const chartData = useAppSelector(getChartData);

  const [inputTotalBudget, setInputTotalBudget] = useState<number>(0);
  const [inputMonthBudget, setInputMonthlyBudget] = useState<number>(0);

  const data = [
    { value: 5, label: 'Aaaa' },
    { value: 10, label: 'Bbbb' },
    { value: 15, label: 'Cccc' },
    { value: 20, label: 'Dddd' },
  ];
  
  const size = {
    width: 300,
    height: 150,
  };


  return (
    <div 
      style={{ height: "90vh" }}
    >
      <div
        className="container mx-auto grid grid-rows-2 text-white"
        style={{ height: "20%", backgroundColor: "#26C165",}}
      >
        <div className="flex items-center border-b-1">
          <h1 className="font-bold text-xl">TH Budget Tracker</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs">Your balance</span>
          <div className="flex flex-row items-center gap-3">
            <span className="font-bold text-xl">RM{ budget.account.cash.amount.toFixed(2) }</span>
            <Dialog>
              <DialogTrigger asChild>
                <Icon className='text-base' icon="simple-line-icons:plus"/>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-left">Add total budget</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2 justify-center">
                    <DialogDescription className="text-center">
                      Amount (RM)
                    </DialogDescription>
                    <Input 
                      className="text-center font-bold text-lg" 
                      type="number" 
                      placeholder="Enter your budget"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const newValue = e.target.value;
                        setInputTotalBudget(+newValue);
                      }}
                    />
                  </div>
                </div>
                <DialogFooter className="mt-4 sm:justify-start">
                  <DialogClose asChild>
                    <Button 
                      type="button" 
                      variant="default"
                      onClick={() => {
                        dispatch(replenishTotalBudget(inputTotalBudget));
                        setInputTotalBudget(0);
                      }}
                    >
                      Save
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto py-4 flex flex-col gap-4 overflow-auto" 
        style={{ height: "80%", maxHeight: "80%" }}
      >
        <div>
          <Card>
            <CardHeader className="flex items-end p-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Icon className='text-3xl' icon="ph:dots-three-bold"/>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-left">What is your monthly budget?</DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2 justify-center">
                      <DialogDescription className="text-center">
                        Amount (RM)
                      </DialogDescription>
                      <Input 
                        className="text-center font-bold text-lg" 
                        type="number" 
                        placeholder="Enter your budget"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          const newValue = e.target.value;
                          setInputMonthlyBudget(+newValue);
                        }}
                      />
                    </div>
                  </div>
                  <DialogFooter className="mt-4 sm:justify-start">
                    <DialogClose asChild>
                      <Button 
                        type="button" 
                        variant="default"
                        onClick={() => {
                          dispatch(changeMonthBudget(inputMonthBudget))
                          setInputMonthlyBudget(0);
                        }}
                      >
                        Save
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

            </CardHeader>
            <CardContent className="grid grid-cols-12 px-2">
              <div className="col-span-3 flex items-center justify-center">
                <div 
                  className="border-solid border-2 border-black rounded-full p-2"
                  style={{ borderColor: "#26C165", }}
                >
                  <Icon className='text-3xl' icon="ph:coin"/>
                </div>
              </div>
              <div className="col-span-9 flex flex-col gap-1">
                <span className="font-bold">Monthly budget</span>
                <span className="font-bold text-lg">RM{ budget.monthlyBudget.amount.toFixed(2) }</span>
                <Progress value={33} />
                <div className="flex flex-row justify-between">
                  <CardDescription>spent: RM488</CardDescription>
                  <CardDescription>left: RM2800</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Top categories of expenses, August</CardTitle>
            </CardHeader>
            <CardContent>
              {
                chartData.length !== 0 ? 
                (
                  <PieChart
                    series={[
                      {
                        // arcLabel: (item) => `${item.label} (${item.value})`,
                        arcLabelMinAngle: 45,
                        innerRadius: 50,
                        data: chartData,
                        // data
                      },
                    ]}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                      },
                    }}
                    {...size}
                  />
                )
                :
                (
                  <Lottie animationData={ noDataAnimation } />
                )
              }
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
