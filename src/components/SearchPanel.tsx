import {Link} from "react-router-dom";
import {useState} from "react";

interface SearchType {
    searchItem: string | number
}

interface SearchPanelProps {
    placeholder: string,
    route: string
}
//TODO: переработать пропс роутов
const SearchPanel = (props: SearchPanelProps) => {
    const {placeholder, route} = props
    const initialState:SearchType = {searchItem: 0}

    const [searchingItem, setSearchingItem] = useState(initialState)

    const searchHandler = (searchElement:SearchType) => {
        setSearchingItem(searchElement)
    }

    return (
        <div className="search-player-container flex">
            <input type="text"
                   className="flex items-center pl-5 py-2 bg-[#202020] outline-none rounded-full"
                   placeholder={`${placeholder} (id)`}
                   onChange={e => searchHandler({searchItem: Number(e.currentTarget.value)})}/>
            <Link to={`/${route}?id=${searchingItem.searchItem}`}
                  className="bg-[#303030] p-3 justify-center items-center flex rounded-full ml-[-35px]">
                <img src="../../public/search-interface-symbol.png"
                     alt=""
                     className="w-[15px]"/>
            </Link>
        </div>
    );
};

export default SearchPanel;