"use client";
import Image from "next/image";
import Dots from "../Decorate/Dots";
import { motion } from "framer-motion";

export default function Skills() {
	return (
		<>
			<motion.div className="skills w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>skills
						</div>
						<Image alt="pink_line" src="/main/pink_title_line.svg" width={511} height={2} />
					</h2>
				</div>
				<div className="flex">
					<div className="decoration h-96 relative w-1/2">
						<div className="w-24 h-24 absolute border border-solid border-main-gray" style={{ left: "31rem", top: "2rem" }}></div>
						<div className="w-20 h-20 absolute border border-solid border-main-gray" style={{ left: "28rem", top: "15rem" }}></div>
						<Dots style={{ width: "75px", height: "75px", bottom: "17rem", left: "5rem" }} />
						<Dots style={{ width: "75px", height: "75px", left: "18rem", top: "8rem" }} />
						<Image className="square-pink absolute z-0 top-44 left-12" alt="deco" src="/main/square_pink.svg" width={155} height={155} />
					</div>
					<div className="tech flex flex-wrap content-center justify-end w-1/2 just gap-4">
						<div className="languages inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Languages</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "100%" }}></div>
							<div className="flex px-2 flex-col items-start gap-2 font-normal text-main-gray">
								<div className="flex items-start gap-2">
									<span>TypeScript</span>
									<span>Lua</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Java</span>
									<span>JavaScript</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Python</span>
									<span>NodeJS</span>
								</div>
							</div>
						</div>
						<div className="databases inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Databases</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "100%" }}></div>
							<div className="flex px-2 flex-col items-start gap-2 font-normal text-main-gray">
								<div className="flex items-start gap-2">
									<span>MySQL</span>
									<span>PostgreSQL</span>
								</div>
								<div className="flex items-start gap-2">
									<span>SQLite</span>
									<span>MongoDB</span>
								</div>
								<div className="flex items-start gap-2">
									<span>PostgreSQL</span>
								</div>
							</div>
						</div>
						<div className="tools inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Tools</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "100%" }}></div>
							<div className="flex px-2 flex-col items-start gap-2 font-normal text-main-gray">
								<div className="flex items-start gap-2">
									<span>VSCode</span>
									<span>IntelliJ</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Figma</span>
									<span>XFCE</span>
									<span>Arch</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Git</span>
									<span>Neovim</span>
									<span>Linux</span>
								</div>
							</div>
						</div>
						<div className="other inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Other</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "100%" }}></div>
							<div className="flex px-2 flex-col items-start gap-2 font-normal text-main-gray">
								<div className="flex items-start gap-2">
									<span>HTML</span>
									<span>CSS</span>
									<span>EJS</span>
									<span>SCSS</span>
								</div>
								<div className="flex items-start gap-2">
									<span>REST</span>
									<span>Jinja</span>
									<span>Tailwind</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Postman</span>
									<span>Selenium</span>
								</div>
							</div>
						</div>
						<div className="frameworks inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Frameworks</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "100%" }}></div>
							<div className="flex px-2 flex-col items-start gap-2 font-normal text-main-gray">
								<div className="flex items-start gap-2">
									<span>React</span>
									<span>Vue</span>
									<span>Next</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Express.js</span>
									<span>Discord.js</span>
								</div>
								<div className="flex items-start gap-2">
									<span>Flask</span>
									<span>SpringBoot</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}
