import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SideNavBarProps {
	children: ReactNode;
}

const links = [
	{ name: "Home", href: "/" },
	{ name: "Search", href: "/search" },
	{ name: "My Pantry", href: "/pantry" },
	{ name: "My Recipes", href: "/recipes" },
];

export default function SideNavBar({ children }: SideNavBarProps) {
	return (
		<>
			<div className="flex flex-row">
				{/* side nav */}
				<div>
					{/* mobile nav */}
					<div className="sm:hidden">
						<Disclosure as="div" defaultOpen={false}>
							<DisclosureButton className="data-closed:fill-[url(/img/wood.webp)] m-2 w-full h-full fixed top data-open:-z-10 data-closed:block">
								<Bars3Icon className="size-8 data-[hover]:fill-gray-500" />
							</DisclosureButton>
							<DisclosurePanel
								transition
								className="origin-top-left transition duration-200 ease-out data-[closed]:-translate-x-6 data-[closed]:opacity-0 bg-[url(/img/wood.webp)] h-screen w-full"
							>
								<div className="flex flex-col pt-2 w-full">
									<DisclosureButton className="w-full h-full ">
										<XMarkIcon className="size-8 hover:text-red-600 text-white data-[hover]:fill-gray-500" />
									</DisclosureButton>
									<div className="flex flex-col justify-evenly mx-2">
										{links.map((link) => (
											<Link key={link.href} href={link.href}>
												<h2 className="text-start">{link.name}</h2>
											</Link>
										))}
									</div>
								</div>
							</DisclosurePanel>
						</Disclosure>
					</div>
					{/* desktop nav */}
					<div className="hidden sm:block bg-[url(/img/wood.webp)] h-screen max-w-1/4 min-w-[240px] w-full">
						<div className="flex flex-col py-6 w-full h-full justify-between items-center">
							<Link href={"/search"}>
								<h2>Search</h2>
							</Link>
						</div>
					</div>
				</div>
				{/* children */}
				<div className="h-full w-full m-4">{children}</div>
			</div>
		</>
	);
}
