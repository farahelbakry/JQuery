/////// Code it yourself :)

//container=$("[id='container']");
btn=$("[id='btnAdd']");
res=$("[class='tasksBox']");
inp=$("[id='taskInput']").val();



// description = $(".description");

    btn.click(function (ev) {
       


        
        result = $("<div>  </div>");
        tdelm1=$("<label/>");
        tdelm1.text($("#taskInput").val());
        tdelm1.addClass("task");
        
        result.append(tdelm1);

        mydone = $(" <button> Done </button>");
        mydone.addClass("done");
        result.append(mydone);

        mydone.click(function(){
        
            $(this).parent().addClass("TaskDone");
        });
    




    del = $(" <button> Delete </button>");
    
    result.append(del);
    res.append(result);
    del.click(function(){
        $(this).parent().remove();
      
        
     

});

        
        
        




       
 });
 

