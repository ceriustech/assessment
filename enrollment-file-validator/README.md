# Homework Assignment

### Coding Exercise

Company A receives enrollment files from various benefits management and enrollment solutions (I.e. HR platforms, payroll platforms). Most of these files are typically in EDI format. However, there are some files in CSV format.

For the files in CSV format, write a program in a language that seems appropriate to you that will read the content of the file and separate enrollees by insurance company in its own file. Additionally, sort the contents of each file by last and first name (ascending). Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included.

**The following data points are included in the file:**

- User Id (string)
- First and Last Name (string)
- Version (integer)
- Insurance Company (string)

### Running the Program

In order to run this program you'll need to pass the path of the .txt file that will be used into the function call.

Also, please not that the contents of the .txt file is in csv format.

**\*I did this in Node.js**
