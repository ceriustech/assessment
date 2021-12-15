// Read the contents of example.txt

const fs = require('fs');

fs.readFile(
	'./example.txt',
	{
		encoding: 'utf8',
	},
	(err, data) => {
		const lines = data.split('\n');
		// id,firstName lastName,versionId,company
		// str.split(',')[2]

		const enrollee = {};

		for (const line of lines) {
			console.log(line);
		}
		// enrollee['id'] =
	}
);

/*
  const enrolleesByCompany = {
    'company_1': {
      'user_id': {
        id,
        firstName,
        lastName,
        versionId,
        company
      }
    }
  }

  When we start writing to our output file

  Loop over keys in object
  Get array of values for specified company
  Call a sort method to sort the enrollee of said company

*/

// Group enrollees by company

// Generate a new file for each respective comnpany (if file doesn't exist)

// Sort enrollees in ascending order by last and first name

// If there are duplicate user IDs for the same company
