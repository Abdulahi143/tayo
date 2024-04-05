
import { Suspense } from 'react';
import { SanityDocument } from 'next-sanity';
import { CATEGORIES_QUERY } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';
import { draftMode } from 'next/headers';
import Loading from '@/app/loading';
import CategorySection from './[category]/CategorySection';

export default function BlogLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (

<Suspense fallback={<Loading />}>
<div className="py-16 px-4 md:mt-12 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl leading-10 tracking-tight font-extrabold text-white mt-4">
            Bloggar
          </h2>
          <CategorySection />
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        {children}
      </div>
      </div>
</Suspense>
  );
}