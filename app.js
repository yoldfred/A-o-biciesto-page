let resultado ={
    valor:'',
    dom:undefined,
};

const ACCION={
    "CLEANER":()=>{
        resultado.dom.innerText = "";
        resultado.valor="";
    },
    // "SUMIT":()=>{
    //     let result= ""+resultado.valor+""+i+"";
    //     resultado.dom.innerText = result;
    //     resultado.valor = result
    // },
    "ADD":(i)=>{
        let result = ""+resultado.valor+""+i+"";
        resultado.dom.innerText = result;
        resultado.valor = result;
    },
};

resultado.dom = document.getElementById('barra');

resultado.dom.innerText = resultado.valor;

document.addEventListener('click',handLerClick)

function handLerClick(e){
    let data = e.target.dataset;
    if ('valor' in data) {
        console.log(data.valor);
        if(data.valor in ACCION){
            ACCION[data.valor]()
        }else{
            ACCION.ADD(data.valor)
        }
    }    
}

//CALCULAR EL AÑO --->^

let button = document.getElementById('test');

button.addEventListener('click',()=>{
    if ((resultado.valor % 4 === 0 && resultado.valor % 100 != 0) || resultado.valor % 400 === 0){
         resultado.valor +' si es biciesto';
    }else{
        resultado.dom.innerText= resultado.valor +' no es biciesto'
    
    }
})