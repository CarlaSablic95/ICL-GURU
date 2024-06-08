import { Search } from "./Input";
import ButtonModal from "../Button/ButtonModal";

const SearchForm = () => {


    return (
        <form className="d-flex justify-content-end" role="search">
            <Search type="search" placeholder="Find patients by name or surname" aria-label="Search" onChange />
            <ButtonModal dataBsTarget="#modalForm" title="Add patients" icon="./icons/add-user.svg" />
        </form>
    )
}

export default SearchForm;