import Typed from "typed.js";
import {useEffect, useRef} from "react";

export default function Type({children}) {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: children,
            typeSpeed: 50,
            backSpeed: 70,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="wrap">

            <div className="type-wrap">
                <span ref={el} />
            </div>

        </div>
    );
}
