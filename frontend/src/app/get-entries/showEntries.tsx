"use client"

import {useEffect} from "react";
import GetEntries from "@/app/get-entries/getEntries";
import entry from "next/dist/server/typescript/rules/entry";

export default function ShowEntries({data}) {

    useEffect( () => {

        if(!data) return;

        let container: HTMLElement = document.getElementById("container") as HTMLDivElement;

        for (let entry of data){

            let mainDiv = document.createElement("div");
            mainDiv.className = "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

            let author = document.createElement("p");
            author.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
            author.textContent = entry.author_un + " | " + entry.creationDate;

            let title = document.createElement("h5");
            title.className = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
            title.innerHTML = entry.title;

            let description = document.createElement("p");
            description.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
            description.innerHTML = entry.description;

            mainDiv.appendChild(author);
            mainDiv.appendChild(title);
            mainDiv.appendChild(description);

            for (let contents of entry.contents) {

                if(contents.type === "link"){
                    let link = document.createElement("a");
                    link.className = "mb-3 font-normal text-sky-400 dark:text-sky-400";
                    link.innerHTML = "Link: " + contents.content;
                    link.href = contents.content;

                    mainDiv.appendChild(link);
                }
                else if (contents.type === "image"){
                    let myImageTag = document.createElement("img");

                    myImageTag.style.display = "block";
                    myImageTag.src = contents.content;
                    myImageTag.className = "rounded-t-lg";

                    mainDiv.appendChild(myImageTag);

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
                }
                else if (contents.type === "coordinates"){
                    let coordinates = document.createElement("p");
                    coordinates.className = "mb-3 font-normal text-yellow-400 dark:text-yellow-400";
                    coordinates.innerHTML = "coordinates: " + contents.content;

                    mainDiv.appendChild(coordinates);
                }
                else if (contents.type === "text"){
                    let text = document.createElement("p");
                    text.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
                    text.innerHTML = contents.content;

                    mainDiv.appendChild(text);
                }
            }

            entry.impressionCount += 1;

            let viewCount = document.createElement("p");
            viewCount.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
            viewCount.innerHTML = "Views: " + entry.impressionCount + " | Category:" + entry.blogCategory;

            mainDiv.appendChild(viewCount);

            container.appendChild(mainDiv);

            // post um view count zu erhöhen
            fetch('http://localhost:3333/api/updateViewCount', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entry)
            });
        }

    }, []);
}

/*

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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