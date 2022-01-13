function doChange(){
  alert(event.target.value)
}

let sampleInput = document.querySelector("input[name='sample-input']")
sampleInput.addEventListener("change", doChange)

let changeEvent = new Event("change")
sampleInput.dispatchEvent(changeEvent) // dispara evento automaticamente

//sampleInput.removeEventListener("change", doChange)