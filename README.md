# zenAI - Gemini AI Chatbot

A modern, responsive chatbot application powered by Google's Gemini API. This lightweight web application provides an intuitive chat interface with real-time AI responses.

## Features

- 🤖 **Gemini API Integration**: Leverages Google's powerful Gemini AI for intelligent responses
- 💬 **Interactive Chat UI**: Clean, user-friendly chat interface with message history
- 🎨 **Responsive Design**: Works seamlessly across desktop and mobile devices
- ⚡ **Real-time Responses**: Stream AI responses as they're generated
- 🎯 **Error Handling**: Graceful error management with user-friendly messages
- 🔒 **Client-side Architecture**: Pure frontend implementation with Firebase hosting

## Prerequisites

Before setting up zenAI, ensure you have:

- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- (Optional) Firebase CLI for deployment

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hotelraviteja/zenAI.git
cd zenAI
```

### 2. Configure API Key

Open `public/index.html` and replace the placeholder API key:

```javascript
const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

**⚠️ SECURITY WARNING**: Never commit your API key to version control. See [Security Best Practices](#security-best-practices) below.

### 3. Run Locally

Open `public/index.html` directly in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server public
```

Then navigate to `http://localhost:8000`

### 4. Deploy to Firebase (Optional)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy
```

## Usage

1. Open the application in your browser
2. Type your message in the input field at the bottom
3. Press Enter or click the send button
4. View AI responses in real-time
5. Continue the conversation naturally

## Code Structure

```
zenAI/
├── public/
│   ├── index.html      # Main application file (HTML + CSS + JS)
│   └── favicon.ico.png # Application icon
├── .firebaserc         # Firebase configuration
├── firebase.json       # Firebase hosting settings
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Optimization Recommendations

### 1. Security Improvements

**Current Issue**: API key is hardcoded in client-side code

**Recommended Solution**:
```javascript
// Option A: Use environment variables with a build tool
const API_KEY = process.env.GEMINI_API_KEY;

// Option B: Implement a backend proxy
// Create a serverless function (Firebase Functions, Vercel, etc.)
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage })
});
```

**Add to .gitignore**:
```
config.js
.env
*.key
```

### 2. Code Structure Improvements

**Modularize the Code**:
```javascript
// Separate concerns into modules
class GeminiAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://generativelanguage.googleapis.com/v1beta';
  }
  
  async sendMessage(message, conversationHistory = []) {
    // API logic here
  }
}

class ChatUI {
  constructor(containerElement) {
    this.container = containerElement;
  }
  
  addMessage(message, isUser) {
    // UI logic here
  }
  
  clearChat() {
    // Clear logic here
  }
}
```

### 3. Performance Enhancements

**Implement Request Debouncing**:
```javascript
let requestTimeout;
function debouncedSend(message) {
  clearTimeout(requestTimeout);
  requestTimeout = setTimeout(() => sendMessage(message), 300);
}
```

**Add Loading States**:
```javascript
function showLoading() {
  const loader = document.createElement('div');
  loader.className = 'loading-indicator';
  loader.innerHTML = '<span>AI is thinking...</span>';
  chatContainer.appendChild(loader);
}
```

**Implement Message Caching**:
```javascript
const messageCache = new Map();
function getCachedResponse(message) {
  const normalized = message.toLowerCase().trim();
  return messageCache.get(normalized);
}
```

### 4. API Usage Optimization

**Add Rate Limiting**:
```javascript
class RateLimiter {
  constructor(maxRequests = 60, timeWindow = 60000) {
    this.requests = [];
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
  }
  
  canMakeRequest() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    return this.requests.length < this.maxRequests;
  }
  
  recordRequest() {
    this.requests.push(Date.now());
  }
}
```

**Implement Retry Logic**:
```javascript
async function fetchWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      if (response.status === 429) await sleep(1000 * (i + 1));
    } catch (error) {
      if (i === retries - 1) throw error;
      await sleep(1000 * (i + 1));
    }
  }
}
```

### 5. User Experience Improvements

**Add Conversation Persistence**:
```javascript
function saveConversation() {
  localStorage.setItem('zenai_history', JSON.stringify(conversationHistory));
}

function loadConversation() {
  const saved = localStorage.getItem('zenai_history');
  return saved ? JSON.parse(saved) : [];
}
```

**Implement Markdown Rendering**:
```javascript
// Add marked.js library
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

function renderMessage(content) {
  return marked.parse(content);
}
```

## Security Best Practices

### Recommended Architecture

1. **Never expose API keys in client-side code**
2. **Use a backend proxy** to handle API requests
3. **Implement request validation** and sanitization
4. **Add authentication** to prevent abuse
5. **Set up CORS properly** if using a backend
6. **Monitor API usage** to detect anomalies

### Example Backend Setup (Firebase Functions)

```javascript
// functions/index.js
const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.chat = functions.https.onRequest(async (req, res) => {
  // Add CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  
  // Validate request
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }
  
  const { message } = req.body;
  
  // Sanitize input
  if (!message || typeof message !== 'string' || message.length > 1000) {
    return res.status(400).send('Invalid message');
  }
  
  // Call Gemini API securely
  const API_KEY = functions.config().gemini.key;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }]
      })
    }
  );
  
  const data = await response.json();
  res.json(data);
});
```

## Contributing

Contributions are welcome! Here's how you can help:

### Reporting Issues

1. Check existing issues to avoid duplicates
2. Provide a clear description of the problem
3. Include steps to reproduce
4. Specify your browser and OS version

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Code Style Guidelines

- Use meaningful variable and function names
- Add comments for complex logic
- Follow JavaScript ES6+ best practices
- Ensure responsive design works on all screen sizes
- Test on multiple browsers before submitting

## Roadmap

- [ ] Separate API key into environment configuration
- [ ] Implement backend proxy for secure API calls
- [ ] Add conversation history persistence
- [ ] Implement markdown rendering for AI responses
- [ ] Add typing indicators and loading states
- [ ] Support for file/image attachments
- [ ] Multi-language support
- [ ] Dark/light theme toggle
- [ ] Export conversation as text/PDF
- [ ] Voice input/output capabilities

## Troubleshooting

### Common Issues

**API Key Error**
- Ensure your API key is valid and active
- Check if the API key has the correct permissions
- Verify the API endpoint URL is correct

**CORS Errors**
- Use a local server instead of opening HTML directly
- Implement a backend proxy to avoid CORS issues

**No Response from API**
- Check browser console for errors
- Verify your internet connection
- Ensure Gemini API service is available

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Google Gemini API for powering the AI responses
- Firebase for hosting infrastructure
- The open-source community for inspiration

## Contact

For questions or support:
- Open an issue on GitHub
- Repository: [hotelraviteja/zenAI](https://github.com/hotelraviteja/zenAI)

---

**Made with ❤️ by hotelraviteja**
