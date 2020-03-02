$(function () {
    $('.summary').hide();
    $('.summary-data').hide();

    $("#checkout").click(function () {
        var size = $("#size option:selected").val();
        var crust = $("#crust option:selected").val();
        var topping = $("#toppings option:selected").val();
        var number = $("#number").val();


        var order = (s, c, t, n, total) => {
            return {s, c, t, n, total};
        };


        var price, totalPrice;
          switch (size) {
            case size = "small":
              price = 300;
              if (crust === "crispy"){
                totalPrice = (price * number) + 100;
              } else if (crust === "stuffed"){
                totalPrice = (price * number) + 150;
              } else if (crust === "gluten"){
                totalPrice = (price * number) + 200;
              } else {
                totalPrice = (price * number);
              }
              break;

          case size = "medium":
            price = 500;
            if (crust === "crispy"){
              totalPrice = (price * number) + 100;
            } else if (crust === "stuffed"){
              totalPrice = (price * number) + 150;
            } else if (crust === "gluten"){
              totalPrice = (price * number) + 200;
            } else {
              totalPrice = (price * number);
            }
            break;

        case size = "large":
          price = 700;
          if (crust === "crispy"){
            totalPrice = (price * number) + 100;
          } else if (crust === "stuffed"){
            totalPrice = (price * number) + 150;
          } else if (crust === "gluten"){
            totalPrice = (price * number) + 200;
          } else {
            totalPrice = (price * number);
          }
          break;
        }
      switch (topping) {
          case topping = "bacon":
              totalPrice = totalPrice + 100;
              break;
          case topping = "pineapple":
              totalPrice = totalPrice + 100;
              break;
          case topping = "mushroom":
              totalPrice = totalPrice + 100;
              break;
          case topping = "chicken":
              totalPrice = totalPrice + 100;
              break;
          case topping = "Peperoni":
              totalPrice = totalPrice + 150;
              break;
          case topping = "olives":
              totalPrice = totalPrice + 150;
              break;
          case topping = "pepper":
              totalPrice = totalPrice + 150;
              break;
          case topping = "cheese":
              totalPrice = totalPrice + 150;
              break;

      }



        var newOrder = order(size, crust, topping, number, totalPrice);
        console.log(newOrder);



        $('.summary').slideDown(2000);
        $('.summary-data').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.pickup').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });


    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("provide the following details").slideDown();
        $('.deliver').hide(1000);
        $('.pickup').hide(1000);
        $('.summary-data').slideDown();
    });

    $("#toDeliver").click(function(){
      alert("delivery will be dispatched in 20 minutes");
    });




    $(".pickup").click(function () {

    });


    $(function () {
        $.scrollify.move('#sum-order');
    });
});
