"use client";
import Image from "next/image";
import Dots from "../Decorate/Dots";
import Button from "../Button/Button";
import { motion } from "framer-motion";

export default function AboutMe() {
	return (
		<>
			<motion.div className="about-me w-full" transition={{ duration: 1, delay: 0.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start text-[32px]">
							<span className="text-main-pink">#</span>about-me
						</div>
						<Image alt="pink_line" src="/main/pink_title_line.svg" width={511} height={2} />
					</h2>
				</div>
				<div className="flex">
					<div className="description relative w-1/2 mt-6">
						<p className="font-normal text-main-gray mb-[27px]" style={{ lineHeight: "26px" }}>
							Hello, i’m NekooiTine (Nguyen Hung)!
							<br />
							<br />
							I’m a self-taught full-stack developer based in Ho Chi Minh City, Vietnam. I can develop entire websites (backend - frontend - deploy) from scratch and raise them into modern user-friendly web experiences.
							<br />
							<br />
							Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
						</p>
						<Button url="#" color="pink" name="Live &lt;~&gt;" />
					</div>
					<div className="image relative flex items-end flex-col w-1/2">
						<Image className="border-b border-main-pink" alt="pic3" src="/main/pic3.png" width={430} height={361} style={{ transform: "scaleX(-1)", width: "430px", height: "361px"}} />
						<Dots style={{ height: "100px", width: "100px", bottom: "17.5rem", right: "22.5rem" }} />
						<Dots style={{ height: "70px", width: "100px", bottom: "4.5rem", right: "0.5rem" }} />
					</div>
				</div>
			</motion.div>
		</>
	);
}
