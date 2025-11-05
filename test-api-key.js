require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

async function testGeminiAPIKey() {
    console.log('🔍 Testing Gemini API Key...\n');
    
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Check if API key exists
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        console.log('❌ No valid API key found in .env file');
        console.log('Please add your Gemini API key to the .env file');
        console.log('Get one at: https://aistudio.google.com/app/apikey\n');
        return false;
    }
    
    console.log('✅ API key found');
    console.log(`📝 Key: ${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 4)}\n`);
    
    // Test the API key with a simple request
    try {
        const genAI = new GoogleGenAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });
        
        console.log('🌐 Making test request to Gemini API...\n');
        
        const result = await model.generateContent('Say "API key is valid!" if you can read this.');
        const response = await result.response;
        const text = response.text();
        
        console.log('✅ API KEY IS VALID! 🎉\n');
        console.log('📨 API Response:', text);
        console.log('\n✨ Your API key is working correctly!');
        console.log('🚀 You can now start the server with: npm start\n');
        
        return true;
        
    } catch (error) {
        console.log('❌ API KEY VALIDATION FAILED\n');
        
        if (error.message.includes('API key not valid') || error.message.includes('API_KEY_INVALID')) {
            console.log('🔒 Error: Invalid API Key');
            console.log('   The API key is not recognized by Google Gemini.');
            console.log('\n💡 Solutions:');
            console.log('   1. Get a new API key at: https://aistudio.google.com/app/apikey');
            console.log('   2. Make sure you copied the entire key');
            console.log('   3. Check that the key is active and not expired');
        } else if (error.message.includes('quota') || error.message.includes('429')) {
            console.log('⏱️  Error: Rate Limit Exceeded');
            console.log('   You have exceeded your API quota or rate limit.');
        } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
            console.log('🌐 Error: Network Connection Failed');
            console.log('   Cannot reach Google Gemini API servers.');
            console.log('\n💡 Check your internet connection');
        } else {
            console.log('⚠️  Error:', error.message);
            console.log('\nFull error details:');
            console.log(error);
        }
        
        return false;
    }
}

// Run the test
testGeminiAPIKey()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('❌ Unexpected error:', err);
        process.exit(1);
    });
