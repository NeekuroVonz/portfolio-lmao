"use client";

import Image from "next/image";

export default function Dots({ style }: { style: React.CSSProperties | undefined }) {
	const array = [...Array(5)];
	const img = <Image alt="dot" src="/main/dot.svg" width={4} height={4} />;
	return (
		<>
			<div className="dots z-10 absolute flex flex-col justify-between items-start flex-shrink-0" style={style}>
				{array.map((idx) => (
					<div className="flex justify-between items-start self-stretch" key={idx}>
						{array.map((idx) => img)}
					</div>
				))}
			</div>
		</>
	);
}
