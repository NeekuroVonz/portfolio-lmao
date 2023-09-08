import Image from "next/image";
import "./main.css";
import Dots from "./components/Dots";

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
					<div className="dots z-10 absolute flex flex-col justify-between items-start flex-shrink-0 bottom-14 right-10">
						<Dots />
					</div>
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
				<div className="head flex-shrink-0">
					<h2 className="flex items-center gap-4">
						<div className="flex items-start">
							<span className="text-main-pink">#</span>projects
						</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="511" height="2" viewBox="0 0 511 2" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD" />
						</svg>
					</h2>
					<p>View all ~~&gt;</p>
				</div>
				<div className="contents"></div>
			</div>
		</>
	);
}
