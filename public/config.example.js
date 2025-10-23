// config.example.js
// Copy this file to config.js and fill in your actual credentials
// NEVER commit config.js to version control!

/**
 * ⚠️ SECURITY WARNING ⚠️
 * 
 * This is an EXAMPLE configuration file.
 * To use this application:
 * 
 * 1. Copy this file to 'config.js' in the same directory
 * 2. Fill in your actual API credentials in config.js
 * 3. Make sure config.js is listed in .gitignore
 * 4. NEVER commit config.js to your repository
 * 
 * For production deployments:
 * - Use environment variables or backend proxy
 * - Implement Firebase Functions or similar serverless solution
 * - Keep API keys server-side only
 * - See README.md for detailed security recommendations
 */

window.CONFIG = {
  // Get your Gemini API key from: https://makersuite.google.com/app/apikey
  GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
  
  // Get your Google Client ID from: https://console.cloud.google.com/apis/credentials
  GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com'
};

// Validate configuration
if (window.CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE' || 
    window.CONFIG.GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com') {
  console.error('⚠️ Configuration Error: Please copy config.example.js to config.js and add your actual API credentials.');
  console.error('See README.md for instructions on how to obtain API keys.');
}
