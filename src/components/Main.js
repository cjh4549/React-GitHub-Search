
const Main = ({ repos, loading, error }) => {
    return(
        <main className='main'>
            {loading && <div><h2>Searching...</h2></div>}
            {error && <div><h2>Unexpected error occurred. Please try again.</h2></div>}
            <ul className='repo'>
                {repos.map( repo => {
                    return(
                        <li key={repo.id}>
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
        </main>
    )
}

export default Main;