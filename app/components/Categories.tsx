"use client"
import Link from "next/link";
import { SanityDocument } from 'next-sanity';
import React, { useState } from 'react';

interface Category {
  _id: string;
  title: string;
}

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  const defaultTab = "Alla"; // Set the default tab here
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);

  return (
    <div className="mx-auto w-full max-w-5xl sm:border-b-2 border-gray-200">
      {/* SMALL DEVICES */}
      <div className="mx-auto max-w-md sm:hidden rounded-lg border border-gray-300 overflow-hidden">
        <label htmlFor="current-tab" className="sr-only">Select a tab</label>
        <select
          name="current-tab"
          id="current-tab"
          value={currentTab}
          className="form-select w-full sm:w-auto block border-none text-sm text-gray-500 font-semibold cursor-pointer focus:ring-0"
          onChange={(e) => setCurrentTab(e.target.value)}
        >
          <option value={defaultTab} >{defaultTab}</option>
          {categories.map(category => (
            <Link href={`/blogs/category/${category._id}`} key={category._id}>
              <option 
                value={category.title} 
                key={category._id}
                className={category.title === currentTab ? "hover:bg-gray-200" : ""}
              >
                {category.title}
              </option>
            </Link>
          ))}
        </select>
      </div>

      {/* LARGE DEVICES */}
      <nav className="-mb-0.5 hidden sm:block" aria-label="Tabs">
        <ul className="flex space-x-5">
          <li className={`border-b-2 text-base ${currentTab === defaultTab ? "border-yellow-600 text-yellow-600" : "border-transparent text-gray-400 hover:text-gray-500 hover:border-gray-300"}`}>
            <button type="button" className="px-4 pb-5 font-semibold" onClick={() => setCurrentTab(defaultTab)}>
              {defaultTab}
            </button>
          </li>
          {categories.map(category => (
            <Link href={`/blogs/category/${category._id}`} key={category._id}>
              <li 
                key={category._id} 
                className={`border-b-2 text-base ${category.title === currentTab ? "border-yellow-600 text-yellow-600" : "border-transparent text-gray-400 hover:text-gray-500 hover:border-gray-300"}`}
              >
                <button 
                  type="button" 
                  className="px-4 pb-5 font-semibold" 
                  onClick={() => setCurrentTab(category.title)}
                >
                  {category.title}
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
          };