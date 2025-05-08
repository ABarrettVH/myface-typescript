document.addEventListener("DOMContentLoaded", function () {
  const highlightButton = document.getElementById('selectPost');
  const posts = document.getElementsByClassName('postList');

  highlightButton.addEventListener("click", function () {
    for (let i = 0; i < posts.length; i++) {
      posts[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  });

  const menu = document.getElementById("menuButton");
  // console.log(menu)
  const postLink = document.getElementById('postLink');
    const userLink = document.getElementById('userLink');

    // const postLink = document.getElementsByTagName('a');
    // const userLink = document.getElementsByTagName('a');
   // console.log(postLink[0], userLink[0])

  menu.addEventListener("click", function () {

    console.log("in event listener")

  //   if ((postLink[0].classList.contains("postLinkOpen")) && (userLink[0].classList.contains("userLinkOpen"))) {

  //     postLink[0].classList.replace("postLinkOpen", "postLinkClose");
  //     userLink[0].classList.replace("userLinkOpen", "userLinkClose");

  //   }
  //   else {

  //     postLink[0].classList.replace( "postLinkClose", "postLinkOpen");
  //     userLink[0].classList.replace( "userLinkClose", "userLinkOpen");
     

      
  //   }
    
  // })
  
 
    if ((postLink.classList.contains("postLinkOpen")) && (userLink.classList.contains("userLinkOpen"))) {

      console.log("in IF")
      postLink.classList.replace("postLinkOpen", "postLinkClose");
     userLink.classList.replace("userLinkOpen", "userLinkClose");

    }
    else {

      console.log("in ELSE")
      postLink.classList.replace( "postLinkClose", "postLinkOpen");
     userLink.classList.replace( "userLinkClose", "userLinkOpen");
     console.log('------------')

     console.log(postLink.classList.contains("postLinkOpen"))
     console.log(userLink.classList.contains("userLinkOpen"))

     console.log('------------')

     console.log(postLink.classList.contains("postLinkClose"))
    console.log(userLink.classList.contains("userLinkClose"))

      
    }
    
  })
  
  
});