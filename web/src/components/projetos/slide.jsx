import { Avatar, Box, Chip } from "@mui/material";
import deviconsList from "../../../assets/deviconsList.json";


export default function ViewTechStack({ stack }) {
    function renderLogo(tech) {
        const logoExistsOnFile = deviconsList

            .map((devicon) => devicon.name)
            .includes(tech);
        if (logoExistsOnFile) {
            return (
                <Avatar
                    src={deviconsList.find((devicon) => devicon.name == tech)?.svg}
                />
            );
        }
    }

    function renderColor(tech){
        const logoExistsOnFile = deviconsList

            .map((devicon) => devicon.name)
            .includes(tech);
        if (logoExistsOnFile) {
            return deviconsList.find((devicon) => devicon.color == tech)?.color
        }
    }

    if (stack == undefined || stack == "") return <></>;
    return (
        <Box className="col">
            <h1 className="font-bold">Tecnologias utilizadas</h1>
            <div className="flex flex-wrap space-x-1 space-y-1">
            {stack.split(";").map((tech, index) => (
                <div className=" rounded-2xl">
                    <Chip size="small" sx={{backgroundColor:renderColor(tech)}} key={index} label={tech} avatar={renderLogo(tech)}/>
                </div>
            ))}
            </div>
        </Box>
    );
}