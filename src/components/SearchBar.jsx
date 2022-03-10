function SearchBar({searchQuery, setSearchQuery, setSearchResults}) {

    const fetchData = async (searchQuery) => {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`);
        const data = await response.json();
    
        // console.log(data.query.search);

        data.query.search && setSearchResults(data.query.search);
      }

    return (
    <>
        <input onChange={(e) => setSearchQuery(e.target.value)} type="search" />
        <button onClick={() => fetchData(searchQuery)}>Search</button>
    </>
    );
}

export default SearchBar;