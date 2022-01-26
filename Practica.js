var Nombres = [{Nombre:"Juan", id : 1, PadreId : 0},{Nombre:"Sebastian", PadreId : 1},{Nombre:"Alejandro", PadreId : 1}]
// var Frutasx2 = ["Sandia","Mandarina","Durazno","etc","etc1"]

//LENGTH 
function Length()
{
  var html = [];
    $.each(Nombres,function(index,contenido)
  {

    
      html.push('<ul>')
      html.push('<li>'+ contenido.Nombre +'</li>')
         html.push('<ul>')
         html.push('<li>'+ contenido.Nombre +'</li>')
         html.push('</ul>')
          
      html.push('</ul>')
    
  })
  
  $('#lista').append(html.join('\n'))
}
window.onload = Length

//CREACION DE UN DIV CON JQUERY 
// function IngresarDiv()
// {
//   var html = [];
//   html.push('<div>')
//   html.push('<p>agrego un div con push')
//   html.push('</div>')
//   $('#lista').append(html.join('\n'))
// }
//  window.onload = IngresarDiv;

//CREAR UNA LISTA UL CON JAVASCRIPT 
// function MostrarLista(elements)
// {
   
//     let ul = document.createElement("ul");

//     for(item of Frutas)
//     {
//         let li = document.createElement("li");
//       let liTexto = document.createTextNode(item);
//       li.appendChild(liTexto);
//       ul.appendChild(li)
//     }
//     document.body.appendChild(ul);
// }
// window.onload = MostrarLista;
// persona.forEach((contenido)=>
// {
//      console.log(contenido)
//      if(typeof contenido === "string")
//      {
       
//      }
// })

// console.log(Object.values(persona))
// Object.entries(persona).forEach((par) =>
//     {
//       const clave = par[0];
//       const valor = par[1];
//        if( typeof valor === "string")
//        {
//            persona[clave] = valor.toUpperCase();
//        }
//     })
//     console.log(persona)


//CREAR UNA LISTA CON JQUERY
// function UlMenuPrincipal()
// {
//   var html = [];
//     html.push("<ul class='lista'>")
//       html.push(LiMenu(this));
//      html.push("</ul>")
    
//     //  $("#lista").append(html.join("\n"))
// }
// function UlSubMenu()
// {
//   var html = [];
//   html.push("<ul class='sublista'>")
//   $.each(Frutasx2,function(index,contenido)
//   {
//     html.push("<li>"+contenido+"</li>")
//   })
//   html.push("</ul>")
//   return html.join('\n');
  
// }
// function LiMenu()
// {
//   var html = [];
//   $.each(Frutas,function(index,contenido)
//   {
//     html.push("<li>"+contenido)
//     html.push(UlSubMenu(this))
//     html.push("</li>")
//   })
//   return html.join("\n");
// }
// $("#lista").html(UlMenuPrincipal.append(html.join("\n")))
// window.onload = UlMenuPrincipal;