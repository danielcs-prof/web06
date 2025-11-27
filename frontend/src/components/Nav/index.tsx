import { Link } from "react-router-dom"


export const Nav = () => {
    return (
        <>
            <div className="d-flex justify-content-center bg-dark">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/usuario">Usuario</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}