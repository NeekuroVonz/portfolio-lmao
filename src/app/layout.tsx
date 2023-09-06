import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NekooiTine Portfolio",
	description: "All build by NekooiTine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={fira.className}>
				<header className="sticky flex pt-8 pb-2 justify-between items-end">
					<div className="flex items-center gap-2">
						<Image alt="Logo" src="/logo.svg" width={16} height={16} />
						<h1>NekooiTine</h1>
					</div>
					<div className="flex items-start gap-8">
						<Link href={"/test"}>Test</Link>
						<Link href={"/test1"}>Test1</Link>
						<Link href={"/test2"}>Test2</Link>
						<Link href={"/test3"}>Test3</Link>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}
