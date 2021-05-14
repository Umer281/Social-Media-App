$(() =>{

 
 $.get('api/posts',(posts) => { 
     for(let p of posts){ 
         console.log(p);
         $('#post-container').append(
             $(`
             <div class="col-4">  
              <div class="card mx-4" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">${p.body}</p>
                   <a href="#" class="card-link">like</a>
                   <a href="#" class="card-link">comments</a>
                </div>
             </div>
          </div>`
            )
         );
         
         

     }
 })

})


