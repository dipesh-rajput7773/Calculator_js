
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.innerHTML == "=") {
            string = eval(string)
            input.value = string
        }
        else if (button.innerHTML == "AC") {
            string = ""
            input.value = string
        }
        else if (button.innerHTML == "DEL") {
            string = string.toString().slice(0,-1)
            input.value = string
        }
        else {
            string += button.innerHTML;
            input.value = string

        }


    })
})

