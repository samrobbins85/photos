import { getPage, getSectionPaths } from "../lib/api";
import CImage from "../components/cimage";
import Image from "next/image";
export default function Gallery({ pagedata }) {
	return (
		<>
			<div className="pt-6 container mx-auto">
				<h1 className="text-center text-4xl font-semibold">
					{pagedata.title}
				</h1>
				<div className="masonry pt-10">
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
