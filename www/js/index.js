var app = {
  // Application Constructor
  initialize: function() {
    console.log("Inicializando app");
    document.addEventListener('deviceready', this.onDeviceReady, false);
    console.log("App inicializada");
    $("#btnfoto").click(function(event) {
      alert("Ahora me haria la foto");
    });
  },
  onDeviceReady: function() {
    console.log("Dispositivo preparado");
    $("#btnfoto").click(function(event) {
      alert("Ahora me haria la foto");
    });

  },
};

app.initialize();
