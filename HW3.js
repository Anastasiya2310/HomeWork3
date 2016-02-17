function createHeader() {
  var header = document.createElement("header");
  header.style.backgroundColor = "#feb83e";
  header.style.padding = "20px";
  header.style.border = "2px solid #f2a521";
  header.style.overflow = "hidden";


  var logo = document.createElement("img");
  logo.style.float = "left";
  logo.setAttribute('src', 'https://pbs.twimg.com/profile_images/629570746285604864/li721BrU_400x400.jpg');


  header.appendChild(logo);
  
  var menu = document.createElement("ul");
  
  for (var i = 1; i < 5; ++i) {
    var li = document.createElement("li");
    li.style.display = "inline-block";
    li.style.listStyle = "none";
    li.style.margin = "10px";
    
    var link = document.createElement("a");
    link.setAttribute('href', "#");
    link.innerHTML = "btn" + i;
    li.appendChild(link);
    
    menu.classList.add("main-menu");
    menu.appendChild(li);

  }

  header.appendChild(menu);  
  document.body.appendChild(header);
}

function createWatch(){
  var header = document.getElementsByTagName('header')[0];
  var clock = document.createElement('span');
  header.appendChild(clock);
  function watch() {
    var date = new Date();
    var stringDate = '';

    if (date.getHours() < 10) {
      stringDate += '0';
    }
    stringDate += date.getHours() + ':';

    if (date.getMinutes() < 10) {
      stringDate += '0';
    }
    stringDate += date.getMinutes() + ':';

    if (date.getSeconds() < 10) {
      stringDate += '0';
    }
    stringDate += date.getSeconds();

    clock.innerHTML = stringDate;
    setTimeout(watch, 1000);
  }
  watch();
}


function createMain() {
  var main = document.createElement("main");
  main.style.backgroundColor = "#fe7549";
  main.style.border = "2px solid #f2a521";
  main.style.overflow = "hidden";
  
  var aside = document.createElement("aside");
  aside.style.width = "250px";
  aside.style.color = "#FFF";
  aside.style.fontSize = "20px";
  aside.style.float = "left";
  aside.style.backgroundColor = "#fe7549";
  
  
  var container = document.createElement("div");

  container.style.marginLeft = "260px";
  container.style.backgroundColor = "#c96d2e";
  container.style.padding = "10px";
  
  
  container.classList.add("container");
  for (var i = 0; i < 6; ++i) {
    var p = document.createElement("p");
    if (i == 2 || i == 3) {
      p.setAttribute("isDeleted", true);
    }
    if(i == 1) {
      p.setAttribute("id", 'flag');
    }
    p.innerHTML = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";
    container.appendChild(p);
  }
  
  var menuAside = document.createElement("ul");
  menuAside.style.paddingLeft = "0px";
  menuAside.style.margin = "0px";
  
  aside.appendChild(menuAside);
  
  main.appendChild(aside);
  main.appendChild(container);
  
  for (var i = 0; i < 6; ++i) {
    var li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.margin = "10px";  
    li.innerHTML = "lorem ipsum" + i;
    li.classList.add('item-aside');
    menuAside.appendChild(li);
  }
  
  document.body.appendChild(main);
}

function changeText() {
  var container = document.getElementsByClassName('container')[0];
  container.style.fontStyle = "italic";
  var firstP = container.firstElementChild;
  var lastP = container.lastElementChild;
  firstP.style.color = lastP.style.color = "blue";
  firstP.style.fontSize = lastP.style.fontSize = "20px";  
}

function reversLi() {
  
}

function createFooter() {
  var footer = document.createElement("footer");
  footer.style.backgroundColor = "#845a42";
  
  for (var i = 0; i < 2; ++i) {
    var span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.margin = "7px";
    span.style.color = "#fff";
    
    span.innerHTML = "lorem ipsum lorem ipsum" + i;
    footer.appendChild(span);
  }
  document.body.appendChild(footer);
}

function deleteAttr() {
  var allP = document.getElementsByTagName("p");
  for (var i = 0; i < allP.length; ++i) {
      var p = allP[i];
      
      if(p.hasAttribute("isDeleted")) {
        p.parentNode.removeChild(p);
        --i;
      }
  } 
}


function nearId() {
  var flag = document.getElementById("flag");
  var previousSibl = flag.previousElementSibling;
  previousSibl.style.backgroundColor = "yellow";
  
  var nextSibl = flag.nextElementSibling;
  nextSibl.style.backgroundColor = "blue";
}

function replaceOddElements() {
  var li = document.getElementsByClassName('item-aside');
  var ul = li.parentElement;
  
  for (i = 1; i < li.length; i += 2) {
    li[i].innerHTML = 'Шизофрения - странный предмет: ты вроде пингвин, а вроде омлет';
  }
}

function addAttrEvenElements() {
  var li = document.getElementsByClassName('item-aside');
  var ul = li.parentElement;
  
  for (i = 0; i < li.length; i += 2) {
    li[i].setAttribute('newAttribute', true);
  } 
}


function replacePosition(){
    var ul = document.getElementsByClassName("main-menu")[0];
    var li = ul.children;
    li[0].style.top = (100 - li[0].offsetTop) + 'px';
    li[1].style.border = "100px dashed #000";
}




setTimeout(createHeader, 1000);
setTimeout(createWatch, 3000);
setTimeout(createMain, 5000);
setTimeout(changeText, 7000);
//setTimeout(reversLi, 9000);
setTimeout(createFooter, 11000);
setTimeout(deleteAttr, 13000);
setTimeout(nearId, 15000);
setTimeout(replaceOddElements, 17000);
setTimeout(addAttrEvenElements, 19000);
setTimeout(replacePosition, 21000);

