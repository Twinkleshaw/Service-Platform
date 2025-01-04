import { useAuth } from "../store/auth";

function Service() {
  const { serviceData, loading } = useAuth();

  return (
    <div className="flex justify-center bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 lg:px-40 ">
          {serviceData.map((data, index) => {
            const { service, discription, price, provider } = data;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full"
              >
                <img
                  src="/images/service.png"
                  alt={service}
                  className="w-24 h-24 mb-4"
                />
                <h3 className="text-xl font-bold  mb-2">{service}</h3>
                <p className="text-gray-700 text-center">{discription}</p>
                <p className="text-gray-700 font-semibold mt-4">
                  Price: {price}
                </p>
                <p className="text-gray-700 mt-2">Provider: {provider}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Service;
