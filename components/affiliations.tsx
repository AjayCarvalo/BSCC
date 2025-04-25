const affiliations = [
    {
      name: "Thames Valley Cricket League",
      link: "https://tvlcricket.uk/",
      logo: "/tvcl.png",
    },
    {
      name: "Middlesex Premier Cricket League",
      link: "https://middlesexpremier.co.uk/",
      logo: "/MPCL.jpg",
    },
    {
      name: "Middlesex County Cricket League",
      link: "https://www.middlesexccc.com/",
      logo: "/MCCL.svg",
    },
    {
      name: "Berkshire Cricket Foundation",
      link: "https://berkshirecricket.org/",
      logo: "/bcf.jpeg",
    },
  ];
  
  const Affiliations = () => {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Affiliations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {affiliations.map((org, idx) => (
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
  
  export default Affiliations;
  