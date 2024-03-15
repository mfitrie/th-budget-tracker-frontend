import {
    CardDescription,
} from "@/components/ui/card"
import { Icon } from '@iconify/react';

type TypeTransactionItem = {
    expenseName: string,
    category: string,
    date: string,
    amount: number,
}

export default function TransactionItem({
    expenseName,
    category,
    date,
    amount
}: TypeTransactionItem) {
    return (
        <div className="py-4 grid grid-cols-12 items-center gap-3 border-b-[1px] border-black">
            <div className="col-span-2">
                <div
                    className="border-solid border-2 border-black rounded-full p-2"
                    style={{ borderColor: "#26C165" }}
                >
                    <Icon className='text-xl' icon="ph:coin" />
                </div>
            </div>
            <div className="col-span-7">
                <span className="font-bold">{ expenseName }</span>
                <CardDescription className="text-xs">{ category }</CardDescription>
                <CardDescription className="text-xs">{ date }</CardDescription>
            </div>
            <div className="col-span-3 flex flex-col text-right">
                <span className="font-bold">RM { amount }</span>
            </div>
        </div>
    );
}