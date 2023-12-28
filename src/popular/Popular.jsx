import React from 'react'

import Popularitem from './Popularitem'
import Recent from '../recent/Recent'

const Popular = () => {
    return (
        <>

            <section className="py-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">

                            <Popularitem name="By Hanabi" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
                            <Popularitem name="By Hanabi" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
                            <Popularitem name="By Hanabi" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />

                        </div>
                        <div className="col-md-4">

                            <Recent/>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Popular