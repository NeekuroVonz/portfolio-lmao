import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
