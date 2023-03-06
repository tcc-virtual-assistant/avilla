import React, { useEffect, useState } from "react";

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
            {/* {data.map((project) => (
                // <h1 className="" ></h1>
                <div className="flex">
                <div className="card h-96 w-96 card-side bg-base-100 shadow-xl" key={project.project_id}>
                    <figure><img src="/vercel.svg" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{project.project_name}</h2>
                        <p>{project.description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                
            </div>
            ))} */}

            <div className="carousel  p-6 space-x-4 ">

                {data.map((project) => (
                    // <h1 className="" ></h1>
                    <div key={project.project_id} className="flex">
                        <div className="card h-96 w-full card-side bg-base-100 shadow-xl rounded" >
                            <figure><img src={`http://127.0.0.1:8000/projects/media/${project.image_path}`}className="w-64 h-full" alt="Movie" /></figure>
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
                ))}

            </div>




        </>
    );
}

export default ProjectCards;