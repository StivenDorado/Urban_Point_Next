export default function LandlordInfo() {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Conoce a tu arrendador</h2>
        <div className="flex items-center">
          <img src="/images/placeholder.png" alt="Arrendador" className="rounded-full mr-2" />
          <div>
            <p className="font-semibold">David Lossada</p>
            <p className="text-sm">Superarrendador</p>
          </div>
        </div>
        <p className="text-sm mt-2">Los Superarrendadores tienen experiencia, tienen aplicaciones o conferencias y nos definen un alto nivel para desarrollar el desarrollo y la capacidad de trabajar.</p>
      </div>
    );
  }