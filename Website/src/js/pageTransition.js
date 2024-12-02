let a = document.getElementById("to-america");
window.onload = () => {
    const tranitionElement = document.querySelectorAll('.transition');
    const anchors = document.querySelectorAll('.page-transition');
    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', e =>{
            e.preventDefault();
            tranitionElement.forEach(tranitionElement=>{
                tranitionElement.classList.add('active');
            });
            if(document.body.classList.contains('main-page')){
                if(i == 0){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/acheiropoietos.html";
                    },1100);
                }
                else if(i == 1){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/agiaSophia.html";
                    },1100);
                }
                else if(i == 2){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/hosios-david.html";
                    },1100);
                }
                else if(i == 3){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/agios-dimitrios.html";
                    },1100);
                }
                else if(i == 4){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/southPole.html";
                    },1100);
                }
                else if(i == 5){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/acheiropoietos.html";
                    },1100);
                }
                else if(i == 6){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/agiaSophia.html";
                    },1100);
                }
                else if(i == 7){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/hosios-david.html";
                    },1100);
                }
                else if(i == 8){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/agios-dimitrios.html";
                    },1100);
                }
                else if(i == 9){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/southPole.html";
                    },1100);
                }
                else if(i == 10){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/citations.html";
                    },1100);
                }
                
            }
            else{
                 if(i == 0){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/index.html";
                    },1100);
                }  
                else if(i ==1){
                    setTimeout(()=>{
                        window.location.href = "http://aravbudhiraja.github.io/Website/dist/pages/citations.html";
                    },1100);
                }  
            }
        });
    }
}