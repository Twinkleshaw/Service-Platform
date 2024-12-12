import { useAuth } from "../store/auth";

function Service() {
  const { serviceData } = useAuth();

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 ">
        {serviceData.map((data, index) => {
          const { service, discription, price, provider } = data;
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center w-full"
            >
              <img
                src="/images/service.png"
                alt={service}
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">{service}</h3>
              <p className="text-gray-400 text-center">{discription}</p>
              <p className="text-gray-200 font-semibold mt-4">Price: {price}</p>
              <p className="text-gray-400 mt-2">Provider: {provider}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
