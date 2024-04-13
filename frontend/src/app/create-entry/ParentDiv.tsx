"use client"

import uploadEntry from "@/app/create-entry/Buttton";
import {useState} from "react";
import FileButton from "@/app/create-entry/child/FileButton";

export default function ParentDiv()  {
    return (
        <div id="inputContainer">
            <div>
                <input type="text" name="title" id="title"
                       className="bg-gray-50 border border-gray-300
                         text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Title..."
                       required={true}>
                </input>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                </label>
                <input type="text" name="author" id="title"
                       className="bg-gray-50 border border-gray-300
                         text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Username..."
                       required={true}>
                </input>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                </label>
                <input type="text" name="category" id="title"
                       className="bg-gray-50 border border-gray-300
                         text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
                         focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Cateogory..."
                       required={true}>
                </input>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                </label>
                <textarea name="description" rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                            border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500"
                          placeholder="A short description..."
                          required={true}>
                  </textarea>
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            </label>
            <div className="flex items-center mb-4">
                <input type="checkbox" name="comments"
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                       dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                       dark:border-gray-600"/>
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Allow Comments
                </label>
            </div>
        </div>
    )

}