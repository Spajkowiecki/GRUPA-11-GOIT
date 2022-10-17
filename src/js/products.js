window.openBox = product => {
  var element = document.getElementById(product);
  element.classList.add('open');
};

window.closeBox = product => {
  var element = document.getElementById(product);
  element.classList.remove('open');
};
