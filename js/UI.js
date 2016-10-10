function finishPageLoading( ) {
    var element = document.getElementById("overlay");
    element.parentNode.removeChild(element);
    document.getElementById("main-content").style.visibility = "visible";
}

function updateProgress(percents ) {

    var element = document.getElementById("page-loading-progress");
    element.style.width = percents.toString() + "%";
    element.setAttribute("aria-valuenow", percents);
    element.innerHTML = percents.toString + "%";
}