import Link from "next/link";

type Props = {
	url: string;
	color: "pink" | "gray";
	name: string;
}

export default function Button({ url, color, name }: Props) {
	return (
		<Link href={url}>
			<button type="button" className={`${color == "pink" ? "border-main-pink hover:bg-primary-hover" : "border-main-gray hover:bg-secondary-hover"} inline-flex items-start py-2 px-4 border-solid border gap-main-gap transition-colors duration-300`}>{name}</button>
		</Link>
	);
}
