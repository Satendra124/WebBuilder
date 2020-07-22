window.addEventListener('load', () => {
    init();
    let pallete = $('#pallete');
    let pHead = $('#pallete-head');
    moveElement(pallete,pHead);
    
})


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
    $('body').append('<div class="default-div draggable">Text</div>')
    moveElement($('.default-div'),$('.default-div'));
}
function moveElement(element,target){
    console.log('..')
    target.mousedown((e) => {
        let oldX = e.clientX
        let oldY = e.clientY
        let initX = parseInt(element.css('left').split('px')[0])
        let initY = parseInt(element.css('top').split('px')[0])
        function move(enew) {
            enew.preventDefault()
            element.css('left', initX + enew.clientX - oldX)
            element.css('top', initY + enew.clientY - oldY)
        }
        document.addEventListener('mousemove', move)
        target.mouseup((e) => {
            document.removeEventListener('mousemove', move)
        })
    })
}