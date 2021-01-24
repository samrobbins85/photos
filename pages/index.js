import Head from "next/head";
import Link from "next/link";
import { getImage, getSections } from "../lib/api";
// import Image from "next/image";
import CImage from "../components/cimage";
export default function IndexPage({ imagedata, sections }) {
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
			<div className="grid grid-cols-4 px-8 container mx-auto gap-4">
				{sections.map((x) => (
					<Link href={`/${x.title.toLowerCase()}`}>
						<a>
							<div className="border rounded">
								<div className="flex justify-center">
									<div className="w-full h-40 relative">
										<CImage
											src={x.coverImage.url}
											objectFit="cover"
											layout="fill"
										/>
									</div>
								</div>
								<div className="h-12 flex items-center justify-center">
									<p className="text-2xl font-semibold text-center">
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
	const imagedata = await getImage();
	const sections = await getSections();
	return {
		props: {
			imagedata,
			sections,
		},
	};
}
