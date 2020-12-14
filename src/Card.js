import React from 'react';
function Card(props){
    return (
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="mypic" className="card_img"/>
                <div className="card_info">
                <spam className="card_category">{props.title}</spam>
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                    <button>Watch Here</button>
                </a>
                </div>
            </div>
        </div>
    );
}
export default Card;