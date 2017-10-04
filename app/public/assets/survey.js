// jQuery
<script src="https://code.jquery.com/jquery.js"></script>

// Capture the form inputs 
$("#submit").on("click", function(){
    console.log("submit works");
            // Form validation for user information
            function validateForm() {
              var isValid = true;
              $('.form-control').each(()=> {
                if ( $(this).val() === '' )
                    isValid = false;
              });
            // Form validation for survey question entries
              $('.chosen-select').each(()=> {
            
                  if( $(this).val() === "")
                      isValid = false
              })
              return isValid;
            }
            console.log("submit works");
            // If all required fields are filled
            if (validateForm() == true)
            {
                // Create an object for the user's data
                var userData = {
                    name: $("#name").val(),
                    image: $("#photo").val(),
                    scores: [parseInt($("#q1").val()), parseInt($("#q2").val()), parseInt($("#q3").val()), parseInt($("#q4").val()), parseInt($("#q5").val())]
                };
                console.log(userData);
    
                // Grab the URL of the website
                var currentURL = window.location.origin;
    
                // AJAX post the data to the friends API. 
                event.preventDefault();
                $.post("/api/people", userData, function(data){
                    console.log("some post");
                    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                    $("#matchName").text(data.name);
                    $('#matchImg').attr("src", data.image);
    
                    // Show the modal with the best match 
                    $("#resultsModal").modal('toggle');
    
                }).done(function() {
                    console.log("some post");
                  })
                  .fail(function() {
                    console.log( "error" );
                  });
            }
            else
            {
                alert("Please fill out all fields before submitting!");
            }
            
            return false;
        });