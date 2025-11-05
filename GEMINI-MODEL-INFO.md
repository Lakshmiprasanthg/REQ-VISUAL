# Gemini API Model Update

## Current Model Configuration

The application now uses **`gemini-1.5-flash`** as the AI model.

### Why the Change?

Google has updated the Gemini API, and the older model names are no longer available:
- ❌ `gemini-pro` - Deprecated (404 Not Found)
- ❌ `gemini-1.5-pro-latest` - Not available in API v1
- ✅ `gemini-1.5-flash` - Current working model

### Available Gemini Models (as of November 2025)

1. **gemini-1.5-flash** ⚡ (Currently used)
   - Fast and efficient
   - Good for quick responses
   - Suitable for data visualization tasks

2. **gemini-1.5-pro** 🚀
   - More advanced reasoning
   - Better for complex queries
   - May be slower

### How to Change the Model

If you want to use a different model, edit `server/routes/visualize.js` line 213:

```javascript
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
```

Change `"gemini-1.5-flash"` to your preferred model name.

### Troubleshooting Model Errors

If you see errors like:
```
models/[model-name] is not found for API version v1
```

**Solutions:**
1. Check the [Gemini API documentation](https://ai.google.dev/models/gemini) for available models
2. Update your `@google/generative-ai` package:
   ```bash
   npm update @google/generative-ai
   ```
3. Verify your API key is valid and has access to the model

### Server Restart Required

After changing the model name, restart the server:
```bash
npm start
```

Or stop and restart using:
```bash
# Windows PowerShell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
npm start
```
