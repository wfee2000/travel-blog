
import ParentDiv from "@/app/create-entry/ParentDiv";
import uploadEntry from "@/app/create-entry/Buttton";
import FileButton from "@/app/create-entry/child/FileButton";
import TextButton from "@/app/create-entry/child/TextButton";
import LinkButton from "@/app/create-entry/child/LinkButton";
import CoordinateButton from "@/app/create-entry/child/CoordinateButton";

export default function Home() {

  return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an Entry
          </h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md
          xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form id="myForm" className="space-y-4 md:space-y-6" onSubmit={uploadEntry}>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button id ="fileButton" type="button" onClick={FileButton}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200
                          rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
                          focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700
                          dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500
                          dark:focus:text-white">
                    Add Image
                  </button>
                  <button id="textButton" type="button" onClick={TextButton}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-r border-b
                          border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
                          focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700
                          dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500
                          dark:focus:text-white">
                    Add Text
                  </button>
                  <button id="linkButton" type="button" onClick={LinkButton}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-r
                          border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
                          focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700
                          dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500
                          dark:focus:text-white">
                    Add Link
                  </button>
                  <button id="cooButton" type="button" onClick={CoordinateButton}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b
                          border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
                          focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700
                          dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500
                          dark:focus:text-white">
                    Add Coordinates
                  </button>
                  <button type="submit"
                          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border
                          border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
                          focus:ring-blue-700 focus:text-blue-700 dark:bg-primary-600 dark:border-gray-700
                          dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500
                          dark:focus:text-white">
                    Post Entry
                  </button>
                </div>
                <ParentDiv/>
              </form>
            </div>
          </div>
        </div>
      </section>
);
}