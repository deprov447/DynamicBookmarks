var toCurrProf=document.querySelector("#toCurrProf");
var rem=document.querySelector("#all")
var currurl;
var titl="asdas";

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
function(tabs){
  currurl=tabs[0].url;
  titl=tabs[0].title;
}
);

document.querySelector("body").addEventListener("click",function(){
  document.querySelector("#title").innerHTML=titl;
})

toCurrProf.addEventListener("click",function(){
  chrome.bookmarks.create({
    title:titl,
    url:currurl,
  })
  
})