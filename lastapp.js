
let time = document.getElementById("current-time");


setInterval(()=>{
  let d = new Date();
  time.innerHTML =d.toLocaleTimeString();
},1000)


//
let container = document.querySelector(".greating");

let timeNow = new Date().getHours();
console.log(timeNow);
let greeting =
      timeNow >= 5 && timeNow < 12
? "Good Morning"

: timeNow >= 12 && timeNow < 18

? "Good Afternoon"
: "Good evening ";

console.log(greeting);

container.innerHTML = `<h1>${greeting}></h1>`

//
  
  let allPostsPubImg = [];
  let allPostsPubName = [];
  let allPostsTitle = [];
  let allPostsVal = [];

  function submitPost() {
      let pubimg = document.getElementById("post-pubimg");
      let pubname = document.getElementById("post-pubname");
      let title = document.getElementById("post-title");
      let val = document.getElementById("post-value");
    let main = document.getElementById("main");
  
    allPostsPubImg.unshift(pubimg.value);
    allPostsPubName.unshift(pubname.value);
    allPostsTitle.unshift(title.value);
    allPostsVal.unshift(val.value);
    console.log(allPostsPubImg)
    console.log(allPostsPubName)
    console.log(allPostsTitle)
    console.log(allPostsVal)

    main.innerHTML = "";
  
    for (var i in allPostsPubImg , allPostsPubName  , allPostsTitle , allPostsVal) {
      main.innerHTML += `<div class="card postcard" style="width: 100%;">
      <div class="pub">
      <img src="${allPostsPubImg[i]}" class="pubimg float-left" alt="..."><h5 class="pubname float-left" >${allPostsPubName[i]} </h5>
    </div>
    
    <div class="card-body">
      <h5 class="card-title postTitle">${allPostsTitle[i]}</h5>
      <p class="card-text postDes">${allPostsVal[i]}</p>
    
      <a href="#" class="icon"> <i class='bx bx-like'><button style="width:100px;">Delete</button> &nbsp; <button style="width:100px;">Edit</button></i></a>
    </div>
     </div>
      `;
    }
    pubimg.value = "";
    pubname.value = "";
    img.value = "";
    title.value = "";
    val.value = "";


    
  }

  