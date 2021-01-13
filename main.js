const startBtn = document.getElementById('start')
const startContanier = document.querySelector('.start_contanier')

let atom = document.querySelectorAll('.atom'),
    calc = document.querySelectorAll('.calc'),
    chromee = document.querySelectorAll('.chrome'),
    fox = document.querySelectorAll('.fox'),
    right = document.querySelectorAll('.right'),
    left = document.querySelectorAll('.left'),
    right1 = document.querySelectorAll('.right1'),
    left1 = document.querySelectorAll('.left1')


function MyAnimate(array, timeStart, TimeEnd, animate) {
    setInterval(() => {
        array.forEach(element => {
            element.classList.add('animated', animate)
        });
    }, timeStart);
    setInterval(() => {
        array.forEach(element => {
            element.classList.remove('animated', animate)
        });
    }, TimeEnd);
}
MyAnimate(atom, 4000, 3500, 'tada')
MyAnimate(calc, 1500, 2000, 'tada')
MyAnimate(chromee, 3200, 3700, 'tada')
MyAnimate(fox, 1850, 2400, 'tada')
MyAnimate(right, 5050, 2400, 'flip')
MyAnimate(left, 10050, 5000, 'flip')
MyAnimate(right1, 7050, 5000, 'flip')
MyAnimate(left1, 3050, 1000, 'flip')







startBtn.addEventListener('click', function() {
    let clone = document.querySelector('.clone')
    let contenarTable = document.getElementById('containier')
    if (clone) { clone.remove() }
    if (contenarTable) { contenarTable.innerHTML = '' }
    startContanier.classList.add('animated', 'zoomOutDown')
    setTimeout(() => {
        startContanier.style.marginTop = '50px'

        setTimeout(() => {
            startContanier.classList.remove('animated', 'zoomOutDown')

            startContanier.classList.add('animated', 'zoomInUp')

        }, 0);

    }, 800);
    // 







    let Allpng = [
        "img/atom.png",
        "img/calc.png",
        "img/chrome.png",
        "img/fox.png",
        "img/tools_green.png",
        "img/wifi.png",
        "img/vlc.png",
        "img/tools_orange.png",
        "img/atom.png",
        "img/calc.png",
        "img/chrome.png",
        "img/fox.png",
        "img/tools_green.png",
        "img/wifi.png",
        "img/vlc.png",
        "img/tools_orange.png",
    ]

    let shuffledd = Allpng
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    renderGame(shuffledd)

    function renderGame(shuffled) {

        //contenarTable.innerHTML = ''
        const template = renderTemplate(shuffled)
        contenarTable.insertAdjacentHTML('afterbegin', template);
    }

    function renderTemplate(shuffled) {
        return `
        <table class="animated flipInX" border="0" cellspacing="1" cellpadding="1">
                <tr>
                    <td><img class='in_game' data-picture="${shuffled[0]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[1]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[2]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[3]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                </tr>
                <tr>
                    <td><img class='in_game' data-picture="${shuffled[4]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[5]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[6]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[7]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                </tr>
                <tr>
                    <td><img class='in_game' data-picture="${shuffled[8]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[9]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[10]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[11]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                </tr>
                <tr>
                    <td><img class='in_game' data-picture="${shuffled[12]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[13]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[14]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                    <td><img class='in_game' data-picture="${shuffled[15]}" data-noPng="img/noPng.png" src="img/noPng.png"></td>
                </tr>
            </table>
        `
    }



    const table = document.querySelector('table')
    const timer = document.querySelector('.timerContaner').firstElementChild
    let win = document.querySelectorAll('.in_game')
    let startTime = 1
    let started = true;
    let clickToTable = function(event) {
        const e = event.target
        if (event.target.localName === 'img') {

            imgChange(e)
            if (started) {
                timerStart(startTime)
            }
            if (win.length === 0) {
                a(false)
                started = true

            }
        }
    }


    function a(x) {
        let sec = setInterval(() => {
            timer.innerText = startTime++
        }, 1000);
        if (x) {

        } else {
            clearInterval(sec);
        }


    }

    function timerStart(startTime) {
        timer.innerText = startTime
        started = false
        a(true)

    }

    table.addEventListener('click', clickToTable)


    function imgChange(e) {
        const imgies = table.querySelectorAll('.in_game')
        let check = checkOneorTwo(e, imgies);
        e.attributes.src.nodeValue = e.dataset.picture
        e.classList.add('animated', 'tada')
        if (check) {
            changeClick()

            setTimeout(function() {

                e.attributes.src.nodeValue = e.dataset.nopng
                hideAll(imgies)
                table.addEventListener('click', clickToTable)

            }, 700);

        }


    }

    function changeClick() {
        table.removeEventListener('click', clickToTable);
    }

    function hideAll(imgies) {
        imgies.forEach(element => {

            element.attributes.src.nodeValue = element.dataset.nopng
            element.classList.remove('animated', 'tada')

        });
    }

    function checkOneorTwo(e, imgies) {

        let itemPicSet = e.dataset.picture
            //console.log(itemPicSet)
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
                element.classList.add('animated', 'rotateOut')


                dontHide = true
            }
        });




        let checkSrc = Array.from(new Set(srcitem))


        if (checkSrc.length === 1 || dontHide) {
            return false
        } else { return true }
    }
})