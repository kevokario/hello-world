
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
    var url = './widgets/logintabel.html';
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
    var name= '';
    var email = '';
    var form = '';
  }

  
