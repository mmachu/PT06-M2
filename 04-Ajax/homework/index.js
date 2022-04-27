const searchAll = () => {
  $("#lista").children("li").remove();
  $.get("http://localhost:5000/amigos", (data) => {
    for (user of data) {
      let li = document.createElement("li");
      li.innerHTML = user.name;
      li.id = `li${user.id}`;
      $("#lista").append(li);
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
  let value = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${value}`,
    type: "DELETE",
    success: (result) => {
      $(`#li${value}`).remove();
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
