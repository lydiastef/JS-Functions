const contacts = [
    {
        name: "siggi",
        email: "siggi@bla.com"
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

const add = (contacts)=>{

    for(let i=0;i<contacts.length;i++){
        if(contacts.email===contacts[i].email){
            console.log("Duplicate was found")
            return;
        }
        add({email:"petur@bla.is", name:"Pétur"})
    }

    if(!contact.email || !contact.name){
        console.log("Missing fields")
        return;
    }

    contacts.push(contact);
    console.log("was added");

}
console.log("after add")

const remove =(email)=>{
    for(let i=0;i<email.length;i++){
        if(email===contacts[i].email){
        contacts.splice(i,1);
        console.log("Was removed");
        }
    }

    if(!contact.email){
        console.log("Contact not found")
        return;
    }

    remove({"jon@bla.is"})
}

const edit = (email, newData)=>{
    for(let i=0;<contacts.length;i++){
        if()
    }
}