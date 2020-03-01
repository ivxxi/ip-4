$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (s, c, t, n, total) => {
            return {s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
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
              totalPrice = totalPrice + 80;
              break;
          case topping = "pineapple":
              totalPrice = totalPrice + 80;
              break;
          case topping = "mushroom":
              totalPrice = totalPrice + 80;
              break;
          case topping = "chicken":
              totalPrice = totalPrice + 80;
              break;
          case topping = "Peperoni":
              totalPrice = totalPrice + 120;
              break;
          case topping = "olives":
              totalPrice = totalPrice + 120;
              break;
          case topping = "pepper":
              totalPrice = totalPrice + 120;
              break;
          case topping = "cheese":
              totalPrice = totalPrice + 120;
              break;

      }

        //Execute order function
        let newOrder = order(size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
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

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.pickup').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".pickup").click(function () {

    });

    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});
