import React from 'react';
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button';

const Navbar = () => {
  return (
    /*hilink navigation bar */
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      {/* hilink logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt='logo' width={74} height={29} />
      </Link>
      {/* mapping in a collapsible navigation-menu */}
      <ul className='hidden h-full gap-12 lg:flex '>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>
      {/* cool CTA button note:variant prop has issue*/}
      <div className='hidden lg:flexCenter'>
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* hamburger to toggle nav-menu collapse */}
      <Image
        src="menu.svg"
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  )
}

export default Navbar