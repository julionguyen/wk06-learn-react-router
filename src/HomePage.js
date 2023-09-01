import { Link } from "react-router-dom"

export default function HomePage() {
    return (
      <div>
        <h1>HomePage</h1>
        <p>This is the home page!</p>
        <Link to='/about'>Another way to go to About</Link>
      </div>
    )
  }