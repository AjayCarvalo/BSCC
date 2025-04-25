const sponsors = [
    {
      name: "Logo-1",
      link: "./",
      logo: "/logo-1.png",
    },
    {
      name: "Logo-2",
      link: "./",
      logo: "/logo-2.png",
    },
    {
      name: "Logo-3",
      link: "./",
      logo: "/logo-3.png",
    },
    {
      name: "Logo-4",
      link: "./",
      logo: "/logo-4.png",
    },
  ];
  
  const Sponsors = () => {
    return (
      <div className="bg-gray-200 text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((org, idx) => (
            <a
              key={idx}
              href={org.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center hover:shadow-md hover:bg-gray-100 transition rounded-lg p-4"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-16 w-auto object-contain mb-2"
              />
              <span className="font-semibold text-sm">{org.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sponsors;
  