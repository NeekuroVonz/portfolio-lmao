import Image from "next/image";
import "./main.css";
import Dots from "./utils/Dots";

export default function Home() {
	return (
		<>
			<div className="first flex">
				<div className="group-1 flex-shrink-0">
					<p className="title">
						NekooiTine is a <span className="text-main-pink">web designer</span> and
						<br /> a <span className="text-main-pink">full-stack developer</span>.
					</p>
					<p className="description mt-8 text-main-gray">
						He crafts responsive websites where technologies
						<br /> meet creativity
					</p>
					<button className="button mt-6 inline-flex items-start py-2 px-4 border-main-pink border-solid border gap-main-gap">Contact me!!</button>
				</div>
				<div className="group-2 ml-48 -mt-10 w-full relative">
					<Image className="square-pink absolute z-0 top-24 -left-24" alt="deco" src="/main/square_pink.svg" width={155} height={155} />
					<Image className="relative z-10" alt="mypic" src="/main/pic.png" width={400} height={386} />
					<div className="current-work flex p-2 items-center border border-solid border-main-gray bg-main-background gap-main-gap">
						<div className="square w-4 h-4 flex-shrink-0 border border-solid border-main-pink bg-main-pink"></div>
						<p className="content text-main-gray">
							Currently working on <span className="text-white">Portfolio</span>
						</p>
					</div>
					<Dots style={{ height: "100px", width: "100px", bottom: "3.5rem", right: "2.5rem" }} />
				</div>
			</div>

			<div className="w-full text-center">
				<div className="relative quote inline-flex p-12 items-start gap-main-gap border border-solid border-main-gray bg-main-background mt-28">
					<div className="quote-mark absolute flex py-1 px-2 flex-col items-start bg-main-background -top-4 left-4">
						<Image className="flex" alt="quote" src="/main/quotation_mark.svg" width={25.472} height={20.704} />
					</div>
					<p className="">With great power comes great electricity bill</p>
					<div className="name absolute flex p-4 items-start gap-main-gap border border-solid border-main-gray">
						<p className="">- Dr. Who</p>
					</div>
					<div className="quote-mark absolute flex py-1 px-2 flex-col items-start bg-main-background">
						<Image className="flex" alt="quote" src="/main/quotation_mark.svg" width={25.472} height={20.704} />
					</div>
				</div>
			</div>

			<div className="projects w-full">
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>projects
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
						</svg>
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
								<div className="live flex py-2 px-4 items-start gap-3 border border-solid border-main-pink">
									<p>Live &lt;~&gt;</p>
								</div>
								<div className="live flex py-2 px-4 items-start gap-3 border border-solid border-main-gray">
									<p>Cached &gt;=</p>
								</div>
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
								<div className="live flex py-2 px-4 items-start gap-3 border border-solid border-main-pink">
									<p>Live &lt;~&gt;</p>
								</div>
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
								<div className="live flex py-2 px-4 items-start gap-3 border border-solid border-main-pink">
									<p>Live &lt;~&gt;</p>
								</div>
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
								<div className="live flex py-2 px-4 items-start gap-3 border border-solid border-main-pink">
									<p>Live &lt;~&gt;</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="skills w-full">
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>skills
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
						</svg>
					</h2>
					<p className="self-center">View all ~~&gt;</p>
				</div>
				<div className="flex">
					<div className="decoration w-96 h-96 relative">
						<div className="w-24 h-24 absolute border border-solid border-main-gray" style={{ left: "31rem", top: "2rem" }}></div>
						<div className="w-20 h-20 absolute border border-solid border-main-gray" style={{ left: "28rem", top: "15rem" }}></div>
						<Dots style={{ width: "75px", height: "75px", bottom: "17rem", left: "5rem" }} />
						<Dots style={{ width: "75px", height: "75px", left: "18rem", top: "8rem" }} />
						<Image className="square-pink absolute z-0 top-44 left-12" alt="deco" src="/main/square_pink.svg" width={155} height={155} />
					</div>
					<div className="tech w-full text-right">
						<div className="languages inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Languages</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "178px" }}></div>
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
							<div className="h-px bg-main-gray" style={{ width: "178px" }}></div>
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
							<div className="h-px bg-main-gray" style={{ width: "178px" }}></div>
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
						<br /><br />
						<div className="other inline-flex py-2 flex-col items-start gap-2 border border-solid border-main-gray">
							<div className="title flex px-2 items-start self-stretch">
								<p>Other</p>
							</div>
							<div className="h-px bg-main-gray" style={{ width: "178px" }}></div>
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
							<div className="h-px bg-main-gray" style={{ width: "178px" }}></div>
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
			</div>
		</>
	);
}
