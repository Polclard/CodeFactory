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


function darkTheme2()
{
    var v = document.getElementById("ftr");
    v.className += "darkTheme";    
    if (document.getElementById("ftr").classList.contains('bg-dark'))
    {
        Element.classList.replace("bg-dark", "bg-light");
    }
    

}

function darkTheme(id, oldClass, newClass) {
    var id = "ftr";
    var oldClass = "bg-dark";
    var newClass = "bg-light";
    var elem = $(`#${id}`);
    if (elem.hasClass(oldClass)) {
        elem.removeClass(oldClass);
    }
    elem.addClass(newClass);

    var oldText = "text-white";
    var newText = "text-black";

    var elem = $(`#${id}`);
    if (elem.hasClass(oldText)) {
        elem.removeClass(oldText);
    }
    elem.addClass(newText);
}

function lightTheme(id, oldClass, newClass) {
    var id = "ftr";
    var oldClass = "bg-light";
    var newClass = "bg-dark";
    var elem = $(`#${id}`); 
    if (elem.hasClass(oldClass)) {
        elem.removeClass(oldClass);
    }
    elem.addClass(newClass);

    var id = "ftr";
    var oldText = "text-black";
    var newText = "text-white";

    if (elem.hasClass(oldText)) {
        elem.removeClass(oldText);
    }
    elem.addClass(newText);


}
 
$(document).ready(function() {
    $("#darkmode").click(function() {
        replaceClass("container", "light", "dark");
    });
 
    $("#lightmode").click(function() {
        replaceClass("container", "dark", "light");
    });
});



$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
