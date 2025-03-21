"use client";

import { Switch } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
	children: React.ReactNode;
}

const links = [
	{ name: "Home", href: "/" },
	{ name: "Search", href: "/search" },
	{ name: "My Pantry", href: "/pantry" },
	{ name: "My Recipes", href: "/recipes" },
];

//change theme function

export default function Navbar({ children }: NavbarProps) {
	const [open, setOpen] = useState(false);
	const [theme, setTheme] = useState("");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		setTheme(localTheme || "light");
		console.log("theme: ", theme);
	}, []);

	return (
		<>
			<div id="nav">
				{/* Top nav */}
				<nav
					className={` h-14 border-b-2 ${
						theme === "dark"
							? "dark bg-[url(/img/dark.png)]"
							: "light bg-[url(/img/light.webp)]"
					}
					transition-all duration-200
					`}
				>
					<div className="flex flex-row px-6 w-full h-full justify-between items-center">
						{/* left side */}
						<div className="flex flex-row gap-x-4 w-full">
							<button
								onClick={() => setOpen((open) => !open)}
								className="cursor-pointer hover:bg-black/40 rounded-lg p-2"
							>
								<Bars3Icon className="size-8" />
							</button>
							<button className="hover:bg-black/40 rounded-lg p-2">
								<Link href={"/"} className="text-xl">
									My Pantry
								</Link>
							</button>
						</div>
						{/* right side */}
						<div className="flex flex-row gap-x-4">
							<Link
								className="hover:bg-black/40 rounded-lg p-2 text-xl"
								href={"/login"}
							>
								Login
							</Link>
						</div>
					</div>
				</nav>
				<div className="flex flex-row">
					{/* Side nav */}
					<div
						className={`x h-[calc(100vh-3.5rem)] relative transition-all duration-200   
							${open ? "w-40" : "w-0"}
							${
								theme === "dark"
									? "dark bg-[url(/img/dark.png)]"
									: "light bg-[url(/img/light.webp)]"
							}
							`}
					>
						<div
							className={` pt-4 flex flex-col justify-evenly relative  ${
								open ? "translate-x-0" : "translate-x-[-145px]"
							}`}
						>
							{links.map((link) => (
								<div className="mb-2 w-full " key={link.href}>
									<button className="w-40">
										<Link href={link.href}>
											<h2 className="overflow-hidden text-center hover:bg-black/40 rounded-lg p-2">
												{link.name}
											</h2>
										</Link>
									</button>
								</div>
							))}
							{/* dark mode switch */}
							<div className="flex flex-col w-full justify-center items-center">
								<Switch
									checked={theme === "dark"}
									onChange={() => {
										toggleTheme();
									}}
									className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-black cursor-pointer mr-2"
								>
									<span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
								</Switch>
								<h3 className="font-semibold">Dark Mode</h3>
							</div>
						</div>
					</div>
					<div
						id="children"
						className={`relative transition-all duration-200 
							${open ? "max-w-screen overflow-x-hidden w-full" : "w-screen"}
							${theme === "dark" ? "dark" : "light"}
							
						`}
					>
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
