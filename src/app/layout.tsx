"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NekooiTine Portfolio",
	description: "All build by NekooiTine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const path = usePathname();
	return (
		<html lang="en">
			<body className={fira.className}>
				<header className="sticky flex pt-8 pb-2 justify-between items-end">
					<div className="flex items-center gap-2">
						<Image alt="Logo" src="/logo.svg" width={16} height={16} />
						<h1>NekooiTine</h1>
					</div>
					<div className="flex items-start gap-8">
						<Link className={`${path == "/" ? "active" : ""} flex items-start hover:text-pink-800 hover:transition-colors duration-700 text-gray-500`} href={"/"}>
							<span>#</span>home
						</Link>
						<Link className={`${path == "/test" ? "active" : ""} flex items-start hover:text-pink-800 hover:transition-colors duration-700 text-gray-500`} href={"/test"}>
							<span>#</span>works
						</Link>
						<Link className={`${path == "/test1" ? "active" : ""} flex items-start hover:text-pink-800 hover:transition-colors duration-700 text-gray-500`} href={"/test2"}>
							<span>#</span>about-me
						</Link>
						<Link className={`${path == "/test2" ? "active" : ""} flex items-start hover:text-pink-800 hover:transition-colors duration-700 text-gray-500`} href={"/test3"}>
							<span>#</span>contacts
						</Link>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
