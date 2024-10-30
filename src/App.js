import React, { useState, useEffect } from 'react';
import emojiData from 'unicode-emoji-json';
import EmojiList from './components/EmojiList';
import SearchBar from './components/SearchBar';

function App() {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);


  useEffect(() => {
    const formattedEmojis = Object.entries(emojiData).map(([key, value]) => ({
      name: value.name,
      char: key,
      keywords: value.keywords || [],
      decimal: `&#${key.codePointAt(0)};`,
      hex: `&#x${key.codePointAt(0).toString(16)};`,
    }));

    setEmojis(formattedEmojis);
    setFilteredEmojis(formattedEmojis);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredEmojis(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto p-6">
        <div className="w-full mb-6 flex justify-between items-center">
          {/* Page Header */}
          <h1 className="text-3xl font-bold base-300">Emoji Icons</h1>
          <button
            onClick={() => setIsHelpModalOpen(true)}
            className="btn btn-circle btn-outline text-success"
            aria-label="Help"
          >
            <span className="text-xl">?</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

      </div>

      {/* Emoji List */}
      <div className="p-6 min-h-screen w-full" style={{ backgroundColor: '#F0F1F3' }}>
        <EmojiList emojis={filteredEmojis} />
      </div>
      {/* Help Modal */}
      <dialog
        className={`modal ${isHelpModalOpen ? 'modal-open' : ''}`}
        onClick={() => setIsHelpModalOpen(false)}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">How to Use Emoji Icons</h3>
          <p className="py-2">
            Use the search bar to filter through emojis by name or keyword. Click on any emoji to copy it to your clipboard!
          </p>
          
          <h3 className="font-bold text-lg py-2">Thanks & Bugs</h3>
          <p className="py-2">
            Special thanks to the contributors of the <a href="https://github.com/muan/unicode-emoji-json" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">unicode-emoji-json</a> GitHub repository for making this project possible.
          </p>
          <p className="pb-2">
            Feature request or bug? Shoot me an email at <a href="mailto:joe.shipton@aight.fun" className="text-blue-500 underline">joe.shipton@aight.fun</a>.
          </p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => setIsHelpModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default App;