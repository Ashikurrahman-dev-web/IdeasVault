import React from 'react';
import Link from 'next/link';
import CommentShow from '@/components/CommentShow';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
const Details = async ({ params }) => { 
    const { id } = await params;
    const {token} = await auth.api.getToken({
      headers: await headers()
   })
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/ideaData/${id}`,{
      headers:{
        authorization: `Bearer ${token}`
      }
    });
    const idea = await res.json();
    return (
       <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-[450px]">
          <img
            src={idea.imageUrl}
            alt={idea.title}
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <span className="bg-green-500 text-white px-4 py-2 rounded-full">
            {idea.category}
          </span>

          <h1 className="text-4xl font-bold mt-6 mb-4">
            {idea.title}
          </h1>

          <p className="text-gray-600 mb-8">
            {idea.shortDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-100 p-5 rounded-2xl">
              <h3 className="font-semibold mb-2">
                🎯 Target Audience
              </h3>
              <p>{idea.targetAudience}</p>
            </div>

            <div className="bg-gray-100 p-5 rounded-2xl">
              <h3 className="font-semibold mb-2">
                ⚠️ Problem Statement
              </h3>
              <p>{idea.problemStatement}</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl mb-8">
            <h3 className="font-bold text-xl mb-3">
              💡 Proposed Solution
            </h3>
            <p>{idea.proposedSolution}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3">
              📖 Full Description
            </h3>
            <p className="leading-8">
              {idea.description}
            </p>
          </div>
         <Link href="/">
              <button className="mt-6 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
                Back to Home
              </button>
            </Link>
        </div>
        
      </div>
      <CommentShow />
    </section>
    );
};

export default Details;