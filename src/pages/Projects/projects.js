import {motion} from "framer-motion";

export default function Projects() {
    const animations = {
        initial: {opacity:0, x:1000},
        animate: {opacity:1, x:0},
        exit: {opacity:0},
    }
    return (
        <motion.div variants={animations} initial="initial" animate="animate" transisition={{duration:1}}>
            <h1>Projects</h1>
        </motion.div>
    )
}