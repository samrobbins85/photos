import { getPage, getSectionPaths } from "../lib/api";
import CImage from "../components/cimage";
import Head from "next/head";
import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
	buttons: {
		showAutoplayButton: false,
		showDownloadButton: false,
		showFullscreenButton: false,
		showThumbnailsButton: false,
	},
};
export default function Gallery({ pagedata }) {
	return (
		<>
			<Head>
				<title>{pagedata.title} - Sam Robbins Photography</title>
			</Head>
			<div className="pt-6 pl-6 sm:pt-10 sm:pl-10 text-gray-600 hover:text-gray-700">
				<Link href="/">
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-8 w-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</a>
				</Link>
			</div>
			<div className="pt-2 container mx-auto px-4">
				<h1 className="text-center text-4xl font-semibold">
					{pagedata.title}
				</h1>
				<div className="cols-1 sm:cols-2 md:cols-3 lg:cols-4 pt-10">
					<SRLWrapper options={options}>
						{pagedata.imagesCollection.items.map((x) => (
							<a href={x.url}>
								<div className="overflow-hidden mb-8 rounded-lg">
									<CImage
										src={x.url}
										width={x.width}
										height={x.height}
										priority={true}
										className="rounded-lg overflow-hidden mb-8 pb-0"
									/>
								</div>
							</a>
						))}
					</SRLWrapper>
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
