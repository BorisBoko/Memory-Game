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
    const template = renderTemplate(shuffled)
    contenarTable.insertAdjacentHTML('afterbegin', template);
}

function renderTemplate(shuffled) {
    return `
    <table class="faded" border="0" cellspacing="1" cellpadding="1">
            <tr>
                <td><img class='in_game ' data-picture="${shuffled[0]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game ' data-picture="${shuffled[1]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game ' data-picture="${shuffled[2]}" data-noPng="noPng.png" src="noPng.png"></td>
                <td><img class='in_game ' data-picture="${shuffled[3]}" data-noPng="noPng.png" src="noPng.png"></td>
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

//Event click svg

let clickToTable = function(event) {
    if (event.target.localName === 'img') {
        imgChange(event.target)
    }
}


table.addEventListener('click', clickToTable)


function imgChange(e) {
    e.classList.add('animated', 'tada')
    const imgies = table.querySelectorAll('.in_game')
    
    const check = checkOneorTwo(e, imgies);
    //change the src to dataset.picture
    e.attributes.src.nodeValue = e.dataset.picture
   
    if (check) {
        //its for 3 item is not work
        changeClick()

        setTimeout(function() {
            e.attributes.src.nodeValue = e.dataset.nopng
            e.classList.remove('animated', 'tada')
            hideAll(imgies)
            //its for addeventListener work agian
            table.addEventListener('click', clickToTable)
        }, 700);

    }
       

}

function changeClick() {
    table.removeEventListener('click', clickToTable);
}

function hideAll(imgies) {
    
    imgies.forEach(element => {
        element.classList.remove('animated', 'tada')
        element.attributes.src.nodeValue = element.dataset.nopng
    });
}

function checkOneorTwo(e, imgies) {
    console.log(imgies)
    if(imgies.length === 2) {
        alert('You Win')
    }
    const inItemPicSet = e.dataset.picture
    const inItemPicSrc = e.attributes.src.nodeValue
    //it is for 2 click in 1 pic reture false
    if (inItemPicSrc === inItemPicSet) return 
    
    const srcItem = [];
    const rightcombination = [];
    let dontHide = false
    imgies.forEach(element => {
        if (inItemPicSet === element.dataset.picture) {
            rightcombination.push(element)
        }
        srcItem.push(element.attributes.src.nodeValue)
    });
    console.log(rightcombination)
    rightcombination.forEach(element => {
        // if 2 right Combination is not noPng 
        if (rightcombination[0].attributes.src.nodeValue !== rightcombination[1].attributes.src.nodeValue) {
            element.classList.remove('in_game')
            dontHide = true
        }
    });
 
    let checkSrc = Array.from(new Set(srcItem))

    if (checkSrc.length === 1 || dontHide) {return false} else return true 
}