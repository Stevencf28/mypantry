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
			<nav className="bg-[url(/img/wood.webp)] h-14 border-b-2">
				<div className="flex flex-row px-6 w-full h-full justify-between items-center">
					{/* left side */}
					<div className="flex flex-row gap-x-4 w-full">
						<button
							onClick={() => setOpen((open) => !open)}
							className="cursor-pointer"
						>
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
					className={`bg-[url(/img/wood.webp)] h-[calc(100vh-3.5rem)] relative transition-all duration-200 pt-4 ${
						open ? "w-40" : "w-0"
					}`}
				>
					<div
						className={`flex flex-col justify-evenly mx-2 relative transition-all duration-200 ${
							open ? "translate-x-0" : "translate-x-[-140px]"
						}`}
					>
						{links.map((link) => (
							<button key={link.href} className="mb-2 border-b">
								<Link href={link.href}>
									<h2 className="text-start text-clip overflow-hidden">
										{link.name}
									</h2>
								</Link>
							</button>
						))}
					</div>
				</div>
				<div
					id="children"
					className={`relative w-full transition-all duration-200 ${
						open ? "w-[calc(100%-10rem)]" : "w-full"
					}`}
				>
					{children}
				</div>
			</div>
		</>
	);
}
