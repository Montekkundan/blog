import './angrycheckbox.css'
import {useEffect, useState} from "react";

export default function AngryCheckbox() {
    const [checked, setChecked] = useState(false)
    const [count, setCount] = useState(1)
    const onChange = () => {
        if (checked) return
        setChecked(true)
    }
    useEffect(() => {
        const onComplete = () => {
            setChecked(false)
            setCount(count + 1)
        }
        const showTimeline = () => {
            setTimeout(function(){ onComplete() }, 1000);
        }
        if (checked) showTimeline()
    },[checked, count]);
    return (
        <>
        <div className="angry__checkbox">
            <label className="switch">
                <input type="checkbox" onChange={onChange} checked={checked}/>
                    <span className="slider round"></span>
            </label>
        </div>
            <div className={checked ? 'ball appear' : 'ball'} >

            </div>
        </>
    )
}