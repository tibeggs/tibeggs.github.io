var BDSVis = BDSVis || {};
vm = BDSVis.ViewModel;
console.log(vm);
function grabinput() {
    var xvar = document.getElementById("xvar").value;
    var cvar = document.getElementById("cvar").value;
    localStorage.setItem("xvar", xvar);
    localStorage.setItem("cvar", cvar);
    console.log(xvar);
    console.log(cvar);
    //window.location.href = "app.html";
}