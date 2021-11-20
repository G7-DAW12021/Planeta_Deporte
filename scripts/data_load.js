/*Añadir esto en los html
-En el head -> <script src="scripts/data_load.js"></script>
*/

/*Wait for the document to be ready*/
$(document).ready(function(){
    /*--------------------------------------------------------------------------Retrieve data from JSON file-----------------------------------------------------------------------*/
    $.getJSON("http://127.0.0.1:8887/data.json",function(json) {
         /*To know what html file is loaded*/ 
        var path = window.location.pathname;
        var page = path.split("/").pop();
        var data;
    
        /*Flow control depending of the html document loaded*/
        switch(page) {
            
            case "writer_comments_panel.html":
            case "admin_comments_panel.html":
                
                data = json.data[2].comentarios;
                var dataUsers = json.data[0].usuarios;
                var dataNews = json.data[1].noticias;
                var dataNewsComments=json.data[3].comentariosnoticias;
                $('.comments_table').empty();

                var th =   '<tr>\
                                <th class="author_th">Autor</th>\
                                <th class="comment_th">Comentario</th>\
                                <th class="news_th">Noticia</th>\
                                <th class="actions_th">Acciones</th>\
                            </tr>';
                
                $('.comments_table').append(th);


                $.each(data, function() {
                    var name;
                    var photo;
                    var news;
                    var idautor =this['idautor'];
                    var id = this['id'];

                    /*JOIN de Comentarios con Usuarios*/
                    $.each(dataUsers, function(i) {
                        if (idautor == dataUsers[i].id) {
                            name = dataUsers[i].nombre;
                            photo = dataUsers[i].foto;
                        }

                    });

                    /*JOIN de Comentarios y Noticias*/
                    $.each(dataNewsComments, function(j){
                        if(id == dataNewsComments[j].idcomentario) {
                            var idnew = dataNewsComments[j].idnoticia;

                            $.each(dataNews, function(k){
                                if (idnew == dataNews[k].id) {
                                    news = dataNews[k].titulo;
                                }
                            });
                        }
                    });
                
                    if(page == "admin_comments_panel.html") {
                        var info = '<tr>\
                                        <td><img class="comments_table_profile_img" title="User Img" alt="User Img" src="'+ photo + '"> <p class="author_name">'+ name+'</p></td>\
                                        <td>' + this['texto'] + '</td>\
                                        <td>' + news + '</td>\
                                        <td class="actions_td"> \
                                            <a class="edit_table_links" href=""> Editar comentario</a>\
                                            <a class="remove_table_links" href=""> Eliminar comentario</a>\
                                            <a class="answer_table_links" href=""> Responder</a> <br>\
                                        </td>';
                    } else {
                        var info = '<tr>\
                                        <td><img class="comments_table_profile_img" title="User Img" alt="User Img" src="'+ photo + '"> <p class="author_name">'+ name+'</p></td>\
                                        <td>' + this['texto'] + '</td>\
                                        <td>' + news + '</td>\
                                        <td class="actions_td"> \
                                            <a class="remove_table_links" href=""> Eliminar comentario</a>\
                                            <a class="answer_table_links" href=""> Responder</a> <br>\
                                        </td>';
                    }
                    $('.comments_table').append(info);
                });   

            break;

            case "writer_content_panel.html":
            case "admin_content_panel.html":
                data = json.data[1].noticias;
                $('.content_section').empty();
                $.each(data, function() {
                    var info=   '<div class="div_content_panel_new">\
                                    <img class="img_content_panel_new" title="Irving" alt="New1" src="'+ this['foto']+ '">\
                                    <p class="text_content_panel_new">'+ this['titulo'] + '</p>\
                                    <div class="edit_remove_btns">\
                                        <button class="button_edit">\
                                            <img  class="edit_delete" title="Edit" alt="Edit" src="img/edit.png">\
                                        </button>\
                                        <button class="button_delete" type="button">\
                                            <img class="edit_delete" title="Delete" alt="Delete" src="img/delete.png">\
                                        </button>\
                                    </div>\
                                </div';
                    $('.content_section').append(info);
                });

            break;

            case "admin_users_panel.html":
                data = json.data[0].usuarios;
                $('.users_table').empty();
                var th =   '<tr>\
                                <th>Foto</th>\
                                <th>Nombre</th>\
                                <th>Apellido</th>\
                                <th>Email</th>\
                                <th>Clave (Hash)</th>\
                                <th>Acciones</th>\
                            </tr>';

                $('.users_table').append(th);

                $.each(data, function() {
                    var info = '<tr>\
                                    <td><img class="users_table_profile_img" title="User Img" alt="User Img" src="'+ this['foto']+ '"></td>\
                                    <td>' + this['nombre'] + '</td>\
                                    <td>' + this['apellidos'] + '</td>\
                                    <td>' + this['email'] + '</td>\
                                    <td>' + this['clave'] + '</td>\
                                    <td>\
                                        <div class="edit_remove_btns_V2">\
                                            <button class="button_edit_V2">\
                                                <img  class="edit_delete_V2" title="Edit" alt="Edit" src="img/edit.png">\
                                            </button>\
                                            <button class="button_delete_V2" type="button">\
                                                <img class="edit_delete_V2" title="Delete" alt="Delete" src="img/delete.png">\
                                            </button>\
                                        </div>\
                                    </td>\
                                </tr>';
                    $('.users_table').append(info);
                });
            
            break;


            //Por hacer
            case "home_registered.html":
            case "home.html":
                $('.home_panel_PC').empty();
                /*$('.home_panel_tablet').empty();
                $('.home_panel_mobile').empty();*/

                var info_PC ='<div class="container">\
                                    <div class="row">\
                                        <div class="col-lg-6">\
                                            <section class="row main_new">\
                                                <img class="main_image" title="chiesa" alt="chiesa" src="img/chiesa.jpg">\
                                                <header>\
                                                    <a class="news_links" href="new.html?identificaro=' + id + '">\
                                                        <h3 class="news_text">Federico Chiesa, de querar dejarlo a los 13 años a ser la estrella de Italia</h3>\
                                                    </a>\
                                                </header>\
                                            </section>\
                                            <section class="row secondary_news">\
                                                <div class="secondary_new_1">\
                                                    <img class="secondary_images" id="secondary_image_1" title="vidal" alt="vidal" src="img/vidal.jpg">\
                                                    <header>\
                                                        <a class="news_links" href="new.html">\
                                                            <h6 id="sec_text_1" class="news_text">Sale a la luz un pol&eacute;mico v&iacute;deo de Arturo Vidal \'achispado\' de m&aacute;s en su Ferrari</h6>\
                                                        </a>\
                                                    </header>\
                                                    <br>\
                                                </div>\
                                                <div class="secondary_new_2">\
                                                    <img class="secondary_images" id="secondary_image_2" title="alonso" alt="alonso" src="img/alonso.jpg">\
                                                    <header>\
                                                        <a class="news_links" href="new.html">\
                                                            <h6 id="sec_text_2" class="news_text">Alpine: "Fernando Alonso ha ofrecido actuaciones m&aacute;gicas en varias carreras"</h6>\
                                                        </a>\
                                                    </header>\
                                                </div>\
                                            </section>\
                                        </div>\
                                        <aside class="col-lg-6 aside_news">\
                                            <div class="aside_new_1">\
                                                <img class="aside_images" title="irving" alt="irving" src="img/irving.jpg">\
                                                <header>\
                                                    <a class="news_links" href="new.html">\
                                                        <h6 class="news_text">¡Bombazo en la NBA! Los Brooklyn Nets se cansan de Kyrie Irving y podrían prescindir de &eacute;l esta misma temporada</h6>\
                                                    </a>\
                                                </header>\
                                                <br>\
                                            </div>\
                                            <div class="aside_new_2">\
                                                <img class="aside_images" title="sr4" alt="sr4" src="img/sr4.jpg">\
                                                <header>\
                                                    <a class="news_links" href="new.html">\
                                                        <h6 class="news_text">Pochettino: "Quiz&aacute; la realidad de Sergio Ramos es otra que la de 2014"</h6>\
                                                    </a>\
                                                </header>\
                                                <br>\
                                            </div>\
                                            <div class="aside_new_3">\
                                                <img class="aside_images" title="quique" alt="quique" src="img/quique.jpg">\
                                                <header>\
                                                    <a class="news_links" href="new.html">\
                                                        <h6 class="news_text">Quique S&aacute;nchez Flores: "Michel es mi amigo, le deseo lo mejor"</h6>\
                                                    </a>\
                                                </header>\
                                            </div>\
                                        </aside>\
                                    </div>\
                                </div>';

                /*var info_Tablet ='';

                var info_Movil ='';*/


                $('.home_panel_PC').append(info_PC);
                /*$('.home_panel_tablet').append(info_Tablet);
                $('.home_panel_mobile').append(info_Movil);*/


            break;

            //Por hacer
            case "sport_section_registered.html":
            case "sport_section.html":
                data = json.data[1].noticias;//News
                var flag = window.location.href.split("=").pop();//This indicates what section is the user in

                /*Switch to initialize the html depending on the section*/
                switch(flag) {
                    case "futbol":
                        /*------------------------------------------------PC-----------------------------------------------------------------------------------*/
                        $('#main_img').attr("title","chiesa");
                        $('#main_img').attr("alt","chiesa");
                        $('#main_img').attr("src",data[2].foto);

                        $('#main_text').text(data[2].titulo);
                
                        $('#sport_secondary_image').attr("title","vidal");
                        $('#sport_secondary_image').attr("alt","vidal");
                        $('#sport_secondary_image').attr("src",data[4].foto);
                        

                        $('#sport_sec_text').text(data[4].titulo);

                        $('#aside1_img').attr("title","pochettino");
                        $('#aside1_img').attr("alt","pochettino");
                        $('#aside1_img').attr("src",data[0].foto);

                        $('#sport_aside_text_1').text(data[0].titulo);

                        $('#aside2_img').attr("title","quique");
                        $('#aside2_img').attr("alt","quique");
                        $('#aside2_img').attr("src",data[1].foto);

                        $('#sport_aside_text_2').text(data[1].titulo);

                        $('#aside3_img').attr("title","xavi");
                        $('#aside3_img').attr("alt","xavi");
                        $('#aside3_img').attr("src",data[3].foto);

                        $('#sport_aside_text_3').text(data[3].titulo);

                        /*------------------------------------------------Mobile-----------------------------------------------------------------------------------*/
                        $('#sec_img_1').attr("title","pochettino");
                        $('#sec_img_1').attr("alt","pochettino");
                        $('#sec_img_1').attr("src",data[0].foto);

                        $('#sec_img_2').attr("title","quique");
                        $('#sec_img_2').attr("alt","quique");
                        $('#sec_img_2').attr("src",data[1].foto);

                        $('#sec_img_3').attr("title","xavi");
                        $('#sec_img_3').attr("alt","xavi");
                        $('#sec_img_3').attr("src",data[3].foto);
                    break;
                    

                    case "baloncesto":
                        
                    break;

                    case "tenis":
                    
                    break;

                    case "ciclismo":
                        
                    break;

                    case "motor":
                        

                    break;
                };

            break;

            //Por hacer
            case "new_registered.html":
            case "new.html":
            break;
        }

    });
});