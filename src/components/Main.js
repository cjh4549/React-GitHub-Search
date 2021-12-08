
const Main = ({ repos, loading, error }) => {
    return(
        <main className='main'>
            <div className="wrapper">
                {/* Passed loading and error states to trigger different renderings based on conditions of the states */}
                {loading && <div><h2 className="loading">Searching...</h2></div>}
                {error && <div><h2 className="loading">Unexpected error occurred. Please try again.</h2></div>}

                {/* Mapped through the repo array to display the search results */}
                <ul className='repo'>
                    {repos.map( repo => {
                        return(
                            <li className='individualRepo' key={repo.id}>
                                <a href={repo.html_url} target="_blank">{repo.name.toUpperCase()}</a>
                                <p>{repo.description}</p>
                                <ul className='repo__lists'>
                                    <li>Primary Language: {repo.language}</li>
                                    <li>Stars: {repo.stargazers_count}</li>
                                    <li>Forks: {repo.forks_count}</li>
                                    <li>Visibility: {repo.visibility}</li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default Main;