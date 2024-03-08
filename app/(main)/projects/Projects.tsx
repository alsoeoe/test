import {ProjectCard} from '~/app/(main)/projects/ProjectCard'
import {getSettings} from '~/sanity/queries'

export async function Projects() {
    const projects = (await getSettings()).projects || []

    // const settings = await getSettings();
    // console.log(settings); // 这将打印 settings 的值
    // const projects = settings && settings.projects ? settings.projects : [];
    return (
        <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
            {projects.map((project) => (
                <ProjectCard project={project} key={project._id}/>
            ))}
        </ul>
    )
}
