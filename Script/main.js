$("form").submit(function (){

      var error = "";

      if ($("#name").val() == "") {
        
        error += "Please enter full name <br>";

      }

      if ($("#email").val() == "") {
        
        error += "Email address is required <br>";

      }

      if ($("#textarea").val() == "") {
        
        error += "Describe your project to us";

      }

      if (error != "") {

        $("#error").html('<div class="alert alert-danger" role="alert"> <p><strong>Please enter the required info</strong></p>' + error + '</div>');

        return false;

      } else {

        $("#error").html('<div class="alert alert-success" role="alert"> <p><strong>Your form was successfull submitted.</strong></p></div>');
        return true;
        
      }

    });