import Link from "next/link";
import Image from "next/image";

const media = [
	{
		id: 1,
		name: "github",
		src: "/github.svg",
        href: "https://github.com/NeekuroVonz",
	},
	{
		id: 2,
		name: "facebook",
		src: "/facebook.svg",
        href: "https://www.facebook.com/ngochung.nguyentran.5/",
	},
	{
		id: 3,
		name: "linkedin",
		src: "/linkedin.svg",
        href: "https://www.linkedin.com/in/nekooitine/",
	},
	{
		id: 4,
		name: "discord",
		src: "/discord.svg",
        href: "https://discordlookup.com/user/340461645732249610",
	},
];

export default function SocialMedia() {
	return (
		<>
            {media.map((val) => (
                <Link key={val.id} href={val.href} >
                    <Image alt={val.name} src={val.src} width={32} height={32} />
                </Link>
            ))}
		</>
	);
}
