import Head from "next/head";
import CImage from "../components/cimage";
import { getImage } from "../lib/api";

export default function IndexPage({ imagedata }) {
	const images = imagedata.data.imageCollection.items;
	return (
		<>
			<Head>
				<title>Photos</title>
				<meta name="Description" content="Photos taken by me" />
			</Head>
			<div className="pt-12">
				<h1 className="text-center text-5xl font-semibold">Photos</h1>
			</div>
			<div className="grid grid-cols-2 gap-x-2 px-4">
				{images.map((x) => (
					<CImage
						src={x.photo.url}
						height={x.photo.height}
						width={x.photo.width}
					/>
				))}
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const imagedata = await getImage();
	return {
		props: {
			imagedata,
		}, // will be passed to the page component as props
	};
}
