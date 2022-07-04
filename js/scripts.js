/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your proj
var a1=[];var a2=[];var a3=[];var a4=[];var i =0;var addres = "";
let abc = document.getElementById("abc");
function popdata(a) {
  firebase.database().ref().child('Place').child(a4[a]).child('Add').on('value' , function(aadres){addres=aadres.val()});
  document.getElementById("Mbody").innerHTML += "<br><center><h6>"+a3[a]+"</h6></center>";
  document.getElementById("mTitle").innerText= a2[a];
  document.getElementById("Mbody").innerHTML = "<center><img src='"+a1[a]+"'></center>";
  document.getElementById("Mbody").innerHTML +="<center><h4>"+a2[a]+"</h4></center>";
  document.getElementById("Mbody").innerHTML +="<center><h6>"+a3[a]+"</h6></center>";
  document.getElementById("Mbody").innerHTML +="<br><center><h3>Address</h3></center>";
  document.getElementById("Mbody").innerHTML +="<center><h4>"+addres+"</h4></center>";
  document.getElementById("Mbody").innerHTML += `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=`+a2[a]+`&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>`;

}
function addhtmll(thumb,title,desc,id) {
;
    a1.push(thumb);a2.push(title);a3.push(desc);a4.push(id);
 var h = ` <div class="col mb-5">
    <div class="card h-100">
        <!-- Sale badge-->
        <!-- <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> -->
        <!-- Product image-->
        <img class="card-img-top" src="`+thumb+`" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">`+title+`</h5>
                <!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </div>

                <!-- Product price-->
                <div class="collapse" id="collapseExample">
                
                <p>
               <small>
              `+desc+`</small></p>
              <button class="btn  btn-outline-primary mt-auto" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="popdata(`+i+`)">
              Read about Me
            </button>
              </div>
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" href="#">Read About</a></div>
        </div>
    </div>
</div>`;
abc.innerHTML += h;i+=1
}
// firebaseOrdersCollection.on('value',function (aa) {
//     var helo ='abc';
//     aa.forEach(function(vall){
//       data =vall.val();
//       abc.innerHTML += "abc";
//       console.log(data.Thumb,data.Title,data.Desc,data.ID);
//     });
//   })  
firebaseOrdersCollection.on('value',function (aa) {
    // console.log(aa.val())
    aa.forEach(function(vall){
      data =vall.val();
      addhtmll(data.Thumb,data.Title,data.Desc,data.ID);
    });
  })  