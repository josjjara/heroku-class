
let ejecutarCodigo = () =>{
   /* alert("Hola, mundo!");*/

   document.getElementById("titulo1").textContent = "Album de fotos";

    let text_muted = document.getElementsByClassName("text-muted");

    text_muted[1].innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`

    let etiqueta_p = document.getElementsByTagName("p");


    etiqueta_p[2].setAttribute("class", "d-none");


    let arregloFotos =  
    [ 
    { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}, 
    { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}, 
    { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'} ,
    { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'escenario'},
    {url:'https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'woman'},
    {url:'https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'stop_war'},
    {url:'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'latop'},
    {url:'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'outside_cofee'},
    {url:'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'copa_bebida'},
    {url:'https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'yoga_pose'}


    ]

    

    const svg_arr = document.querySelectorAll("div.card > svg");

    const intial_size = svg_arr.length;
 
    for(let i = 0; i < intial_size  ; i++){

        let svg = svg_arr[i];

        console.log(svg)

        const img = document.createElement("img");
        img.setAttribute("src",arregloFotos[i].url);
       
        img.setAttribute("alt",arregloFotos[i].alt);

        svg.parentNode.replaceChild(img, svg);
    }

}

ejecutarCodigo();


