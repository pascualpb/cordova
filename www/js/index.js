var app = {
  // Application Constructor
  initialize: function() {
    console.log("Inicializando app");
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log("App inicializada");
  },
  onDeviceReady: function() {
    console.log("Dispositivo preparado");
    $("#btnfoto").click(function(event) {
      //disparo la camara

      //  navigator.camera.getPicture(cameraSuccess, cameraError,{ quality: 50,
      //destinationType: Camera.DestinationType.FILE_URI });
      alert("Antes");
      navigator.camera.getPicture(cameraSuccess, cameraError, {});
    });
  };
};



function cameraSuccess() {
  alert("Camara funciona");
}

function cameraError() {
  alert("Camara ERROR");
}
app.initialize();
