import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
	return `${src}?fm=webp`;
};
export default function CImage(props) {
	return <Image {...props} loader={myLoader} />;
}
