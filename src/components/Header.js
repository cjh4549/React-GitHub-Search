
const Header = ({ inputValue, setInputValue }) => {

    return(
        <form onSubmit={e => {
            e.preventDefault();
            setInputValue(e.target.elements.query.value.toLowerCase());
        }}>
            <input type="text" name='query' placeholder='Search for GitHub Repositories'/>
        </form>
    )
}

export default Header;