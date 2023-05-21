import React, { useEffect, useState } from "react";
import {
    Chip,
} from "@mui/material";
import ViewTechStack from "./slide";

function ProjectCards() {
    const [data, setData] = useState([])
    const axios = require('axios');

    useEffect(() => {

        axios.get('http://localhost:8000/projects')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [])


    const url = `http://localhost:8000/projects/media/${data.image_path}`


    return (
        <>
            <div className="col text-black">
                <h1 className=" pl-8 pt-2 text-3xl">Projetos</h1>
                <h3 className="pl-8 pb-3 text-md">Estes são os projetos desenvolvidos aqui na ETS</h3>
                <div className=" text-black flex md:justify-center w-screen md:h-1/2 ">
                    <div className=" col px-0 py-8 md:carousel  md:py-2 md:px-8 space-x-4">
                        {data.map((project, index) => (
                            <div key={project.project_id} className="shadow-md flex">
                                <div className=" card card-side bg-base-200 shadow-xl rounded" >
                                    <figure><img src={`http://127.0.0.1:8000/projects/media/${project.image_path}`} className="w-80  h-full" alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-black" >{project.project_name}</h2>
                                        <p className="text-black text-justify">{project.description}</p>
                                        <h1 className="pb-2 font-bold">Equipe</h1>
                                        <div className="flex flex-wrap space-x-1 space-y-1">
                                            {project.students.split(";").map((tech, index) => (
                                                <Chip size="small" key={index} label={tech} />
                                            ))}
                                        </div>
                                        <div className="text-black text-justify">
                                            <ViewTechStack stack={project.techs} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCards;