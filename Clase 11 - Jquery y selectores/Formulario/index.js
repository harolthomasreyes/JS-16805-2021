var temp = $("#formEmail").serializeArray();

console.log(temp);

$("#formEmail").submit(function (event) {
  event.preventDefault();

  //console.log($("#formEmail").serializeArray());
  console.log($(this).serializeArray());
});
