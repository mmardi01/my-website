import React from 'react'
import SectionHeading from './SectionHeading'
import { projects } from '@/app/data'
import Project from './Project'



export default function Projects () {
   


    return (
    <section id='projects' className='scroll-mt-[8rem]'>
        <SectionHeading>
           My  Projects
        </SectionHeading>
        <div>
            {
            projects.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))
            }
        </div>
    </section>
  )
}

