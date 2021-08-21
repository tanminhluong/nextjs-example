import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src='/logo.png' width={128} height={77} />
                    </a>
                </Link>

            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    )
}

export default Navbar
