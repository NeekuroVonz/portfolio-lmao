import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Image from "next/image";
import Header from "./components/Header";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NekooiTine Portfolio",
	description: "All build by NekooiTine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={fira.className}>
				<Header />
				<div className="media fixed top-0 inline-flex flex-col items-center gap-2 left-36">
					<Image alt="line" src="/line_10_stroke.svg" width={2} height={191} />
					<div className="social flex flex-col items-center gap-2">
						<Image alt="github" src="/github.svg" width={32} height={32} />
						<Image alt="facebook" src="/facebook.svg" width={32} height={32} />
						<Image alt="linkedin" src="/linkedin.svg" width={32} height={32} />
						<Image alt="discord" src="/discord.svg" width={32} height={32} />
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}
