"use client";
import {useState, useEffect} from "react"; 
import Link from "next/link"; 
import Image from "next/image";

 const Idea = () => { 
  const [ideas, setIdeas] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("");
const [category, setCategory] = useState("");
useEffect(() => {
  const fetchIdeas = async () => {
    try {
      const res = await fetch("http://localhost:5000/ideaData");
      const data = await res.json();
      setIdeas(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchIdeas();
}, []);
const filteredIdeas = ideas.filter((idea) => {
return (
    (idea?.title || "")
      .toLowerCase()
      .includes(query.toLowerCase()) &&
    (!category || idea.category === category)
  );
});
const handleSearch = () => {
  setQuery(search);
};


    return (
       <div className="max-w-7xl mx-auto mt-5 mb-5 px-4">
      <div className="mb-6 flex items-center justify-between gap-2">
        <input
          type="text"
          placeholder="Search courses by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
className="w-full md:w-1/2 border px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#0f0524]"
        />

        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-6 py-2 rounded-xl cursor-pointer"
        >
          Search
        </button>
      </div>
<p className="font-bold">Selected Category: <span className="text-green-500">{category}</span></p>
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">All</option>
  <option value="Politics">Politics</option>
  <option value="Education">Education</option>
  <option value="Technology">Technology</option>
  <option value=" Artificial Intelligence"> Artificial Intelligence</option>
  <option value=" Cyber Security">Cyber Security</option>
  <option value="Environment">Environment</option>
  </select>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {filteredIdeas.map((idea) => (
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
        </div>
                    <Link href={`/idea/${idea._id}`}>
<button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition">
                        View Details
                      </button>
                    </Link>
                  
                </div>
              </div>
            ))}
          </div>
          </div>
    );
};

export default Idea;