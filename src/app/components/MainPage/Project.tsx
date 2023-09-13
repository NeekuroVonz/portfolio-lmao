"use client";
import Image from "next/image";
import Button from "../Button/Button";
import { motion } from "framer-motion";

export default function Project() {
	return (
		<>
			<motion.div className="projects w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>projects
						</div>
						<Image alt="pink_line" src="/main/pink_title_line.svg" width={511} height={2} />
					</h2>
					<p className="self-center">View all ~~&gt;</p>
				</div>
				<div className="content inline-flex items-start gap-4 mt-12">
					<div className="flex flex-col items-start border border-solid border-main-gray">
						<Image className="border-b border-solid border-main-gray" alt="chartnode" src="/projects/chertnode.png" width={330.579} height={201} />
						<div className="tech flex p-2 items-start gap-2 self-stretch font-normal text-main-gray">
							<span>HTML</span>
							<span>CSS</span>
							<span>Python</span>
							<span>Flask</span>
						</div>
						<div className="description flex p-4 flex-col items-start gap-4 self-stretch border-t border-solid border-main-gray">
							<p className="text-2xl/normal">ChertNodes</p>
							<p className="font-normal text-main-gray">Minecraft servers hosting</p>
							<div className="flex items-start gap-4">
								<Button url="#" color="pink" name="Live &lt;~&gt;" />
								<Button url="#" color="gray" name="Cached &gt;=" />
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start border border-solid border-main-gray">
						<Image className="border-b border-solid border-main-gray " alt="protectx" src="/projects/protectx.jpg" width={330.579} height={201} style={{ height: "171px" }} />
						<div className="tech flex p-2 items-start gap-2 self-stretch font-normal text-main-gray">
							<span>React</span>
							<span>Express</span>
							<span>Discord.js</span>
							<span>Node.js</span>
						</div>
						<div className="tech flex p-2 items-start gap-2 self-stretch font-normal text-main-gray">
							<span>HTML</span>
							<span>CSS</span>
							<span>Python</span>
							<span>Flask</span>
						</div>
						<div className="description flex p-4 flex-col items-start gap-4 self-stretch border-t border-solid border-main-gray">
							<p className="text-2xl/normal">ProtectX</p>
							<p className="font-normal text-main-gray">Discord anti-crash bot</p>
							<div className="flex items-start gap-4">
								<Button url="#" color="pink" name="Live &lt;~&gt;" />
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start border border-solid border-main-gray">
						<Image className="border-b border-solid border-main-gray" alt="kahoot" src="/projects/kahoot.jpg" width={330.579} height={201} />
						<div className="tech flex p-2 items-start gap-2 self-stretch font-normal text-main-gray">
							<span>CSS</span>
							<span>Express</span>
							<span>Node.js</span>
						</div>
						<div className="description flex p-4 flex-col items-start gap-4 self-stretch border-t border-solid border-main-gray">
							<p className="text-2xl/normal">Kahoot Answers Viewer</p>
							<p className="font-normal text-main-gray">Get answers to your kahoot quiz</p>
							<div className="flex items-start gap-4">
								<Button url="#" color="pink" name="Live &lt;~&gt;" />
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start border border-solid border-main-gray">
						<Image className="border-b border-solid border-main-gray" alt="snackisland" src="/projects/snackisland.jpg" width={330.579} height={201} style={{ height: "172px" }} />
						<div className="tech flex p-2 items-start gap-2 self-stretch font-normal text-main-gray">
							<span>ReactJS</span>
							<span>SpringBoot</span>
							<span>PostgreSQL</span>
						</div>
						<div className="description flex p-4 flex-col items-start gap-4 self-stretch border-t border-solid border-main-gray">
							<p className="text-2xl/normal">Snack Island</p>
							<p className="font-normal text-main-gray">
								ERP System
								<br />
								Supplier Management
							</p>
							<div className="flex items-start gap-4">
								<Button url="#" color="pink" name="Live &lt;~&gt;" />
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}
