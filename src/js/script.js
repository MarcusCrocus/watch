/* var name = "Ivan"; не используется

let number =7;
const pi =3,14; 
*/

// number
// string
// true/false
// null
// une rfined
// symbol

/* let obj = {
    name: 'apple',
    color: 'green',
    weight:'200',
}

console.log(number); */

/* let answer = confirm("do u have 18?");
console.log(answer); */

/* let answer = promt("do u have 18?", "");
console.log(answer); */

/* let isChecked = true,
    isClose = false; */

/* console.log(isChecked && isClose);  */
/* console.log(isChecked || isClose); */

/* if(2*1 == 8*1){
    console.log('true expression')
}else{
    console.log('false expression')
} */

/* let answer = confirm("do u have 18?");
if(answer){
    console.log('acces ok')
}else{
    console.log('acees not allowed')
} */

/* const num = 50;

if (num < 48) {
    console.log('wrong')
}else if(num > 100) {
    console.log('to much')
}else{
    console.log('correct')
} */


/* for(let i =1; i < 8; i++){
    console.log(i);
} */

/* function logging (a, b) {
    console.log(a + b)
}
logging(3,5);

logging(44,5); */


                                                        //jQuerry carousel
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        /* adaptiveHeight: true, */
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left_solid_980.svg" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right_solid_982.svg" ></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay: true,
                }  
            }
        ]
    });
});

/*                                             //Js carousel
let slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true
}); */