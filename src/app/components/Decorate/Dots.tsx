"use client";

import Image from "next/image";
import { v4 } from "uuid";

export default function Dots({ style }: { style: React.CSSProperties | undefined }) {
	const array = [...Array(5)];
	return (
		<>
			<div className="dots z-10 absolute flex flex-col justify-between items-start flex-shrink-0" style={style}>
				{array.map(() => (
					<div className="flex justify-between items-start self-stretch" key={v4()}>
						{array.map(() => (
							<Image alt="dot" src="/main/dot.svg" width={4} height={4} key={v4()}/>
						))}
					</div>
				))}
			</div>
		</>
	);
}
