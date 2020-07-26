function toggle(id){
    var element =$('#'+id)
    if(element.css('display')=='none'){
        element.fadeIn()
    }else{
        element.fadeOut()
    }
}