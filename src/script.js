console.log("Working..");
var obj = [];
var counter = 100;
function add(id, value) {
  if (obj.length == 0) {
    var todoJson = {
      idd: id,
      valuee: value,
      status: 0,
    };

    obj.push(todoJson);
    document.getElementById("new-task").style.borderColor = "green";
    console.log(todoJson);

    console.log("click working..");
    display();
    counter++;
  } else if (check(value) == false) {
    console.log("Value is Already In TODO");
    document.getElementById("new-task").style.borderColor = "red";
  } else if (check(value) == true) {
    var todoJson = {
      idd: id,
      valuee: value,
      status: 0,
    };

    obj.push(todoJson);
    document.getElementById("new-task").style.borderColor = "green";
    console.log(todoJson);

    console.log("click working..");
    display();
    counter++;
  }
}

function check(value) {
  for (var i = 0; i < obj.length; i++) {
    // console.log(obj[i].valuee);
    if (value == obj[i].valuee) {
      console.log(obj[i].valuee);
      return false;
    }
  }
  // console.log(id);
  return true;
}

function validation() {
  var check = document.getElementById("new-task").value;
  if (check == "") {
    document.getElementById("new-task").style.borderColor = "red";
  } else {
    add(counter, check);
  }
}

function display() {
  var htm = "";
  if (obj.length < 0) {
    console.log("Object is Empty");
  } else {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].status == 0) {
        htm +=
          " <li><input type='checkbox' onchange='cng(" +
          obj[i].idd +
          ")'><label>" +
          obj[i].valuee +
          "</label>\
            <input type='text'><button class='edit' onclick=EditItem('" +
          obj[i].idd +
          "')>Edit</button>\
            <button class='delete' onclick=deleteItem('" +
          obj[i].valuee +
          "')>Delete</button></li>";
      }
    }

    document.getElementById("incomplete-tasks").innerHTML = htm;
  }
}

function display2() {
  var htm = "";
  if (obj.length == 0) {
    console.log("Object is Empty");
  } else {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].status == 1) {
        htm +=
          " <li><input type='checkbox' onchange='cng2(" +
          obj[i].idd +
          ")'><label>" +
          obj[i].valuee +
          "</label>\
            <input type='text'><button class='edit' onclick=EditItem('" +
          obj[i].idd +
          "')>Edit</button>\
            <button class='delete' onclick=deleteItem('" +
          obj[i].valuee +
          "')>Delete</button></li>";
      }
    }

    // console.log(htm);
    document.getElementById("incomplete-tasks").innerHTML = htm;
    // $("#ctask").html(htm);
  }
}

function cng(id) {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].idd == id) {
      obj[i].status = 1;
    }
  }
  display2();
  display();
}

function cng2(id) {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].idd == id) {
      obj[i].status = 0;
    }
  }
  display();
  display2();
}
function deleteItem(value) {
  for (var i = 0; i < obj.length; i++) {
    // console.log(obj[i].valuee);
    if (value == obj[i].valuee) {
      obj.splice(i, 1);
      break;
    }
  }
  display();
}

var editValue = "";

function EditItem(id) {
  console.log(id);

  for (var i = 0; i < obj.length; i++) {
    // console.log(obj[i].valuee);
    if (id == obj[i].idd) {
      var tmp = obj[i].valuee;
      document.getElementById("new-task").value = tmp;
      console.log(tmp);
      break;
    }
  }
  editValue = document.getElementById("new-task").value;
  document.getElementById("ad").style.display = "none";
  document.getElementById("upt").style.display = "block";
}

function updateItem() {
  var newValue = document.getElementById("new-task").value;
  for (var i = 0; i < obj.length; i++) {
    // console.log(obj[i].valuee);
    if (editValue == obj[i].valuee) {
      obj[i].valuee = newValue;
    }
  }
  display();
}
