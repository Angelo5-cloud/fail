let colorPrin=document.getElementById(`uno`);
let cubo= document.getElementById('cub');
const style= document.documentElement.style;

let hormiga= document.getElementById("cinco");





let btnH=document.querySelector(`.btn`);
let reseteo=document.querySelector(`.reset`);

//=document.querySelector(`.tipo`);
let body=document.querySelector(`.body`);
let totalG=document.querySelector(`.totalGastados`);
let totalN=document.querySelector(`.totalNaranjas`);
let islaPerdida=0.39;
let naranja=3.93;
let morada=10.45;
let azul=85.23;
let comprobarHuevo=false;

let hormigaDeAcaciaCornigera_S1 = 0.04;//1
let predadora_S2 = 0.04;//2
let guardianaEscudera_S3 = 0.04;//3
let devoradoraDeHojas_s4 =0.04;//4
let giganteDeSangre_S5 = 0.04;//5
let cristalDorado_s6 = 0.04;//6
let puntaDeLanzaCarmesi_S7 = 0.05;
let enjutaRubi_S8 = 0.05;
let acechadoraOscura_S9 = 0.05;
//0,39

let hormigaDeRoca =0.10;//1
let mirmecomorfismo = 0.10;//2
let cancerNegro = 0.10;//3
let tetramoriumHermosa = 0.10;//4
let chinchesAsesinas = 0.10;//5
let hormigaMarabunta = 0.10;//6
let hormigaTerciopeloNaranja = 0.10;//7
let hormigaDeLaMuerte = 0.10;//8


let generalDelNuevoMundo = 0.23;
let generalGuardiana = 0.23;
let generaAcida = 0.23;

let hormigaBala = 0.28;

let saltarina = 0.29;
let dienteGigante = 0.29;

let hormigaDeCorazaDorada = 0.32;
let arqueadaDelgada = 0.32;
let hormigaConductora =0.32;
let hormigaDelAzucarDorada =0.32;
let espinosaDorada =0.32;

let hEspecial=0;
let decision =0;
let contadorTotal=0;
let contadorNaranjas=0;
let reset=30;
let tipoH=" ";
let rando=0;

function randon(randoN){
    
    rando =parseInt(Math.random()*randoN)+1;
    return rando ;
}





function suerte(){
  btnH.style.height="0";
  btnH.style.width="0";
  btnH.style.color="transparent";
  
  cubo.animate([

  {transform:'rotateY(160deg)'}

  ],{

    

    duration:200,

    iterations :1 

  });
  btnH.style.backgroundColor="transparent";
    console.log (decision+" "+hEspecial);
  
  style.setProperty('--color','orange')
  cubo.animate([

  {transform:'rotateY(160deg)'}

  ],{

    

    duration:200,

    iterations :1

  });
  setTimeout(()=>{
    btnH.style.height="50px";
  btnH.style.width="100px";
  
  btnH.style.backgroundColor="black";
  },1000);

  if(hEspecial >-0.1 && hEspecial <= 0.10){
    
     
    switch (randon(8)) {
      
       case 1:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQuKcFpB3QqeSvjGD-_mBmTBzjcm-pWB0m1fmWO_L7jrpHZ88rtqw9hXDQcip2mDsfvx6yu0ThKiI8949IsdPav44HVG2xQHPcol5h57bxI_k3-FM1FMSDgW0tOw6JWg2QjyTNvaPUYpB6Q5ua1vR2bfj8pUdbLfMmR1leOwhNWEt5L2jJSkd5JCjudw/s16000/b3678ce4-83ba-407a-bb11-8f7a326e535d.jpg')";
          //.textContent="Hormiga De roca";
          break;
          
        case 2:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ3LnFLg-LegRMwKPKZ5yIMCfxx9x1ru8Oyz1YJJzLkqc9GkA2JPjyMbcrZZuGrHrG5DzRl2Le7UJMqXHQBgHg1vWzJfqFjyl0yDVk2kxzha62VgyXn7KFMFfpb8yoMw7fZAOj72cvM8jysvr8Ik-leYrBZlb8yen8_xOqmYYvp63x5NdJi9O7A6MR-g/s16000/5c7f253e-2b69-4e62-9aa6-b810557d603c.jpg')"; 
          //.textContent="Mirmecomorfismo";
          break;
        
        case 3:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfpWiSslQ6upAwEuCkvsst61sbdc0qmik-dQiXbVTyjCvlZJaW5fALW9MSJecRbuOY9bj1sGuynQe5UIclQjpZcmGUKGDYme56Z0j1Qbtq5fr2Q9qK4WfuTydFnZ0WcU8SGfcWlFCwkNK_FTshmxUUDoH5q1FiZY3XoKNa_HLSTrCNJfoBy0P4YH1jiQ/s16000/b7021648-deab-4ec6-b76e-f8f7a240e597.jpg')";
          //.textContent="Cancer negro";
          break;
        
        case 4:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCHXG3hwSiBJ_QXD-Y_92IUuE-QXDSgDgQzD2s3h756J5a_0267K-L23kpayg7XUOxZEZ9ZK8KVU9YSK_z2bkdAtXFvVEjrEuKr_fBTVPjvIpR-KTx4wCU7hmEV4HJ2743do3xY_LHwLni10c9Xx00Trto_4a5t3am9CHGZIcMtXmPRuDcZwb4SamGWw/s16000/a3ac9d93-1f54-4d95-b1d9-da9297ce6cdc.jpg')";
          //.textContent="Tetramorium hermosa";
          break;
        
        case 5:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuXbX5m-3PhnVYAXQGzLqt1HvBvgE3AOKZEnfRNa2qqWRE2HVbrfbrshBryOlB85XMZYpovD4c_iC0aKCSh3n1H3yyEtZ-hmDg_TUNWCjiPdV6yxunnItFJgz2m-0oPzC5rmd5fCCDrakFNTlmIkzpXBqLeG-UIW5xPSfUu4AuXcmO0AnoMPZGxZet_w/s16000/12dc807f-598d-4062-9455-5172422c16c2.jpg')";
          //.textContent="Chinches Asesinas";
          break;
        case 6:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq4skLZAGxoSND5-PTU3u5y7VlU3cdzH6TpKNsP01G9nw5GZqO34mgzrdgba99l_pZyRArt6Ia_0liwYP6pyxz7yyRqKm3ybdG7iZRsibnIEcZOiF09ywCi-YqPK5k0z5kfH21MSKzOKm-LQ4a33UIL5WNvBHNLUNAIeR_DNxE5FB0P6YUyI8GFLkyXA/s16000/6d0d88b0-3460-463c-b84f-72d2941997ff.jpg')";
          //.textContent="Hormiga marabunta";
          break;
        
        case 7:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRJsp8VWMJ1f2_sXVqeoNnnYUdYF1_XsZuDe6lwszXPcARkczDbwn_r5lgyQtJalP0F51bEI8vapEjiy3LtcTubOzebk-swwR2f3O7wDIjZEnC7Ca3LLU6q37dS6L6DbM7hl9LkhceCrhHjDYVim6DRYkH40iCU9xLtaN0mK_a-CQsKvv1rRPSeNiMQA/s16000/725f8739-f8e2-4419-bad2-ac21efb53fce.jpg')";
          //.textContent="Hormiga Terciopelo naranja";
          break;
        
        case 8:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMt99l2AIneMz5b9Y_9I7UnG_pJG7Eo9VzCpj2xCM4p6PY5DjzHA-4Xx9YbWP-v8roQqnWtyyuUxdB6IaDiP-mg1vSc1g--ySR5rYmMEPwtwzNhJZt-fohPz9X9ykRbGJ9mmS3O2Xp-uH5SBcGWWgKHmu8S5Uh0Sido9vzc8bVk0mpr02DwCn9OEhhNA/s16000/96f82b34-c185-4e74-9b4e-28ef4e5af590.jpg')";
          //.textContent="Hormiga de la muerte ";
         
    }
    
    
  }
  if(hEspecial> 0.10 && hEspecial<=(0.10+0.23)){
    switch (randon(3)){
        case 1:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj50MnCOeNRdMohyeKkMPRu1wEG4t4NWraeRNIhpmw77rpr4FGZ8H4RqWBPI0MOym8XcvBxeTw34zZYnp8dn9SnHNdJsgpnBZI-ff24bgaPlkTqxg68ZaA11bvg1uDNDGkIYk6wuTrigZySnUmwCRiItMjGu7AkuzR2Z0dBj_abRLEYZM626lzRZ3epg/s2048/5fde90b2-540c-4221-938d-3d7933a7923a.jpg')";
          //.textContent="General del Nuevo mundo";
          break;
          
        case 2: 
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6rKJszopOxG-PhztroWGTuLKv4Sc5SrejF59GqPNRUT5eeVCf2g4H4Xl1qcqkfKuk2EgIVByX5dMiL2vyhAD6Fcmm-rndrmzbzsHXGxFIvrDQ5AXu583eQl_voqCU1H3WnFpvs90JfKUvJV5nI6EJUJr6MSPagrSRD4DxxoGwB19_kxNckYXO-Laz_g/s2048/7fc8e182-ab9b-454a-960b-75b41da128de.jpg')";
          //.textContent="General guardiana ";
          break;
        
        case 3:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEel7aN10hkio5m7pEjm-KvJWXODLDmpFKDrbiyJvihd1fpe6UTEomKdwHHhzVA5o3aA_3D6_maANrbk1H052nSEYLGwbCM69l0CZBloBOYS8QDKu9vnrhFZf_UuRgg-pgp_72abWI96qj3MjqbKOogQpstQG1FQ9ianFGbdHuw0F9lkBnF3rjntEEYQ/s2048/0e2f5b74-db1e-41bb-938e-7bf85b4d7c9e.jpg')";
          //.textContent="General ácida ";
        break;
    
    }
   
  }
  if(hEspecial>(0.10+0.23) && hEspecial<=(0.10+0.23+0.28)){
    hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsTcSCefTY9O2N_rDfOpPxhfif8VCJIw3VrV_6ZPg78w3JCcJY9V1_F_Afp2KDhpuSw9J1TmF7Y1zddLPxyn5JHIlFXhC0jL83BOaHNixiAp62MeQ9HuG-YvZmVuQONEExmVXqmBwfhU6FUOkv10qbfxAUwgWfagxA9KKRNXp4ukTYJ-mcm65FLZxXGg/s2048/bbc021ed-e484-4b83-9d7f-1623fbb024f6.jpg')";
    //.textContent="Hormiga bala";
    
  }
  if(hEspecial>(0.10+0.23+0.28)&&hEspecial<=(0.10+0.23+0.28+0.29)){
    switch(randon(2)){
        
        case 1:
          hormiga.style.backgroundImage = "url('https://logo-pinwino-0-1.blogspot.com/2022/12/hormipack.html?m=1')";
          //.textContent="Saltarina";
          break;
          
        case 2:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxFNPzCfAxTpfxmJs2WUUSIzgKiri8UluGP5LPxKLxxAFDqFcPkBvipCpdSKF-P8Xei_O8lTJ89MurxyGBmlnKosYAXeLq4oRKORLMadMW5uCnn_alSeVQFYHYpYQFKEviAA0HqzAU744BMHtuYQYlwW2ypcR8cq3wrYCK1ymsWoEdhM6Stf752rXHbg/s16000/2c5d55e2-d1ff-4c0b-8a53-5bfa71a64a78.jpg')";
          //.textContent="Diente gigante";
        
        break;
    }
  }
  if(hEspecial>(0.10+0.23+0.28+0.29)&&hEspecial<=(0.10+0.23+0.28+0.29+0.32)){
    switch(randon(5)){
        
        case 1:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaF92cRWKNqJVPbo0xc_ck1Ob6np-gkBn1zLe-oy8PJSdL4nEzLTrA58Gc9zJZJSkAjUHl-pvA5j3X1ExRyKPBY05yaGInN7SfVB_27uQGumYGo2BPjGSBIVydJg2MI2gW_WhXykJZqcvUd975ZsY4XnbpT24vZ9m7zDo7H5pFENHmSTrxMtpCc5fTBQ/s16000/bed88343-7e48-420a-a7b3-0439ee79915c.jpg')";
          //.textContent="Coraza dorada";
          
          break;
          
        case 2:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu5rGUwIdR0gOftSQ8MCVZAyMiGDUjAe1rnVWL9l1DzUyTmFAqLacu4pPbjpBw2ccKbGJw0RggOvOj1Suk8pnKk6yV1w_yy_XJVwREwnWO6miXJQBUoADtWZfimwbpeMsi9IakzVAPnVxFElNcTRVB6qUH6GPL8Wspsa51BpOud7YSBeVrsfxhz8tA1A/s16000/f4f30b36-944f-4cc0-b54c-bb897f6db544.jpg')";
          //.textContent="Arqueada delgada ";
          break;
        
        case 3:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgtbIhZ2Xfvuor77zh85l5Q0AiWawz7yrbTrUUWe7YxvQ6X6OtvSkyBah-kWHbEyW1a3FYzkB9Kw1utiY0d0b5SZFvbL2Tm_QFkGm2lXeYDuQUheD2PUwYOUXfpRatUNl-dAT3TG49Ak9FhL_HhGZ6_PfHmYcJ3lTdrE05b2VyJjcrDp3xUSs8kZdczA/s16000/9b967b02-26d9-405e-bb9b-d486090267b0.jpg')";
          //.textContent="Hormiga conductora ";
          break;
        case 4:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7g84puVqXTGk3xs9fyUnRt2NTMITqf4zYKeLg4WlOiroLg_G4ipEXAdZgG55X6UyV35Wk2WuPTlDwa19xKc3ilUES23Duu-nCu6D2pnRolTPy901IrYdQGWpmldac_LB_bvQYFjZ-hBXKfr_koDkxtxTzvIaFz3dPV9fII601PKivLOgYdcyOx2fJjg/s16000/f1e8b952-1bd7-4c80-8e71-f82cd4ea782a.jpg')";
          //.textContent="Hormiga del azúcar dorada ";
          break;
        
        case 5:
          hormiga.style.backgroundImage = "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirFir0yzQQomd38fxRFLGAUu4lGDXEHHqaR4plmtH8caW0RMLGrTtiBI9CqV6scpr1iPZWpef4Fsm3Ki4eX9gtscQoV-gbjttu1L-M9ZzemAz6wYfvMWsyT_k0jpFtiMxB5luFkLYd0ibgSc8AiUppui2h2yq3tu8ojpF_4p-HIMGwAYlvi_4oEiqfxQ/s16000/2bd53fae-9651-4e4e-8c8f-1c88dfa676d2.jpg')";
          //.textContent="Espinosa dorada";
        break;
    }
  }
  
}

btnH.addEventListener(`click`,()=>{
    
    contadorTotal++;
    ;
   
    if(reset>0){
      
      decision =parseFloat((Math.random()*100)+1).toFixed(2);
      console.log(decision);
    comprobarHuevo=false;
    //Isla 
    if(comprobarHuevo==false && decision>-0.1&&decision <=islaPerdida){
      comprobarHuevo=true ;
      reset=30;
      reseteo.textContent=reset;
       style.setProperty('--color','orange')
      
      contadorNaranjas++;
       
      totalN.textContent=contadorNaranjas ;

      
    }
    //naranja 
    if(comprobarHuevo==false && decision>islaPerdida&&decision <=(islaPerdida+naranja)){
      comprobarHuevo=true ;
      hEspecial:0;
      hEspecial=parseFloat(Math.random()*1.22).toFixed(2);
      
      contadorNaranjas++;
      
      totalN.textContent=contadorNaranjas ;
      reset=30;
      reseteo.textContent=reset;
      suerte();
      
      
    }
    if(comprobarHuevo==false && decision>(islaPerdida+naranja )&&decision <=(islaPerdida+naranja+morada)){
      comprobarHuevo=true ;
      
      
       style.setProperty('--color','purple')
      hormiga.style.backgroundImage ="url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUV3iAZvmjbuoqI3gwxqAsHRmip9F3Hs-I_665JM0dJKisLKqVES7kguNZmjIkutsONUL8l634VbcJwwQuwrw0lylGmLTcKIPUj88wG92X1tfnomGXoBS3mJw8EnCG35MOO-fwPu7RhpO5bY1wR9L7tstj8XCMHG0wW6xu8t4gi5Mj_7U3Mw4JuqmeXw/s320/1670117531906.png')";
       --reset;
      reseteo.textContent =reset ;
      
    }
    if(comprobarHuevo==false && decision>(islaPerdida+naranja+morada )&&decision <=(islaPerdida+naranja+morada+azul)){
      comprobarHuevo=true ;
      
      hormiga.style.backgroundImage ="url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUV3iAZvmjbuoqI3gwxqAsHRmip9F3Hs-I_665JM0dJKisLKqVES7kguNZmjIkutsONUL8l634VbcJwwQuwrw0lylGmLTcKIPUj88wG92X1tfnomGXoBS3mJw8EnCG35MOO-fwPu7RhpO5bY1wR9L7tstj8XCMHG0wW6xu8t4gi5Mj_7U3Mw4JuqmeXw/s320/1670117531906.png')"                  
      style.setProperty('--color','blue')
      
       --reset;
      reseteo.textContent =reset ;
      
    }
     

    }//if reset
    totalG.textContent=contadorTotal
    console.log ("Tipo"+decision+"probabilidad "+hEspecial);
      
    if(reset ==0){
      hEspecial:0;
      hEspecial=parseFloat(Math.random()*1.22).toFixed(2);
      
      style.setProperty('--color','orange')
      reset=30;
      reseteo.textContent=reset;
      contadorNaranjas++;
      totalN.textContent=contadorNaranjas;
      suerte();
      
      }

    
   
 
});
