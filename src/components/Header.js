
const Header = ({ setInputValue, loading }) => {

    return(
        <header className="header">
            <form className='form' onSubmit={e => {
                e.preventDefault();
                setInputValue(e.target.elements.query.value.toLowerCase());
            }}>
                <input className='form__input' type="text" name='query' placeholder='Search for GitHub Repositories'/>
            </form>
        </header>
    )

    
}

export default Header;