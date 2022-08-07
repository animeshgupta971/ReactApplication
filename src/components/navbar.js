import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="">
                    <div className="">
                        <ul className="nav--wrapper">
                            <li className="nav--item">
                                <a className="nav--link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav--item">
                                <a className="nav--link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar