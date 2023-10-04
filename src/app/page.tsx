import Image from "next/image";
import "./main.css";
import Dots from "./components/Decorate/Dots";
import Button from "./components/Button/Button";
import Project from "./components/MainPage/Project";
import Skills from "./components/MainPage/Skills";
import AboutMe from "./components/MainPage/AboutMe";
import Contacts from "./components/MainPage/Contacts";

export default function Home() {
	return (
		<>
			<div className="first flex items-center mt-16">
				<div className="group-1 flex-shrink-0 w-3/5">
					<p className="title text-[1.9vw] font-semibold">
						NekooiTine is a <span className="text-main-pink">web designer</span> and
						<br /> <span className="text-main-pink">full-stack developer</span>
					</p>
					<p className="description text-[1.1vw] font-normal leading-[25px] mt-8 text-main-gray mb-6">
						He crafts responsive websites where technologies
						<br /> meet creativity
					</p>
					<Button url="/contacts" color="pink" name="Contact me!!" />
				</div>
				<div className="group-2 -mt-10 w-1/2 relative">
					<Image className="square-pink absolute z-0 top-24 max-laptop:top-40 -left-24" alt="deco" src="/main/square_pink.svg" width={155} height={155} />
					<Image className="relative z-10 h-auto" alt="mypic" src="/main/pic.png" width={400} height={386} priority={true} />
					<div className="w-auto flex p-2 items-center border border-solid border-main-gray bg-main-background gap-main-gap">
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

			<Project />
			<Skills />
			<AboutMe />
			<Contacts />
		</>
	);
}
