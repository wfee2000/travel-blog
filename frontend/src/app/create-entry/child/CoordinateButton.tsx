"use client"

export default function CoordinateButton (e){

    let formElement: HTMLElement = document.getElementById("inputContainer");

    let myDiv: string =  "<div>\n" +
        "                <label class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">\n" +
        "                </label>\n" +
        "                <input type=\"text\" " +
        "                       name=\"coordinates\"\n" +
        "                       class=\"bg-gray-50 border border-gray-300\n" +
        "                         text-yellow-400 sm:text-sm rounded-lg focus:ring-primary-600\n" +
        "                         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600\n" +
        "                         dark:placeholder-gray-400 dark:texttext-yellow-400 dark:focus:ring-blue-500 dark:focus:border-blue-500\"\n" +
        "                       placeholder=\"Separate Coordinates with &quot,&quot\"\n" +
        "                       required={true}>\n" +
        "                </input>\n" +
        "            </div>";

    formElement.innerHTML = formElement.innerHTML + myDiv;

    let button: HTMLButtonElement = document.getElementById("cooButton") as HTMLButtonElement;
    button.disabled = true;
    button.className += " disabled:bg-rose-600 disabled:cursor-not-allowed";
}
