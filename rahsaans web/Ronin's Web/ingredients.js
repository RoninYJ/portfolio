/*input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
*/
document.querySelector('#Search').onclick = function () {
    //alert('here are the recipies we found for you');
    // grabs dropdown menu 1
    var drop1 = document.getElementById("dropbox1");
    var select1 = drop1.options[drop1.selectedIndex].text;
    console.log(select1);
    var drop2 = document.getElementById("dropbox2");
    var select2 = drop2.options[drop2.selectedIndex].text;
    console.log(select2);
    var drop3 = document.getElementById("dropbox3");
    var select3 = drop3.options[drop3.selectedIndex].text;
    console.log(select3);
    var link = document.querySelector ("#search-link");
    link.setAttribute ("href", "https://www.google.com/search?q="+select1+"+"+select2+"+"+select3) 
    //var iframe = document.getElementById("iframething");
    //iframe.setAttribute ("src", "https://www.google.com/search?q="+select1+"+"+select2+"+"+select3) 
   
    
}
// function recipies() {
//     //alert('here are the recipies we found for you');
//     // grabs dropdown menu 1
//     var drop2 = document.getElementById("dropbox2");
//     var select2 = drop2.options[drop2.selectedIndex].text;
//     console.log(select2);
// }
// function recipies() {
//     //alert('here are the recipies we found for you');
//     // grabs dropdown menu 1
//     var drop3 = document.getElementById("dropbox3");
//     var select3 = drop3.options[drop3.selectedIndex].text;
//     console.log(select3);
// }