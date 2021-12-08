/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function fadeOut(elem, ms) {
  if (!elem) return;

  if (ms) {
    var opacity = 1;
    var timer = setInterval(function () {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacty=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
}
function onLoad() {
  fadeOut(document.getElementById("preloader"), 400);
}

function scrollToSection(event, section, isMenu = false) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  const scrollToElem = document.getElementById(section);
  SmoothVerticalScrolling(scrollToElem, 300, "top");
  if (isMenu) closeNav();
}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = "smooth";
  const hasSmooth = getComputedStyle(body).scrollBehavior === "smooth";
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
}

function SmoothVerticalScrolling(element, time, position) {
  var eTop = element.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == "center" || position == "") window.scrollBy(0, eAmt / 2);
  if (position == "top") window.scrollBy(0, eAmt);
}


function appendBlog() {
  const ele = document.querySelector(".blog-info");

  blogs.forEach((d) => {
    const pText = document.createTextNode("Platform :- " + d.plat);
    const p = document.createElement("p");
    p.className = "plat";
    p.appendChild(pText);
    const title = d.title.length > 40 ? d.title.substr(0, 40) + "..." : d.title;
    const bText = document.createTextNode("Title :- " + title);
    const b = document.createElement("b");
    b.appendChild(bText);
    const h4 = document.createElement("h4");
    h4.appendChild(b);
    const textDiv = document.createElement("div");
    textDiv.className = "text-cont";
    textDiv.appendChild(h4);
    textDiv.appendChild(p);
    const cardDiv = document.createElement("div");
    cardDiv.className = "card-cont";
    cardDiv.appendChild(textDiv);
    const a = document.createElement("a");
    a.href = d.link;
    a.appendChild(cardDiv);
    const div = document.createElement("div");
    div.className = "col-four";
    div.style = "padding-bottom:20px";
    div.appendChild(a);
    ele.appendChild(div);
  });
}
appendBlog();
