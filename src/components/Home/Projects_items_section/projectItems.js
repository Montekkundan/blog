import './projectItems.css'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import MagicText from "../../Common/MagicText/magictext";
export default function ProjectItems() {
    useEffect(() => {
        const wrapper = document.getElementById("wrapper");
        let prev = 0;
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const uniqueRand = (min, max, prev) => {
            let next = prev;

            while(prev === next) next = rand(min, max);

            return next;
        }
        const timer = setInterval(() => {
            const combinations = [
                { configuration: 1, roundness: 1 },
                { configuration: 1, roundness: 2 },
                { configuration: 1, roundness: 4 },
                { configuration: 2, roundness: 2 },
                { configuration: 2, roundness: 3 },
                { configuration: 3, roundness: 3 },
                { configuration: 3, roundness: 5 }
            ];
            const index = uniqueRand(0, combinations.length - 1, prev),
                combination = combinations[index];
            wrapper.dataset.configuration = combination.configuration;
            wrapper.dataset.roundness = combination.roundness;

            prev = index;
        }, 3000);
        // clearing interval
        return () => clearInterval(timer);
    });
    return (
        <>
        <div className="wrapper">
            <div className="wrapper__heading">
                <MagicText word="My" magic="Latest Projects"/>
            </div>
            <div id="wrapper" data-configuration={Math.floor(Math.random() * 3) + 1} data-roundness={Math.floor(Math.random() * 4) + 1}>
            {/*    <div id="wrapper" data-configuration="1" data-roundness="4">*/}
                <Link className="wrapper__link shape" to={`/project/1`}>
                    <div></div>
                </Link>
                <Link className="wrapper__link shape" to={`/project/2`}>
                    <div></div>
                </Link>
                <Link className="wrapper__link shape" to={`/project/3`}>
                    <div></div>
                </Link>
                <Link className="wrapper__link shape" to={`/project/4`}>
                    <div></div>
                </Link>
                <Link className="wrapper__link shape" to={`/project/5`}>
                    <div></div>
                </Link>
                <Link className="wrapper__link shape" to={`/project/6`}>
                    <div></div>
                </Link>
                <Link className="wrapper__link shape" to={`/project/7`}>
                    <div></div>
                </Link>
            </div>
        </div>
        </>
    )
}