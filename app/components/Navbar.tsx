import { Button } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-[url(/img/wood.webp)] h-14 w-screen">
			<div className="flex flex-row px-6 w-full h-full justify-between items-center">
				<div>
					<Link href={"/"} className="hover:bg-gray-600 rounded-lg">
						<h2>My Pantry</h2>
					</Link>
				</div>
				<div className="flex flex-row gap-x-4">
					<Link className="hover:bg-gray-600 rounded-lg" href={"/login"}>
						Login / Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
}
