window.addEventListener("load",call_method);
function call_method(){
    change_sidebar();
    link();
}
/*----Botón hamburguesa- Mobile ---*/
function link(){
    /* buscador-input*/
    var input = document.createElement("input");
    input.className="input_search";
    input.type="text";
    document.getElementsByClassName("search")[0].append(input);
    /* buscador-botón*/
    var btn=document.createElement("button");
    btn.className="button_search";
    btn.type="button";
    document.getElementsByClassName("search")[0].append(btn);
    /* buscador-imagen btn*/
    var img= document.createElement("img");
    img.className="img_search";
    img.src="img/search_mobile.png";
    document.getElementsByClassName("button_search")[0].append(img);
    /* links*/
    var name=["Futbol", "Baloncesto", "Tenis", "Ciclismo", "Motor", "eSport"];
    for(let i=0; i<name.length; i++){
        var node = document.createElement("a");
        var textnode = document.createTextNode(name[i]);
        node.href="sport_section_registered.html";
        node.className="nav-link nav-item header_links";
        node.appendChild(textnode);
        document.getElementsByClassName("link_mobile")[0].append(node);
    }
    var a = document.createElement("a");
    var texta = document.createTextNode("Contacto");
    a.href=change_Contact();
    a.className="nav-link nav-item header_links";
    a.appendChild(texta);
    document.getElementsByClassName("link_mobile")[0].append(a);

}
/*Método: Cambiar de dirección URL de contacto dependiendo donde se encuentra*/
function change_Contact(){
    var clase="contact_registered.html";
    var page=window.location.href;
    var ruta=page.split("/");
    var file=ruta[ruta.length-1];
    if(file === "contact.html"|file === "signup.html"|file === "home.html"|file === "sport_section.html"|
       file === "login.html"|file === "new.html"|file === "filtered_news.html"){
        clase="contact.html";
    }
    return clase;
}
/*Método: Cambiar el nombre de la clase dependiendo donde se encuentra*/
function change_sidebar(){
    var page=window.location.href;
    var ruta=page.split("/");
    var file=ruta[ruta.length-1];
    var clase=document.getElementById("side");
    if(file === "admin_users_panel.html"|file === "admin_comments_panel.html"|file === "admin_content_panel.html"|
    file === "new_registered.html"| file === "writer_comments_panel.html"|file === "writer_content_panel.html"|
    file === "writer_create_news.html"){
        clase.className="sidebar_admin";
    }
}