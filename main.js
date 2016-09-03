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

function run(){
    if (!window.isRun){
        document.getElementById("html-main-iframe").contentWindow.document.write(
            document.getElementById("html-main-textarea").value);
        document.getElementById("html-main-title").innerText=
            document.getElementById("html-main-iframe").contentWindow.document.title;
        document.getElementById("button-run").style.display="none";
        document.getElementById("button-stop").style.display="inline";
        document.getElementById("html-main-textarea").style.display="none";
        document.getElementById("html-main-iframe").style.display="inline";
        document.getElementById("html-main-title").style.display="inline";
        window.isRun = true;
    }
}

function stop(){
    if (window.isRun){
        document.getElementById("html-main-iframe").contentWindow.location.href = "about:blank";
        document.getElementById("button-run").style.display="inline";
        document.getElementById("button-stop").style.display="none";
        document.getElementById("html-main-textarea").style.display="inline";
        document.getElementById("html-main-iframe").style.display="none";
        document.getElementById("html-main-title").style.display="none";
        window.isRun = false;
    }
}

function save(){
    var filename = "index.html";
    var content = " "+document.getElementById("html-main-textarea").value;
    var aLink = document.createElement('a');
    var blob = new Blob([content]);
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", false, false);
    aLink.download = filename;
    aLink.href = URL.createObjectURL(blob);
    aLink.dispatchEvent(evt);
}