import { createRef, useRef, useState } from "react";
import { useForm } from '../hooks/useForm';

export const FilterMedia = ({ onChangeFilter }) => {
    const [open, setOpen] = useState(false);

    const openInput = () => {
        setOpen(true)
    }
    
    const [filterBy, handleChange] = useForm(
        {
            term: '',
        },
        onChangeFilter
    );

    const { term } = filterBy
    return (
        <form>
            <section className="filter-media">
                {!open ?
                    <img onClick={openInput} src={require('../assets/img/icons/search.png')} loading="lazy"/>
                    : <input onChange={handleChange} value={term} type="text" name="term" id="term" />}
            </section>
        </form>
    );


}