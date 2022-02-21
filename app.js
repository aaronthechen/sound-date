const inputScreen = document.getElementById('input')
const loadingScreen = document.getElementById('loading')
const resultScreen = document.getElementById('result')
const monthSelect = document.getElementById("month")
const daySelect = document.getElementById("day")
const monthValue = document.querySelector('[for=touch-month]')
const dayValue = document.querySelector('[for=touch-day]')
const monthCheck = document.querySelector('#touch-month')
const dayCheck = document.querySelector('#touch-day')
const submitButton = document.querySelector('#submit')

freesound.setToken('gBJiDyjZD6vS3Y3Vi0iN5DwfzTu4FBkw2PrSlvmL')

let selectedMonth, selectedDay

const ids = {
    "November 3": 9329,
    "August 16": 244942,
    "October 20": 24003,
    "September 18": 80079,
    "June 3": 35643,
    "August 7": 244310,
    "August 28": 22384,
    "July 31": 21410,
    "June 9": 73617,
    "January 6": 28283,
    "July 17": 20784,
    "March 10": 49481,
    "July 16": 4211,
    "September 23": 360703,
    "November 26": 208695,
    "February 23": 67884,
    "January 1": 372181,
    "March 30": 182474,
    "February 17": 31169,
    "April 6": 232447,
    "November 6": 408741,
    "April 20": 18229,
    "December 29": 13564,
    "August 13": 21741,
    "April 25": 186374,
    "July 27": 5560,
    "March 15": 32304,
    "May 8": 18665,
    "February 6": 30606,
    "February 1": 15349,
    "February 19": 31255,
    "October 11": 362283,
    "January 31": 15292,
    "February 2": 30322,
    "June 6": 98491,
    "March 3": 16568,
    "July 12": 527664,
    "October 26": 9088,
    "April 8": 150976,
    "April 27": 52450,
    "August 27": 22350,
    "September 17": 128459,
    "December 19": 211146,
    "September 14": 22862,
    "March 13": 148840,
    "April 15": 33773,
    "January 17": 46938,
    "May 7": 345313,
    "December 2": 11687,
    "November 1": 490951,
    "April 29": 34207,
    "April 16": 71177,
    "August 12": 530415,
    "January 5": 260435,
    "November 20": 170012,
    "September 10": 60085,
    "August 11": 196671,
    "April 26": 34180,
    "September 19": 104911,
    "February 11": 145786,
    "May 10": 34624,
    "January 25": 14853,
    "March 5": 221758,
    "December 1": 170848,
    "September 15": 7720,
    "August 5": 351513,
    "March 31": 70068,
    "June 22": 20049,
    "November 10": 25383,
    "March 9": 32043,
    "June 15": 122614,
    "November 16": 207321,
    "February 14": 178137,
    "November 13": 9674,
    "May 5": 1926,
    "August 3": 351421,
    "July 19": 124925,
    "October 27": 82307,
    "June 30": 3179,
    "November 8": 25039,
    "August 21": 320303,
    "April 2": 17592,
    "September 4": 353432,
    "December 27": 13533,
    "March 12": 148814,
    "October 3": 60971,
    "October 6": 538197,
    "January 26": 29939,
    "January 22": 215006,
    "March 17": 17077,
    "April 22": 234504,
    "March 7": 507902,
    "January 27": 144137,
    "June 5": 35801,
    "April 19": 343419,
    "December 31": 500693,
    "July 6": 56579,
    "December 4": 26814,
    "October 21": 61605,
    "April 10": 17908,
    "January 10": 456236,
    "December 12": 64401,
    "March 23": 69570,
    "February 3": 144919,
    "May 21": 2262,
    "May 19": 19082,
    "February 27": 31533,
    "September 26": 7972,
    "November 27": 11485,
    "October 8": 361899,
    "August 23": 163727,
    "April 17": 185134,
    "March 4": 31835,
    "September 20": 360453,
    "January 19": 112515,
    "May 16": 345950,
    "August 15": 530699,
    "May 25": 73168,
    "June 29": 74964,
    "October 7": 23452,
    "September 21": 23015,
    "June 16": 2689,
    "May 14": 53473,
    "July 18": 20797,
    "April 18": 1055,
    "June 27": 56234,
    "May 18": 72842,
    "July 23": 350674,
    "May 1": 18616,
    "May 31": 346658,
    "August 2": 398734,
    "November 23": 135720,
    "October 24": 24207,
    "November 17": 25907,
    "November 5": 133473,
    "February 15": 67361,
    "August 26": 22347,
    "November 9": 25261,
    "June 1": 73371,
    "May 26": 274833,
    "July 25": 350757,
    "March 26": 50669,
    "August 31": 39980,
    "April 30": 18582,
    "August 25": 59315,
    "May 28": 121348,
    "April 24": 52357,
    "September 12": 165166,
    "April 9": 17851,
    "April 1": 341866,
    "October 14": 23750,
    "November 22": 135594,
    "September 27": 249950,
    "February 28": 382322,
    "January 16": 28808,
    "January 30": 47496,
    "April 13": 269782,
    "August 10": 6729,
    "April 23": 1471,
    "February 25": 31482,
    "January 28": 30045,
    "August 4": 38562,
    "January 23": 29649,
    "October 16": 23779,
    "May 23": 97380,
    "April 21": 271323,
    "July 9": 20479,
    "August 22": 77938,
    "May 15": 237791,
    "November 7": 9413,
    "February 9": 15528,
    "October 2": 250355,
    "January 3": 28098,
    "September 22": 249636,
    "February 13": 67261,
    "February 10": 263829,
    "December 28": 65471,
    "January 29": 216394,
    "September 29": 130054,
    "March 16": 156,
    "February 21": 381645,
    "March 19": 17158,
    "March 27": 32807,
    "October 23": 24205,
    "October 31": 9223,
    "June 24": 159498,
    "March 22": 149418,
    "December 3": 11727,
    "August 17": 7060,
    "November 30": 26372,
    "January 12": 28426,
    "March 24": 149506,
    "June 20": 74518,
    "March 1": 420451,
    "September 11": 321810,
    "April 28": 272168,
    "February 26": 179118,
    "June 13": 19836,
    "June 4": 98329,
    "May 22": 393732,
    "August 9": 38685,
    "May 27": 274898,
    "August 30": 7383,
    "January 4": 553259,
    "June 10": 35969,
    "December 16": 258021,
    "September 24": 23085,
    "July 3": 278223,
    "May 3": 18655,
    "July 13": 161194,
    "May 30": 189851,
    "October 25": 24333,
    "July 1": 3202,
    "August 24": 352723,
    "August 20": 320104,
    "December 8": 210004,
    "October 10": 131029,
    "June 17": 240784,
    "July 26": 243574,
    "September 3": 164828,
    "May 11": 18899,
    "January 7": 28314,
    "November 4": 407654,
    "July 28": 76445,
    "January 2": 28022,
    "November 15": 254783,
    "December 25": 86663,
    "September 25": 129342,
    "August 19": 7156,
    "November 21": 494565,
    "March 6": 31785,
    "June 12": 55020,
    "June 2": 98195,
    "July 30": 318092,
    "December 26": 45383,
    "October 18": 203287,
    "July 2": 241763,
    "December 11": 330789,
    "October 4": 81068,
    "February 5": 30476,
    "October 9": 130968,
    "July 11": 20574,
    "September 6": 164939,
    "October 28": 82390,
    "March 25": 69663,
    "December 20": 454687,
    "December 23": 65288,
    "December 10": 12703,
    "April 14": 17970,
    "June 28": 20224,
    "June 25": 2883,
    "September 13": 60163,
    "February 18": 459981,
    "May 24": 2257,
    "April 4": 342105,
    "April 12": 151373,
    "July 7": 434359,
    "July 8": 20472,
    "June 8": 19562,
    "December 30": 45916,
    "April 5": 405,
    "March 18": 340020,
    "October 30": 253406,
    "May 6": 236981,
    "July 10": 100857,
    "September 8": 127611,
    "January 24": 14782,
    "October 19": 23989,
    "July 21": 57670,
    "May 17": 72805,
    "January 8": 260726,
    "June 18": 191920,
    "September 9": 60073,
    "July 14": 57196,
    "January 18": 14385,
    "February 4": 263115,
    "August 29": 127352,
    "August 14": 530583,
    "December 9": 330644,
    "March 2": 382709,
    "May 2": 118859,
    "October 22": 444154,
    "May 29": 19315,
    "November 2": 327445,
    "September 30": 41629,
    "March 28": 32839,
    "October 29": 9160,
    "August 8": 244329,
    "February 8": 66955,
    "December 5": 136605,
    "December 22": 211512,
    "March 20": 32539,
    "July 5": 193721,
    "December 13": 413462,
    "May 13": 188296,
    "September 1": 39991,
    "February 24": 68068,
    "January 21": 457043,
    "July 24": 5204,
    "February 7": 145365,
    "December 7": 256912,
    "June 14": 122016,
    "February 16": 178219,
    "April 11": 232955,
    "November 11": 134049,
    "November 12": 134069,
    "January 9": 332719,
    "July 22": 124734,
    "October 5": 324103,
    "April 3": 424137,
    "November 14": 108766,
    "May 12": 517877,
    "October 17": 131578,
    "January 15": 14314,
    "November 18": 9720,
    "May 4": 18678,
    "June 19": 19997,
    "December 17": 64562,
    "December 15": 64490,
    "August 6": 162563,
    "August 18": 39321,
    "September 16": 40966,
    "December 24": 27583,
    "January 20": 415974,
    "October 1": 403316,
    "December 6": 64063,
    "July 20": 316915,
    "June 26": 2937,
    "October 12": 404453,
    "July 4": 160533,
    "March 14": 92039,
    "February 20": 559518,
    "July 15": 4198,
    "November 29": 449577,
    "March 21": 340737,
    "March 8": 49410,
    "March 29": 32853,
    "February 12": 67235,
    "March 11": 32171,
    "January 13": 174021,
    "September 5": 198604,
    "September 28": 441551,
    "November 28": 170633,
    "February 22": 264833,
    "July 29": 195616,
    "January 11": 173890,
    "June 7": 19555,
    "April 7": 184147,
    "November 24": 208515,
    "November 19": 255114,
    "May 9": 517419,
    "June 23": 55727,
    "October 13": 404663,
    "August 1": 243956,
    "June 21": 395942,
    "June 11": 191449,
    "December 14": 171652,
    "September 2": 104189,
    "October 15": 131340,
    "December 21": 138465,
    "February 29": 338281,
    "November 25": 109441,
    "January 14": 28659,
    "September 7": 353638,
    "December 18": 498534
}

const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

//Months are always the same
(function populateMonths() {
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('li')
        option.textContent = months[i]
        option.onclick = (e) => {
            monthValue.innerHTML = e.target.textContent
            selectedMonth = e.target.textContent
            monthCheck.checked = false
            populateDays(e.target.textContent)
        }
        monthSelect.appendChild(option)
    }
    monthSelect.value = "January"
})()

let previousDay

function populateDays(month) {
    //Delete all of the children of the day dropdown
    //if they do exist
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild)
    }
    //Holds the number of days in the month
    let dayNum

    if (month === 'January' || month === 'March' ||
        month === 'May' || month === 'July' || month === 'August'
        || month === 'October' || month === 'December') {
        dayNum = 31
    } else if (month === 'April' || month === 'June'
        || month === 'September' || month === 'November') {
        dayNum = 30
    }
    else {
        dayNum = 28
    }
    //Insert the correct days into the day <select>
    for (let i = 1; i <= dayNum; i++) {
        const option = document.createElement("li")
        option.textContent = i
        option.onclick = (e) => {
            dayValue.innerHTML = e.target.textContent
            selectedDay = e.target.textContent
            dayCheck.checked = false
        }
        daySelect.appendChild(option)
        if (dayValue.innerHTML > dayNum) {
            dayValue.innerHTML = dayNum
        }
    }
    if (previousDay) {
        daySelect.value = previousDay
        if (daySelect.value === "") {
            daySelect.value = previousDay - 1
        }
        if (daySelect.value === "") {
            daySelect.value = previousDay - 2
        }
        if (daySelect.value === "") {
            daySelect.value = previousDay - 3
        }
    }
}

populateDays(monthSelect.value)

submitButton.addEventListener('click', () => {
    if (selectedMonth && selectedDay) {
        inputScreen.style.display = 'none'
        freesound.getSound(ids[selectedMonth + " " + selectedDay] + "/?fields=previews,description,url,id", sound => {
            resultScreen.style.display = 'block'
            const wavesurfer = WaveSurfer.create({
                container: '#waveform',
                responsive: true,
                height: 100,
                waveColor: '#ff5501',
                progressColor: '#d44700',
                normalize: true
            })
            wavesurfer.load(sound.previews['preview-hq-mp3'])
            wavesurfer.on('ready', () => {
                wavesurfer.play()
                const description = document.createElement('p')
                description.innerHTML = sound.description
                const download = document.createElement('a')
                download.href = sound.url
                download.innerHTML = 'Freesound Link'
                resultScreen.appendChild(description)
                resultScreen.appendChild(download)
            })

        })
        // freesound.textSearch("&page_size=150", { 
        //     filter: "tag:field-recording duration:[* TO 150.0]", 
        //     sort: "downloads_desc", 
        //     fields: 'created,previews,name',
        //     group_by_pack: 1
        // }, sounds => {
        //     console.log(sounds.results)
        //     sounds.results.forEach(result => {
        //         if(!months[parseInt(result.created.substring(5, 7))-1]+" "+parseInt(result.created.substring(8,10))) {
        //             ids[months[parseInt(result.created.substring(5, 7))-1]+" "+parseInt(result.created.substring(8,10))] = result.previews['preview-hq-mp3']
        //         }
        //     })
        //     recCall(sounds, 0)
        // }, function () { displayError("Error while searching...") }
        // )
    }
})

// function recCall(sounds, i) {
//     if (Object.keys(ids).length>=365) {
//         console.log(ids)
//         console.log(Object.keys(ids).length)
//         return
//     }
//     sounds.nextPage(sounds => {
//         console.log(sounds.results)
//         sounds.results.forEach(result => {
//             if(!ids[months[parseInt(result.created.substring(5, 7))-1]+" "+parseInt(result.created.substring(8,10))]) {
//                 ids[months[parseInt(result.created.substring(5, 7))-1]+" "+parseInt(result.created.substring(8,10))] = result.previews['preview-hq-mp3']
//             }
//         })
//         recCall(sounds, i + 1)
//     }, function () {setTimeout( function() { recCall(sounds, i); }, 10000)})
// }

