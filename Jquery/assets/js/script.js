$(function(){
    // document.getElementById("btn").onclick=function(){
    //     alert("Bye Jquery")
    // }
    // $("#btn").click(()=>{
    //     alert("Hello Jquery")
    // })

    // $("#list li").click(function(){
    //     alert($(this).text())
    // })

    // $(document).on("click","#list li",function(){
    //     alert($(this).text())
    // })

    // $(document).on("click","#addBtn",()=>{
    //     let input=$("[type='text']");
    //     $("#list").after($(`<li>${input.val()}</li>`))
    //     input.val("")
    // })
    // console.log($("#list")[0]==$("#list")[0]);
        // $("#list").attr({
        //     class:"test active",
        //     "data-id":1
        // });
    // $(document).on("click","#addBtn",()=>{
    //    $(".square").css({
    //     "background-color":"#ddd",
    //      border:"2px solid red"
    //    });
    // })
    $(document).on("click","#addBtn",()=>{
        // $(".square").toggle(10000);
        //$(".square").fadeToggle(1000);
        $(".square").slideUp(1000,function(){
            $(".square").addClass("block")
        })
        

     })

    //  $(document).on("click","#stop",()=>{
    //     $(".square").stop();
    //  })
})