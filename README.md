# 🤖 AI-Powered Data Visualizer

Transform natural language queries into beautiful data visualizations using AI! This web application allows users to upload CSV files and create charts simply by describing what they want to see in plain English.

## ✨ Features

- **Natural Language Processing**: Describe your desired visualization in plain English
- **AI-Powered Analysis**: Uses DeepSeek AI to interpret queries intelligently
- **Smart Column Detection**: Automatically analyzes and categorizes columns as numeric or text
- **Interactive Column Tags**: Click on column names to insert them directly into your query
- **Data Preview**: View sample data and statistics before creating visualizations
- **Column Type Indicators**: Visual indicators showing which columns are numeric (🔢) or text (📝)
- **Dynamic Chart Generation**: Creates beautiful, interactive charts using Chart.js
- **Multiple Chart Types**: Supports pie, bar, line, and doughnut charts
- **CSV File Support**: Upload and analyze your own data files
- **Data Aggregation**: Automatically performs SUM, AVG, COUNT, MIN, MAX operations
- **Responsive Design**: Beautiful dark-themed UI that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- A DeepSeek API key ([Get one here](https://platform.deepseek.com/))

### Installation

1. **Clone or download this repository**
   ```bash
   cd "d:\REQ VISUAL"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create a `.env` file in the project root:
   ```bash
   copy .env.example .env
   ```
   
   Edit `.env` and add your DeepSeek API key:
   ```
   DEEPSEEK_API_KEY=your_actual_api_key_here
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to: `http://localhost:3000`

## 📖 How to Use

1. **Upload a CSV file**
   - Click the upload area or drag and drop your CSV file
   - The file should have column headers in the first row

2. **Review your data**
   - After upload, you'll see:
     - Data statistics (total rows, columns, numeric vs text columns)
     - Interactive column tags showing column names and types
     - A preview of the first 3 rows of data
   - Click on any column tag to insert it into your query

3. **Type your query**
   - Describe what you want to visualize in plain English
   - Use the column names shown in the tags
   - Examples:
     - "Show me total sales by country as a pie chart"
     - "Create a bar chart of average revenue by region"
     - "Display the count of users by category"

4. **Generate visualization**
   - Click the "Generate Visualization" button
   - The AI will analyze your query and data
   - A chart will be automatically created!

## 💡 Sample Queries

Try these queries with your data:

- "Show me total sales by country as a pie chart"
- "Create a bar chart of revenue by month"
- "Display average scores by category as a line chart"
- "Show me the count of users by region"

## 📂 Project Structure

```
AI-Data-Visualizer/
├── public/                 # Frontend files
│   ├── index.html         # Main HTML page
│   ├── styles.css         # Styling
│   └── app.js             # Frontend JavaScript
├── server/                # Backend files
│   └── routes/
│       └── visualize.js   # API route for visualization
├── server.js              # Express server entry point
├── package.json           # Node.js dependencies
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: DeepSeek AI (OpenAI-compatible API)
- **Charting**: Chart.js
- **CSV Parsing**: PapaParse
- **File Upload**: Multer

## 🔒 Security Notes

- API keys are stored in `.env` and never exposed to the frontend
- All AI processing happens on the backend
- File uploads are limited to 10MB
- Only CSV files are accepted

## 🐛 Troubleshooting

### Server won't start
- Make sure you've run `npm install`
- Check that your `.env` file exists and contains a valid DeepSeek API key
- Ensure port 3000 is not already in use

### "Failed to generate visualization" error
- Verify your DeepSeek API key is correct and active
- Check that your CSV file has proper headers
- Make sure your query clearly describes the chart type and columns
- Ensure column names in your query match those shown in the column tags

### CSV parsing errors
- **Delimiter issues**: The app supports comma, semicolon, tab, and pipe delimiters
- **Empty file**: Ensure your CSV has at least a header row and one data row
- **Missing headers**: First row must contain column names
- **Inconsistent columns**: All rows should have the same number of columns
- **Special characters**: Save your file with UTF-8 encoding

## 📝 CSV File Format

Your CSV file should:
- Have column headers in the first row
- Use one of these delimiters: **comma (,)**, **semicolon (;)**, **tab**, or **pipe (|)**
- The delimiter will be auto-detected
- Contain numeric data in columns you want to aggregate
- Have text/categorical data for labels
- Be saved with UTF-8 encoding for special characters

Example CSV formats:

**Comma-delimited:**
```csv
country,sales,year
USA,5000,2023
Canada,3000,2023
```

**Semicolon-delimited:**
```csv
Product;Category;Price;Stock
Laptop;Electronics;999.99;50
Mouse;Electronics;29.99;200
```

**Pipe-delimited:**
```csv
Region|Sales|Employees
North America|125000|45
Europe|98000|38
```

### Sample Files Included:
- `sample-data.csv` - Comma-delimited
- `sample-data-semicolon.csv` - Semicolon-delimited
- `sample-data-pipe.csv` - Pipe-delimited

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- DeepSeek AI for powerful AI-powered query interpretation
- Chart.js for beautiful chart rendering
- PapaParse for reliable CSV parsing

## 📧 Support

If you encounter any issues or have questions, please check the troubleshooting section or create an issue in the repository.

---

**Made with ❤️ using DeepSeek AI, Chart.js, and Node.js**
