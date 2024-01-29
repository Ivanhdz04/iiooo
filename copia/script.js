
function chooseSection(view){
    if(view == '1'){
        document.getElementById('live').style.display = "flex"
        document.getElementById('model').style.display = "none"
        document.getElementById('liveButton').style.backgroundColor = "var(--white-200)"
        document.getElementById('modelButton').style.backgroundColor = "transparent"
    }else if(view == '2'){
        document.getElementById('live').style.display = "none"
        document.getElementById('model').style.display = "flex"
        document.getElementById('liveButton').style.backgroundColor = "transparent"
        document.getElementById('modelButton').style.backgroundColor = "var(--white-200)"
    }else{
        document.getElementById('live').style.display = "none"
        document.getElementById('model').style.display = "flex"
        document.getElementById('liveButton').style.backgroundColor = "transparent"
        document.getElementById('modelButton').style.backgroundColor = "var(--white-200)"
    }
}