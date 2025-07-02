
'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function NavBar() {
    const [openAbout, setOpenAbout] = useState(false);
    const [openDoc, setOpenDoc] = useState(false);

    return (
        <header className="border-b border-border bg-[var(--background)]/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold text-primary">Dev Groups Job House</h1>

                    <nav
                        aria-label="Main"
                        data-orientation="horizontal"
                        dir="ltr"
                        className="relative z-10 flex max-w-max flex-1 items-center justify-center"
                    >
                        <div style={{ position: "relative" }}>
                            <ul className="flex space-x-6 items-center">
                                <li>
                                    <a href="#" className="inline-flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-[var(--secondary)] rounded px-2 py-1 transition-colors focus:outline-none">Home</a>
                                </li>

                                {/* DOCUMENTATION MENU ITEM*/}
                               <li 
                                    className="relative"
                               >
                                    {/* doc button */}
                                    <button
                                        onClick={() => setOpenDoc(!openDoc)}
                                        className="inline-flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-[var(--secondary)] rounded px-2 py-1 transition-colors focus:outline-none"
                                    >
                                        Documentation
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`transition-transform duration-200 ${openDoc ? "rotate-180" : ""}`}
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    {/* documentation dropdown */}
                                    {openDoc && (
                                        <div
                                            onMouseLeave={() => setOpenDoc(false)}
                                            className="absolute left-0 mt-2 w-48 rounded-md bg-[var(--background)] shadow-md border border-[var(--border)] p-2 space-y-2 z-50"
                                        >
                                            <a
                                                href="https://docs.google.com/document/d/15X4zzF1evjwfyurDCxBPhIGcc1gwCq0G/edit?tab=t.0"
                                                target='_blank'
                                                className="block text-sm hover:text-blue-400"
                                            >
                                                Official Docs
                                            </a>
                                            <a
                                                href="https://github.com/QwasarSV/Qwasar-Job-Board"
                                                target="_blank"
                                                className="block text-sm hover:text-blue-400"
                                            >
                                                Github
                                            </a>
                                        </div>
                                    )}
                                </li>

                                {/* ABOUT MENU ITEM */}
                                <li className="relative">
                                    {/* about button */}
                                    <button
                                        onClick={() => setOpenAbout(!openAbout)}
                                        className="inline-flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-[var(--secondary)] rounded px-2 py-1 transition-colors focus:outline-none"
                                    >
                                        About
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`transition-transform duration-200 ${openAbout ? "rotate-180" : ""}`}
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                    {/* about dropdown */}
                                    {openAbout && (
                                        <div 
                                        className="absolute left-0 mt-2 w-48 rounded-md bg-[var(--background)] shadow-md border border-[var(--border)] p-2 space-y-2 z-50"
                                        onMouseLeave={() => setOpenAbout(false)}
                                        >
                                            <a
                                                href="#contributors"
                                                className="block text-sm hover:text-blue-400"
                                            >
                                                Contributors
                                            </a>
                                            <a
                                                href="#Program Managers"
                                                className="block text-sm hover:text-blue-400"
                                            >
                                                Program Managers
                                            </a>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="absolute left-0 top-full flex justify-center"></div>
                    </nav>
                </div>

                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 relative"
                    aria-label="Switch to light mode"
                    type="button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-sun h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-moon absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </button>
            </div>
        </header>

    )
}
