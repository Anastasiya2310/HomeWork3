function createHeader() {
	var header = document.createElement("header");
  header.style.backgroundColor = "#feb83e";
  header.style.padding = "20px";
  header.style.border = "2px solid #f2a521";
  header.style.overflow = "hidden";
  header.style.marginBottom = "15px";


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
    
    menu.appendChild(li);
  }
  header.appendChild(menu);
  
  document.body.appendChild(header);
}

function createWatch(){
	var date = new Date();
  var header = document.getElementsByTagName('header')[0];
  var clock = document.createElement('span');
  clock.innerHTML = date.getHours() + ":" + date.getMinutes();
  header.appendChild(clock);
}


function createMain() {
	var main = document.createElement("main");
  main.style.backgroundColor = "#fe7549";
  main.style.padding = "20px";
  main.style.border = "2px solid #f2a521";
  main.style.overflow = "hidden";
  
  var aside = document.createElement("aside");
  aside.style.width = "250px";
  aside.style.color = "#FFF";
  aside.style.fontSize = "20px";
  aside.style.float = "left";
  
  var container = document.createElement("div");
  container.style.marginLeft = "270px";
  
  container.classList.add("container");
  for (var i = 0; i < 6; ++i) {
  	var p = document.createElement("p");
    if (i == 2 || i == 3) {
    	p.setAttribute("isDeleted", true);
		}
    if(i == 1) {
    	p.setAttribute("id", 'flag');
    }
    p.innerHTML = "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum";
    container.appendChild(p);
  }
  
  var menuAside = document.createElement("ul");
  menuAside.style.paddingLeft = "0px";
  menuAside.style.backgroundColor = "#c96d2e";
  
  aside.appendChild(menuAside);
  
  main.appendChild(aside);
  main.appendChild(container);
  
  for (var i = 0; i < 6; ++i) {
  	var li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.margin = "10px";  
		li.innerHTML = "lorem ipsum" + i;
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


setTimeout(createHeader, 1000);
setTimeout(createWatch, 3000);
setTimeout(createMain, 5000);
setTimeout(changeText, 7000);
