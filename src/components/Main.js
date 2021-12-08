
const Main = ({ repos, loading }) => {
    return(
        <main>
            {loading && <div>Loading...</div>}
            <ul>
                {repos.map( repo => {
                    return(
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank">{repo.name.toUpperCase()}</a>
                            <p>{repo.description}</p>
                            <ul>
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