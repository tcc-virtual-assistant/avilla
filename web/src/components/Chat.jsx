import React from "react";

function Chat() {
    return(
        <>
        <div className="flex items-center justify-center flex-col mt-8">
            <div className="text-sm w-1/2 text-gray-300 mb-2 text-left">
                Sua pergunta:
            </div>
            <div className="w-1/2 text-center text-lg mb-12">
                Lorem ipsum dolor sit amet consectetur. Earum et voluptatibus amet cum hic eos, deserunt repellat voluptatem incidunt dolorem vel qui?
            </div>

            <div className="text-sm text-gray-300 mb-2 w-1/2 text-left">
                Sua resposta:
            </div>
            <div className="w-1/2 text-center text-lg">
                Lorem ipsum dolor sit amet consectetur. Earum et voluptatibus amet cum hic eos, deserunt repellat voluptatem incidunt dolorem vel qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat enim.
            </div>
        </div>
 
        </>
    )
}

export default Chat;