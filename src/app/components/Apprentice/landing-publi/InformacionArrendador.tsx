export default function InformacionArrendador() {
    return (
      <div className="bg-gray-100 rounded-lg p-6">
        <h3 className="font-medium mb-4">Conoce a tu arrendador</h3>
  
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="flex gap-4">
            <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-medium">David Lossada</h4>
              <p className="text-sm text-gray-500">Superarrendador</p>
  
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">400</span>
                  <span className="text-xs text-gray-500">Reseñas</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">4.52</span>
                  <span className="text-xs text-gray-500">Calificación</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">3</span>
                  <span className="text-xs text-gray-500">Años arrendando</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <p className="text-sm mb-4">
          Los Superarrendador tienen mucha experiencia, tienen calificaciones excelentes y se destacan el compromiso para
          ofrecer a los huéspedes estadías magníficas.
        </p>
  
        <div className="mb-4">
          <h4 className="font-medium mb-2">Información sobre el arrendador</h4>
          <p className="text-sm">Idioma de respuesta: ES, EN</p>
          <p className="text-sm">Tiempo de respuesta: 1 hora</p>
        </div>
  
        <button className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded mb-6">Contactar al arrendador</button>
  
        <div className="text-xs text-center">
          <p>Logo Urban Point</p>
          <p className="mt-2">
            Para proteger tus pagos, nunca transfieras dinero ni te comuniques fuera de la página o la aplicación de Urban
            Point.
          </p>
        </div>
      </div>
    )
  }
  
  