import { Fragment } from "react"
import "./App.css"
import Image from "./assets/react.svg"

const App = () => {
    return (
        <Fragment>
            <h1 className="title-1">Hello world by pon</h1>
            <img src={Image} alt="" />
        </Fragment>
    )
}
export default App
