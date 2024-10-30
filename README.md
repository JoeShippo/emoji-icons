
# Emoji Icons

A web app that allows users to browse and search emojis, view detailed information about each emoji, and copy emojis to the clipboard. Built with React and styled using Tailwind CSS and DaisyUI.

## Features

- Search emojis by name or keyword
- View emoji details, including decimal and hexadecimal codes
- Copy emojis to clipboard
- Help modal with project information and contact details

## Special Thanks

This project uses the [unicode-emoji-json](https://github.com/muan/unicode-emoji-json) library. Special thanks to its contributors for making this project possible!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joeshippo/emoji-icons.git
   cd emoji-icons
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This command will start the app on `localhost:3000`.

## Usage

- Open the app in your browser at `http://localhost:3000`.
- Use the search bar to filter through emojis by name or keyword.
- Click on any emoji to copy it to your clipboard.
- Open the help modal by clicking the question mark in the header for more information and contact details.

## Project Structure

The project is organized as follows:

```
src/
│
├── components/
│   ├── EmojiList.js       # Renders the list of emoji cards
│   ├── EmojiCard.js       # Displays details for each emoji
│   └── SearchBar.js       # Search bar component
│
├── App.js                 # Main application component
├── index.js               # Entry point of the app
└── index.css              # Global styles
```

## Contributing

Feature requests and bug reports are welcome! Please send an email to [joe.shipton@aight.fun](mailto:joe.shipton@aight.fun) if you have any suggestions or issues.

## License

This project is open-source and available under the [MIT License](LICENSE).
