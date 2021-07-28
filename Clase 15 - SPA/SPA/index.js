//Cargar las rutas al momento de iniciar el sistema
window.onload = router();

//Al momento que el hash se modifique en la url de la web debemos re rutear
$(window).on("hashchange", function () {
  router();
});
