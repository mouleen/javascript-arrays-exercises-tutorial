let contact = {
    fullName: "John Doe",
    phone: "123-123-2134",
    email: "test@nowhere.com"
}

// Your code here
for (let key in contact) {
    let aux=key+' : '+contact[key];
    console.log(aux);
}

