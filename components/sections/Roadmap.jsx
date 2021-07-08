import React from 'react'
import Title from '../Title'
import styles from '../../styles/Roadmap.module.css'
// import Timeline from '../Timeline'

const Roadmap = () => {
    return (
        <>
            {/* Roadmap */}
            <section id={"roadmap-key"} className={styles.roadmapEny}>
                <Title title="Roadmap" sub="Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap" />
                <div className={styles["timeline-container"]} >
                    {/* <Timeline /> */}
                </div>
            </section>
        </>
    );
}

export default Roadmap