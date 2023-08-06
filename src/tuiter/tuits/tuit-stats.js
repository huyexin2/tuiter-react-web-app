import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {AiFillHeart, AiOutlineUpload} from "react-icons/ai";
import {FaRetweet} from 'react-icons/fa';
import {LiaCommentDotsSolid} from "react-icons/lia";
import "./tuit-item.css";
import {updateTuitThunk,} from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();

    return(
        <div className="row alignment">
            <div className="col-3">
                <LiaCommentDotsSolid/> {tuit.replies}
            </div>
            <div className="col-3">
                <FaRetweet/> {tuit.retuits}
            </div>
            <div className="col-3">
                <AiFillHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                />
                {tuit.likes}
            </div>
            <div className="col-3">
                <AiOutlineUpload/>
            </div>
        </div>
    );
};
export default TuitStats;