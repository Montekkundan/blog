import {motion} from "framer-motion";
import './button.css'
import {useState} from "react";
import Modal from "../Modal/modal";
export default function Button({children}) {
    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
    return (
        <div>
        <motion.button className="save-button" whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={() => (modalOpen ? open(): close())}
        >
            {children}
        </motion.button>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
        </div>
    )
}