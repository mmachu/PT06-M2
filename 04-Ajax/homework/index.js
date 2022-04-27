const searchAll = () => {
  //   $("#lista").children("li").remove();
  $.get("http://localhost:5000/amigos", (data) => {
    let liList = document.querySelectorAll(".friends");
    let liID = [];
    liList.forEach((friend) => {
      liID.push(friend.id);
    });
    if (liID.length === 0) {
      for (user of data) {
        let li = document.createElement("li");
        li.innerHTML = user.name;
        li.id = `li${user.id}`;
        li.classList.add("friends");
        $("#lista").append(li);
      }
    } else {
      let dataID = data.map((user) => {
        return `li${user.id}`;
      });
      console.log(dataID);
      liID.forEach((id, index) => {
        console.log(`${liID[index]}`);
        if (!dataID.includes(liID[index])) {
          $(`#${liID[index]}`).remove();
        }
      });
    }
  });
};

const searchOne = () => {
  let value = $("#input").val();
  $.get(`http://localhost:5000/amigos/${value}`, (data) => {
    $("#amigo").html(data.name);
  });
  $("#input").val("");
};

const deleteFriend = () => {
  console.log("delete");
  let value = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${value}`,
    type: "DELETE",
    success: (result) => {
      let liText = $(`#li${value}`).html();
      $(`#li${value}`).html(liText + " (borrado recientemente)");
      let inputDeleteValue = $("#amigo").html();
      inputDeleteValue !== ""
        ? $("#amigo").html(inputDeleteValue + " (borrado recientemente)")
        : null;
    },
  });
  $("#inputDelete").val("");
};

$("#boton").click(searchAll);

$("#search").click(searchOne);

$("#delete").click(deleteFriend);
