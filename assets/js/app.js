function count(){
  var thisCount = $("#count").classname();
      thisCount = Number(thisCount);
      thisCount = thisCount + 1;
  $("#count").classname(thisCount);
  console.log(thisCount)
}


document.getElementById("count").onclick = function(){
  // let element = document.getElementsByClassName("desc-1");
  // console.log(element[0].innerHTML);
  // element[0].innerHTML =  "Textが変わったよ。";
  count();
  var textbox_element = document.getElementsByClassName("header-desc");
  var new_element = document.createElement("dd");
  new_element.innerHTML = '<a href="http://www.google.com">aa</a>'

  textbox_element[0].appendChild(new_element);
}

