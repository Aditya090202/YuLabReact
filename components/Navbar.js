import navstyles from '../styles/NavBar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div className={navstyles.Navbar}>
                <div className={navstyles.logoContainer}>
                    <a href='https://www.buffalo.edu/' className={navstyles.logoA}>
                        <img src={"/ub.svg"} alt="Logo" className={navstyles.logo} />
                    </a>
                    <h3 className={navstyles.logoText}>Laboratory of Michael.C Yu</h3>
                </div>
                <nav>
                    <ul className={navstyles.navRoutes}>
                        <li>
                            <Link className={navstyles.LinkItem} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={navstyles.LinkItem} href="/publications">Publications</Link>
                        </li>
                        <li>
                            <Link className={navstyles.LinkItem} href="/posts/first-post">Lab Members</Link>
                        </li>
                        <li>
                            <Link className={navstyles.LinkItem} href="/posts/first-post">Research</Link>
                        </li>
                        <li>
                            <Link className={navstyles.LinkItem} href="/posts/first-post">About</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Navbar;