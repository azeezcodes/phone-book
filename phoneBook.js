const phone_Book = [
    { firstName: "Ekene", lastName: "Love", phoneNumber: "07060748361" }
]

const phoneBook = (firstName, lastName, phoneNumber) => {
    const info = {}
    info["firstName"] = firstName;
    info["lastName"] = lastName;
    info["phoneNumber"] = phoneNumber;
    return phone_Book.push(info)
}

console.log(phoneBook("Paul", "Akerejola", "08098777876"))
console.log(phoneBook("AZ", "Onipe", "0708785867"))

console.log(phone_Book)



/* Search contact from the phoneBook */
const findContactInfo = searchQuery => {
    let search = phone_Book.filter(item => {
        //console.log(item)
        return item.firstName == searchQuery || item.lastName == searchQuery || item.phoneNumber == searchQuery
    })
    return search
}


console.log(findContactInfo("Akerejola"))