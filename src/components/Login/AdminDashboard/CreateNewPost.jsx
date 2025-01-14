import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {
    console.log("Post Submitted:", { title, description });
    // Add your post submission logic here
  };

  return (
    <div className="p-6 w-full">
      <div className="mb-4">
        <p className="text-gray-500 text-sm mb-2">Posts {'>'} Create Post</p>
        <h1 className="text-2xl font-semibold">Create Post</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6">
          <div className="text-center">
            <p className="text-gray-400 mb-2">Drop your image here or <span className="text-blue-500 cursor-pointer">browse</span></p>
            <div className="h-24 w-24 bg-gray-200 rounded-md flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l4-4a3 3 0 014 0l4 4m-6 6v-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title and Description Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Once upon a time..."
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="The start of a wonderful story..."
              rows="5"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>

          {/* Post Button */}
          <div className="flex justify-end">
            <button
              onClick={handlePost}
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
