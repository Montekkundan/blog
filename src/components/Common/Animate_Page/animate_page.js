import {motion} from 'framer-motion'
export default function Animate_page({children}) {
    const animations = {
        initial: {opacity:0, x:100},
        animate: {opacity:1, x:0},
        exit: {opacity:0, x:-100},
    }
    return (
        <motion.div variants={animations} inital="animate" animate="animate" exit="exit" transition={{duration:1}}>
            {children}
        </motion.div>
    )
}