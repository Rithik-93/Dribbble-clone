import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { NavLinks } from '@/constants';


const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
           <Link href="/">
            <Image src="/logo.svg" alt="" 
            width={115}
            height={43}
            />
           </Link>
           <ul className='lg:flex hidden
           tex-small gap-7'>
            {NavLinks.map((link)=> (
                <Link href={link.href} key={link.key}>
                   {link.text}
                </Link>
            ))}
           </ul>
        </div>
    </nav>
      
  )
}

export default Navbar
