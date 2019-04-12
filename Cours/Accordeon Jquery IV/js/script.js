$('div.cont div div').click(function(){
    var $value = $(this);
    var $parent = $value.parent();
      if($parent.attr('id') == 'groupL'){
        $parent.next('#groupR').prepend($value);
      }else if($parent.attr('id') == 'groupR'){
        $parent.prev('#groupL').prepend($value);
      }
  })