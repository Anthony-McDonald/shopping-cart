import '../css/MainArea.css'
import { Link } from 'react-router-dom'

export default function MainArea() {
    return (
        <Link to="./games">
        <div className="main-area">
        <h1 className="hype-text pixelify-sans">GET READY TO ENTER THE GAME</h1>
        {/* <img className='white controller-svg' src="src/assets/svgs/controller.svg" alt="controller" /> */}
        <div className="open">
            <h3 className="pixelify-sans open-text">
                OPEN
            </h3>
        </div>
        </div>
        </Link>

    )
}