const Filter = ({ countryFilter, onSearch }) => {



    return (
        <>
          Find countries:  <input value={countryFilter} onChange={onSearch} />
        </>
    )
}



export default Filter