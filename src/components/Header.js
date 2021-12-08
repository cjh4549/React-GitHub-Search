
const Header = ({ setInputValue, loading }) => {

    return(
        <header className="header">
            <div className="wrapper">
                <form className='form' onSubmit={e => {
                    e.preventDefault();
                    setInputValue(e.target.elements.query.value.toLowerCase());
                }}>
                    <input className='form__input' type="text" name='query' placeholder='Search for GitHub Repositories'/>
                </form>
            </div>
        </header>
    )

    
}

export default Header;