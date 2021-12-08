
const Header = ({ setInputValue, loading }) => {

    return(
        <form onSubmit={e => {
            e.preventDefault();
            setInputValue(e.target.elements.query.value.toLowerCase());
        }}>
            <input type="text" name='query' placeholder='Search for GitHub Repositories'/>
            {/* {loading && <div></div>} */}
        </form>
    )

    
}

export default Header;