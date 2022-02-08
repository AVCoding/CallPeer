$(document).ready(function(){

var peer = new Peer(); 

peer.on('open', function(id) {
  // id = 'yuhu';
  // peer._id = 'yuhu' ;
  console.log('My peer ID is: ' + id);
  $('.myIdValue').val(id);
});


// Call




$('.btnCall').on('click',function(){
console.log('fsdfsdfsdf');
    // console.log(pear);

  var otherPeerId = $('.otherPeerId').val();

  
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  getUserMedia({video: true, audio: true}, function(stream) {

    var call = peer.call(otherPeerId, stream);
    call.on('stream', function(remoteStream) {
      // Show stream in some video/canvas element.

      // var video = document.createElement('video')
      // document.body.appendChild(video)

      // video.srcObject = remoteStream
      // video.play()

      var localVideo = document.createElement('video')
      document.body.appendChild(localVideo)
      localVideo.srcObject = stream;
      localVideo.play();

      // var remoteVideo = document.createElement('video')
      // document.body.appendChild(remoteVideo)
      // remoteVideo.srcObject = remoteStream;
      // remoteVideo.play();
    });
  }, function(err) {
    console.log('Failed to get local stream' ,err);
  });

});


// // Answer
// var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// peer.on('call', function(call) {
//   getUserMedia({video: true, audio: true}, function(stream) {
//     call.answer(stream); // Answer the call with an A/V stream.
//     call.on('stream', function(remoteStream) {
//       // Show stream in some video/canvas element.

//       var video = document.createElement('video')
//       document.body.appendChild(video)

//       video.srcObject = stream
//       video.play()
//     });
//   }, function(err) {
//     console.log('Failed to get local stream' ,err);
//   });
// });

// =====================================================


// var conn = peer.connect('another-peers-id');
// // on open will be launch when you successfully connect to PeerServer
// conn.on('open', function(){
//   // here you have conn.id
//   conn.send('hi!');
// });



// peer.on('connection', function(conn) {
//   conn.on('data', function(data){
//     // Will print 'hi!'
//     console.log(data);
//   });
// });


// // Media calls

// // Call
// var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// getUserMedia({video: true, audio: true}, function(stream) {
//   var call = peer.call('another-peers-id', stream);
//   call.on('stream', function(remoteStream) {
//     // Show stream in some video/canvas element.
//   });
// }, function(err) {
//   console.log('Failed to get local stream' ,err);
// });



// // Answer
// var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
// peer.on('call', function(call) {
//   getUserMedia({video: true, audio: true}, function(stream) {
//     call.answer(stream); // Answer the call with an A/V stream.
//     call.on('stream', function(remoteStream) {
//       // Show stream in some video/canvas element.
//     });
//   }, function(err) {
//     console.log('Failed to get local stream' ,err);
//   });
// });







});

