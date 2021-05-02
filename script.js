// The openHeaderNavBar opens the .nav-link bar by increasing it hight to it scroll height
// Get the .nav-links element by querySelector
const headerNavLinks = document.querySelector('.nav-links');
const openHeaderNavBar = () => {
    // Increase height by scroll height when clicked if height is null
    headerNavLinks.style.height ?
        headerNavLinks.style.height = null :
        headerNavLinks.style.height = headerNavLinks.scrollHeight + "px";
}

// the openSideBar opens the side bar for tab display;
const openSideBar = () => {
    headerNavLinks.setAttribute('style', 'width: 25%; height: 100%')
}

// The closeSideBar does the inverse of the openSideBar function;
const closeSideBar = () => headerNavLinks.setAttribute("style", "width: 0")

//openBar performs running the openHeader functions when needed
const openBar = () => {
    // for Tab view note: default view is mobile
    const mqTab = window.matchMedia("(min-width:500px)");
    //for Desktop view
    const mqDesktop = window.matchMedia("(min-wdith:760px)")
    if (mqTab.matches) {
        openSideBar()
    }
    else if (mqDesktop.match) { 
        null
    }
    else {
        openHeaderNavBar()
    }
}