const p1 = document.getElementById('p-1')
const p2 = document.getElementById('p-2')
const p3 = document.getElementById('p-3')
const p4 = document.getElementById('p-4')

const q1 = document.getElementById('q-1')
const q2 = document.getElementById('q-2')
const q3 = document.getElementById('q-3')
const q4 = document.getElementById('q-4')

const s1 = document.getElementById('s-1')
const s2 = document.getElementById('s-2')
const s3 = document.getElementById('s-3')
const s4 = document.getElementById('s-4')

var ps1, ps2, ps3, ps4;

function openP1(){
    p1.classList.add('active')
    s1.innerHTML = '-'
    if(ps2 == true){
        p2.classList.remove('active')
        s2.innerHTML = '+'
    }else if(ps3 == true){
        p3.classList.remove('active')
        s3.innerHTML = '+'
    }else if( ps4 == true){
        p4.classList.remove('active')
        s4.innerHTML = '+'
    }
    ps1 = true
    ps2 = false
    ps3 = false
    ps4 = false
}
function openP2(){
    p2.classList.add('active')
    s2.innerHTML = '-'
    if(ps1 == true){
        p1.classList.remove('active')
        s1.innerHTML = '+'
    }else if(ps3 == true){
        p3.classList.remove('active')
        s3.innerHTML = '+'
    }else if( ps4 == true){
        p4.classList.remove('active')
        s4.innerHTML = '+'
    }
    ps1 = false
    ps2 = true
    ps3 = false
    ps4 = false
}

function openP3(){
    p3.classList.add('active')
    s3.innerHTML = '-'
    if(ps2 == true){
        p2.classList.remove('active')
        s2.innerHTML = '+'
    }else if(ps1 == true){
        p1.classList.remove('active')
        s1.innerHTML = '+'
    }else if( ps4 == true){
        p4.classList.remove('active')
        s4.innerHTML = '+'
    }
    ps1 = false
    ps2 = false
    ps3 = true
    ps4 = false
}

function openP4(){
    p4.classList.add('active')
    s4.innerHTML = '-'
    if(ps2 == true){
        p2.classList.remove('active')
        s2.innerHTML = '+'
    }else if(ps3 == true){
        p3.classList.remove('active')
        s3.innerHTML = '+'
    }else if( ps1 == true){
        p1.classList.remove('active')
        s1.innerHTML = '+'
    }
    ps1 = false
    ps2 = false
    ps3 = false
    ps4 = true
}

var navbar = document.getElementById('navbar')
var mobileNav = document.getElementById('mobile-nav')
var mobileNavStatus;

function controlNav(){
    if(mobileNavStatus == false){
        mobileNav.style.height = '140px'
        navbar.style.backgroundColor = 'black'
        mobileNavStatus = true
        window.addEventListener('resize', (e) =>{
            var screenWidth = window.window.innerWidth
            if(screenWidth > 660){
                mobileNav.style.height = '0'
                navbar.style.backgroundColor = '#000000b3'
                mobileNavStatus = false
                return
            }
        })

    }else{
        mobileNav.style.height = '0'
        navbar.style.backgroundColor = '#000000b3'
        mobileNavStatus = false
    }
}

function reset(){
    mobileNavStatus = false
    
    ps1 = true
    ps2 = false
    ps3 = false
    ps4 = false
    p1.classList.add('active')
    s1.innerHTML = '-'
    s2.innerHTML = '+'
    s3.innerHTML = '+'
    s4.innerHTML = '+'
}

var productArea = document.getElementById('product')
var showMore = document.getElementById('show-more')

function showPhoto(){
    console.log(productArea.childElementCount);

}




// var count = 400;
// function showPhoto(){
//     console.log(productArea.childElementCount);
//     productArea.style.height = count + 'px'
//     count += 200
//     console.log(count);

//     if(productArea.childElementCount <= 8 && count > 600){
//         showMore.style.pointerEvents = 'none';
//         showMore.innerHTML = 'Ürünler Bitti'
//     }
    
// }

// window.addEventListener('resize', (e) =>{
//     var screenWidth = window.window.innerWidth
//     if(screenWidth <= 773){
//         productArea.style.height = count + 500 + 'px'
//     }
// })

reset()



