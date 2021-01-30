import Head from "next/head";
import Link from "next/link";
import { getSections } from "../lib/api";
import CImage from "../components/cimage";
export default function IndexPage({ sections }) {
	return (
		<>
			<Head>
				<title>Photos</title>
				<meta name="Description" content="Photos taken by me" />
			</Head>
			<div className="px-2 pb-2">
				<div className="pt-12">
					<h1 className="text-center text-5xl font-semibold">
						Photos
					</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 container mx-auto gap-4 pt-10">
					{sections.map((x) => (
						<Link href={`/${x.slug}`} key={x.title}>
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
			</div>
		</>
	);
}

export async function getStaticProps() {
	const sections = await getSections();
	return {
		props: {
			sections,
		},
	};
}
