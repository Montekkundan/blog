import ReactPlayer from "react-player"
export default function Youtube_embed({url}) {
    return (
        <div>
            <ReactPlayer
                url={url}
            />
        </div>
    )
}