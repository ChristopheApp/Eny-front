import React, { useRef } from 'react'

const IcoInfo = ({ title, param, uppercase, suptext, br, last }) => {



    return (
        <>
            <div className={"p-2 mx-4 border-allu hover:bg-bonne-mere hover:bg-opacity-20 " + (last ? "border-0" : "border-b-2")}>
                <p className={"leading-5 font-medium truncate"} >
                    {title}
                    {br && <br />}
                    <span
                        className={(uppercase && "uppercase") + " font-light"}
                    >
                        {param}
                    </span>
                </p>
                {suptext && <span className={"font-normal text-le-sang"}>{suptext}</span>}
            </div>
        </>
    )
}

export default IcoInfo
