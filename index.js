let colorArr = []

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()
    let html = ""

    let color = document.getElementById("color").value.replace("#", "")
    let mode = document.getElementById("mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        
        colorArr = data.colors
        colorArr.map(scheme => {
            html += `
                <div class = "colorColumns" style = "background:${scheme.hex.value}" > 
                        <button id = "text" class = "text" onclick="copyToClipboard()"> ${scheme.hex.value} </button>
                </div>
            `
            // function copyToClipboard() {
            //     let copyText = scheme.hex.value
            //     navigator.clipboard.writeText(copyText).then(() => {
            //         alert("Copied to clipboard")
            //     })
            //   } can't get copy to clipboard to work......
        })
       
            document.getElementById("colorContainer").innerHTML = html
    })

})





