const fs = require('fs');

// /*
//   const values = Object.values(enrolleesByCompanies['company_1']);

//   const obj = { email: '...', firstName: '...', location: '...' }

//   const enrolleesByCompany = {
//     'company_1': {
//       '13': {
//         id,
//         firstName,
//         lastName,
//         versionId,
//         company
//       },
//       '33': {
//         id,
//         firstName,
//         lastName,
//         versionId,
//         company
//       }
//     }
//   }
// */

// const enrolleesByCompany = {
// 	sunnyshine: {
// 		3: {
// 			id: 3,
// 			firstName: 'John',
// 			lastName: 'Logan',
// 			version: 4,
// 			company: 'sunnyshine',
// 		},
// 		4: {
// 			id: 4,
// 			firstName: 'Paul',
// 			lastName: 'Irvine',
// 			version: 7,
// 			company: 'sunnyshine',
// 		},
// 	},
// };

// console.log(Object.values(enrolleesByCompany.company_1));

const readFile = (path) => {
	fs.readFile(
		'./example.txt',
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
				const enrollees = Object.values(enrolleesByCompany[key])
					.sort((a, b) => {
						if (a.firstName < b.firstName) return -1;

						if (a.firstName > b.firstName) return 1;

						return 0;
					})
					.reduce((prev, enrollee) => {
						const { id, firstName, lastName, version, company } = enrollee;
						return (
							prev + `${id}, ${firstName} ${lastName}, ${version}, ${company}\n`
						);
					}, '');
				console.log(enrollees);
			}

			// transform the object into an array

			//
		}
	);
};

readFile();
