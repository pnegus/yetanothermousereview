// 'use client'

import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex pt-2 pb-2 justify-center">
             <Link className = {styles.menuElement} href="/">
                Home
            </Link>
            <Link className = {styles.menuElement} href="/reviews">
                Reviews
            </Link>
            <Link className = {styles.menuElement} href="/about">
                About
            </Link>
            <Link className = {styles.menuElement} href="/contact">
                Contact
            </Link>
        </div>
    );
}

const styles = {
    menuElement: "text-1xl font-semibold pr-8 pl-8"
}