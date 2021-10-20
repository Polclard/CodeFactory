function postBlock()
{


    if (document.getElementById("ename").value.length == 0 || document.getElementById("pname").value.length == 0 || document.getElementById("sname").value.length == 0)
    { 
        alert("Enter all of the input fields above with certain values!!!");  	
        return false; 
    }  
    else
    {
        var iterator = 0;
    
    
        var codeBlock = '<div class="col-sm">' +
        '<div style="width: 100%; height: auto; background-color: grey; margin-right: 10px; margin-top: 10px;">' +
        ' <p style="text-align: center;">'+ document.getElementById("ename").textContent + '</p>' +
        ' <h5 class="text-white text-center"><f class="text-black">Title:</f>' +  document.getElementById("pname").textContent + '</h5>' +
        '<p style="text-align: center;"><a href="exe1.html">Link to compiler</a></p>' +
        '</div>' + 
        ' </div>';
    
        theBlock = document.createElement("div");
        theBlock.innerHTML  = codeBlock;

        document.getElementById("nw-row").appendChild(theBlock);
    
    }	
    
}