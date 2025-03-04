import { Link } from "react-router-dom";
import { Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Asistencia</h3>
            <ul className="space-y-2">
              <li><Link href="#">Centro de ayuda</Link></li>
              <li><Link href="#">SelfPoint</Link></li>
              <li><Link href="#">Antidiscriminación</Link></li>
              <li><Link href="#">Opciones de cancelación</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Modo anfitrión</h3>
            <ul className="space-y-2">
              <li><Link href="#">Pon tu espacio en Urban Point</Link></li>
              <li><Link href="#">SelfPoint para arrendadores</Link></li>
              <li><Link href="#">Recursos para arrendadores</Link></li>
              <li><Link href="#">Foro comunitario</Link></li>
              <li><Link href="#">Arrendar con responsabilidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Urban Point</h3>
            <ul className="space-y-2">
              <li><Link href="#">Sala de prensa</Link></li>
              <li><Link href="#">Funciones nuevas</Link></li>
              <li><Link href="#">Inversionistas</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            © 2024 UrbanPoint · <Link href="#" className="hover:underline">Privacidad</Link> · <Link href="#" className="hover:underline">Términos</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2">
              <span>Español (CO)</span>
            </button>
            <button className="flex items-center space-x-2">
              <span>COP</span>
            </button>
            <Link href="#" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}