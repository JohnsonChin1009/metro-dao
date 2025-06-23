"use client";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-6"> 
            {/* metroDAO logo */}
            <div>
                metroDAO
            </div>
            {/* Signature */}
            <div className="italic">
                made with determination by <a href="https://johnsonchin.vercel.app" target="_blank" className="hover:text-amber-600">johnson</a>
            </div>
            {/* Links */}
            <div>
                <a href="https://github.com/JohnsonChin1009/metro-dao" target="_blank">
                    <FaGithub className="text-2xl"/>
                </a>
                
            </div>
        </footer>
    )
}