import './Styles/App.css'

export default function Header(){
    return(
        <header className="App-header">
        <h1>
          Laura Smith
        </h1>
        <p>
          Frontend Developer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LauraSmith.website
        </a>
      </header>
    )
}