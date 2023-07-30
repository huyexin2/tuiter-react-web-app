import React from "react";
import {useSelector} from "react-redux";

const TuitSummaryList = () => {
    const { tuits } = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-10">
                                <div>{tuit.userName} . {tuit.time}</div>
                                <div className="fw-bolder">{tuit.topic}</div>
                                <div>{tuit.title}</div>
                            </div>
                            <div className="col-2">
                                <img width={70} className="float-end rounded-3" src={`${tuit.image}`}/>
                            </div>
                        </div>
                    </li> )
            }
        </ul>
    );
};
export default TuitSummaryList;