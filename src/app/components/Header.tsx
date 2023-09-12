"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Media from "./Media";

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
				<Link className={`${path == "/works" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start`} href={"/works"}>
					<span className="text-main-pink">#</span>works
				</Link>
				<Link className={`${path == "/about-me" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start`} href={"/about-me"}>
					<span className="text-main-pink">#</span>about-me
				</Link>
				<Link className={`${path == "/contacts" ? "text-white" : "hover:text-fuchsia-400 hover:transition-colors duration-700 text-main-gray"} flex items-start`} href={"/contacts"}>
					<span className="text-main-pink">#</span>contacts
				</Link>
			</div>
			<Media />
		</header>
	);
}
