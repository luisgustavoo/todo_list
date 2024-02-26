import { ChangeEvent, MouseEvent } from "react";


interface Props {
    filter: string,
    setFilter: (filter: string) => void,
    setSort: (sort: string) => void
}


const Filter = (props: Props) => {

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setFilter(e.target.value);
    }

    const handleClickAsc = (_: MouseEvent) => {
        props.setSort("Asc");
    }


    const handleClickDes = (_: MouseEvent) => {
        props.setSort("Desc");
    }

    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status</p>
                    <select value={props.filter} onChange={handleOnChange}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética</p>
                    <button className="buttonAsc" onClick={handleClickAsc}>Asc</button>
                    <button onClick={handleClickDes}>Desc</button>
                </div>
            </div>

        </div>
    );
};

export default Filter;