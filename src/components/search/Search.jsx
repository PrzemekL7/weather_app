import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {GEO_API_URL, options} from "../../constants/api";

function Search({onSearchChange}) {
    const [search, setSearch] = useState(null)

    function loadOptions(inputValue) {
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, options)
            .then(response => response.json())
            .then(response => ({
                    options: response.data.map((city) => ({
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    ))
                }
            ))
            .catch(err => console.error(err));
    }

    function handleOnChange(searchData) {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            loadOptions={loadOptions}
            onChange={handleOnChange}
            value={search}
        />
    );
}

export default Search;