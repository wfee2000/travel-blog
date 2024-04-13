"use client"

import {useEffect} from "react";
import GetEntries from "@/app/get-entries/getEntries";
import entry from "next/dist/server/typescript/rules/entry";

export default function ShowEntries({data}) {

    useEffect( () => {
        console.log(data.length);

        if(!data) return;

        let container: HTMLElement = document.getElementById("container") as HTMLDivElement;

        for (let entry of data){
            console.log(entry.title)

            /*
            let myImageTag = document.createElement("img");

            //myImageTag.innerHTML = "<img style='display:block; width:100px;height:100px;'/>";

            myImageTag.style.display = "block";
            myImageTag.src = entry.contents[3].content;

            container.appendChild(myImageTag);

            let width: number = myImageTag.width;
            let height: number = myImageTag.height;

            if(width > 300 || height > 300 ){
                let aspectRatio = width / height;

                if (width > height) {
                    width = 300;
                    height = 300 / aspectRatio;
                } else {
                    height = 300;
                    width = 300 * aspectRatio;
                }
            }

            myImageTag.style.width = width + "px";
            myImageTag.style.height = height + "px";
            * */
        }

    }, []);
}

/*

<div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            </a>
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