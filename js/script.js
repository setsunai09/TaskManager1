const formAddTask = document.getElementById("form-add-task") //форма создания новой задачи
const inputTask = document.getElementById("name") //элемент, куда пользователь вводит название новой задачи
const container = document.querySelector(".tasks") //контейнер со списком задач
let tasks = [] //массимв задач

//функционал добавления задач
formAddTask.addEventListener("submit", function (event) {
    event.preventDefault() //отменяется событие по умолчанию
    console.log(event)
    let nameTask = inputTask.value //считываем, что пользователь ввел в название задачи
    let newTask = document.createElement("div") //создаем пустой див для задач
    newTask.innerHTML = `<span>${nameTask}</span>` //добавляем текст задачи в див
    newTask.classList.add(`task`) //добьавляем у дива класс таск
    container.append(newTask) //добавляем задачу в контейнер задач

    tasks.push(nameTask) //добавляем задачу в массив
})

//функиционал - перевести все задачи в нижний регистр
const btnLowCase = document.getElementById("LowCase")
btnLowCase.addEventListener("click", function () {
    let newTasks = [...tasks] //создаю новый массив на базе основного
    for (let i = 0; i < newTasks.length; i++) {  //перебираем все элементы массива
        newTasks[i] = newTasks[i].toLowerCase() //переводим каждую задачу в нижний регистр
    }

    container.innerHTML = ""  //очищаем контейнер

    for (let i in newTasks) {  //перебираем массив и для каждого элемента создаем запись в контейнере
        let newTask = document.createElement("div") //создаем пустой див для задач
        newTask.innerHTML = `<span>${newTasks[i]}</span>` //добавляем текст задачи в див
        newTask.classList.add(`task`) //добьавляем у дива класс таск
        container.append(newTask) //добавляем задачу в контейнер задач

    }
})

//сортировка по имени задачи по алфавиту