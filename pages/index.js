import Head from "next/head";
import Link from "next/link";
import { getSections } from "../lib/api";
// import Image from "next/image";
import CImage from "../components/cimage";
export default function IndexPage({ sections }) {
	return (
		<>
			<Head>
				<title>Photos</title>
				<meta name="Description" content="Photos taken by me" />
			</Head>
			<div className="pt-12">
				<h1 className="text-center text-5xl font-semibold">Photos</h1>
			</div>
			<div className="grid grid-cols-4 px-8 container mx-auto gap-4 pt-10">
				{sections.map((x) => (
					<Link href={`/${x.slug}`}>
						<a>
							<div className="flex justify-center">
								<div className="w-full h-56 relative">
									<CImage
										src={x.coverImage.url}
										objectFit="cover"
										layout="fill"
										className="rounded-lg"
									/>
									<p className="absolute bottom-4 left-4 text-white text-4xl font-bold">
										{x.title}
									</p>
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const sections = await getSections();
	return {
		props: {
			sections,
		},
	};
}
