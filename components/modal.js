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
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="z-10 fixed pt-20 left-0 top-0 w-full h-full overflow-auto bg-black-opaque"
		>
			<motion.img
				layoutId={selectedId}
				className="max-w-2/3 max-h-3/4 z-10 m-auto text-center"
				src={selectedId}
				ref={node}
			/>
		</motion.div>
	);
}
