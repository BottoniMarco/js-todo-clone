$(document).ready(
  function () {
    var list = [
      "fare esercitazione",
      "pagare il corso",
      "appuntamento dentista",
    ]


    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for( var i=0; i<list.length;i++){
      var context = {
        text : list[i]
      };
      var html = template(context);
      $("#todo").append(html);
    }

    $(".delete").click(
      function() {
        $(this).parent().remove();
      }
    );


  }
);
