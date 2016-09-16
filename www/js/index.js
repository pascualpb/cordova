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
      //disparo la alarma


      
    });

  },
};

app.initialize();
