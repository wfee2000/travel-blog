"use client"

export default function LinkButton (e){

    let formElement: HTMLElement = document.getElementById("inputContainer");

    let myDiv: string =  "<div>\n" +
        "                <label class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">\n" +
        "                </label>\n" +
        "                <input type=\"text\" name=\"link\"\n" +
        "                       name=\"link\"" +
        "                       class=\"bg-gray-50 border border-gray-300\n" +
        "                         text-sky-400 sm:text-sm rounded-lg focus:ring-primary-600\n" +
        "                         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600\n" +
        "                         dark:placeholder-gray-400 dark:text-sky-400 dark:focus:ring-blue-500 dark:focus:border-blue-500\"\n" +
        "                       placeholder=\"Link...\"\n" +
        "                       required={true}>\n" +
        "                </input>\n" +
        "            </div>";

    formElement.innerHTML = formElement.innerHTML + myDiv;

    let button: HTMLButtonElement = document.getElementById("linkButton") as HTMLButtonElement;
    button.disabled = true;
    button.className += " disabled:bg-rose-600 disabled:cursor-not-allowed";
}
