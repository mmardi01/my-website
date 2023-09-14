import React from 'react'
import SectionHeading from './SectionHeading'
import { projects } from '@/app/data'
import { type } from 'os'
import Image from 'next/image'


export default function Projects() {
  return (
    <section>
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

type ProjectProps = typeof projects[0];

function Project({
    projectName,
    description,
    tags,
    imageUrl
} : ProjectProps) {
    return(
        <article>
            <h2>{projectName}</h2>
            <p>{description}</p>
            <ul>
                {
                    tags.map((tag, index) =>(
                        <li key={index}>{tag}</li>
                    ))
                }
                <Image src={imageUrl} alt='Project I worked on '/>
            </ul>
        </article>
    )
}
