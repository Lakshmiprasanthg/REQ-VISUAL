# CSV File Troubleshooting Guide

## Common CSV Issues and Solutions

### ❌ "Error parsing CSV file: Unable to auto-detect delimiting character"

**Cause:** The CSV parser couldn't automatically detect the delimiter in your file.

**Solutions:**
1. **Check your delimiter:** Open your CSV in a text editor (Notepad, VS Code) and verify:
   - Comma (,) separated: `column1,column2,column3`
   - Semicolon (;) separated: `column1;column2;column3`
   - Tab separated: `column1    column2    column3`
   - Pipe (|) separated: `column1|column2|column3`

2. **Fix inconsistent delimiters:** Ensure all rows use the same delimiter
   ```
   ❌ BAD:
   name,age,city
   John,30;New York  ← Mixed delimiters
   
   ✅ GOOD:
   name,age,city
   John,30,New York
   ```

3. **Remove extra lines:** Delete empty rows at the start or end of the file

4. **Check for quoted values:** If values contain the delimiter, they should be quoted
   ```
   name,description
   "Widget A","High quality, durable item"
   ```

### ❌ "CSV file is empty or could not be parsed"

**Solutions:**
- Ensure the file has at least 2 rows (header + data)
- Remove any blank lines at the beginning
- Check file encoding (should be UTF-8)

### ❌ "CSV file must have header row with column names"

**Solutions:**
- Add a header row as the first line
- Ensure headers don't contain only numbers
- Remove any rows before the header

Example:
```csv
✅ CORRECT:
ProductName,Price,Quantity
Widget,29.99,100

❌ INCORRECT (no header):
Widget,29.99,100
Gadget,49.99,50
```

### 🔧 How to Fix Your CSV File

#### Method 1: Using Excel/Google Sheets
1. Open your file in Excel or Google Sheets
2. Ensure first row contains column headers
3. File → Save As → CSV (Comma delimited) (*.csv)
4. Choose UTF-8 encoding if available

#### Method 2: Using Text Editor
1. Open file in Notepad/VS Code
2. Check the first line has column names separated by commas
3. Verify all data rows use the same delimiter
4. Save with UTF-8 encoding

#### Method 3: Using Excel - Fix Delimiter
If your CSV uses semicolons or other delimiters:
1. Open in Excel
2. Data → Text to Columns
3. Choose "Delimited" → Next
4. Select your delimiter (comma, semicolon, etc.)
5. Finish → Save As CSV

### 📋 CSV Best Practices

✅ **DO:**
- Use consistent delimiters throughout the file
- Include clear, descriptive column headers
- Use UTF-8 encoding for international characters
- Quote values that contain commas, quotes, or newlines
- Keep data types consistent within columns

❌ **DON'T:**
- Mix different delimiters in the same file
- Start with empty rows
- Use special characters in column headers
- Leave trailing commas at end of rows
- Include merged cells or formulas

### 🧪 Test Your CSV

Before uploading, verify your CSV has:
- [ ] Header row with column names
- [ ] Consistent delimiter (comma, semicolon, tab, or pipe)
- [ ] At least one data row
- [ ] Same number of columns in all rows
- [ ] No empty rows at the beginning

### 📊 Example Valid CSV Files

**Simple format:**
```csv
name,age,city
Alice,28,Boston
Bob,35,Seattle
Carol,42,Austin
```

**With numeric data:**
```csv
product,category,price,stock
Laptop,Electronics,999.99,50
Mouse,Electronics,29.99,200
```

**With quoted values:**
```csv
title,description,price
"Widget Pro","High quality, made in USA",49.99
"Gadget Max","Compact size, powerful",79.99
```

### 🆘 Still Having Issues?

If you continue to have problems:
1. Open your CSV in a text editor (not Excel)
2. Copy the first 5 lines
3. Check against the examples above
4. Verify the delimiter is consistent
5. Try one of our sample files first to ensure the app is working:
   - `sample-data.csv`
   - `sample-data-semicolon.csv`
   - `sample-data-pipe.csv`

### 🔍 Debugging Steps

1. **Open browser console** (F12)
2. Upload your file
3. Check console for detailed error messages
4. Look for:
   - Delimiter detection info
   - Row count
   - Column names detected

The console will show: `CSV loaded successfully: { rows: X, columns: [...], delimiter: ',' }`
