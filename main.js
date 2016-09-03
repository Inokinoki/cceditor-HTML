function fzminus(){
  if(window.fsize>=12){
    window.fsize = window.fsize-2;
  }
  document.getElementById("fz-size-label").innerText= window.fsize+"pt";
  document.getElementById("html-main-textarea").style.fontSize= window.fsize+"pt";
}

function fzplus(){
  if(window.fsize<=70){
    window.fsize+=2;
  }
  document.getElementById("fz-size-label").innerText= window.fsize+"pt";
  document.getElementById("html-main-textarea").style.fontSize= window.fsize+"pt";
}