"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Category {
  _id: string;
  title: string;
}

interface CategoriesProps {
  categories: Category[];
}
export default function Categories({ categories }: CategoriesProps) {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<string>(() => {
    // Initialize currentTab with the value stored in local storage, if available
    const storedTab = localStorage.getItem('currentTab');
    return storedTab || categories.find(category => category.title === 'Alla')?.title || categories[0]?.title;
  });

  // Update local storage when the currentTab changes
  useEffect(() => {
    localStorage.setItem('currentTab', currentTab);
  }, [currentTab]);

  // Handle navigation when the select option changes
  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTab = e.target.value;
    setCurrentTab(selectedTab);
    if (selectedTab === 'Alla') {
      router.push('/blogs/');
    } else {
      const selectedCategory = categories.find(category => category.title === selectedTab);
      if (selectedCategory) {
        router.push(`/blogs/${selectedCategory._id}`);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl sm:border-b-2 border-gray-200">
      <div className="mx-auto max-w-md sm:hidden rounded-lg border border-gray-300 overflow-hidden">
        <select
          name="current-tab"
          id="current-tab"
          value={currentTab}
          className="form-select w-full sm:w-auto block border-none text-sm text-gray-500 font-semibold cursor-pointer focus:ring-0"
          onChange={handleTabChange}
        >
          {categories.map(category => (
            <option 
              value={category.title} 
              key={category._id}
              className={category.title === currentTab ? "hover:bg-gray-200" : ""}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <nav className="-mb-0.5 hidden sm:block" aria-label="Tabs">
        <ul className="flex space-x-5">
          {categories.map(category => (
            <li key={category._id} className={`border-b-2 text-base ${category.title === currentTab ? "border-yellow-600 text-yellow-600" : "border-transparent text-gray-400 hover:text-gray-500 hover:border-gray-300"}`}>
              <Link href={category.title === 'Alla' ? '/blogs/' : `/blogs/${category._id}`}>
                <li
                  onClick={() => setCurrentTab(category.title)}
                  className="px-4 pb-5 font-semibold"
                >
                  {category.title}
                </li>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
