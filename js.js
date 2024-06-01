let id = 0;
let arr = [];
let flag

function User(name, record) {
  this.id = id++;
  this.name = name;
  this.recored = record;
}
function record() {
  document.getElementById("s").addEventListener("click", function () {
    localStorage.setItem("name", document.getElementById("name").value);
  });

  let plyer = new User(
    localStorage.getItem("name"),
    localStorage.getItem("record")
  );
  arr.push(plyer);
  console.log(arr);
  localStorage.setItem("user", arr);
}

