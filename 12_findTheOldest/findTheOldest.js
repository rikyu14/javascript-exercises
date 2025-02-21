const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const personDeathYear = person.yearOfDeath || currentYear;
        const oldestDeathYear = oldest.yearOfDeath || currentYear;

        const personAge = personDeathYear - person.yearOfBirth;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
