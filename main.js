// to receive data
var taskStorage = localStorage.getItem('generalList')
var generalList =
  taskStorage == null || taskStorage == '[]'
    ? (generalList = [])
    : (generalList = JSON.parse(localStorage.getItem('generalList')))

// add task
function addTask() {
  let fieldValue = document.getElementById('field').value
  generalList.push(fieldValue)
  saveTask()
  location.reload()
}

// clear all tasks
function clearTask() {
  localStorage.clear()
  location.reload()
}

// save task
function saveTask() {
  localStorage.setItem('generalList', JSON.stringify(generalList))
}

// to show tasks
function showTask() {
  let content = document.getElementById('result')
  let recordedList = JSON.parse(localStorage.getItem('generalList'))
  let strchar = ''
  let num = 0
  if (recordedList != null) {
    for (var i of recordedList) {
      strchar +=
        "<div class='task'>" +
        "<li class='data'>" +
        i +
        '</li>' +
        "<img class='image' src='./assets/trash.svg' value='" +
        num +
        "' onclick='removeTask(this)'>" +
        '</div>'
      num++
    }
  }
  content.innerHTML = strchar
}

// remove task
function removeTask(e) {
  let element = e.getAttribute('value')
  generalList.splice(element, 1)
  saveTask()
  location.reload()
}
