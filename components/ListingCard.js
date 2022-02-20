import Image from 'next/image';

const ListingCard = () => {
  return (
    <>
      <div className="h-64 mt-6 relative">
        <Image
          className="rounded-lg shadow-md"
          src="https://images.unsplash.com/photo-1609627899370-4146c22d4478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80"
          alt="villa"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-2">
        <div className="bg-white rounded-lg px-4 py-4 relative -mt-16 shadow-lg">
          <div className="flex items-baseline space-x-2 font-semibold uppercase text-sm">
            <span className="inline-block rounded-full px-2 py-1 leading-none bg-teal-100 text-teal-800">
              Plus
            </span>
            <div className="text-gray-500">3 beds &bull; 2 baths</div>
          </div>
          <h4 className="text-gray-900 font-semibold text-lg mt-1">
            Modern home in city center
          </h4>
          <div className="mt-1">
            <span className="text-gray-900">$1,400</span>
            <span className="text-gray-600 ml-1 text-sm">/wk</span>
          </div>

          <div className="flex mt-2 items-center">
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <svg
                  key={i}
                  className={
                    i <= 4
                      ? 'w-4 h-4 text-teal-600 fill-current'
                      : 'w-4 h-4  fill-current text-gray-500'
                  }
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              );
            })}
            <div className="text-sm text-gray-600 ml-2">34 reviews</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
