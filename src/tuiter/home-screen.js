import React from "react";
import TuitsList from "./tuit-list";
import WhatsHappening from "./whats-happening";

function HomeScreen() {

    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}
export default HomeScreen;