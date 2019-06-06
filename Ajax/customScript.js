
  $(document).ready(function(){
    // on first load , load the default.html found in the widgets folder
    loadDefault();

    //adding event Listeners to button menus!
    //button Add Users
    $('#addUsers').click(function(){
      // alert('');
      loadAddUsers();
    });
    //button View users
    $('#viewUsers').click(function(){
        // alert($(this).text());
        loadUsers();
    });
    //button Home
    $('#home').click(function(){
      loadDefault();
      // alert('');
    });



  });

  function getAjax(){
    var ajax = false;
    try{
      ajax = new XMLHttpRequest();
    } catch(e){
      try {
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        try {
          ajax = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
          ajax = false;
        }
      }
    }
    return ajax;
  }

  function loadDefault(){
    var div = document.getElementById('Management_Area');
    var url = './widgets/default.html';
    var ajax = getAjax();

    ajax.onreadystatechange = function(){
      if(ajax.readyState === 4){
        div.innerHTML = ajax.responseText;
      } else {
        div.innerHTML = '<p class="text-center text-success"><i class="spinner-border "></i></p>';
      }
    };
    ajax.open('GET',url,true);
    ajax.send();
  }



  function loadAddUsers(){
    var div = document.getElementById('Management_Area');
    var url = './widgets/users.html';
    var ajax = getAjax();

    ajax.onreadystatechange = function(){
      if(ajax.readyState === 4){
        div.innerHTML = ajax.responseText;
        $('#addUser').click(function(){
          addUser();
        });
      } else {
        div.innerHTML = '<p class="text-center text-success"><i class="spinner-border "></i></p>';
      }
    };
    ajax.open('GET',url,true);
    ajax.send();
  }

  function loadUsers(){
    var div = document.getElementById('Management_Area');
    var url = './widgets/logintable.html';
    var ajax = getAjax();

    ajax.onreadystatechange = function(){
      if(ajax.readyState === 4){
        div.innerHTML = ajax.responseText;
      } else {
        div.innerHTML = '<p class="text-center text-success"><i class="spinner-border "></i></p>';
      }
    };
    ajax.open('GET',url,true);
    ajax.send();
  }

  //function add user

  function addUser(){
    var form = document.getElementById('addUserForm');

    var name= document.getElementById('uname');
    var email =  document.getElementById('pwd');

    // var phone =  $(form).children('input:eq(2)');
    //
    var namest = validate(name);
     var emailst = validate(email);
    // var phonest = validate(phone);
    //
    // if(namest === true && emailst === true && phonest === true){
    //   var json = JSON.stringify([name.value,email.value,phone.value]);
    //   addUserDb(json);
    // }

  }

  function validate(input){
    var result = false;
    var data = $(input).val();

    if(data.length === 0){
      $(input).removeClass('is-valid').addClass('is-invalid');
    } else {
      $(input).removeClass('is-invalid').addClass('is-valid');
      result = true;
    }
    return result;
  }

  function addUserDb(json){
    var ajax = getAjax();
    var url = "";
    ajax.onreadystatechange = function(){
      if(ajax.readyState === 4){
        alert(ajax.responseText);
      }
      else{

      }
    };
    ajax.open('GET',url,true);
    ajax.send();
  }
