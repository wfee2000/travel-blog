"use client"

export default function FileButton (){

    let formElement: HTMLElement = document.getElementById("inputContainer");

    let myDiv: string =  "<div>\n" +
        "            <label class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\" >" +
        "            </label>\n" +
        "            <input\n" +
        "                name=\"image\"" +
        "                class=\"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer\n" +
        "                bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600\n" +
        "                dark:placeholder-gray-400\"\n" +
        "                id=\"file_input\" type=\"file\" required=\"true\"/>\n" +
        "        </div>";

    formElement.innerHTML = formElement.innerHTML + myDiv;

    let button: HTMLButtonElement = document.getElementById("fileButton") as HTMLButtonElement;
    button.disabled = true;
    button.className += " disabled:bg-rose-600 disabled:cursor-not-allowed";
}
