let contacts = [
		{
		name: "John",
		phone: "+2342344234",
		id: 0,
		},
		{
		name: "Lera",
		phone: "+3456345464",
		id: 1,
		},
		{
		name: "Elis",
		phone: "+5645645764",
		id: 2,
		}
		];
		
		
	function createAllContacts(){
			let allContacts = document.querySelector('.allContacts');
			allContacts.innerHTML = "";
			contacts.forEach(function(item, index, arr){
					let allContacts = document.querySelector('.allContacts');
					let contactDiv = document.createElement('div');
					contactDiv.classList.add("contact");
					contactDiv.innerHTML = `<div class = "n">Name:<span class = "nameSpan">${item.name}</span><button class = "xButton">remove</button></div><div class = "p">Phone:${item.phone}</div>`;
					allContacts.appendChild(contactDiv);
					
					});
				};
				
	createAllContacts();
	
	
	
	
	
	
		
	
	