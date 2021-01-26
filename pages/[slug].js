import { getPage, getSectionPaths } from "../lib/api";
import CImage from "../components/cimage";
import Head from "next/head";
import Link from "next/link";
export default function Gallery({ pagedata }) {
	return (
		<>
			<Head>
				<title>{pagedata.title} - Sam Robbins Photography</title>
			</Head>
			<div className="pt-10 pl-10 text-gray-600 hover:text-gray-700">
				<Link href="/">
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6 inline-block mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
						<span className="text-lg">Home</span>
					</a>
				</Link>
			</div>
			<div className="pt-2 container mx-auto px-4">
				<h1 className="text-center text-4xl font-semibold">
					{pagedata.title}
				</h1>
				<div className="cols-1 sm:cols-2 md:cols-3 lg:cols-4 pt-10">
					{pagedata.imagesCollection.items.map((x) => (
						<div className="overflow-hidden mb-8 rounded-lg">
							<CImage
								src={x.url}
								width={x.width}
								height={x.height}
								className="rounded-lg overflow-hidden mb-8 pb-0"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export async function getStaticProps({ params }) {
	const pagedata = await getPage(params.slug);
	return {
		props: {
			pagedata,
		},
	};
}

export async function getStaticPaths() {
	const paths = await getSectionPaths();
	return {
		paths: paths.map((slug) => ({
			params: { slug: slug.slug },
		})),
		fallback: false, // See the "fallback" section below
	};
}
