import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([])
  // set to true and have state change to false
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  // fetch data from pixabay using .env and term from state
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
      .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By John Doe
        </div>
          <ul>
            <li><strong>Views:</strong>1</li>
            <li><strong>Downloads:</strong>1</li>
            <li><strong>Likes:</strong>1</li>
          </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
