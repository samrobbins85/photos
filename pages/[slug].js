import { getImage, getSections, getSectionPaths } from "../lib/api";

export default function Gallery() {
	return <p>Hello</p>;
}

export async function getStaticProps(context) {
	const imagedata = await getImage();
	const sections = await getSections();
	return {
		props: {
			imagedata,
			sections,
		},
	};
}

export async function getStaticPaths() {
	const paths = await getSectionPaths();
	return {
		paths: paths.map((slug) => ({
			params: { slug: slug.title.toLowerCase() },
		})),
		fallback: false, // See the "fallback" section below
	};
}
