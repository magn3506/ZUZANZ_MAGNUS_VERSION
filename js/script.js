window.addEventListener('DOMContentLoaded', init);

let myData = {};


function init() {

    document.querySelector("#situation_1_tab").addEventListener("click", displayData);
    document.querySelector("#situation_2_tab").addEventListener("click", displayData);
    document.querySelector("#situation_3_tab").addEventListener("click", displayData);
    document.querySelector("#situation_4_tab").addEventListener("click", displayData);
    document.querySelector("#situation_5_tab").addEventListener("click", displayData);
    document.querySelector("#situation_6_tab").addEventListener("click", displayData);
    document.querySelector("#situation_7_tab").addEventListener("click", displayData);
    document.querySelector("#situation_8_tab").addEventListener("click", displayData);
    document.querySelector("#situation_9_tab").addEventListener("click", displayData);


    getData();
}





function getData() {
    // let life_situation = fetch("http://createsimple.dk/ap_data/wordpress/wp-json/wp/v2/life_situation")
    //     .then(response => response.json())
    //     //.then(showText);

    //     .then(() => console.log(life_situation))


    fetch('http://createsimple.dk/ap_data/wordpress/wp-json/wp/v2/life_situation')
        .then(response => response.json())
        .then(data => {
            myData = data;
            displayData();
        });

}


function displayData(event) {




    if (event !== undefined) {
        console.dir(event.target.dataset.situation_list);
        let targetStringNumber = event.target.dataset.situation_list;
        let targetIntNumber = parseInt(targetStringNumber)

        showText(myData[targetIntNumber]);

    } else {
        showText(myData[0]); // DEFAULT 1. TIME
    }




}



/*let allData = {
    lifeSituation: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation2: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation3: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation4: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation5: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation6: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation7: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation8: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation9: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    }

}*/

/*
var buttonIdToTabId = {
    situation_1_button: "situation_1_tab",
    situation_2_button: "situation_2_tab",
    situation_3_button: "situation_3_tab",
    situation_4_button: "situation_4_tab",
    situation_5_button: "situation_5_tab",
    situation_6_button: "situation_6_tab",
    situation_7_button: "situation_7_tab",
    situation_8_button: "situation_8_tab",
    situation_9_button: "situation_9_tab",

}

var buttonClickedStates = {
    situation_1_button: false,
    situation_2_button: false,
    situation_3_button: false,
    situation_4_button: false,
    situation_5_button: false,
    situation_6_button: false,
    situation_7_button: false,
    situation_8_button: false,
    situation_9_button: false,
}

var tabToText = {
    situation_1_tab: 'lifeSituation',
    situation_2_tab: 'lifeSituation2',
    situation_3_tab: 'lifeSituation3',
    situation_4_tab: 'lifeSituation4',
    situation_5_tab: 'lifeSituation5',
    situation_6_tab: 'lifeSituation6',
    situation_7_tab: 'lifeSituation7',
    situation_8_tab: 'lifeSituation8',
    situation_9_tab: 'lifeSituation9',
}

window.onload = function () {
    document.getElementById('info_right').innerHTML = tabToText.situation_1_tab;
};

*/

function showText(singleDataObj) {


    // document.querySelector("main").innerHTML = "";
    document.querySelector("#info_right").innerHTML = "";
    const template = document.querySelector("#template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("img").src = singleDataObj.icon.guid;
    copy.querySelector("h2").textContent = singleDataObj.title.rendered;
    copy.querySelector("h3").textContent = singleDataObj.short_description;
    copy.querySelector("p").textContent = singleDataObj.long_description;
    copy.querySelector(".call_us a").textContent = singleDataObj.phone;
    copy.querySelector(".email_us a").textContent = singleDataObj.email;

    // document.getElementById('info_right').innerHTML = tabToText[lifeSituation];

    document.querySelector("#info_right").appendChild(copy);
}

