import React from 'react';
import EmojiCard from './EmojiCard';

function EmojiList({ emojis }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.name} emoji={emoji} className="max-w-60 w-full" />
      ))}
    </div>
  );
}

export default EmojiList;