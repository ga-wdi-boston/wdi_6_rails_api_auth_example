//jquery authenticate and get
$(function(){
  $('#get-token').on('click', function(){
    $.ajax('http://localhost:3000/login',{
      contentType: 'application/json',
      processData: false,
      data: JSON.stringify({
        credentials: {
          email: $('#email').val(),
          password: $('#password').val()
        }
      }),
      dataType: "json",
      method: "POST"
    }).done(function(data, textStatus) {
      $('#token').val(textStatus == 'nocontent' ? 'login failed' : data['token']);
      console.log(data);
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus);
      console.log(errorThrown);
    });
  });
  $('#user-index').on('click', function(){
    $.ajax('http://localhost:3000/users',{
      dataType: "json",
      method: "GET",
      headers: { Authorization: 'Token token=' + $("#token").val() }
    }).done(function(data, textStatus) {
      $('#result').val(JSON.stringify(data));
      console.log(data);
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus);
    });
  });
  $('#user-by-id').on('click', function(){
    $.ajax('http://localhost:3000/users/' +
      $('#id').val(), {
      dataType: "json",
      method: "GET",
      headers: { Authorization: 'Token token=' + $("#token").val() }
    }).done(function(data, textStatus) {
      $('#result').val(JSON.stringify(data));
      console.log(data);
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus);
    });
  });
  $('#goodbye-index').on('click', function(){
    $.ajax('http://localhost:3000/goodbye',{
      dataType: "json",
      method: "GET",
      headers: { Authorization: 'Token token=' + $("#token").val() }
    }).done(function(data, textStatus) {
      $('#result').val(JSON.stringify(data));
      console.log(data);
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus);
    });
  });
  $('#goodbye-by-id').on('click', function(){
    $.ajax('http://localhost:3000/goodbye/' +
      $('#id').val(), {
      dataType: "json",
      method: "GET",
      headers: { Authorization: 'Token token=' + $("#token").val() }
    }).done(function(data, textStatus) {
      $('#result').val(JSON.stringify(data));
      console.log(data);
    }).fail(function(jqxhr, textStatus, errorThrown){
      console.log(textStatus);
    });
  });
});
