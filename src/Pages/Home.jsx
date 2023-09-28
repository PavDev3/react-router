import { Link } from '../Link'

export default function HomePage() {
    return (
        <>
            <h1>HomePage</h1>
            <p>This is the home page</p>
            <Link to="/about">About</Link>
        </>
    )
  }