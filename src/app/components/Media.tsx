import Image from "next/image";
import SocialMedia from "./SocialMedia/SocialMedia";

export default function Media() {
	return (
		<div className="media fixed top-0 inline-flex flex-col items-center gap-2 left-20">
			<Image className="max-h-40" alt="line" src="/line_10_stroke.svg" width={2} height={191} />
			<div className="social flex flex-col items-center gap-2">
				<SocialMedia />
			</div>
		</div>
	);
}
