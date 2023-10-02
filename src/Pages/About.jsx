import { Link } from '../Link'

export default function AboutPage() {
    return (
        <>
            <div>
            <h1>AboutPage</h1>
            <img src="https://pbs.twimg.com/profile_images/1646519923940929541/wmm-G7EG_400x400.jpg" alt='Perfil foto' />
            <p>Este apartado es sobre mi</p>
            </div>
            <Link to="/">Home</Link>
        </>
    )
  }