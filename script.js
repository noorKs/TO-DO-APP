alert("Heh simm.. you are the first One who is going to start this App by Using..My lucky Charm..!")
const input = document.getElementById('input-box')
const list = document.getElementById('list-container')

var addbtn = document.getElementById('addbtn')

addbtn.addEventListener('click',

    function addTask() {
        if (input.value === '') {
            alert("You must add a task..!")
        }
        else {

            let li = document.createElement('li');
            li.innerHTML = input.value
            list.appendChild(li);

            let span = document.createElement('span')
            span.innerHTML = "\u00d7";
            li.appendChild(span)
        }
        input.value = ''
        input.focus();

        saveData();

    }
)


list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {

        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        console.log('working');
        e.target.parentElement.remove();

        saveData();



    }
    input.focus();
}, false)

function saveData() {
    localStorage.setItem("data", list.innerHTML)
}
function showData() {
    list.innerHTML = localStorage.getItem("data");
}
showData();
