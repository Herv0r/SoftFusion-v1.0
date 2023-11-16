import { android } from '../assets'
import { styles } from "../styles";

const features = [
  {
    name: 'Push to deploy.',
    description:
      ' En nuestro futuro, vemos la colaboración como clave, forjando asociaciones estratégicas sólidas que trasciendan expectativas y construyan relaciones a largo plazo. ',
  },
  {
    name: 'SSL certificates.',
    description: 'Anticipamos y abrazamos la evolución tecnológica, aspirando a ser pioneros en adaptabilidad e implementar nuevas tendencias para ofrecer soluciones siempre un paso adelante. ',
  },
  {
    name: 'Database backups.',
    description: 'La visión de SoftFusion es ser líderes en el desarrollo de software de calidad, destacándonos por la excelencia en cada línea de código. ',
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <p className={styles.sectionHeadText}>Visión a Futuro</p>
              <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-center mt-10 text-sm leading-8 text-red-200">
                En el horizonte de 5 años, forjaremos una nueva visión, con la certeza de haber conquistado las metas propuestas.
              </p>
            </div>
          </div>
          <img
            src= {android}
            alt="Product screenshot"
            className="w-[400px] rounded-2xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
