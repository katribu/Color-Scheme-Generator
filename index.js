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
    hexValues = colorsArray.map(item => {
        html += `
        <div class="colorColumns tooltip" style="background:${item.hex.value}" > 
            <button id=${item.hex.value} class="text" onclick="copyToClipboard('${item.hex.value}')">
             ${item.hex.value} 
            </button>
        </div>
        `
   
    })
   
    container.innerHTML = html

}

function copyToClipboard(id){
    console.log(id)
    navigator.clipboard.writeText(id)
   alert(`${id} copied to clipboard!`)
}



