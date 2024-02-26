import { ChangeEvent } from "react";


interface Props {
    search: string,
    setSearch: (text: string) => void,
}


const Search = (props: Props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSearch(e.target.value);
    }

    return (
        <div className="search">
            <h2>Pesquisar:</h2>
            <input type="text" value={props.search} onChange={handleChange} placeholder="Digite para pesquisar" />
        </div>
    );
};

export default Search;