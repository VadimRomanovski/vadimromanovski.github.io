const contacts = [{
    name: "John",
    phone: "+2342344234",
    id: 1,
}, {
    name: "Lera",
    phone: "+3456345464",
    id: 2,
}, {
    name: "Elis",
    phone: "+5645645764",
    id: 3,
}];


function createAllContacts() {
    const allContacts = document.querySelector('.allContacts');
    allContacts.innerHTML = "";
    const fragment = document.createDocumentFragment();

    contacts.forEach(function(item, index, arr) {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add("contact");
        contactDiv.innerHTML = `<div class = "n">Name:<span class = "nameSpan">${item.name}</span><button class = "xButton">remove</button></div><div class = "p">Phone:${item.phone}</div>`;
        fragment.appendChild(contactDiv);

    });

    console.log(xButton);
    allContacts.appendChild(fragment);

};

createAllContacts();
	
	
	
	
	
