import React, { useState } from 'react';

function EmojiCard({ emoji, className, style }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseEmoji = emoji.char;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsModalOpen(true); // Open the modal
    // Automatically close the modal after 2 seconds
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };


  return (
    <div className={`card bg-base-100 p-4 flex flex-col text-center justify-between ${className}`}>
      <div className="flex-grow flex flex-col items-center mb-4">
        <span role="img" aria-label={emoji.name} className="text-5xl mb-2">
          {baseEmoji}
        </span>
        <p className="text-lg font-semibold capitalize">{emoji.name}</p>
      </div>
      
      <div className="mt-auto space-y-2">
        <button
          className="btn btn-outline btn-success btn-sm w-full"
          onClick={() => handleCopy(baseEmoji)}
        >
          Copy Emoji
        </button>
        <button
          className="btn btn-outline btn-success btn-sm w-full"
          onClick={() => handleCopy(emoji.decimal)}
        >
          Copy Decimal
        </button>
        <button
          className="btn btn-outline btn-success btn-sm w-full"
          onClick={() => handleCopy(emoji.hex)}
        >
          Copy Hex
        </button>
      </div>

      {/* DaisyUI Modal */}
      <dialog id="copy_modal" className={`modal ${isModalOpen ? 'modal-open' : ''} justify-center items-start pt-10`}>
        <div className="modal-box w-80">
          <h3 className="text-lg font-bold">Copied to Clipboard!</h3>
        </div>
      </dialog>

    </div>
  );
}

export default EmojiCard;