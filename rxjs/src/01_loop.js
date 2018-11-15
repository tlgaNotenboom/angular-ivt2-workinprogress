/*
The oldest style of programming is imperative. Here you loop
through the data explicitly with for.
*/

// use fake data for users
const {generate_users} = require('./data');

// generate an array of users before doing any filtering
let users = generate_users();

// see all users
console.log(users);

// loop over each user and check if they match the criteria
for(let user of users) {
    // filter on country
    if(user.country === 'Netherlands') {
        // filter on job title
        if(user.jobTitle.includes('Manager')) {
            // map user to their name
            let name = user.firstName + ' ' + user.lastName;
            // filter on name length
            if(name.length > 16) {
                // log the name if it matches
                console.log(name);
            }
        }
    }
}
