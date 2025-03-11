"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
	children: React.ReactNode;
}

const links = [
	{ name: "Home", href: "/" },
	{ name: "Search", href: "/search" },
	{ name: "My Pantry", href: "/pantry" },
	{ name: "My Recipes", href: "/recipes" },
];

export default function Navbar({ children }: NavbarProps) {
	const [open, setOpen] = useState(false);
	return (
		<>
			{/* Top nav */}
			<nav className="bg-[url(/img/wood.webp)] h-14 w-screen">
				<div className="flex flex-row px-6 w-full h-full justify-between items-center">
					{/* left side */}
					<div className="flex flex-row gap-x-4 w-full">
						<button onClick={() => setOpen((open) => !open)}>
							<Bars3Icon className="size-8" />
						</button>
						<Link href={"/"}>
							<h2>My Pantry</h2>
						</Link>
					</div>
					{/* right side */}
					<div className="flex flex-row gap-x-4">
						<Link className="hover:bg-gray-600 rounded-lg" href={"/login"}>
							Login
						</Link>
					</div>
				</div>
			</nav>
			<div className="flex flex-row">
				{/* Side nav */}
				<div
					className={`bg-[url(/img/wood.webp)] h-screen relative transition-all duration-300 ${
						open ? "w-40" : "w-0"
					}`}
				>
					{open && (
						<div
							className={`flex flex-col pt-2 h-full relative transition-all duration-500 ${
								open ? "w-40" : "w-0"
							} `}
						>
							<div className="flex flex-col justify-evenly mx-2">
								{links.map((link) => (
									<button key={link.href} className="mb-2 border-b">
										<Link href={link.href}>
											<h2 className="text-start">{link.name}</h2>
										</Link>
									</button>
								))}
							</div>
						</div>
					)}
				</div>
				<div
					id="children"
					className="relative transition-all duration-500 ease-out w-full m-4"
				>
					{children}
				</div>
			</div>
		</>
	);
}
