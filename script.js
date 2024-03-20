function testando(){
    let item = document.querySelector(`ul`)
    let input = document.querySelector(`#campo`)
    let list = document.createElement(`li`)
    list.textContent = input.value
    //input.value = ``
    item.appendChild(list)
    if (input.value == 0) {
       alert("Digite qualquer coisa!")
    }
 
 }