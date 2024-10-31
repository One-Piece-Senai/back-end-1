import { MiniStyle } from "./mini-style";

export default function MiniCard({title, num}){
    return(
        <>
            <MiniStyle className="mini-card">
                  <h1>{title}</h1>
                  <h2>{num}</h2>
            </MiniStyle>
        </>
    )
}