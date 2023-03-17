const container = document.getElementById('colorContainer')
const getColors = document.getElementById('form')

getColors.addEventListener("submit", renderColorScheme)

async function getColorScheme(){
    const color = document.getElementById("color").value.replace("#", "")
    const mode = document.getElementById("mode").value

    const result = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    const data = await result.json()
    return data
}

async function renderColorScheme(e){
    e.preventDefault()
    let html = ''
    const colors = await getColorScheme()
    const colorsArray = colors.colors
    const hexValues = colorsArray.map(item => {
        html += `
        <div class="colorColumns" style="background:${item.hex.value}" > 
            <div id=${item.hex.value} class ="text" onclick=${copyToClipboard(item.hex.value)}> ${item.hex.value} </div>
        </div>
        `
    })
   
    container.innerHTML = html
    return hexValues
}





