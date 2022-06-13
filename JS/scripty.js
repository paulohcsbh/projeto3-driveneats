let comida = 0;
let bebida = 0;
let sobremesa = 0;

function marcarUm(elemento){   
       
    const clicadoUm = document.querySelector(".marcacao");
    if (clicadoUm !== null){
        clicadoUm.classList.remove("marcacao");        
    }        
    elemento.classList.add("marcacao");      
    comida = comida + 1;
    fechar();
    verdinho();
    
} 
function verdinho(elemento){
    const checar = document.querySelector(".aparece");
    if (checar !== null){
        checar.classList.remove("aparece");
    }
    elemento.classList.add("aparece");
}
function marcarDois(elemento){     
     
    const clicadoDois = document.querySelector(".marcacao-dois");
   
    if (clicadoDois !== null){
        clicadoDois.classList.remove("marcacao-dois");
    }        
    elemento.classList.add("marcacao-dois");  
    bebida = bebida + 1; 
    fechar();
}     
function marcarTres(elemento){ 
         
    const clicadoTres = document.querySelector(".marcacao-tres");
   
    if (clicadoTres !== null){
        clicadoTres.classList.remove("marcacao-tres");
    }        
    elemento.classList.add("marcacao-tres");  
    sobremesa = sobremesa + 1; 
    fechar();
}   
function fechar(){
    if (comida == 1 && bebida == 1 && sobremesa == 1){
        const pedido = document.querySelector('.fechar');
        pedido.classList.add("marcacao-pedido");
        const sumir = document.querySelector('.botao');
        sumir.classList.add("sumido");
        const aparecer = document.querySelector('.fechar');
        aparecer.classList.remove("sumido");

        

    }
}
function enviarMsg(){
    const texto = "Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70"
    msg = window.encodeURIComponent(texto);
  
    window.open("https://wa.me/5531986897994?text=" + msg);
    
}
