import React from 'react'

import { Link, animateScroll as scroll } from 'react-scroll'

const InternalLink = ({ name, section }) => {
    return (
        <>
            <Link
                to={section}
                smooth={true}
                duration={1000}
                isDynamic={true}
                offset={-110}
            >
                {name}
            </Link>
        </>
    );
}

export default InternalLink
