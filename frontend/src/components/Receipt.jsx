export function Receipt() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center space-y-2 p-4">
            <h2 className="text-2xl">
              Acme Inc
              <span className="text-gray-500 dark:text-gray-400">Receipt</span>
            </h2>
            <p className="text-sm text-center">Thank you for your purchase</p>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="grid gap-1 text-sm">
              <div>Transaction ID: 1234567890</div>
              <div>June 23, 2022</div>
            </div>
            <div className="grid gap-1 text-sm">
              <div className="font-semibold">Buyer: Sophia Anderson</div>
              <div className="text-gray-500 dark:text-gray-400">
                sophia@example.com
              </div>
            </div>
            <div className="border-t border-gray-200" />
            <div className="grid gap-1 text-sm">
              <div className="font-semibold">Seller: Acme Inc</div>
              <div className="text-gray-500 dark:text-gray-400">
                contact@acmeinc.com
              </div>
            </div>
            <div className="border-t border-gray-200" />
            <div className="grid gap-1 text-sm">
              <div className="font-semibold">Product: Oil</div>
              <div>Quantity: 1</div>
              <div>Price: $50.00</div>
            </div>
            <div className="border-t border-gray-200" />
            <div className="flex flex-col items-center gap-2">
              <div className="border" />
              <button className="px-4 py-2 text-xs text-blue-500 border border-blue-500 rounded-md">
                Download QR code
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Print receipt
            </button>
            <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md">
              Email receipt
            </button>
          </div>
        </div>
      </div>
    );
  }