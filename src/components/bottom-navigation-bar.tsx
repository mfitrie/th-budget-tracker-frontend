"use client"
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation';
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { Transactions } from '@/app/types/budget-schema';
import { FormEvent, useState } from 'react';
import { addExpense, getCategories } from '@/lib/store/reducer/budget';
// import styles from "@/app/globals.css";
import dayjs from 'dayjs';
import addExpenseSchema from '@/lib/validation/validate-add-expense-input';


export default function BottomNavigationBar() {
    const router = useRouter();
    const pathname = usePathname();
    const categories = useAppSelector(getCategories);

    const TEXT_COLOR = "#26C165";

    const dispatch = useAppDispatch();
    const expenseInputDefaultValue: Transactions = {
        expenseName: "",
        timestamp: dayjs().format('YYYY-MM-DDTHH:mm'),
        amount: 0,
        currency: "",
        category: "",
        notes: "",
        user: "",
    }
    const [expenseInput, setExpenseInput] = useState<Transactions>(expenseInputDefaultValue);


    return (
        <div
            className="bg-white flex items-center justify-around cursor-pointer"
            style={{ height: "10vh", }}
        >
            <div
                className='flex flex-col items-center justify-center gap-2'
                onClick={() => {
                    router.push("/")
                }}
            >
                <Icon className='text-3xl' icon="material-symbols:dashboard-outline" color={pathname === "/" ? TEXT_COLOR : ""} />
                <span className='preventSelect text-xs font-bold' style={{ color: pathname === "/" ? TEXT_COLOR : "" }}>Dashboard</span>
            </div>
            <div
                className='flex flex-col items-center justify-center gap-2 cursor-pointer'
                onClick={() => {
                    router.push("/transaction")
                }}
            >
                <Icon className='text-3xl' icon="lucide:briefcase" color={pathname === "/transaction" ? TEXT_COLOR : ""} />
                <span className='preventSelect text-xs font-bold' style={{ color: pathname === "/transaction" ? TEXT_COLOR : "" }}>Transaction</span>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Icon className='text-4xl' icon="simple-line-icons:plus" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-left">New expense</DialogTitle>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2 justify-center">
                                <DialogDescription className="text-center">
                                    Amount (RM)
                                </DialogDescription>
                                <Input 
                                    className="text-center font-bold text-lg" 
                                    type="number" 
                                    placeholder="Enter your expense"
                                    onChange={(e: FormEvent<HTMLInputElement>) => {
                                        const newValue = e.currentTarget.value;
                                        setExpenseInput(prevValue => ({
                                            ...prevValue,
                                            amount: +newValue
                                        }));
                                    }} 
                                />
                                <div className="mt-4 flex flex-col gap-3">
                                    <div className='grid grid-cols-12 items-center gap-4'>
                                        <Label className='col-span-3 text-right'>Date</Label>
                                        <Input 
                                            className='col-span-9' 
                                            type="datetime-local" 
                                            placeholder="Enter date"
                                            value={ expenseInput.timestamp }
                                            onChange={(e: FormEvent<HTMLInputElement>) => {
                                                const newValue = e.currentTarget.value;
                                                setExpenseInput(prevValue => ({
                                                    ...prevValue,
                                                    timestamp: newValue,
                                                }));
                                        }} />
                                    </div>
                                    <div className='grid grid-cols-12 items-center gap-4'>
                                        <Label className='col-span-3 text-right'>Name</Label>
                                        <Input className='col-span-9' type="text" placeholder="Enter name" onChange={(e: FormEvent<HTMLInputElement>) => {
                                            const newValue = e.currentTarget.value;
                                            setExpenseInput(prevValue => ({
                                                ...prevValue,
                                                expenseName: newValue,
                                            }));
                                        }} />
                                    </div>
                                    <div className='grid grid-cols-12 items-center gap-4'>
                                        <Label className='col-span-3 text-right'>Category</Label>
                                        <Select
                                            onValueChange={ (value) => {
                                                setExpenseInput(prevValue => ({
                                                    ...prevValue,
                                                    category: value,
                                                }));
                                            } }
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Categories</SelectLabel>
                                                    {
                                                        categories.map((category, index) => (
                                                            <SelectItem
                                                                key={ index }
                                                                value={ category }
                                                            >{ category }</SelectItem>
                                                        ))
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {/* <Input className='col-span-9' type="text" placeholder="Enter category" onChange={(e: FormEvent<HTMLInputElement>) => {
                                            const newValue = e.currentTarget.value;
                                            setExpenseInput(prevValue => ({
                                                ...prevValue,
                                                category: newValue,
                                            }));
                                        }}/> */}
                                    </div>
                                    <div className='grid grid-cols-12 items-center gap-4'>
                                        <Label className='col-span-3 text-right'>Notes</Label>
                                        <Input className='col-span-9' type="text" placeholder="Enter notes" onChange={(e: FormEvent<HTMLInputElement>) => {
                                            const newValue = e.currentTarget.value;
                                            setExpenseInput(prevValue => ({
                                                ...prevValue,
                                                notes: newValue,
                                            }));
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="mt-4 sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="default">Add Expense</Button>
                            </DialogClose>
                            
                            {/* <Button type="button" variant="default" onClick={() => {
                                try {
                                    console.log("expenseInput: ", expenseInput)
                                    addExpenseSchema.parse(expenseInput);

                                    dispatch(addExpense(expenseInput));
                                    setExpenseInput(expenseInputDefaultValue);
                                    
                                } catch (error) {
                                    console.error(error);
                                    // console.log("Error 1", Object.keys(error));
                                    // console.log("Error 1", error.issues)
                                    alert("Form is not complete");
                                }
                            }}>
                                Add Expense
                            </Button> */}
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div
                className='flex flex-col items-center justify-center gap-2 cursor-pointer'
                onClick={() => {
                    router.push("/reports")
                }}
            >
                <Icon className='text-3xl' icon="mdi:report-line" color={pathname === "/reports" ? TEXT_COLOR : ""} />
                <span className='preventSelect text-xs font-bold' style={{ color: pathname === "/reports" ? TEXT_COLOR : "" }}>Reports</span>
            </div>
            <div
                className='flex flex-col items-center justify-center gap-2 cursor-pointer'
                onClick={() => {
                    router.push("/settings")
                }}
            >
                <Icon className='text-3xl' icon="uil:setting" color={pathname === "/settings" ? TEXT_COLOR : ""} />
                <span className='preventSelect text-xs font-bold' style={{ color: pathname === "/settings" ? TEXT_COLOR : "" }}>Settings</span>
            </div>
        </div>
    )
}