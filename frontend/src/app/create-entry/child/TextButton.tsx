"use client"

export default function TextButton (e){

    let formElement: HTMLElement = document.getElementById("inputContainer");

    let myDiv: string =  "<div>\n" +
        "                <label class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">\n" +
        "                </label>\n" +
        "                <textarea rows=\"4\"\n" +
        "                          name=\"text\"" +
        "                          class=\"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border\n" +
        "                            border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700\n" +
        "                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500\n" +
        "                            dark:focus:border-blue-500\"\n" +
        "                          placeholder=\"A little bit of text...\"\n" +
        "                          required={true}>\n" +
        "</textarea>\n" +
        "            </div>";

    formElement.innerHTML = formElement.innerHTML + myDiv;

    let button: HTMLButtonElement = document.getElementById("textButton") as HTMLButtonElement;
    button.disabled = true;
    button.className += " disabled:bg-rose-600 disabled:cursor-not-allowed";
}
