$(function () {

  // 追加ボタンがクリックされた時
  $('#add-button').on('click', function(e) {
    // formタグの送信を無効化する（二重投稿を防ぐため）
    e.preventDefault();

    // 入力されたタスク名を取得
    let taskName = $('#input-task').val();

    // ajax開始
    $.ajax({
      // キー（決まった文言）：値
      url: 'create.php',
      type: 'POST',
      dataType: 'json',
      data: {
        // 送信する値を書くブロック
        task: taskName
      }
    }).done((data) => {
      console.log(data);

      // $('tbody').prepend(`<p>${data['name']}</p>`);
      $('tbody').prepend(
              `<tr>` + 
                `<td>${data['name']}</td>` + 
                `<td>${data['due_date']}</td>` + 
                `<td>NOT YET</td>` + 
                `<td>` + 
                    `<a class="text-success" href="edit.php?id=${data['id']}">EDIT</a>` + 
                `</td>` + 
                `<td>` + 
                    `<a data-id="${date['id']} "class="text-danger delete-button" href="delete.php?id=${data['id']}">DELETE</a>` + 
                `</td>` + 
              `</tr>`
      );


    }).fail((error) => {

    })
  });

$(document).on('click','.delete-button',function(e){
  //二重送信の無効化
  e.preventDefault();
//動作してるかの確認
  // alert('DELETE');
  //削除対象のIDを取得
  //$(this)今イベントが実行されている本体
  //今回の場合は、クリックされたaタグ本体
  let selectedId = $(this).data('id');
  // alert(selectedId);
  //ajax開始
  $.ajax({
    url: 'delete.php',
      type: 'GET',
      dataType: 'json',
      data: {
        // 送信する値を書くブロック
      id: selectedId
      }

  }).done((data) =>{
    // console.log(data);
    $('.tbody',selectedId).fadeOut();
  }).fail((error) => {
    console.log(error);
  })
  
});

  // });

})