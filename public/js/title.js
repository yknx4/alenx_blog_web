(function(){

  function replaceTitle(element){
    oldHtml = element.innerHTML;
    newHtml = oldHtml.replace('Y k', 'A l e');
    element.innerHTML = newHtml;
  }

  var fiftyfifty = Math.random() > 0.5;

  if(fiftyfifty){
    var brandElement = document.getElementsByClassName('brand')[0];
    var title = document.getElementsByTagName('title')[0];

    replaceTitle(brandElement);
    replaceTitle(title);

  }
}());
