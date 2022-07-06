/*!
* Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var configgg = {
    'apiKey': 'AIzaSyAQ_cLzsi4jRJTAXHP1MdgZFvlnd1xfD2U',
    'authDomain': 'piratesdroid-8c4ed.firebaseapp.com',
    'databaseURL': 'https://piratesdroid-8c4ed.firebaseio.com',
    'projectId': 'piratesdroid-8c4ed',
    'storageBucket': 'piratesdroid-8c4ed.appspot.com',
    'messagingSenderId': '782951610606',
    'appId': '1:782951610606:web:3d4616f53c370e23',
    'measurementId': 'G-5YHQPCK2F2'
};
var d1 =[];var d2 =[];var d3 =[];var d4 =[];var d5 =[];var d6 =[];var i =0;
// var i=0;src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
function addhtmll(id,name,addres,states,latitude,longitude){
    d1.push(id);d2.push(addres);d3.push(name);d4.push(states);d5.push(latitude); d6.push(longitude);
 var html =`   <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top aabbcc" id="`+id+`" src="https://images.unsplash.com/photo-1563093209-8500bd0c7746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDM3Mzd8MHwxfHNlYXJjaHwxfHxmb3J0fGVufDB8Mnx8fDE2NTcwMzQ4ODc&ixlib=rb-1.2.1&q=80&w=400" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">`+name+`</h5>
                                    <!-- Product price-->
                                    `+states+`
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="popdata(`+i+`)" >View options</button></div>
                            </div>
                        </div>
                    </div>`;
document.getElementById("abc").innerHTML += html;              
i+=1;
}
// firebaseOrdersCollection.on('value',function(dat){ dat.forEach( function (abc) {var aa = abc.val(); console.log(aa.ID+","+aa.Address+","+aa.State+","+aa.latitude+","+aa.longitude) } ) })
function getPicture(af) {
            
    fetch('https://en.m.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&formatversion=2&piprop=original%7Cthumbnail&pithumbsize=350&titles='+d1[1].replace(" ","%20")
    .then(response=>response.json())
    .then(data => { document.getElementById(d1[af]).src= data.query.pages.thumbnail.source;alert(data.query.pages.thumbnail.source+">=<"+data.batchcomplete)});
  }
firebase.initializeApp(configgg);
var database = firebase.database(),
    firebaseOrdersCollection = database.ref('Fort').orderByKey();
    firebaseOrdersCollection.on('value', function (fdata) { 
            console.log(fdata.val())
            fdata.forEach(function (dread){
                var datas = dread.val();
                addhtmll(datas.ID,datas.name,datas.Address,datas.State,datas.latitude,datas.longitude); 
             })
              for(var i =0;i<=3;i++){getPicture(i)}
        })


                //   document.getElementById("abc").src=data.urls.smal
        // https://images.unsplash.com/photo-1643637200739-91b446b0e4e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        // else{fetch('https://api.unsplash.com/photos/random?client_id=ty5mbQAWzZlwrnVeP0GXGMtKEPRc9OUgaUzP8HwxE1M&per_page=1&orientation=squarish&query=fort').then(response=>response.json()).then(data => {  document.getElementById(d1[i]).src=data.results[0].urls.small} )

            
    // fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&list=allimages&ailimit=1&aifrom='+d1[1])
    // .then(response=>response.json())
    // .then(data => {  if(data.total=!0){img.push(data.urls.small);console.log(data.urls.small)}});
    function popdata(a) {
        document.getElementById("mTitle").innerText= d2[a];
        fetch('https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+d1[a]).then(response=>response.json())
        .then(data => {var aaa=data.query.pages;document.getElementById("Mbody").innerText=Object.values(aaa)[0].extract;});
       
      }
    //   document.getElementById("Mbody").innerText += data.query[0].extract
