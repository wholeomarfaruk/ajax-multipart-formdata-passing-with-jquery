$('body').off('submit', '#form').on('submit', '#form', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    // defautl settings 


    $formData = new FormData();
    $formData.append('fileToUpload', $('#formFile')[0].files[0]);
    

    var data = $('#form').serializeArray();
    // console.log(data)

    var formdata = $("#form").serializeArray();
    $(formdata).each(function (index, obj) {
      $formData.append(obj.name,obj.value);
    });



    $.ajax({
      type: 'POST',
      url: 'backend.php',
      data: $formData,
      processData: false,
      contentType: false,
      dataType: 'text',
      success: function (response) {
        // Handle successful response
        console.log(response);
        $('#proccessData').text(response);
        
      },
      error: function (xhr, status, error) {
        // Handle errors
       
        console.error('Error:', error);

      }
    });
  });