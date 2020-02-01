

$(document).ready(function() {

    $('button.categorySelect').on('click',  function(e) {
        let categoryC = e.target.id;
        $("#items").html("");
        getitems(categoryC);    

    });

});


function getitems(category) {

    $.ajax({
        method: "GET",
        url: "https://github.com/fadiabb87/homework4/blob/master/products.json",
        dataType: "json"
    }).done(function(data){
        $.each(data, function(i, item){
            if(!category || item.category == category){
                $('#items').append(createElement(item));
            }
        });
    });
 }

function createElement(item){
let itemshow = '<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">' + 
                '<div class="card-header">' + '<img src="item.photo">' + '</div>' +
                '<div class="card-body">' +  '<h4 class="card-title">' + '<a href ="item.name">#</a>' + '</h4>' + 
                 '<p class="card-text">' +item.info + '</p>' + '</div>' + 
                 '</div>'; 


return itemshow; 

    
}


