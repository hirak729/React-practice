import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hirak729')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);
    return(
        <>
            <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl">
            Name: {data.name}
            <br/>
            Github Followers: {data.followers}

            <img className="" src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}