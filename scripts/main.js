window.addEventListener('load', () => {
    init();
    let pallete = $('#pallete');
    let pHead = $('#pallete-head');
    moveElement(pallete,pHead);
})
let currid=0;
let is_resize = false;
function init() {
    if(window.innerWidth<600){
        $('*').css('display','none')
        $('.support').css('display','inline')
        $('body').css('display','block')
        $('html').css('display','block')

    }else{
        $('.support').css('display','none')
    }
    let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

function drawDiv(){
    $('body').append('<div class="default-div" id="div-'+currid+'">Text<div class="sizer" id="sizer-'+currid+'"></div></div>');
    sizeElement($('#div-'+currid+''),$('#sizer-'+currid+''));
    moveElement($('#div-'+currid+''),$('#div-'+currid+''));
    currid++;
}
function moveElement(element,target){
    target.mousedown((e) => {
        let oldX = e.clientX
        let oldY = e.clientY
        let initX = parseInt(element.css('left').split('px')[0])
        let initY = parseInt(element.css('top').split('px')[0])
        function move(enew) {
            if(e.target.className == 'default-div' || e.target.className=='pallete-head') {
                enew.preventDefault()
                element.css('left', initX + enew.clientX - oldX)
                element.css('top', initY + enew.clientY - oldY)
            }
        }
        document.addEventListener('mousemove', move)
        target.mouseup(() => {
            document.removeEventListener('mousemove', move)
        })
    })
}
function sizeElement(element,target){
    target.mousedown((e) => {
        let oldX = e.clientX
        let oldY = e.clientY
        let initW = parseInt(element.css('width').split('px')[0])
        let initH = parseInt(element.css('height').split('px')[0])
        function size(enew) {
            if(e.target.className == 'sizer') {
                enew.preventDefault()
            element.css('width', initW + enew.clientX - oldX)
            element.css('height', initH + enew.clientY - oldY) 
            }
            
            
        }
        document.addEventListener('mousemove', size)
        target.mouseup((e) => {
            document.removeEventListener('mousemove', size)
        })
    })
}