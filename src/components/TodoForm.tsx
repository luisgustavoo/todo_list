import { ChangeEvent, FormEvent, useState } from "react";


interface Props {
    addTodo: (description: string, category: string) => void,
}

const TodoForm = (props: Props) => {

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (description == null || category == null) {
            return;
        }
        props.addTodo(description, category);
        setDescription("");
        setCategory("");
    }

    const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }


    const handleOnChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }



    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input value={description} type="text" placeholder="Digite o descrição" onChange={handleOnChangeInput} />
                <select value={category} onChange={handleOnChangeSelect}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">
                    Criar tarefa
                </button>
            </form>
        </div>
    );
};

export default TodoForm;