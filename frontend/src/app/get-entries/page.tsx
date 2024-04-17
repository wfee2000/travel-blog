import GetEntries from "@/app/get-entries/getEntries";
import ShowEntries from "@/app/get-entries/showEntries";
import {useEffect} from "react";

export default async function Home() {

  let entries = await GetEntries();

  // alle die geladen werden = 1 aufruf mehr
  // title = unique daher mit titel suchen und um eins erhöhen

  return (
      <div id="container"
           className="h-screen overflow-y-auto w-screen bg-gray-50 dark:bg-gray-900 inline-flex flex-wrap">
        <ShowEntries data={entries}/>
      </div>
  );
}

/*

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src="https://www.thespruce.com/thmb/fQjL1wNf72Ez89dkS-VwpiQGiAM=/6127x0/filters:no_upscale():max_bytes(150000):strip_icc()/thespruce.com-best-houseplants-for-sun-4147670-1-3d69cd3cf2b943d9aa8363cde764e595.jpg" alt=""/>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
              acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#"
               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

*/