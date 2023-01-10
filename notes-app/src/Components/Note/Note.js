import React from "react";
import deleteIcon from "../../assets/delete.png"
import "./Note.css"

let timer= 500,
    timeout;
const formatDate = (value) => {
    if(!value) return "";
    const month = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    const date = new Date(value);

    let hrs = date.getHours();
    let isPm = (hrs>=12?"PM":"AM");
    hrs = hrs>0 ? hrs : "12";
    hrs = hrs > 12? 24-hrs : hrs;

    let min = date.getMinutes();
    min = min<10?"0"+min :min;

    let day = date.getDate();
    const monthName = month[date.getMonth()];

    return `${hrs}:${min} ${isPm} ${day} ${month}`;
}

const debounce = (fn) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn,timer);
}

function Note(props) {
    const updateText = (text,id) => {
        debounce(()=> props.updatetext(text,id))
    }
    return (
        <div className="note">
            <textarea className="note_text" />
            <p>4:10PM 10 Jan 2023</p>
        </div>
    );
}
export default Note;