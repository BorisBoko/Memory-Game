let Allpng = [
    "atom.png",
    "calc.png",
    "chrome.png",
    "fox.png",
    "tools_green.png",
    "wifi.png",
    "vlc.png",
    "tools_orange.png",
    "atom.png",
    "calc.png",
    "chrome.png",
    "fox.png",
    "tools_green.png",
    "wifi.png",
    "vlc.png",
    "tools_orange.png",
]

const startBtn = document.getElementById('start')
const contenarTable = document.getElementById('containier')
let shuffledd = Allpng
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

renderGame(shuffledd)
const clickHandler = function() {
    window.location.reload();
}

startBtn.addEventListener('click', clickHandler);

function renderGame(shuffled) {

    //contenarTable.innerHTML = ''
    const template = renderTemplate(shuffled)
    contenarTable.insertAdjacentHTML('afterbegin', template);
}

function renderTemplate(shuffled) {
    return `
    <table class="faded" border="0" cellspacing="1" cellpadding="1">
            <tr>
                <td><img class='in_game ' data-picture="${shuffled[0]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game faded' data-picture="${shuffled[1]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game faded' data-picture="${shuffled[2]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game faded' data-picture="${shuffled[3]}" data-noPng="noPng.png" src="noPng.png"></td>
            </tr>
            <tr>
                <td><img class='in_game' data-picture="${shuffled[4]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[5]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[6]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[7]}" data-noPng="noPng.png" src="noPng.png"></td>
            </tr>
            <tr>
                <td><img class='in_game' data-picture="${shuffled[8]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[9]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[10]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[11]}" data-noPng="noPng.png" src="noPng.png"></td>
            </tr>
            <tr>
                <td><img class='in_game' data-picture="${shuffled[12]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[13]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[14]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game' data-picture="${shuffled[15]}" data-noPng="noPng.png" src="noPng.png"></td>
            </tr>
        </table>
    `
}



const table = document.querySelector('table')


let clickToTable = function(event) {
    const e = event.target
    if (event.target.localName === 'img') {
        imgChange(e)
    }
}


table.addEventListener('click', clickToTable)


function imgChange(e) {
    const imgies = table.querySelectorAll('.in_game')
    let check = checkOneorTwo(e, imgies);
    e.attributes.src.nodeValue = e.dataset.picture
    if (check) {
        changeClick()

        setTimeout(function() {
            e.attributes.src.nodeValue = e.dataset.nopng
            hideAll(imgies)
            table.addEventListener('click', clickToTable)

        }, 500);

    }


}

function changeClick() {
    table.removeEventListener('click', clickToTable);
}

function hideAll(imgies) {
    imgies.forEach(element => {
        element.attributes.src.nodeValue = element.dataset.nopng
    });
}

function checkOneorTwo(e, imgies) {

    let itemPicSet = e.dataset.picture
    console.log(itemPicSet)
    if (e.attributes.src.nodeValue === itemPicSet) {
        console.log(e.attributes.src.nodeValue, itemPicSet)

        return false
    }

    const srcitem = [];
    const fixItem = [];
    let dontHide = false



    imgies.forEach(element => {
        if (itemPicSet === element.dataset.picture) {
            fixItem.push(element)
        }
        if (element.attributes.src.nodeValue)
            srcitem.push(element.attributes.src.nodeValue)
    });

    fixItem.forEach(element => {
        if (fixItem[0].attributes.src.nodeValue !== fixItem[1].attributes.src.nodeValue) {
            element.classList.remove('in_game')

            dontHide = true
        }
    });




    let checkSrc = Array.from(new Set(srcitem))


    if (checkSrc.length === 1 || dontHide) {
        return false
    } else { return true }
}