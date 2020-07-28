function addRectangle(){

}
var functions = {
    rectangle:{
        properties:[
            {
                name:'Width',
                function:(id,width)=>{
                    $('#'+id).css('width',width)
                },
            },
            {
                name:'height',
                function:(id,height)=>{
                    $('#'+id).css('height',height)
                }
            },
            {
                name:''
            }
        ]
    }
}