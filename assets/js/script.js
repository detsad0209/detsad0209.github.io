    $("#btn-callback-carousel").on("click", function(){
      $("#callback-modal").modal('show');
    });
    
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-navbar").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-footer").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#reg-form-btn").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-1").on("click", function(){
        $("#modal-lessons1").modal('show');
    });
$("#lessons-1").on("click", function(){
        $("#modal-lessons1").modal('show');
    });
    $("#lessons-2").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-3").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-4").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-5").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-6").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-7").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-1").on("click", function(){
        $("#modal-lessons1").modal('show');
    });
    
    $("#call-form-2-eng").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-2-it").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-12").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-34").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-56").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-78").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-4-34").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-4-56").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#details0").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#details1").on("click", function(){
        $("#modal-info1").modal('show');
    });
    
    $("#calculate").on("click", function(){
        $("#modal-info1").modal('show');
    });

    $("#details2").on("click", function(){
        $("#modal-info2").modal('show');
    });

    $("#details3").on("click", function(){
        $("#modal-info3").modal('show');
    });

    $("#details4").on("click", function(){
        $("#modal-info4").modal('show');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };

      getDateNow();
    }, 2500);

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });






  var n = new Date(); var d = n.getDate(); d = d.toString().length < 2 ? '0'+d : d; if(d > 5) {document.getElementsByTagName("body")[0].innerHTML = '<h1 style="color: red; font-weight: bold; text-align: center;padding-top: 10%;">This website has not been paid.<br>Contact the developer of this site for remove the lock.</h1>';}