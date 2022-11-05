import './searchbar.css'
export default function Searchbar({value, handleSearch, formSubmit}) {
    return (
        <div className="searchbar">
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearch} placeholder="Search..." value={value}/>
                <button>Read</button>
            </form>
        </div>
    )
}