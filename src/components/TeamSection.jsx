import { lucas, emir, alvaro, benja, brito, rafa, roberto } from "../assets"

const people = [
  {
    name: 'Roberto Elias',
    role: 'Founder / Systems Engineer',
    imageUrl: roberto,
  },
  {
    name: 'Benjamin Orellana',
    role: 'Founder / CEO',
    imageUrl: benja,
  },
  {
    name: 'Lucas Albornoz',
    role: 'FullStack Developer / Python Developer / Designer',
    imageUrl: lucas,
  },
  {
    name: 'Emir Segovia',
    role: 'FullStack Developer / QA Automation',
    imageUrl: emir,
  },
  {
    name: 'Lucas Brito',
    role: 'Backend Developer / .Net Developer',
    imageUrl: brito,
  },
  {
    name: 'Alvaro Aguilar',
    role: '.Net Developer',
    imageUrl: alvaro,
  },
  {
    name: 'Rafael Peralta',
    role: 'Frontend Developer / Java Developer',
    imageUrl: rafa,
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-primary py-24 sm:py-32" id="team">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nuestro equipo</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Descubra quiénes son las personas detrás de nuestra misión y conozca cómo su experiencia y habilidades se combinan para hacer de Softfusion un lugar exepcional para trabajar y colaborar.
          </p>
        </div>
        <ul role="list" className="pl-28 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-gray-500 ">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
