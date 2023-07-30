import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faFileImage, faChartSimple, faFaceSmile, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {createTuit} from "./reducers/home-tuits-reducer";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
        setWhatsHappening("")
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s176-c-k-c0x00ffffff-no-rj" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)} >
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <FontAwesomeIcon  icon={faImage}/>&nbsp;&nbsp;
                        <FontAwesomeIcon  icon={faFileImage} />&nbsp;&nbsp;
                        <FontAwesomeIcon  icon={faChartSimple} />&nbsp;&nbsp;
                        <FontAwesomeIcon  icon={faFaceSmile} />&nbsp;&nbsp;
                        <FontAwesomeIcon  icon={faLocationDot} />&nbsp;&nbsp;

                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;