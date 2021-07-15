import React from 'react'
import Title from '../Title'
import styles from '../../styles/Roadmap.module.css'
import Image from 'next/image'
// import Timeline from '../Timeline'

const Roadmap = () => {
    return (
        <>
            {/* Roadmap */}
            <section id={"roadmap-key"} className={styles.roadmapEny}>
                <Title title="Roadmap" sub="Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap" />
                <div className={`${styles["timeline-container"]} flex justify-center`} >
                <Image className={"logo-nav"} src={"/img/timeline.svg"} alt="ENY logo" width={750} height={150} />

                    {/* <Timeline /> */}
                </div>
            </section>
        </>
    );
}

export default Roadmap