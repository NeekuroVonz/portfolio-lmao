'use client';

import Image from "next/image";

export default function Dots() {
	const array = [...Array(5)];
	const img = <Image className="" alt="dot" src="/main/dot.svg" width={4} height={4} />;
	return (
		<>
			{array.map((idx) => (
				<div className="flex justify-between items-start self-stretch" key={idx}>{array.map((idx) => img)}</div>
			))}
		</>
	);
}
