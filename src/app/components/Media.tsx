import Image from "next/image";
import Link from "next/link";

export default function Media() {
	return (
		<div className="media fixed top-0 inline-flex flex-col items-center gap-2 left-20">
			<Image className="max-h-40" alt="line" src="/line_10_stroke.svg" width={2} height={191} />
			<div className="social flex flex-col items-center gap-2">
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
	);
}
