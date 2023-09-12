import Image from "next/image";
import "./main.css";
import Dots from "./utils/Dots";
import Link from "next/link";

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
				<div className="relative quote inline-flex p-8 items-start gap-main-gap border border-solid border-main-gray bg-main-background mt-28">
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
			</div>

			<div className="about-me w-full">
				<div className="head flex justify-between">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>about-me
						</div>
						<Image alt="pink_line" src="/main/pink_title_line.svg" width={511} height={2} />
					</h2>
				</div>
				<div className="flex">
					<div className="description relative w-1/2 mt-6">
						<p className="font-normal text-main-gray" style={{ lineHeight: "26px" }}>
							Hello, i’m NekooiTine (Nguyen Hung)!
							<br />
							<br />
							I’m a self-taught full-stack developer based in Ho Chi Minh City, Vietnam. I can develop entire websites (backend - frontend - deploy) from scratch and raise them into modern user-friendly web experiences.
							<br />
							<br />
							Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
						</p>
						<button className="inline-flex py-2 px-4 items-start border border-solid border-main-pink mt-7" style={{ gap: "10px" }}>
							Read more -&gt;
						</button>
					</div>
					<div className="image relative flex items-end flex-col w-1/2">
						<Image className="border-b border-main-pink" alt="pic3" src="/main/pic3.png" width={430} height={197} style={{ transform: "scaleX(-1)" }} />
						<Dots style={{ height: "100px", width: "100px", bottom: "17.5rem", right: "22.5rem" }} />
						<Dots style={{ height: "70px", width: "100px", bottom: "4.5rem", right: "0.5rem" }} />
					</div>
				</div>
			</div>

			<div className="contacts w-full mb-36">
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
						<p className="font-normal text-main-gray" style={{ lineHeight: "26px" }}>
							I’m interested in freelance opportunities. However,
							<br />
							if you have other request or question, don’t
							<br />
							hesitate to contact me
						</p>
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
			</div>
		</>
	);
}
