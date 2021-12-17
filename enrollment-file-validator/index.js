const fs = require('fs');
const path = require('path');

/* This function takes in the path of a file with csv data and do the following: 
	- Separate enrollees by insurance company into their own respective file
	- Sort all of the enrollees in ascending order by last and first name
	- If there are duplicate user IDs in the file, only the record with the highest version number
	  will be included
*/

const readFile = (path) => {
	fs.readFile(
		path,
		{
			encoding: 'utf8',
		},
		(err, data) => {
			const lines = data.split('\n');

			let enrolleesByCompany = {};

			for (const line of lines) {
				const enrollee = {};
				const values = line.split(',');
				const [firstName, lastName] = values[1].split(' ');

				enrollee['id'] = values[0];
				enrollee['firstName'] = firstName;
				enrollee['lastName'] = lastName;
				enrollee['version'] = values[2];
				enrollee['company'] = values[3];

				if (enrolleesByCompany[enrollee.company] === undefined) {
					enrolleesByCompany[enrollee.company] = {};
				}

				const existingEnrollee =
					enrolleesByCompany[enrollee.company][enrollee.id];
				if (existingEnrollee && existingEnrollee.version > enrollee.version) {
					continue;
				}

				enrolleesByCompany[enrollee.company][enrollee.id] = enrollee;
			}

			for (const key in enrolleesByCompany) {
				const content = Object.values(enrolleesByCompany[key])
					.sort((a, b) => {
						if (a.firstName < b.firstName) return -1;

						if (a.firstName > b.firstName) return 1;

						return 0;
					})
					.reduce((prev, content) => {
						const { id, firstName, lastName, version, company } = content;
						return (
							prev + `${id}, ${firstName} ${lastName}, ${version}, ${company}\n`
						);
					}, '');
				console.log(content);
				fs.writeFile(`${key}.txt`, content, (error) => {
					console.log(error);
				});
			}
		}
	);
};

readFile('./example.txt');
