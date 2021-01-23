import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};
export default function CImage(props) {
	return <Image {...props} loader={myLoader} />;
}
