(function() {
  console.log("loaded");
  const target = document.getElementById("target");
  // layout4, paint 1
  target.style.height = window.innerHeight / 2 + "px"; //layout
  target.style.height = window.innerHeight / 3 + "px"; //layout
  target.style.height = window.innerHeight / 4 + "px"; //layout
  target.style.height = window.innerHeight / 5 + "px"; //layout

  // layout 1, paint 1
  setTimeout(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    target.style.width = w + "px";
    target.style.height = h + "px";
  }, 1000);

  // layout 2, paint 1 window.innerWidth나 ,window.innerHeight등을 호출시 브라우저 랜더링 최적화 로직이 적용되지않음
  setTimeout(() => {
    let w = window.innerWidth;
    target.style.width = w + "px";
    let h = window.innerHeight;
    target.style.height = h + "px";
  }, 2000);
})();
