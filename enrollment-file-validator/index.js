const fs = require('fs');
const path = require('path');

/* This function takes in the path of a file with csv data and do the following: 
	- Separate enrollees by insurance company into their own respective file
	- Sort all of the enrollees in ascending order by last and first name
	- If there are duplicate user IDs in the file, only the record with the highest version number
	  will be included
	- Write the data for each company into it's own respective file
*/

const readFile = (path) => {
	// Dynamically set file paths
	fs.readFile(
		path,
		{
			encoding: 'utf8',
		},
		(err, data) => {
			// the lines constant returns an array of string data where each index in the array pertains to a single enrollee's data
			const lines = data.split('\n');

			// an empty object that will hold the data for each enrollee
			let enrolleesByCompany = {};

			for (const line of lines) {
				const enrollee = {};

				// returns multiple arrays where each enrollee record is an array with each csv value is separated as string data within the array
				const values = line.split(',');

				// destructuring the string data from the [1] index in each array so that it can have it's own key/value pair within the enrollee object
				const [firstName, lastName] = values[1].split(' ');

				// building the key/value pairs that will make up the enrolee object
				enrollee['id'] = values[0];
				enrollee['firstName'] = firstName;
				enrollee['lastName'] = lastName;
				enrollee['version'] = values[2];
				enrollee['company'] = values[3];

				if (enrolleesByCompany[enrollee.company] === undefined) {
					enrolleesByCompany[enrollee.company] = {};
				}

				// the existingEnrollee object pertains to the record for an enrolee with the highest version number that also has a duplicate ID
				const existingEnrollee =
					enrolleesByCompany[enrollee.company][enrollee.id];

				if (existingEnrollee && existingEnrollee.version > enrollee.version) {
					continue;
				}

				// builds the enrolleesByCompany object with each enrollee object
				enrolleesByCompany[enrollee.company][enrollee.id] = enrollee;
			}

			for (const key in enrolleesByCompany) {
				// transforms the enrolleesByCompany object into an array and sort the first names in ascending order
				const content = Object.values(enrolleesByCompany[key])
					.sort((a, b) => {
						if (a.firstName < b.firstName) return -1;

						if (a.firstName > b.firstName) return 1;

						return 0;
					})
					.reduce((prev, content) => {
						const { id, firstName, lastName, version, company } = content;
						console.log(
							prev + `${id}, ${firstName} ${lastName}, ${version}, ${company}\n`
						);

						// return the records that will be used as data for each individual file that pertains to a company
						return (
							prev + `${id}, ${firstName} ${lastName}, ${version}, ${company}\n`
						);
					}, '');

				// this will generate files that pertain to each respective company in the csv text file
				fs.writeFile(`${key}.txt`, content, (error) => {
					console.log(error);
				});
			}
		}
	);
};

readFile('./example.txt');
