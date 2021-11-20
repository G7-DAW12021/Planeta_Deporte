//This script makes visible and invisible the add comment form from new.html and new_registered.html

$(document).ready(function(){
        $(".add_comment_button").click(make_comment);

        function make_comment(){
            $(".add_comment_button").hide();
            var commentArea = $('<textarea  id="comentArea" class="add_comment_txt" type="text" required rows="10px" cols="80px" > </textarea>');
            var submitButton = $('<button id ="add_hidden_btn" class="add_comment_button" name="add_btn_hid" type="button">Agregar</button>');
            var cancelButton = $('<button id ="cancel_hidden_btn" class="add_comment_button" name="cancel_btn_hid" type="button">Cancelar</button>');

            $("#text_area_div").append(commentArea);
            $("#submit_button_div").append(submitButton);
            $("#submit_button_div").append(cancelButton);


            $(submitButton).click(function () {
                var comment = $("#comentArea").val();
                console.log(comment);
                $("#text_area_div").empty();
                $("#submit_button_div").empty();
                $(".add_comment_button").show();

            });

            $(cancelButton).click(function () {
                $("#text_area_div").empty();
                $("#submit_button_div").empty();
                $(".add_comment_button").show();

            });

        } 
});