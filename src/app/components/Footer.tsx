import Image from "next/image";
import Link from "next/link";

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
									<Image alt="logo" src="logo.svg" width={16} height={16} />
									<p>NekooiTine</p>
								</div>
								<p className="text-base/normal text-main-gray font-normal">hungngochung2607@gmail.com</p>
							</div>
							<p className="font-normal">Web designer and full-stack developer</p>
						</div>
						<div className="flex items-start flex-col gap-3">
							<p className="text-2xl/normal">Media</p>
							<div className="flex gap-3">
								<Link href={"https://github.com/NeekuroVonz"}>
									<Image alt="github" src="/github.svg" width={32} height={32} />
								</Link>
								<Link href={"https://www.facebook.com/ngochung.nguyentran.5/"}>
									<Image alt="facebook" src="/facebook.svg" width={32} height={32} />
								</Link>
								<Link href={"https://www.linkedin.com/in/nekooitine/"}>
									<Image alt="linkedin" src="/linkedin.svg" width={32} height={32} />
								</Link>
								<Link href={"https://discordlookup.com/user/340461645732249610"}>
									<Image alt="discord" src="/discord.svg" width={32} height={32} />
								</Link>
							</div>
						</div>
					</div>
					<p className="text-main-gray font-normal ">© Copyright 2023. Made by NekooiTine</p>
				</div>
			</footer>
		</>
	);
}
