// coloquei varios onclick show() para exemplicar as funções //

// getElementById
    function show() {
        let element = document.getElementById("name")
        console.log(element) // acessa elemento
        console.log(element.value) // acessa valor do elemento

    }    
// getElementsByTagName
    function show2() {
        let elements = document.getElementsByName("phone") // retorna lista pelo nome do atributo do elemento
        console.log(elements[0].value)
    }
// querySelectAll
    function show3() {
        let moreElements = document.querySelectorAll("div#phones input[name='phone']")
        console.log(moreElements)
        moreElements = document.getElementsByTagName("input") // acessa pela tag
        console.log(moreElements)
    }