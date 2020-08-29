$(document).ready(function(){
    function addItem(){
        $('#js-shopping-list-form').on( "submit", function() {
            const newItemTitle = $('#shopping-list-entry').val();
            $(".shopping-list").append(itemTemplate(newItemTitle));
            event.preventDefault();
            $('#js-shopping-list-form').children('#shopping-list-entry').val('');
        
        })
    }

    $(addItem);

    function toggleCheckItem(){
        $(document).on( "click", ".shopping-item-toggle", function(){
            crossItem = $(this).parents("li").children(".shopping-item");
            $(crossItem).toggleClass('shopping-item__checked');
        })
    }

    $(toggleCheckItem);

    function deleteItem(){
        $(document).on( "click", ".shopping-item-delete", function(){
            itemToDelete = $(event.target).parents("li");
            $(itemToDelete).remove();
        })
    }

    $(deleteItem);

    function itemTemplate(title){
        return "<li><span class='shopping-item'>" + title + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button> <button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>";
    }

})

    
   
