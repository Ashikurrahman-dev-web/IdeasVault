import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { DeleteIdea } from '@/components/DeleteIdea';
import {EditModal} from '@/components/EditIdea';
const MyIdea = async() => {
    const res =  await fetch('http://localhost:5000/myIdeas');
    const ideas = await res.json();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {ideas.map((idea) => (
              <div
                key={idea._id}
className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={idea.imageUrl}
                    alt={idea.title}
                    height={200}
            width={200}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
        
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      {idea.category}
                    </span>
                  </div>
                </div>
        
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      #{idea.tag}
                    </span>
                  </div>
        
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {idea.title}
                  </h3>
        
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {idea.shortDescription}
                  </p>
        
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      🎯 {idea.targetAudience}
                    </span>
        
                    <Link href={`/idea/${idea._id}`}>
                      <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition">
                        View Details
                      </button>
                    </Link>
                   
                  </div>
                  <EditModal id={idea._id} data={idea} /> <DeleteIdea id={idea._id} />
                </div>
                 
              </div>
            ))}
          </div>
    );
};

export default MyIdea;