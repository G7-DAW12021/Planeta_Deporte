
//NOTE:THE SAME METHODS WILL BE MADE TO MANIPULATE NEWS & COMMENTS DATA


//This function retrieves the new User data from the forms (PC-Tablet or Mobile) of create_user.html and sends it to the server to create a user
//Head: <script src="scripts/data_CRUD.js"></script>
//Event: onclick="createUser(0|1)"
/*function createUser(flag) {
    var name;
    var surname;
    var email;
    var pwd;

    //Depending on the form used, we initialize the variables regarding their ids
    if(flag == 0) {
        name = $('#name').val();
        surname = $('#surname').val();
        email = $('#email').val();
        pwd = $('#pwd').val();

    } else if (flag == 1) {
        name = $('#mobile_name').val();
        surname = $('#mobile_surname').val();
        email = $('#mobile_email').val();
        pwd = $('#mobile_pwd').val();
    }

    
    //Something like this will be the server request
    /*$.ajax({
        url: url,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        dataType:'json',
        success:function(data){
                    //On ajax success do this
                    alert(data);
                },
        error:  function(xhr, ajaxOptions, thrownError) {
                    //On error do this
                
                }
    });*/
    /*
}*/




//This function retrieves the new User data from the forms (PC-Tablet or Mobile) of create_user.html and sends it to the server to modify user data
//Head: <script src="scripts/data_CRUD.js"></script>
//Event: onclick="modifyUser(0|1)"
/*function modifyUser(flag) {
    var name;
    var surname;
    var email;
    var pwd;

    //Depending on the form used, we initialize the variables regarding their ids
    if(flag == 0) {
        name = $('#name').val();
        surname = $('#surname').val();
        email = $('#email').val();
        pwd = $('#pwd').val();

    } else if (flag == 1) {
        name = $('#mobile_name').val();
        surname = $('#mobile_surname').val();
        email = $('#mobile_email').val();
        pwd = $('#mobile_pwd').val();
    }

    
    //Something like this will be the server request
    /*$.ajax({
        url: url,
        type: 'POST',
        contentType:'application/json',
        data: JSON.stringify(data),
        dataType:'json',
        success:function(data){
                    //On ajax success do this
                    alert(data);
                },
        error:  function(xhr, ajaxOptions, thrownError) {
                    //On error do this
                
                }
    });*/
    /*
}*/


    
