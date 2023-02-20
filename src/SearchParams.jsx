const SearchParmas = () => {
    const location =  "Seattle, WA";
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="location"  />
                </label>
            </form>
        </div>
    )  
}