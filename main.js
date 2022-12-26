const contacts = [
    {
        name: "siggi",
        email: "siggi@bla.is"
    },
    {
        name: "gunna",
        email: "gunna@bla.is"
    },
    {
        name: "jón",
        email: "jon@bla.is"
    },
    {
        name: "helga",
        email: "helga@bla.is"
    },
    {
        name: "sveinn",
        email: "sveinn@bla.is"
    }
]

// Add contact
// I use for loops to run through the array
 
const add = (contact) => {
 
    for(let i=0;i<contacts.length;i++){ // Here I define the i. The property "length" sets the number of elements in the array
 
        if(contacts.email===contacts[i].email){ // If the new contact matches an already existing contact in the array
        console.log("duplicate was found")
        }
    }
    if(!contact.name || !contact.email){ // If the new name and email do not match any already existing name or email on the array
    }
}
 
console.log("was added")
contacts.push({name:"Pétur", email:"petur@bla.is"}) // Push adds the new element to the back of the list
 
 
// Remove contact
const remove = (email) => {
 
    for(let i=0;i<contacts.length;i++){
        if(email===contacts[i].email){ // If the email already exists in the list
            contacts.splice(i,1);
            console.log("was removed")
        }
    }
    if(!email.contacts){ // If the email does not exist in the list
        console.log("contact not found")
    }
}
remove("siggi@bla.is")
 
 
// Edit contact
const edit = (email) => {
 
    if(!email.contacts){
        console.log("contact not found")
    }
}
 
const removed = contacts.splice(1, {name:"Jón", email:"jon1@bla.is"}); // Here I use splice to remove the contact in place 1 and replace it with new data
 
 
// Get email
console.log(contacts[2]) // Getting element nr. 2 in the list
 
 
// List all
console.log(contacts)
 
 
//Clear all
while(contacts.length > 0) {
    contacts.pop(); // Pop removes the last elements in the array and because I set length > 0, it will remove every element one by one
}
console.log("The contact list was cleared")
 
// Another way to clear the list could be:
// contacts.splice(0,contacts.length);
 