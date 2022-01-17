import {React, useState, useEffect} from "react";
import {MdOutlineEdit} from 'react-icons/md'
import {RiDeleteBinFill} from 'react-icons/ri'
import {BsCheck2Circle} from 'react-icons/bs'
export const GroceryList = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [modal, setModal] = useState({type:'', msg:'', isModal:false});
    const [edit, setEdit] = useState({type:false, editingId:0});

    localStorage.setItem("list", JSON.stringify(list));
    let setLocalList = (list) => localStorage.setItem("list", JSON.stringify(list));
    let localList = JSON.parse(localStorage.getItem("list"));
    useEffect(() => {
        const input = document.querySelector(".input");
        input.focus();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!edit.type){
            setList([...list, {id: new Date().getTime(), item:value}])
            setLocalList(list)
            setModal({type:'success', msg:'Item Added', isModal:true})
            let timeout = setTimeout(() => setModal({type:'', msg:'', isModal:false}), 3000)
            clearTimeout(() => timeout)
        }
        else{
            setList(list.map((item) => {
                if (item.id === edit.editingId){
                    setEdit({type:false, editingId:0})
                    setModal({type:'success', msg:'Item Edited', isModal:true})
                    setTimeout(() => setModal({type:'', msg:'', isModal:false}), 3000)
                    return {...item, item:value}
                }
                return item
            }))
            setLocalList(list);
        }
    }

    const handleEdit = (editId) => {
        setEdit({type:true, editingId:editId})
        const newList = list.map((listItem) => {
            if (listItem.id === editId){
                setValue(listItem.item);
                return {...listItem, item:listItem.item}
            }
            return listItem
        })
        setList(newList);
        setLocalList(list);
    }
    const deleteItem = (id) => {
        const newList = list.filter((newItem) => newItem.id !== id)
        setModal({type:'danger', msg:'Item Deleted', isModal:true})
        let timeout = setTimeout(() => {
            setModal({type:'', msg:'', isModal:false})
        }, 3000)
        setList(newList);
        setLocalList(list);
        return clearTimeout(() => timeout)
    }
    const completeTask = (editId, e) => {
        e.currentTarget.parentElement.previousElementSibling.classList.add("task-completed");
    }
    useEffect(() => {
        setTimeout(3000)
    }, [modal])
    return <div className="container">
        <section className="section">
            <section className="header-section">
                {modal.isModal && <div className={`alert-${modal.type}`}>{modal.msg}</div>}
                <h3 className="heading">Grocery Bud</h3>
                <form className="form-control" onSubmit={handleSubmit}>
                    <input className="input" type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} placeholder="e.g. eggs" />
                    <button className="edit-btn btn">{edit.type?'Edit':'Submit'}</button>
                </form>
            </section>
            <section className="grocery-list">
                {localList.map((grocery) => {
                    const {item, id} = grocery;
                    return <article key={id} className="grocery">
                    <span className="item-name">{item}</span>
                    <div className="icons-container">
                        <BsCheck2Circle className="check-icon" onClick={(e) => completeTask(id, e)}/>
                        <MdOutlineEdit className="edit-icon" onClick={() => handleEdit(id)} />
                        <RiDeleteBinFill className="delete-icon" onClick={() => deleteItem(id)} />
                    </div>
                </article>
                })}
            </section>
            <section className="footer-section">
                {localList.length > 0 && <button className="clear-btn" onClick={() => {
                    setList([]);
                    setLocalList([]);
                    setModal({type:'danger', msg:'Items Cleared', isModal:true})
                    let timeout = setTimeout(() => {
                        setModal({type:'', msg:'', isModal:false})}, 3000)
                    return clearTimeout(() => timeout)
                    }}>Clear Items</button>}
            </section>
        </section>
    </div>
}