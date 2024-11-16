import React, { useState } from 'react';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log({ title, description, category, isPaid, price, duration, image, video });
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create a New Course</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Title */}
        <div>
          <label className="block text-gray-700 mb-2">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the course title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            required
          />
        </div>

        {/* Course Description */}
        <div>
          <label className="block text-gray-700 mb-2">Course Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the course content"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Course Category */}
        <div>
          <label className="block text-gray-700 mb-2">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Programming, Design"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            required
          />
        </div>

        {/* Free or Paid */}
        <div>
          <label className="block text-gray-700 mb-2">Is the Course Free or Paid?</label>
          <select
            value={isPaid ? "Paid" : "Free"}
            onChange={(e) => setIsPaid(e.target.value === "Paid")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          >
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        {/* Course Price (only if Paid is selected) */}
        {isPaid && (
          <div>
            <label className="block text-gray-700 mb-2">Course Price (INR)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter the course price"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
              required={isPaid}
            />
          </div>
        )}

        {/* Course Duration */}
        <div>
          <label className="block text-gray-700 mb-2">Course Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g., 6 weeks, 12 hours"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
            required
          />
        </div>

        {/* Course Thumbnail */}
        <div>
          <label className="block text-gray-700 mb-2">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        {/* Video Upload */}
        <div>
          <label className="block text-gray-700 mb-2">Upload Lecture Videos</label>
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
