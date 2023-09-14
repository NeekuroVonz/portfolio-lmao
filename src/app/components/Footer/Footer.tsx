import Image from "next/image";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
	return (
		<>
			<footer className="inline-flex pb-8 flex-col items-center gap-8 w-full">
				<div className="absolute w-full h-px bg-main-gray"></div>
				<div className="content pt-8 flex flex-col items-center gap-12 w-full">
					<div className="flex justify-between items-start w-full">
						<div className="flex items-start flex-col gap-4">
							<div className="flex items-center gap-6 self-stretch">
								<div className="flex items-center gap-2">
									<Image alt="logo" src="logo.svg" width={16} height={16} style={{ width: "16px", height: "16px" }} />
									<p>NekooiTine</p>
								</div>
								<p className="text-base/normal text-main-gray font-normal">hungngochung2607@gmail.com</p>
							</div>
							<p className="font-normal">Web designer and full-stack developer</p>
						</div>
						<div className="flex items-start flex-col gap-3">
							<p className="text-2xl/normal">Media</p>
							<div className="flex gap-3">
								<SocialMedia />
							</div>
						</div>
					</div>
					<p className="text-main-gray font-normal ">© Copyright 2023. Made by NekooiTine</p>
				</div>
			</footer>
		</>
	);
}
