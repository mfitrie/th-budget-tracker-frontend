"use client"
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation';

export default function BottomNavigationBar(){
    const router = useRouter();
    const pathname = usePathname();
    const TEXT_COLOR = "#26C165";

    return (
        <div 
          className="bg-white flex items-center justify-around cursor-pointer"
          style={{ height: "10vh", }}
        >
            <div 
                className='flex flex-col items-center justify-center gap-2'
                onClick={ () => {
                    router.push("/")
                } }
            >
                <Icon className='text-3xl' icon="material-symbols:dashboard-outline" color={ pathname === "/" ? TEXT_COLOR : "" }/>
                <span className='text-xs font-bold' style={{ color: pathname === "/" ? TEXT_COLOR : "" }}>Dashboard</span>
            </div>
            <div 
                className='flex flex-col items-center justify-center gap-2 cursor-pointer'
                onClick={ () => {
                    router.push("/transaction")
                } }
            >
                <Icon className='text-3xl' icon="lucide:briefcase" color={ pathname === "/transaction" ? TEXT_COLOR : "" }/>
                <span className='text-xs font-bold' style={{ color: pathname === "/transaction" ? TEXT_COLOR : "" }}>Transaction</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                <Icon className='text-4xl' icon="simple-line-icons:plus"/>
            </div>
            <div 
                className='flex flex-col items-center justify-center gap-2 cursor-pointer'
                onClick={ () => {
                    router.push("/reports")
                } }
            >
                <Icon className='text-3xl' icon="mdi:report-line" color={ pathname === "/reports" ? TEXT_COLOR : "" }/>
                <span className='text-xs font-bold' style={{ color: pathname === "/reports" ? TEXT_COLOR : "" }}>Reports</span>
            </div>
            <div 
                className='flex flex-col items-center justify-center gap-2 cursor-pointer'
                onClick={ () => {
                    router.push("/settings")
                } }
            >
                <Icon className='text-3xl' icon="uil:setting" color={ pathname === "/settings" ? TEXT_COLOR : "" }/>
                <span className='text-xs font-bold' style={{ color: pathname === "/settings" ? TEXT_COLOR : "" }}>Settings</span>
            </div>
        </div>
    )
}