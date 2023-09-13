"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Section({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<p
			className="font-normal text-main-gray"
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				lineHeight: "26px",
			}}>
			{children}
		</p>
	);
}

export default function Contacts() {
	return (
		<>
			<motion.div className="contacts w-full mb-36" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>contacts
						</div>
						<Image alt="pink_line" src="/main/pink_title_line.svg" width={511} height={2} />
					</h2>
				</div>
				<div className="flex">
					<div className="description relative w-1/2 mt-11">
						<Section>
							I’m interested in freelance opportunities. However,
							<br />
							if you have other request or question, don’t
							<br />
							hesitate to contact me
						</Section>
					</div>
					<div className="box relative flex items-end flex-col w-1/2">
						<div className="w-52 inline-flex p-4 flex-col items-start gap-4 border border-solid border-main-gray">
							<p>Message me here</p>
							<div className="mess flex flex-col items-start gap-2">
								<Link className="flex items-center gap-[5px]" href={"https://www.facebook.com/ngochung.nguyentran.5/"}>
									<Image alt="facebook" src="/facebook.svg" width={32} height={32} />
									<p className="text-main-gray font-normal">Nguyen Hung</p>
								</Link>
								<Link className="flex items-center gap-[5px]" href={"https://www.linkedin.com/in/nekooitine/"}>
									<Image alt="linkedin" src="/linkedin.svg" width={32} height={32} />
									<p className="text-main-gray font-normal">Nguyen Hung</p>
								</Link>
								<Link className="flex items-center gap-[5px]" href={"https://discordlookup.com/user/340461645732249610"}>
									<Image alt="discord" src="/discord.svg" width={32} height={32} />
									<p className="text-main-gray font-normal">nekooitine</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}
