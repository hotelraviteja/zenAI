# 🤖 zenAI - Intelligent AI Chatbot Platform

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://zen-ai-chat.web.app/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosted-orange)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Powered%20by-Gemini%20AI-blue)](https://ai.google.dev/)

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
- **Firebase Hosting** - Web application deployment
- **Firebase Authentication** - User authentication management
- **Firebase Firestore** (Optional) - Database for conversation storage

### Development Tools
- **Git** - Version control
- **Firebase CLI** - Deployment and testing
- **VS Code** - Development environment

## 📦 Installation Steps

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase account
- Google Cloud account with Gemini API access

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
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   ```

4. **Set Up Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. **Get Your Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env` file

6. **Run Locally**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open `http://localhost:5173` in your browser

7. **Build for Production**
   ```bash
   npm run build
   ```

8. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 🚀 Usage Instructions

### Basic Usage

1. **Access the Application**
   - Visit [https://zen-ai-chat.web.app/](https://zen-ai-chat.web.app/)
   - Or run locally at `http://localhost:5173`

2. **Sign In**
   - Click the "Sign in with Google" button
   - Authorize the application

3. **Start Chatting**
   - Type your message in the input field
   - Press Enter or click Send
   - Receive intelligent AI-generated responses

4. **Manage Conversations**
   - Start new conversations with the "New Chat" button
   - View conversation history in the sidebar
   - Delete unwanted conversations

### Advanced Features

- **Multi-turn Conversations**: Ask follow-up questions for deeper discussions
- **Code Assistance**: Request help with programming questions
- **Creative Writing**: Generate stories, poems, or content ideas
- **Information Retrieval**: Ask factual questions on various topics

## ⚠️ Security Best Practices

**IMPORTANT SECURITY NOTICE:**

This repository contains example code. **DO NOT expose API keys in production!**

### Production Security Checklist:

✅ **Never commit API keys** to version control
✅ **Use environment variables** (`.env` files)
✅ **Add `.env` to `.gitignore`**
✅ **Implement backend proxy** for API calls
✅ **Use Firebase Functions** or serverless solutions
✅ **Enable API key restrictions** in Google Cloud Console
✅ **Implement rate limiting** to prevent abuse
✅ **Use Firebase Security Rules** for database access

### Secure API Implementation

```javascript
// ❌ WRONG - Don't hardcode keys
const API_KEY = "AIza...";

// ✅ CORRECT - Use environment variables
const API_KEY = process.env.VITE_GEMINI_API_KEY;
```

## 📸 Screenshots

### Main Chat Interface
![zenAI Chat Interface](https://via.placeholder.com/800x450?text=Chat+Interface+Screenshot)

### Mobile Responsive View
![Mobile View](https://via.placeholder.com/400x700?text=Mobile+View+Screenshot)

### Authentication Flow
![Google Sign-In](https://via.placeholder.com/600x400?text=Authentication+Screenshot)

*Note: Add actual screenshots to enhance visual appeal*

## 🎯 Real-World Applications

- **Customer Support**: Automated response system for common queries
- **Educational Assistant**: Help students with homework and learning
- **Content Creation**: Brainstorming and writing assistance
- **Personal Productivity**: Task planning and information lookup
- **Programming Help**: Code debugging and explanation

## 👨‍💻 My Role & Contributions

As the **Lead Developer** of zenAI, I was responsible for:

- 🏗️ **Architecture Design**: Planned and implemented the entire application structure
- 💻 **Full-Stack Development**: Built frontend interface and integrated backend services
- 🔌 **API Integration**: Seamlessly integrated Google Gemini AI API
- 🎨 **UI/UX Design**: Created intuitive, modern user interface
- 🚀 **Deployment**: Set up Firebase hosting and CI/CD pipeline
- 🔒 **Security Implementation**: Implemented authentication and data protection
- 📝 **Documentation**: Comprehensive code documentation and user guides

## 🔗 Links & Resources

- **Live Demo**: [https://zen-ai-chat.web.app/](https://zen-ai-chat.web.app/)
- **Repository**: [https://github.com/hotelraviteja/zenAI](https://github.com/hotelraviteja/zenAI)
- **Portfolio**: [hotelraviteja.github.io/Portfolio](https://hotelraviteja.github.io/Portfolio)
- **Gemini AI Documentation**: [https://ai.google.dev/](https://ai.google.dev/)
- **Firebase Documentation**: [https://firebase.google.com/docs](https://firebase.google.com/docs)

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
