"use client";

// import Image from "next/image";

export default function Heading() {
    return (
        <header className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-6">
            {/* metroDAO logo */}
            <div>
                metroDAO
            </div>
            <nav className="flex space-x-[60px]">
                <a href="#about" className="">About Us</a>
                <a href="#about" className="">Features</a>
                <a href="#about" className="">Tech Stack</a>
            </nav>
            <div>
                <button>
                    Sign in
                </button>
            </div>
        </header>
    )
}