"use client"

import { Icon } from '@iconify/react';

export default function BottomNavigationBar(){
    return (
        <div 
          className="bg-white flex items-center justify-around"
          style={{ height: "10vh", }}
        >
            <div className='flex flex-col items-center justify-center gap-2'>
                <Icon className='text-3xl' icon="material-symbols:dashboard-outline"/>
                <span className='text-xs font-bold'>Dashboard</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Icon className='text-3xl' icon="mdi:report-line"/>
                <span className='text-xs font-bold'>Reports</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Icon className='text-4xl' icon="simple-line-icons:plus"/>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Icon className='text-3xl' icon="lucide:briefcase"/>
                <span className='text-xs font-bold'>Transaction</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <Icon className='text-3xl' icon="uil:setting"/>
                <span className='text-xs font-bold'>Settings</span>
            </div>
        </div>
    )
}