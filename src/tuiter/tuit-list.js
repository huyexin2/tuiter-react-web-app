import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk, deleteTuitThunk, updateTuitThunk} from "./services/tuits-thunks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faReply, faRetweet, faHeart, faArrowUpFromBracket, faXmark} from "@fortawesome/free-solid-svg-icons";


function TuitsList() {
    const  {homeTuits, loading}  = useSelector(state => state.homeTuits)
    const [likes, setLikes] = useState(homeTuits.likes);
    const [liked, setLiked] = useState(homeTuits.liked);
    const handleLikeClick = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    };
    const likeIcon = liked
        ? <FontAwesomeIcon color={"red"} onClick={handleLikeClick} icon={faHeart}/>
        : <FontAwesomeIcon onClick={handleLikeClick} icon={faHeart}/>;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <>
            <ul className="list-group">
                { loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    homeTuits.map(tuit =>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-1">
                                    <img className="rounded-circle" height={48} src={`${tuit.image}`}/>
                                </div>
                                <div className="col-11">
                                    <div className="clearfix">
                                        <p className="fw-bold float-start ">{tuit.topic}&nbsp;    </p>
                                        <FontAwesomeIcon className = "float-lg-start" icon={faCheckCircle} />
                                        <p className="text-muted float-lg-start">&nbsp;  {tuit.userName} - {tuit.time}</p>
                                        <FontAwesomeIcon className = "float-end" icon={faXmark}
                                                         onClick={() => deleteTuitHandler(tuit._id)}/>
                                    </div>

                                    <p>{tuit.tuit}</p>
                                    <div className="row">
                                        <div className="col-3">
                                            <FontAwesomeIcon className="float-start" icon={faReply} />
                                            <p className="float-start float-done">&nbsp;{tuit.replies}</p>
                                        </div>
                                        <div className="col-3">
                                            <FontAwesomeIcon className="float-start" icon={faRetweet} />
                                            <p className="float-start float-done">&nbsp;{tuit.retuits}</p>
                                        </div>
                                        <div className="col-3">
                                            {likeIcon}
                                            <p className="float-start float-done">&nbsp;{tuit.likes}</p>
                                        </div>
                                        <div className="col-3">
                                            <FontAwesomeIcon className="float-start" icon={faArrowUpFromBracket} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li> )
                }
            </ul>
        </>



    );
}
export default TuitsList;