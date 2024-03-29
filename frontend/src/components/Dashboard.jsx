import SearchBar from "./SearchBar";

export function Dashboard() {
    return (
      <div className="flex min-h-screen items-start p-4 md:items-center md:p-6 shadow-md">
        <div className="w-full max-w-3xl mx-auto">
          <div className="grid gap-4 md:gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="96"
                  src="./src/assets/placeholder.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width="96"
                />
              </div>
              <div className="grid gap-1 ">
                <h1 className="font-semibold text-2xl">Mukesh</h1>
                <p className="text-gray-500 dark:text-gray-400">mukesh@petrolkhareedo.com</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="w-full p-0 rounded-lg bg-white shadow-md">
                <div className="p-0">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-100/40 dark:bg-gray-800/40 rounded-t-lg">
                      <PackageIcon className="h-6 w-6" />
                      <div className="font-semibold">My Stops</div>
                      <SearchBar/>
                    </div>
                    <div className="border-t border-gray-200" />
                    <div className="p-4 grid gap-4">
                      <ShopCard
                        name="Indian Oil"
                        description=""
                      />
                      <ShopCard
                        name="Hindustan Petroleum"
                        description=""
                      />
                      <ShopCard
                        name="Reliance"
                        description=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function PackageIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    );
  }
  
  function ShopCard({ name, description }) {
    return (
      <div className="flex items-center gap-4">
        <img
          alt="Shop logo"
          className="rounded-md aspect-square object-cover"
          height="32"
          src="./src/assets/cart.svg"
          width="32"
        />
        <div className="grid gap-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <button className="ml-auto px-4 py-2 text-sm rounded-md bg-blue-500 text-white">
          Buy Fuel
        </button>
      </div>
    );
  }