$(function() {
  $('#add-button').on('click', function(e) {
    // 入力された郵便番号を取得
    
    //formタグの送信を無効化する（二重投稿を防ぐ) preventDefaultが構文このfunction自体の動作をしなくなる
  
    e.preventDefault();

    //入力されたタスク名を取得
    let taskName = $('#input-task').val();
    
    //ajax開始

    $.ajax({

      //キー（決まった文言）:値
      url:'create.php',
      type:'POST',
      dataType:'json',
      data:{
        //送信する値を書くブロック
        task:taskName
      }


    }).done((data) => { 
      // console.log(data);
      // $('tbody').prepend(`<p>${data['due_date']}</p>`);
      $('tbody').prepend('<tr>'+
        `<td>${data['name']}</td>` +
        `<td >${data['due_date']}</td>`+
        `<td >
        <a class="text-success" href="done.php?id=<?php echo h($task['id']);?>"> ${data['done']} </a> </td>'
        <td>
            <a class="text-success" href="edit.php?id=${data[id]}">EDIT</a>
        </td>
        <td>
        <a class="text-danger" href="delete.php?id=${data[id]}"><i class="material-icons">
delete
</i></a>
<dd>

 
</dd>
        </td>
      </tr>);




    }).fail((error) => {

    })

  })
});