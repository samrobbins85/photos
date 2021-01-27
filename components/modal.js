import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
export default function Modal({ selectedId, setSelectedId }) {
	const node = useRef();
	const handleClickOutside = (e) => {
		console.log(e);
		if (selectedId) {
			if (node.current.contains(e.target)) {
				return;
			}
			setSelectedId(null);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
	return (
		<motion.div
			className="z-10 fixed pt-20 left-0 top-0 w-full h-full overflow-auto"
			layoutId={selectedId}
		>
			<motion.img
				className="w-2/3 z-10 m-auto text-center"
				src={selectedId}
				ref={node}
			/>
		</motion.div>
	);
}
