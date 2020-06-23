var toCurrProf = document.querySelector("#toCurrProf");
var rem = document.querySelector("#all");
var currurl;
var titl = "asdas";

//take query from browser
chrome.tabs.query(
  { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  function (tabs) {
    currurl = tabs[0].url;
    titl = tabs[0].title;
  }
);

//To add bm to Current profile
toCurrProf.addEventListener("click", function () {

    //create bookmark
  chrome.bookmarks.create({
    title: titl,
    url: currurl,
  });
});

var addBM=document.querySelector("#addBM");
addBM.addEventListener("click",function(){
  document.querySelector("#p1").parentNode.removeChild(document.querySelector("#p1"));
  var p2=document.createElement("div")
  p2.setAttribute("id","p2");
  p2.innerHTML="<h2>Add this page to?</h2><select id='profile'><option value='' disabled selected>Select</option><option id='createnewpro'>Create New profile</option></select>"
  

  document.querySelector("#popup_body").appendChild(p2);


})

function createProf(){
  window.open("createProfile.html");
}

function activateProf(x){
  chrome.storage.sync.get([x], function(result) {
    console.log('Value currently is ' + result.x.name);
  });

}

var Curprofile=document.querySelector("#Curprofile");
Curprofile.addEventListener("change",function(){
  var x=Curprofile.value;
  if(x=="createnewpro")
  {
    createProf();
  }
  else
  {
    activateProf(x);
  }
  console.log(x);
})