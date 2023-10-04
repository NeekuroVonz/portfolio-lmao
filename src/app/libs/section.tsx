import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<p
			className="font-normal text-main-gray"
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				lineHeight: "26px",
			}}>
			{children}
		</p>
	);
}
