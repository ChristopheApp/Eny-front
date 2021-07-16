import React from 'react'

const IcoInfo = ({ title, param, uppercase, suptext, br }) => {
    return (
        <>
            <div className={"bg-blanco border-1 p-1"}>
                <p className={"leading-5 font-medium"} >
                    {title}
                    {br && <br />}
                    <span className={(uppercase && "uppercase")+"  font-light"} >{param}</span>
                </p>
                {suptext && <span className={"font-normal text-le-sang"}>{suptext}</span>}
            </div>
        </>
    )
}

export default IcoInfo
