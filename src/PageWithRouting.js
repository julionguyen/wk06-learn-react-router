import HomePage from "./HomePage"
import About from "./About"
import { useEffect, useState } from "react"

export default function PageWithRouting(props) {
    const [page, setPage] = useState(window.location.pathname)

    const goTo = urlPath => {
        window.history.pushState('', '', urlPath)
        setPage(urlPath)
    }

    useEffect(() => {
      const handleHistoryChange = (event) => {
        setPage(window.location.pathname)
      }
      window.addEventListener('popstate', handleHistoryChange)
    })
    let pageContent = ''
    if (page === '/') {
        pageContent = <HomePage />
    } else if (page === '/about') {
        pageContent = <About />
    }

    return (
      <div>
        <nav>
            <span onClick={()=> goTo("/")}>Home </span>
            <span onClick={()=> goTo("/about")}>About </span>
        </nav>
        <p>Current page URL: {page}</p>
        {pageContent}
      </div>
    )
  }