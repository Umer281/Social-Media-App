$(() => { 

 $('#navbar').load('./components/navbar.html',isuserlogin());
 $('#content').load('./components/all_posts.html');
 $('#footer').load('./components/footer.html');
  


})


function isuserlogin(){ 
  //  Use the JavaScript function JSON.parse() to convert text into a JavaScript object: 
  //var obj = JSON.parse('{ Use the JavaScript function JSON.parse() 
  // to convert text into a JavaScript object: var obj = JSON.parse('{ "name":"John", "age":30, "city":" ...}
  let currentuser=window.localStorage.user ? JSON.parse(window.localStorage.user):null;
  if(!currentuser){ 
      $.post('/api/users',{},(user) => { 
          if(user){ 
            console.log('registered as ',user.username);
            // The JSON.stringify() method converts a JavaScript object or value to a JSON string.
            window.localStorage.user=JSON.stringify(user);
            currentuser=user;
            $('#username').text(currentuser.username);
          }
          
      })
  }else{ 
      console.log("resuming session as ",currentuser.username);
      $('#username').text(currentuser.username);
  }



}