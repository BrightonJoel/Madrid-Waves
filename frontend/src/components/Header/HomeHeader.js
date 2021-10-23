import React from "react"

// styles
import { MainDiv } from "./HomeHeaderStyles"
import { Item1, Item2, Item3 } from "./HomeHeaderStyles"
export default function HomeHeader() {
    return (
        <MainDiv>
            <div>
                    <Item1><div>1</div></Item1>
                    <Item2><div>2</div></Item2>
                    <Item3><div>3</div></Item3>
                
            </div>
        </MainDiv>

    )
}
