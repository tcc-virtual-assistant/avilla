import React, { useEffect, useState } from "react";
import Popup from "./popupCard";

function ProjectCards() {
    const [data, setData] = useState([])
    const axios = require('axios');

    useEffect(() => {

        axios.get('http://127.0.0.1:8000/projects')
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
                console.error(error);
            })

    }, [])

    const url = `http://127.0.0.1:8000/projects/media/${data.image_path}`



    return (
        <>
       
            <div className="  flex md:justify-center md:w-screen md:h-96 ">

                <div className="carousel  md:py-2 md:px-16 space-x-4 h-full w-3/4">

                    {data.map((project) => (
                        // <h1 className="" ></h1>
                        <button  className="md:w-full">
                        <div key={project.project_id} className="flex h-full  ">
                            <div className="card  w-full card-side bg-base-100 shadow-xl rounded" >
                                <figure><img src={`http://127.0.0.1:8000/projects/media/${project.image_path}`} className="w-64 h-full" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title" >{project.project_name}</h2>
                                    <p>{project.description}</p>
                                    <div className="card-actions flex flex-row justify-end">
                                        <div className="badge rounded-md badge-warning">Python</div>
                                        <div className="badge rounded-md badge-">Java</div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        </button>
                    ))}

                </div>


            </div>
            

        </>
    );
}

export default ProjectCards;