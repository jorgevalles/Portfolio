import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'

export default function ProjectsPage() {
    const projects = [
        {name: 'Organizador De Tareas', link: 'https://calendar-main.vercel.app/', description: 'Es una APP donde podras organizar todas tus tareas diarias y a futuro; Cuenta con un calendario actualizado y hora para cada evento Tambien cuenta con la funcion de editar cada evento asi mismo podras eliminar el evento si asi lo deseas ', videoLink: 'https://res.cloudinary.com/dlxrwojjq/video/upload/v1706645922/Organizador_de_Tareas_-_Google_Chrome_2024-01-07_19-38-57_xkg9r1.mp4'},
        {name: 'Pokemon', link: 'https://pokemon-snowy-gamma.vercel.app/', description: 'Una APP Para los amantes de Pokemon, muestra todos los personajes de la serie pokemon y una breve descripcion de cada personaje, tambien puesdes guardar tus personajes favoritos y eliminarlos si asi lo deseas', videoLink: 'https://res.cloudinary.com/dlxrwojjq/video/upload/v1706648598/Listado_de_Pok%C3%A9mons_-_Google_Chrome_2024-01-30_15-49-14_l8xbnz.mp4'},
        {name: 'NBA', link: 'https://national-basketball-association.vercel.app/', description: 'Aplicacion deportiva de Basquetbol de la NBA, podras encontrar todos tus equipos favoritos y en que division juegan, tambien muestra descripcion de los jugadores,asimismo, podras obtener los ultimos resultados de los juegos y diversos videos de jugadas de los mejores jugadores de la NBA', videoLink: 'https://res.cloudinary.com/dlxrwojjq/video/upload/v1706648787/React_App_-_Google_Chrome_2024-01-30_15-50-43_cwcat2.mp4'},
        {name: 'Tienda Virtual', link: 'https://tienda-virtual-seven.vercel.app/', description: 'Ecommerce de ropa para damas, caballeros y niños, muestra diferentes articulos y secciones donde podras escojer cualquier prenda segun su precio y disponibilidad, podras agregar o quitar de un carrito de compras y al finalizar muestra la cantidad de articulos a comprar y tu cuenta final para realizar la compra', videoLink: 'https://res.cloudinary.com/dlxrwojjq/video/upload/v1706649248/Teslo-Shop_-_Home_-_Google_Chrome_2024-01-30_16-10-55_z70zrg.mp4'},

    ]

  return (
   <main className='flex flex-col flex-1 bg-slate-100'>
    {projects.map((project, projectIndex) => {
        return (
            <ProjectCard key={projectIndex} project={project} index={projectIndex}/>
        )
    })}
   </main>
  )
}