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
import { useAppSelector } from "@/lib/store/hooks";
import { getBudgets } from "@/lib/store/reducer/budget";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function Home() {
  const { budgets } = useAppSelector(getBudgets);

  const data = [
    { value: 5, label: 'Aaaa' },
    { value: 10, label: 'Bbbb' },
    { value: 15, label: 'Cccc' },
    { value: 20, label: 'Dddd' },
  ];
  
  const size = {
    width: 300,
    height: 200,
  };


  return (
    <div 
      style={{ height: "90vh" }}
    >
      <div
        className="container mx-auto grid grid-rows-2 text-white"
        style={{ height: "20%", backgroundColor: "#26C165",}}
      >
        <div className="flex items-center gap-2 border-b-1">
          <h1 className="font-bold text-xl">TH Budget Tracker</h1>
          <Icon className='text-lg' icon="simple-line-icons:plus"/>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs">Your balance</span>
          <span className="font-bold text-xl">RM10000</span>
        </div>
      </div>

      <div
        className="container mx-auto py-4 flex flex-col gap-4 overflow-auto" 
        style={{ height: "80%", maxHeight: "80%" }}
      >
        <div>
          <Card>
            <CardHeader>
              {/* <CardTitle>Cash</CardTitle> */}
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="flex flex-row justify-between">
              <span>Cash</span>
              <span className="font-bold text-xl">RM10000</span>
            </CardContent>
            <CardFooter>
              {/* <p>Card Footer</p> */}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader className="flex items-end p-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Icon className='text-3xl' icon="ph:dots-three-bold"/>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>What is your monthly budget?</DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2 justify-center">
                      <DialogDescription className="text-center">
                        Amount (RM)
                      </DialogDescription>
                      <Input className="text-center font-bold text-lg" type="number" placeholder="Enter your budget"/>
                    </div>
                  </div>
                  <DialogFooter className="mt-4 sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="default">
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
                <span className="font-bold text-lg">RM5000</span>
                <Progress value={33} />
                <div className="flex flex-row justify-between">
                  <CardDescription>spent: RM4300</CardDescription>
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
            <PieChart
              series={[
                {
                  // arcLabel: (item) => `${item.label} (${item.value})`,
                  arcLabelMinAngle: 45,
                  innerRadius: 50,
                  data,
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
