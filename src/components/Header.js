
const Header = ({ setInputValue }) => {

    return(
        <header className="header">
            {/* Added wrapper container for styling consistency */}
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