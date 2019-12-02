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
}, {
	name: "Eleonora",
	phone: "+5645645764",
	id: 4,
}, {
	name: "Jorj",
	phone: "+5645645764",
	id: 5,
}];

const input = document.querySelector('input');
const main = document.querySelector('.main');

function createAllContacts(array) {
	const allContacts = document.querySelector('.allContacts');
	allContacts.innerHTML = "";
	const fragment = document.createDocumentFragment();
	array.forEach(function (item, index, arr) {
		const contactDiv = document.createElement('div');
		contactDiv.classList.add("contact");
		contactDiv.innerHTML = `
            <div class = "n">
                Name:<span class = "nameSpan">${item.name}</span>
                <button class = "xButton">remove</button>
            </div>
            <div class = "p">Phone:${item.phone}</div>
        `;
		fragment.appendChild(contactDiv);
	});
	allContacts.appendChild(fragment);
	const removeButton = document.querySelectorAll('.xButton');
	removeButton.forEach(function (item, index) {
		item.addEventListener('click', function () {
			array.splice(index, 1);
			createAllContacts(array);
		});

	});
};
createAllContacts(contacts);



input.addEventListener('input', function () {
	const filterContacts = contacts.filter(function (item) {
		return item.name.toLowerCase().includes(input.value.toLowerCase());
	})
	createAllContacts(filterContacts);
})

function newContactFields() {
	document.querySelector('h2').innerHTML = 'New Contact';
	document.querySelector('#srch').classList.add('hide');
	document.querySelector('#addContact').classList.add('hide');
	const allContacts = document.querySelector('.allContacts');
	allContacts.innerHTML =`
<form action="" method="post" name="test" >
   <Input type="text" name="name" placeholder="enter name" id="name"><span class="nameField"></span></br></br>
   <Input type="text" name="phone" placeholder="enter phone" id="phone"><span class="phoneField"></span></br></br>
   <input type="submit" name="submit" value="ADD" id="ADD">
</form>
`;


	function correct(form) {
		let name = form.name.value;
		let phone = form.phone.value;
		const nameField = document.querySelector('.nameField');
		const phoneField = document.querySelector('.phoneField');
		const bordername = document.querySelector('#name');
		const borderphone = document.querySelector('#phone');
		if (!name) {
			nameField.innerText = " " + "Name field is empty";
			bordername.classList.add("border");
		} else if (!name.match(/[a-zA-Z]/g)) {
			nameField.innerText = " " + "Name should contain only letters";
			bordername.classList.add("border");
		} else if (!phone) {
			phoneField.innerText = " " + "Phone field is empty";
			borderphone.classList.add("border");
		} else if (!phone.match(/^\d+$/)) {
			phoneField.innerText = " " + "Phone should contain only digits";
			borderphone.classList.add("border");
		} else {
			contacts.push({
 			 id: contacts.length + 1,
 			 name: name,
			 phone: phone,
			 });
			console.log(contacts);
			history.back();
		};
	};
	var form = document.querySelector('form');
	var submit = document.querySelector('#ADD');
	var sendForm = function (event) {
		event.preventDefault();
		correct(form);
	};
	submit.addEventListener("click", sendForm);
}


document.querySelector('#addContact').addEventListener('click', function (e) {
	e.preventDefault();
	window.history.pushState(null, null, '/new-contact');
	newContactFields();
});

window.addEventListener('popstate', function (e) {
	document.querySelector('h2').innerHTML = 'Contact list'
	document.querySelector('#srch').classList.remove('hide');
	document.querySelector('#addContact').classList.remove('hide');
	createAllContacts(contacts);
});