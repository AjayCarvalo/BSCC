'use client';

import { useState } from 'react';
import Image from 'next/image';

const initialAlbums = [
  {
    title: 'TVCL Season 2024',
    images: ['/media/tvcl/img1.jpg', '/media/tvcl/img2.jpg'],
  },
];

const initialVideos = [
  {
    title: 'Match Highlights - TVCL',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

const MediaGallery = () => {
  const isAdmin = true; // Toggle this for now

  const [albums, setAlbums] = useState(initialAlbums);
  const [videos, setVideos] = useState(initialVideos);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    type: 'image', // or 'video'
    albumTitle: '',
    mediaURL: '',
    videoTitle: '',
  });

  const handleAddMedia = () => {
    if (formData.type === 'image' && formData.albumTitle && formData.mediaURL) {
      const updatedAlbums = [...albums];
      const album = updatedAlbums.find((a) => a.title === formData.albumTitle);
      if (album) {
        album.images.push(formData.mediaURL);
      } else {
        updatedAlbums.push({
          title: formData.albumTitle,
          images: [formData.mediaURL],
        });
      }
      setAlbums(updatedAlbums);
    } else if (formData.type === 'video' && formData.mediaURL && formData.videoTitle) {
      setVideos([...videos, { title: formData.videoTitle, url: formData.mediaURL }]);
    }
    setShowForm(false);
    setFormData({ type: 'image', albumTitle: '', mediaURL: '', videoTitle: '' });
  };

  return (
    <div className="space-y-10">
      {/* Admin Button */}
      {isAdmin && (
        <div className="text-right mb-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Add Media
          </button>
        </div>
      )}

      {/* Albums */}
      {albums.map((album, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-semibold mb-4">{album.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {album.images.map((src, i) => (
              <div key={i} className="relative w-full h-48 rounded overflow-hidden shadow">
                <Image src={src} alt={`Photo ${i + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Videos */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎥 Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, idx) => (
            <div key={idx}>
              <p className="mb-2 font-medium">{video.title}</p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-full rounded shadow"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Media Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add New Media</h3>

            <label className="block mb-2">
              <span className="font-medium">Type</span>
              <select
                className="w-full border rounded px-2 py-1 mt-1"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </label>

            {formData.type === 'image' && (
              <>
                <label className="block mb-2">
                  <span className="font-medium">Album Title</span>
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1 mt-1"
                    value={formData.albumTitle}
                    onChange={(e) => setFormData({ ...formData, albumTitle: e.target.value })}
                  />
                </label>
              </>
            )}

            {formData.type === 'video' && (
              <>
                <label className="block mb-2">
                  <span className="font-medium">Video Title</span>
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1 mt-1"
                    value={formData.videoTitle}
                    onChange={(e) => setFormData({ ...formData, videoTitle: e.target.value })}
                  />
                </label>
              </>
            )}

            <label className="block mb-4">
              <span className="font-medium">Media URL</span>
              <input
                type="text"
                className="w-full border rounded px-2 py-1 mt-1"
                value={formData.mediaURL}
                onChange={(e) => setFormData({ ...formData, mediaURL: e.target.value })}
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleAddMedia}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
