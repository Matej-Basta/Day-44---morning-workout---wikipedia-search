function SearchResult({searchResults}) {
    return (
        <>
            {searchResults !== [] ?
            (searchResults.map((result, index) => (
              <h4 key={index}>{result.title}</h4>
            ))) :
            null
            }
        </>   
    );
}

export default SearchResult;