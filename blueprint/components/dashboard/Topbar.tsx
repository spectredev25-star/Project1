import Link from "next/link";
import {Bell, Search,User } from 'lucide-react';
import ThemeToggle from "../theme_toggle";

export default function Topbar(){
    return(
        <section className="topbar fixed top-0 flex p-4 mt-4 gap-4 right-2">
                 <Link href='/'>
                    <Bell className='float' color="#6366f1" size={24} strokeWidth={1.5} />
                </Link>
                 <Link href='/'>
                    <Search className='float' color="#6366f1" size={24} strokeWidth={1.5} />
                </Link>
                <Link href='/'>
                    <User className='float' color="#6366f1" size={24} strokeWidth={1.5} />
                </Link>

            <ThemeToggle />
            
        </section>
    )
}