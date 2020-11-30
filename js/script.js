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

    $('input').keypress(function(event){
      console.log("press ",event.which);
      if (event.which == 13) {
        var nuovaAttivita = $("[name = 'attivita']").val();
        console.log(nuovaAttivita);

        var context = {
          text : nuovaAttivita
        };
        var html = template(context);
        $("#todo").append(html);

        $(".delete").click(
          function() {
            $(this).parent().remove();
          }
        );

      }
    });


  }
);
