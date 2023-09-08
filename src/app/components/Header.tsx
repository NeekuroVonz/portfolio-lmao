"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() { 
	const path = usePathname();
	return (
		<header className="sticky flex pt-8 pb-2 justify-between items-end">
			<div className="flex items-center gap-2">
				<Image alt="Logo" src="/logo.svg" width={16} height={16} />
				<h1>NekooiTine</h1>
			</div>
			<div className="flex items-start gap-8">
				<Link className={`${path == "/" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start `} href={"/"}>
					<span className="text-main-pink">#</span>home
				</Link>
				<Link className={`${path == "/test" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start`} href={"/test"}>
					<span className="text-main-pink">#</span>works
				</Link>
				<Link className={`${path == "/test1" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start`} href={"/test2"}>
					<span className="text-main-pink">#</span>about-me
				</Link>
				<Link className={`${path == "/test2" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start`} href={"/test3"}>
					<span className="text-main-pink">#</span>contacts
				</Link>
			</div>
		</header>
	);
}
