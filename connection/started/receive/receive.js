// let remyVar;
// let b=false;
// let msgarray=[];
// let filearray=[];
// let fileurlarray=[];
// var d = new Date();
// let status=document.getElementById("status");
// status.innerHTML="you are connected to "+id+" via network"
// remyVar =setInterval(function(){ 
//     console.clear();
//     b=false;
//     let msgQ=``;
//     let fileQ=``;
//     let fileurlQ=``;

    
//     firebase.database().ref('session/' + id).on('value', function(snapshot) {
//         if (snapshot.val() != null ) {
//             if(snapshot.val().SendingFile){
//                 // console.log("got SOme Msg");
//                 if(b==false){
//                     b=true
//                     let y=(snapshot.val().Message)
//                     let x=(snapshot.val().FileName)
//                     let z=(snapshot.val().FileUrl)
//                     msgarray=y.split("|~|");
//                     filearray=x.split("|~|");
//                     fileurlarray=z.split("|~|");
//                     // console.log(filearray)
//                 document.getElementById("maindivformsg").innerHTML="";
//                 document.getElementById("mainfilediv").innerHTML="";
//                 msgQ=``;
//                 msgarray.reverse();
//                     for (var i=1;i<msgarray.length;i++){
//                         msgQ=msgQ+`
//                         <div class="chat-container">
//                         <img src="./../../images/text.png" alt="text" style="width:100%;">
//                         <p>`+msgarray[i]+`</p>
//                         <span class="time-right">`+d.getHours()+`:`+d.getMinutes()+`:`+d.getSeconds()+`</span>
//                       </div>
//                         `;
//                     }

//                 fileQ=``;
//                 filearray.reverse();
//                 fileurlarray.reverse();
//                 // console.log(filearray)
//                     for (var i=1;i<filearray.length;i++){
//                         fileQ=fileQ+`
//                         <div class="chat-container darker">
//                         <img src="./../../images/file.png" alt="file" style="width:100%;">
//                         <p><strong>GotIT!</strong> You file `+filearray[i]+` ready for download  <a href="`+fileurlarray[i]+`" class="alert-link">DOWNLOAD</a>.</p>
//                         <span class="time-right">`+d.getHours()+`:`+d.getMinutes()+`:`+d.getSeconds()+`</span>
//                       </div>
//                         `;
//                     }
//                     firebase.database().ref('session/' + id).update({
//                         SendingFile:false
//                     });
//                 }
//                 document.getElementById("maindivformsg").innerHTML=msgQ;
//                 document.getElementById("mainfilediv").innerHTML=fileQ;

//             }
//             else{
//                 // console.log("STILL FALSE")
//             }
//         }
//     });
//  }, 1000);


//  window.onbeforeunload = function () {
//     return 'Are you really want to perform the action?';
// }