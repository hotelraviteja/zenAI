# 🤖 zenAI - Intelligent AI Chatbot Platform

<div align="center">

![zenAI Logo](https://img.shields.io/badge/zenAI-Intelligent%20Chatbot-purple?style=for-the-badge&logo=robot&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white)](https://zen-ai-chat.web.app/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosted-orange?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Powered%20by-Gemini%20AI-blue?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Build Status](https://img.shields.io/badge/build-passing-success?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hotelraviteja/zenAI)
[![Stars](https://img.shields.io/github/stars/hotelraviteja/zenAI?style=for-the-badge&logo=github&color=yellow)](https://github.com/hotelraviteja/zenAI/stargazers)

### 🚀 Technology Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Google Gemini AI](https://img.shields.io/badge/Gemini%20AI-8E75B2?style=flat&logo=google&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat&logo=opensourceinitiative&logoColor=white)

</div>

---

## 📋 Project Introduction

**zenAI** is a cutting-edge conversational AI chatbot powered by Google's Gemini AI API. This web-based application provides users with an intuitive, intelligent conversational experience featuring real-time responses, context-aware interactions, and a sleek modern interface. Built with modern web technologies and deployed on Firebase, zenAI demonstrates the seamless integration of advanced AI capabilities into user-friendly applications.

🌐 **[Try zenAI Live](https://zen-ai-chat.web.app/)**

## ✨ Key Features

- 🎯 **Advanced AI Conversations**: Powered by Google Gemini AI for natural, context-aware responses
- 💬 **Real-time Chat Interface**: Instant message delivery with smooth, responsive UI
- 🎨 **Modern UI/UX Design**: Clean, intuitive interface with excellent user experience
- 🔐 **Google Authentication**: Secure user login via Google OAuth
- 💾 **Conversation History**: Save and retrieve previous chat sessions
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Optimized loading times and efficient API calls
- 🌙 **Dark Mode Support**: Eye-friendly dark theme option
- 🔄 **Context Retention**: Maintains conversation context for more coherent dialogues
- 🚀 **Firebase Hosting**: Fast, reliable, and scalable cloud deployment

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with animations and transitions
- **JavaScript (ES6+)** - Core application logic
- **Responsive Design** - Mobile-first approach

### Backend & Services
- **Google Gemini AI API** - Natural language processing and generation
- **Firebase Authentication** - Secure Google OAuth integration
- **Firebase Hosting** - Static site hosting and deployment
- **Firebase Firestore** - Real-time database for conversation storage

### Development Tools
- **VS Code** - Primary code editor
- **Git & GitHub** - Version control and collaboration
- **Firebase CLI** - Deployment and testing
- **Chrome DevTools** - Debugging and optimization

## 📦 Installation Steps

### Prerequisites
```bash
# Node.js (v14 or higher)
# npm or yarn package manager
# Firebase account
# Google Cloud account with Gemini AI API access
```

### Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/hotelraviteja/zenAI.git
cd zenAI
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure Firebase**
- Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Authentication (Google provider)
- Enable Firestore Database
- Copy your Firebase configuration

4. **Set Up Environment Variables**
Create a `.env` file or update the configuration:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
```

5. **Deploy to Firebase**
```bash
firebase login
firebase init
firebase deploy
```

## 🚀 Usage Instructions

### Running Locally
```bash
# Serve locally
firebase serve
# or use a local server
python -m http.server 8000
# or
npx http-server
```

### Using the Application
1. **Sign In**: Click the Google Sign-In button to authenticate
2. **Start Chatting**: Type your message in the input box
3. **View Responses**: AI responses appear in real-time
4. **Clear Chat**: Use the clear button to start a new conversation
5. **Sign Out**: Click your profile icon to sign out

### API Integration
```javascript
// Example: Sending a message to Gemini AI
async function sendMessage(message) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: message }] }]
    })
  });
  return await response.json();
}
```

## 📸 Screenshots

<div align="center">

### 🖥️ Desktop Chat Interface
![zenAI Chat Interface](https://github.com/hotelraviteja/zenAI/assets/screenshots/chat-interface.png)
*Clean, modern chat interface with real-time AI responses*

### 📱 Mobile Responsive View
![Mobile View](https://github.com/hotelraviteja/zenAI/assets/screenshots/mobile-view.png)
*Fully optimized mobile experience with touch-friendly controls*

### 🔐 Google Authentication Flow
![Google Sign-In](https://github.com/hotelraviteja/zenAI/assets/screenshots/auth-flow.png)
*Secure Google OAuth integration for seamless authentication*

### 💬 Conversation History
![Conversation History](https://github.com/hotelraviteja/zenAI/assets/screenshots/conversation-history.png)
*Save and retrieve previous conversations with ease*

### 🌙 Dark Mode Interface
![Dark Mode](https://github.com/hotelraviteja/zenAI/assets/screenshots/dark-mode.png)
*Eye-friendly dark theme for comfortable extended usage*

</div>

## 📦 Installation Steps

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/hotelraviteja/zenAI.git

# 2. Navigate to project directory
cd zenAI

# 3. Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# 4. Login to Firebase
firebase login

# 5. Initialize Firebase (if needed)
firebase init

# 6. Deploy to Firebase
firebase deploy
```

## 🎯 Real-World Applications

- **Customer Support**: Automated assistance for common queries
- **Educational Assistant**: Help students with homework and explanations
- **Content Creation**: Brainstorming and writing assistance
- **Code Helper**: Programming questions and debugging support
- **Personal Assistant**: Daily task management and reminders
- **Research Tool**: Quick information lookup and summarization

## 👨‍💻 My Role & Contributions

As the sole developer of zenAI, I:
- 🎨 Designed and implemented the entire UI/UX from scratch
- ⚙️ Integrated Google Gemini AI API for intelligent responses
- 🔐 Implemented secure Google Authentication with Firebase
- 💾 Developed conversation history storage using Firestore
- 📱 Ensured full responsiveness across all device sizes
- 🚀 Deployed and optimized the application on Firebase Hosting
- 🐛 Conducted extensive testing and debugging
- 📝 Created comprehensive documentation

## 🔗 Links & Resources

- 🌐 **Live Application**: [https://zen-ai-chat.web.app/](https://zen-ai-chat.web.app/)
- 📂 **GitHub Repository**: [https://github.com/hotelraviteja/zenAI](https://github.com/hotelraviteja/zenAI)
- 📖 **Gemini AI Documentation**: [https://ai.google.dev/docs](https://ai.google.dev/docs)
- 🔥 **Firebase Documentation**: [https://firebase.google.com/docs](https://firebase.google.com/docs)

## 🚧 Roadmap & Future Enhancements

- [ ] Voice input/output capabilities
- [ ] Multi-language support
- [ ] Image analysis integration
- [ ] Custom AI model fine-tuning
- [ ] Export conversation transcripts
- [ ] Advanced analytics dashboard
- [ ] Plugin system for extensibility

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact Information

**Developer**: Ravi Teja

- 🐙 **GitHub**: [@hotelraviteja](https://github.com/hotelraviteja)
- 📧 **Email**: hotelraviteja@example.com
- 💼 **Portfolio**: [hotelraviteja.github.io/Portfolio](https://hotelraviteja.github.io/Portfolio)
- 🔗 **LinkedIn**: [Connect with me](https://linkedin.com/in/hotelraviteja)

## 🙏 Acknowledgments

- Google Gemini AI team for the powerful API
- Firebase team for excellent hosting services
- Open source community for inspiration and support

---

⭐ **If you find zenAI useful, please consider giving it a star!** ⭐

Made with ❤️ by [Ravi Teja](https://github.com/hotelraviteja)
