import React from 'react'
const Loader = () => {


    return (
        <>
            <div className={"w-full h-full bg-OM bg-opacity-50 loader absolute inset-0 flex flex-col items-center justify-center"}>
                <h2>LOADER</h2>
                
            </div>
            <style jsx>
                {`
                .loader{
                    z-index: 150;
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(10px);
                    z-index: 3000;
                }
            `}
            </style>
        </>
    )
}

export default Loader
