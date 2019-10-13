(function() {
  console.log("loaded");
  const target = document.getElementById("target");
  // layout1, paint 1 -> 노드를 복제하여 작업 후 변경해주면 최종단계에서 1회만 rendering됨
  const clone = target.cloneNode(true);
  clone.style.height = window.innerHeight / 2 + "px";
  clone.style.height = window.innerHeight / 3 + "px";
  clone.style.height = window.innerHeight / 4 + "px";
  document.body.replaceChild(clone,target);

  // // layout 1, paint 1
  setTimeout(() => {
    //새로운 프래그먼트를 생성하여 작업후 append해주면 마지막에 1회씩 layout, rendering발생
    let fragment = document.createDocumentFragment();
    const child = target.cloneNode(true);
    child.style.height = window.innerHeight / 2 + "px";
    child.style.height = window.innerHeight / 3 + "px";
    child.style.height = window.innerHeight / 4 + "px";
    fragment.appendChild(child);
    document.body.appendChild(fragment);
  }, 1000);

})();
