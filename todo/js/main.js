const todo = [{
    title: "111",
    priority: "Low",
    hour: "23:32",
    date: "12.01.2020",
    task: "321",
    forsort: ""
},
{
    title: "222",
    priority: "Medium",
    hour: "23:32",
    date: "12.02.2020",
    task: "321",
    forsort: ""
},
{
    title: "333",
    priority: "High",
    hour: "23:32",
    date: "12.03.2020",
    task: "321",
    forsort: ""
}

];

const complete = [


];

const currentTasks = document.querySelector("#currentTasks");
const completedTasks = document.querySelector("#completedTasks");
const spantodo = document.querySelector(".spantodo");
const spancomplete = document.querySelector(".spancomplete");
const fragmentTodo = new DocumentFragment();
const fragmentCompleted = new DocumentFragment();

const drawCompleted = () => {
completedTasks.innerHTML = "";
complete.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex w-100 mb-2";
    li.innerHTML = `
    <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between titleArea">
                    <h5 class="mb-1 forTitle">${item.title}</h5>
                    <input class="d-none mb-1 forTasks"></input>
                    <div>
                        <small class="mr-2">${item.priority} priority</small>
                        <small>${item.hour} ${item.date}</small>
                    </div>

                </div>
                <p class="mb-1 w-100">${item.task}</p>
                <input class="d-none mb-1 forText"></input>
            </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-danger w-100 complete">Delete</button>
                </div>
            </div>
    `;
    fragmentCompleted.append(li);
});
completedTasks.append(fragmentCompleted);

spancomplete.innerHTML="";
spancomplete.innerHTML = "("+complete.length+")" 

const deleteButton = document.querySelectorAll(".complete");
deleteButton.forEach((item, index) => {
    item.addEventListener("click", () => {
        complete.splice(index, 1);
        drawCompleted();
    })
});

}

drawCompleted();

const drawTasks = (array) => {
currentTasks.innerHTML = "";
array.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = `list-group-item d-flex w-100 mb-2 ${item.color}`;
    li.innerHTML = `
    <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between titleArea">
                    <h5 class="mb-1 forTitle">${item.title}</h5>
                    <input class="d-none mb-1 forTasks"></input>
                    <div>
                        <small class="mr-2">${item.priority} priority</small>
                        <small>${item.hour} ${item.date}</small>
                    </div>

                </div>
                <p class="mb-1 w-100">${item.task}</p>
                <input class="d-none mb-1 forText"></input>
            </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-success w-100">Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2 ">Edit</button>
                    <button type="button" class="btn btn-danger w-100">Delete</button>
                </div>
            </div>
    `;
    fragmentTodo.append(li);
});
currentTasks.append(fragmentTodo);

spantodo.innerHTML="";
spantodo.innerHTML = "("+todo.length+")"

const deleteButton = document.querySelectorAll(".btn-danger");
deleteButton.forEach((item, index) => {
    item.addEventListener("click", () => {
        array.splice(index, 1);
        drawTasks(array);
    })
});

const editButton = document.querySelectorAll(".btn-info");
const forTitle = document.querySelectorAll(".forTitle");
const inputTitle = document.querySelectorAll(".forTasks");
const inputText = document.querySelectorAll(".forText");
const p = document.querySelectorAll("p");
editButton.forEach((item, index) => {
    item.addEventListener("click", () => {
        forTitle[index].classList.add("d-none");
        p[index].classList.add("d-none");
        inputTitle[index].classList.remove("d-none");
        inputText[index].classList.remove("d-none");
        inputTitle[index].value = array[index].title;
        inputText[index].value = array[index].task;
        inputTitle[index].onblur = (e) => {
            array[index].title = e.target.value;
            drawTasks(array);
        };
        inputText[index].onblur = (e) => {
            array[index].task = e.target.value;
            drawTasks(array);
        };
    });
});

const completeButton = document.querySelectorAll(".btn-success");
completeButton.forEach((item, index) => {
    item.addEventListener("click", () => {
        const elem = array.splice(index, 1);
        complete.push(elem[0]);
        drawTasks(array);
        drawCompleted();
        console.log(array);
        console.log(complete);
    })
})


};

drawTasks(todo);

const button = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const titlePlace = document.getElementById("inputTitle");


const newTask = () => {
    const title = form.title.value;
    const text = form.text.value;
    const check = form.gridRadios.value;
    const color = form.color.value;
    // const todo = JSON.parse(localStorage.getItem("todo"));
    const date = new Date;
    const hour = date.getHours();
    const min = date.getMinutes();
    const dte = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    todo.push({
        title: title,
        priority: check,
        hour: hour + ":" + min,
        date: dte + "." + month + "." + year,
        task: text,
        color: color,
        forsort: ""

    });
    // localStorage.setItem("todo", JSON.stringify(todo)); 

};
button.addEventListener("click", e => {
    e.preventDefault();
    newTask();
    drawTasks(todo);
})

const filterDate = document.querySelector(".filterDate");
const filterPriority = document.querySelector(".filterPriority")
const az = document.querySelector(".az")
const za = document.querySelector(".za")

filterDate.addEventListener("click", () => {
az.addEventListener("click", () => {

    let sortByDate = todo.sort((a, b) => {
        a = new Date(a.date)
        b = new Date(b.date)
        return a - b
    });
    drawTasks(sortByDate)

})

za.addEventListener("click", () => {

    let sortByDate = todo.sort((a, b) => {
        a = new Date(a.date)
        b = new Date(b.date)
        return b - a
    });
    drawTasks(sortByDate)

});

});

const forSort = () => {
todo.forEach((item, index) => {
    if (item.priority == "Low") {
        item.forsort = "1"
    }
    if (item.priority == "Medium") {
        item.forsort = "2"
    }
    if (item.priority == "High") {
        item.forsort = "3"
    }
});
};

filterPriority.addEventListener("click", () => {

forSort()

let sortByPriority = todo.sort((a, b) => {
    if (a.forsort < b.forsort) {
        return 1;
    }
    if (a.forsort > b.forsort) {
        return -1;
    }
    return 0;
});
drawTasks(sortByPriority);

});