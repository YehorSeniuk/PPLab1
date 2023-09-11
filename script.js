
function openTab(tabId) {

    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }


    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }


    document.getElementById(tabId).style.display = "block";


    var activeButton = document.querySelector('[onclick="openTab(\'' + tabId + '\')"]');
    activeButton.classList.add("active");
}


openTab("tab1");

