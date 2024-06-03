// import React from 'react';

import FormFiled from "./Form/FormField.tsx";

const Form = () => {
    return (
        <form>
            <div className="grid gap-6 mb-6 mb:grid-cols-2">
                <FormFiled
                    required={true} htmlFor={'first_name'} typeInput={'text'} placeholder={'John'}
                    classValueInput={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                    classValueLabel={'block mb-2 text-sm font-medium text-gray-900 dark:text-white'} fieldTitle={'First Name'}
                />
                <FormFiled required={true}
                           htmlFor={'last_name'}
                           typeInput={'text'}
                           placeholder={'Martin'}
                           classValueInput={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                           classValueLabel={'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}
                           fieldTitle={'Last Name'}
                />
            </div>
        </form>
    );
};

export default Form;
