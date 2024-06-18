// 'use client'

import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex flex-wrap justify-center space-x-2 px-8">
             <Link className = {styles.menuElement} href="/">
                Home
            </Link>
            <Link className = {styles.menuElement} href="/reviews/mouse">
                Mouse Reviews
            </Link>
            <Link className = {styles.menuElement} href="/reviews/mousepad">
                Mousepad Reviews
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
    menuElement: "grow basis-1/6 p-2 text-1xl text-center font-semibold shadow-lg border-gray-300 bg-gradient-to-t from-gray-300 to-gray-200 hover:from-gray-200 hover:to-gray-300 hover:border-gray-200 hover:shadow-xl"
}