import Image from "next/image";
import "./main.css";

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
					<button className="button mt-6 inline-flex items-start py-2 px-4 border-main-pink border-solid border">Contact me!!</button>
				</div>
				<div className="group-2 ml-48 -mt-10 w-full">
					<Image alt="mypic" src="/main/pic.png" width={400} height={386} />
					<div className="current-work">
						<div className="square"></div>
						<p className="content">Currently working on Portfolio</p>
					</div>
				</div>
			</div>
		</>
	);
}
