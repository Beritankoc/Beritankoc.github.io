

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

   
    navbarShrink();

    
    document.addEventListener('scroll', navbarShrink);

   
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$(document).ready(function(){
    $("#bilgiAc").click(function(){
      $("span").show();
    });
  });

  $(document).ready(function(){
    $("#bilgiKapat").click(function(){
      $("span").hide();
    });
  });

  $("#renk1").click(function(){
    $("p").css("color", "#dc3545");
    $("h1").css("color", "#dc3545");
    $("h2").css("color", "#dc3545");
    $("h3").css("color", "#dc3545");
    $("h4").css("color", "#dc3545");
    $("a").css("color", "#dc3545");
    $("span").css("color", "#dc3545");
  });

  $("#renk2").click(function(){
    $("p").css("color", "#198754");
    $("h1").css("color", "#198754");
    $("h2").css("color", "#198754");
    $("h3").css("color", "#198754");
    $("h4").css("color", "#198754");
    $("span").css("color", "#198754");
    $("a").css("color", "#198754");
  });

  $("#renk3").click(function(){
    $("p").css("color", "#0dcaf0");
    $("h1").css("color", "#0dcaf0");
    $("h2").css("color", "#0dcaf0");
    $("h3").css("color", "#0dcaf0");
    $("h4").css("color", "#0dcaf0");
    $("span").css("color", "#0dcaf0");
    $("a").css("color", "#0dcaf0");
  });

  $("#kucult").click(function(){
    $("img").css("width", "300px");
  });

  $(function() {
    $("#top").click(function() {
        $("html,body").stop().animate({ scrollTop: "0" }, 1000);
    });
  });
  $(window).scroll(function() {
    var uzunluk = $(document).scrollTop();
    if (uzunluk > 300) $("#top").fadeIn(500);
    else { $("#top").fadeOut(500); }
  });

function arkaPlan() {
  document.getElementById("page-top").style.background = "black";
}

function arkaPlan1() {
  document.getElementById("page-top").style.background = "white";
}

function begenmeSayi() {
  document.getElementById("begenmeSayisi").innerText = 1;
}

function begenmeSayi() { 
  const kucult = document.getElementById("begenmeSayisi").querySelectorAll('img')
}
function resmiSagaGotur(){
  document.getElementById("anasayfaResim").style.marginLeft = "500px";
}

function resmiSolaGotur(){
  document.getElementById("anasayfaResim").style.marginLeft = "-300px";
}

function resmiDondur(){
  document.getElementById("anasayfaResim").style.transform = "rotate(90deg)";
}

$("#resimGizleButton").click(function(){
  $("#anasayfaResim").hide();
});

$("#resimGosterButton").click(function(){
  $("#anasayfaResim").show();
});


function sayfayiSil(){
      $("#butunSayfa").hide();
      setTimeout(sayfaGoster,1000);
}

function sayfaGoster(){
  $("#butunSayfa").show("slow");

}
function Yazdir(){
  document.getElementById("kutu").innerHTML="Bir kap su onlar için çok önemli";
}

var btnYaz=document.getElementById("btn");
btnYaz.onclick=Yazdir;

function ornekfonksiyon() {

  document.getElementById("kutu").innerHTML = 'Soğuk günlerde onları içeri almayı unutmayın';

}

function mesajGoster(){
  alert("Sayfama Hoşgeldiniz <3")
}
function yenile(){
  location.reload();
}
function asagiKaydir()
  {
  window.scrollBy(0,100)
  }


