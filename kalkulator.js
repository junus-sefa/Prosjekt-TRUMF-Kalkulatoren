$( document ).ready(function() {
  getKategorierVanlig();
  $(".kategori_select").select2({});



//Velg type kategori
  function getKategorierVanlig() {
    var liste_kategori = [
      {val : '', text: 'Velg'},
      //a
      {val : 'apple', text: 'Apple'},
      {val : 'adidas', text: 'Adidas'},
      {val : 'aimn', text: "Aim'n"},
      {val : 'aliExpress', text: 'AliExpress'},
      {val : 'alpereiser', text: 'Alpereiser'},
      {val : 'antonSport', text: 'Anton Sport'},
      {val : 'arket', text: 'Arket'},
      {val : 'ashild', text: 'Ashild'},
      {val : 'asos', text: 'Asos'},
      {val : 'autoEuropeNO', text: 'Auto Europe NO'},
      {val : 'avis', text: 'Avis Bilutleie'},
      //b
      {val : 'bakeren&kokken', text: 'Bakeren & Kokken'},
      {val : 'bangerhead', text: 'Bangerhead'},
      {val : 'bangGood', text: 'BangGood.com'},
      {val : 'barbershop.no', text: 'Barbershop.no'},
      {val : 'bemz', text: 'Bemz'},
      {val : 'bildeler.no', text: 'Bildeler.no'},
      {val : 'billigVVS.no', text: 'BilligVVS.no'},
      {val : 'birkSport', text: 'Birk Sport'},
      {val : 'bjørnBorg', text: 'Bjørn Borg'},
      {val : 'bliVakker', text: 'BliVakker'},
      {val : 'bonprix', text: 'Bonprix'},
      {val : 'boohoo.com', text: 'Boohoo.com'},
      {val : 'booking.com', text: 'Booking.com'},
      {val : 'bubbleroom', text: 'Bubbleroom'},
      {val : 'budget', text: 'Budget Bilutleie'},
      //c
      {val : 'campadre', text: 'Campadre'},
      {val : 'careOfCarl', text: 'Care of carl'},
      {val : 'ccMat', text: 'CC Mat'},
      {val : 'cellbes', text: 'Cellbes'},
      {val : 'cdon', text: 'Cdon'},
      {val : 'chainReactionCycles', text: 'Chain Reaction Cycles'},
      {val : 'chillout', text: 'Chillout'},
      {val : 'climbing247', text: 'Climbing247'},
      {val : 'cubus', text: 'Cubus'},
      {val : 'coolShop', text: 'CoolShop'},
      {val : 'computerSalg', text: 'Computer Salg'},
      {val : 'cdon', text: 'Deco Systems'},
      {val : 'christianaGlassmagasin', text: 'Christiana Glassmagasin'},
      {val : 'confidentLiving', text: 'Confident Living'},
      {val : 'coverBrands', text: 'CoverBrands'},
      //d
      {val : 'danCenter', text: 'DanCenter'},
      {val : 'devold', text: 'Devold'},
      {val : 'dfds', text: 'DFDS'},
      {val : 'dustinHome', text: 'Dustin Home'},
      {val : 'dealExtreme', text: 'DealExtreme'},
      {val : 'dekkonline.com', text: 'Dekkonline.com'},
      {val : 'dyrekassen', text: 'Dyrekassen'},
      {val : 'dogman', text: 'Dogman'},
      {val : 'dentway', text: 'Dentway'},
      {val : 'dentaworks', text: 'Dentaworks'},
      //e
      {val : 'ebeach', text: 'eBeach'},
      {val : 'eidsivaEnergi', text: 'Eidsiva Energi'},
      {val : 'emp', text: 'Emp'},
      {val : 'esso', text: 'Esso'},
      {val : 'etonshirts', text: 'Eton Shirts'},
      {val : 'expedia', text: 'Expedia'},
      {val : 'elektroimportøren', text: 'Elektro Importøren'},
      {val : 'estore', text: 'eStore.nu'},
      {val : 'elektroimportøren', text: 'Elektro Importøren'},
      {val : 'eurodel.no', text: 'Eurodel.no'},
      {val : 'ekstralys', text: 'Ekstralys'},
      {val : 'extraOptical', text: 'Extra Optical'},
      //f
      {val : 'farfetch', text: 'Farfetch'},
      {val : 'flexibus', text: 'Flexibus | Bussbilletter'},
      {val : 'festkompaniet.no', text: 'Festkompaniet.no'},
      {val : 'fredrik&louisa', text: 'Fredrik & Louisa'},
      {val : 'feelUnique', text: 'FeelUnique'},
      {val : 'foodstuff.no', text: 'Foodstuff.no'},
      //g
      {val : 'ginaTricot', text: 'Gina Tricot'},
      {val : 'gudbrandsdalEnergi', text: 'Gudbrandsdal Energi'},
      {val : 'gymGrossisten', text: 'GymGrossisten'},
      {val : 'gearbest', text: 'Gearbest'},
      {val : 'glassoginterior.no', text: 'Glassoginterior.no'},
      {val : 'grøntFokus', text: 'Grønt Fokus'},
      {val : 'glossyBox', text: 'GlossyBox'},
      {val : 'gardenStore', text: 'Garden Store'},
      //h
      {val : 'happySocks', text: 'Happy Socks'},
      {val : 'haglofs', text: 'Haglofs'},
      {val : 'hellyHansen', text: 'Helly Hansen'},
      {val : 'hOgM', text: 'H&M'},
      {val : 'hotels.com', text: 'Hotels.com'},
      {val : 'hvitserk', text: 'Hvitserk'},
      {val : 'homeroom', text: 'HomeRoom'},
      {val : 'hviit.no', text: 'Hviit.no'},
      {val : 'hyttefeber', text: 'Hyttefeber'},
      {val : 'horzeEquestrian', text: 'Horze Equestrian'},
      {val : 'hundeutstyr', text: 'Hundeutstyr'},
      //i
      {val : 'idealOfSweden', text: 'Ideal Of Sweden'},
      {val : 'indiska', text: 'Indiska'},
      {val : 'interhome', text: 'Interhome | Feriehus og leiligheter'},
      {val : 'ice', text: 'Ice'},
      {val : 'inkClub', text: 'inkClub'},
      {val : 'inkmann', text: 'inkmann'},
      {val : 'indiska', text: 'Indiska'},
      {val : 'ilovedogs.no', text: 'iLoveDogs.no'},
      //j
      {val : 'jacobs', text: 'Jacob´s'},
      {val : 'joker', text: 'Joker'},
      {val : 'julegenserbutikken', text: 'Julegenserbutikken'},
      {val : 'jotex', text: 'Jotex'},
      //k
      {val : 'kiwi', text: 'Kiwi'},
      {val : 'kouture', text: 'Kouture'},
      {val : 'kitchenTime', text: 'Kitchen Time'},
      {val : 'kondomeriet', text: 'Kondomeriet'},
      {val : 'kost1', text: 'Kost1'},
      {val : 'kniveksperten', text: 'Kniveksperten'},
      //l
      {val : 'lekmer', text: 'Lekmer'},
      {val : 'lensIt', text: 'LensIt'},
      {val : 'lindex', text: 'Lindex'},
      {val : 'lagerhaus', text: 'Lagerhaus'},
      {val : 'Lagerpriser.no', text: 'Lagerpriser.no'},
      {val : 'lampegiganten', text: 'Lampegiganten'},
      {val : 'Lightup.no', text: 'Lightup.no'},
      {val : 'lunehjem.no', text: 'Lunehjem.no'},
      {val : 'lampeMesteren.no', text: 'LampeMesteren.no'},
      {val : 'lampedirekte.no', text: 'Lampedirekte.no'},
      {val : 'lyko', text: 'LYKO'},
      {val : 'lensIt', text: 'LensIt'},
      {val : 'life', text: 'Life'},
      {val : 'lensWay', text: 'LensWay'},
      {val : 'lookFantastic', text: 'LookFantastic'},
      {val : 'lensOn', text: 'LensOn'},
      //m
      {val : 'magasinet', text: 'Magasinet'},
      {val : 'matchefashion', text: 'Matche Fashion'},
      {val : 'members', text: 'Members'},
      {val : 'meny', text: 'Meny'},
      {val : 'mesterGrønn', text: 'Mester Grønn'},
      {val : 'miinto', text: 'Miinto'},
      {val : 'milrab', text: 'Milrab'},
      {val : 'milslukern', text: 'Milslukern'},
      {val : 'multiTriathlon', text: 'Multi Triathlon'},
      {val : 'myMuse', text: 'MyMuse'},
      {val : 'myTrendyPhone', text: 'MyTrendyPhone'},
      {val : 'microsoft', text: 'Microsoft'},
      {val : 'mobilverkstedet', text: 'Mobilverkstedet'},
      {val : 'mystuff', text: 'MYSTUFF'},
      {val : 'misterSpex', text: 'Mister Spex'},
      {val : 'myProtein', text: 'MyProtein'},
      //n
      {val : 'nakd', text: 'Na-Kd'},
      {val : 'nelly', text: 'Nelly'},
      {val : 'nlyMan', text: 'Nly Man'},
      {val : 'nettbuss', text: 'Nettbuss'},
      {val : 'nordicChoiceHotels', text: 'Nordic Choice Hotels'},
      {val : 'nærButikken', text: 'Nær butikken'},
      {val : 'nike', text: 'Nike'},
      {val : 'netthandelen.no', text: 'Netthandelen.no'},
      {val : 'nytelse.no', text: 'Nytelse.no'},
      //o
      {val : 'omio', text: 'Omio | Tog, buss og fly'},
      {val : 'onepiece', text: 'One Piece'},
      {val : 'oneCall', text: 'OneCall'},
      //p
      {val : 'proteinFabrikken', text: 'Protein Fabrikken'},
      {val : 'proshop', text: 'Proshop'},
      {val : 'pictureIt', text: 'Picture It'},
      {val : 'proshop', text: 'Proshop'},
      {val : 'proteinfabrikken', text: 'ProteinFabrikken'},
      {val : 'petster', text: 'Petster'},
      //q
      {val : 'qatar', text: 'Qatar | Flyreiser'},
      //r
      {val : 'radissonHotels', text: 'Radisson Hotels'},
      {val : 'rentalCars', text: 'Rentalcars.com'},
      {val : 'risskovBilferie', text: 'Risskov Bilferie'},
      {val : 'revir', text: 'Revir'},
      {val : 'rohnisch', text: 'Rohnisch'},
      {val : 'richmond&finch', text: 'Richmond & Finch'},
      {val : 'rum21', text: 'Rum21'},
      {val : 'royalDesign', text: 'RoyalDesign'},
      //s
      {val : 'select', text: 'Select'},
      {val : 'shell', text: 'Shell'},
      {val : 'shellMastercard', text: 'Shell Mastercard'},
      {val : 'skiStart', text: 'SkiStart'},
      {val : 'skittFiske', text: 'Skitt Fiske'},
      {val : 'skittJakt', text: 'Skitt Jakt'},
      {val : 'skyTours', text: 'Sky-Tours | Flyreiser'},
      {val : 'spar', text: 'Spar'},
      {val : 'sportenBeitostølen', text: 'Sporten Beitostølen'},
      {val : 'sportsDeal', text: 'Sports Deal'},
      {val : 'st1', text: 'St1'},
      {val : 'stayhard', text: 'StayHard'},
      {val : 'stormberg', text: 'Stormberg'},
      {val : 'superdry', text: 'Superdry'},
      {val : 'staypro', text: 'Staypro'},
      {val : 'skruvat.no', text: 'Skruvat.no'},
      {val : 'superkul.no', text: 'Superkul.no'},
      {val : 'slikkepott', text: 'Slikkepott'},
      {val : 'smartBuyGlasses', text: 'SmartBuyGlasses'},
      {val : 'swissClinic', text: 'SwissClinic'},
      {val : 'smarteGadgets', text: 'SmarteGadgets'},
      //t
      {val : 'tilbords', text: 'Tilbords'},
      {val : 'timarco', text: 'Timarco'},
      {val : 'trumfForsikring', text: 'Trumf Forsikring'},
      {val : 'trumfVisa', text: 'Trumf Visa'},
      {val : 'tui', text: 'TUI'},
      {val : 'telia', text: 'Telia'},
      {val : 'talkmore', text: 'Talkmore'},
      {val : 'teleOutlet', text: 'TeleOutlet'},
      //u
      {val : 'urverket', text: 'Urverket'},
      {val : 'unisport', text: 'Unisport'},
      //v
      {val : 'viaPlay', text: 'ViaPlay'},
      {val : 'viator', text: 'Viator | Dagsturer, sightseeingturer og aktiviteter'},
      {val : 'vrbo', text: 'VRBO | Ferieboliger'},
      {val : 'vpg', text: 'VPG - Vertical Playground'},
      {val : 'vetZoo', text: 'VetZoo'},
      {val : 'vistaprint', text: 'Vistaprint'},
      {val : 'vidaxl.no', text: 'vidaXL.no'},
      {val : 'varmePumpeShopen', text: 'VarmePumpeShopen'},
      //w
      {val : 'wakakuu', text: 'Wakakuu'},
      {val : 'wiggle', text: 'Wiggle'},
      //x
      {val : 'xLife', text: 'X-Life'},
      {val : 'xplora', text: 'Xplora'},
      //y
      {val : 'yvesRocher', text: 'Yves Rocher'},
      //z
      {val : 'zooplus', text: 'Zooplus'},
      //æ
      //ø
      //å
      //Tall
      {val : '24hShop', text: '24hShop'}
    ];

    //Produserer en ny Select
    var ny_select_kategori = $('<select id="bedrifter" class="kategori_select" name="bedrifter">').appendTo('#velg_bedrift');
    //Henter inn alle items inn i den nye produserte Select
    $(liste_kategori).each(function() {
      ny_select_kategori.append($("<option>").attr('value',this.val).text(this.text));
     });
     //Når bruker velger en bedrift
     $('#bedrifter').on('change', function() {
      $(".bruk_i_mnd_input").hide();
      getInput();
    });
  }



    //Velg hvor mye du bruker / Hvor mange liter?
    function getInput() {
      var bedrift_bilde_val = $('#bedrifter').find(":selected").val();
      var bedrift_bilde_link = "images/bedrift/"+bedrift_bilde_val+".webp";

      //På
      if(bedrift_bilde_val == ('meny') || ('kiwi') || ('joker') || ('spar') || ('jacobs') || ('ccMat') || ('nærButikken') || ('st1') || ('viaPlay') || ('lekmer') || ('nelly') || ('careOfCarl') || ('miinto') || ('booking.com') || ('nordicChoiceHotels') || ('careOfCarl')){
        $('#etter_nummer').text(",-");
        $(".bedrift").html("Hvor mye bruker du i måneden på <span style='text-transform:capitalize'>"+bedrift_bilde_val+"</span>?");
      }

      //Liter
      if(bedrift_bilde_val == ('esso') || ('shell')){
        $('#etter_nummer').text("liter");
        $(".bedrift").html("Hvor mange liter fyller du på <span style='text-transform:capitalize'>"+bedrift_bilde_val+"</span> i måneden?");
      }
      
      //Med
      if(bedrift_bilde_val == ('trumfForsikring') || ('trumfVisa') || ('shellMastercard') || ('trumfVisa')){
        $('#etter_nummer').text(",-");
        $(".bedrift").html("Hvor mye bruker du i måneden med <span style='text-transform:capitalize'>"+bedrift_bilde_val+"</span>?");
      }

      //Hos
      if(bedrift_bilde_val == ('tilbords') || ('bliVakker') || ('gymGrossisten') || ('apple') || ('lensIt') || ('cdon') || ('hOgM') || ('hotels.com') || ('tui') || ('mesterGrønn') || ('gudbrandsdalEnergi') || ('eidsivaEnergi')){
        $('#etter_nummer').text(",-");
        $(".bedrift").html("Hvor mye bruker du i måneden hos <span style='text-transform:capitalize'>"+bedrift_bilde_val+"</span>?");
      } 

      $("#bedrift_bilde").attr("src", bedrift_bilde_link);
      $("#bedrift_bilde_forklaring").attr("src", bedrift_bilde_link);
      $(".bruk_i_mnd_input").show();
      $('.bruk_i_mnd_input').focus();
      $('input[name="forbruk_i_mnd"]').keyup(function(){
        $("#kjør_kalkulator").show();
        runCalculator();
      });
    }
    

    //Kjør utregning
    function runCalculator() {
      var bedrift_bilde_val = $('#bedrifter').find(":selected").val();
      var forbruk_i_mnd = parseInt($('input[name="forbruk_i_mnd"]').val());
      var bedrift_text = "";

      if(bedrift_bilde_val == 'meny'){
        var meny1Prosent = ((forbruk_i_mnd * 1)/100).toFixed(0);
        var meny3Prosent = ((forbruk_i_mnd * 3)/100).toFixed(0);
        var meny1ProsentÅret = (((forbruk_i_mnd * 1)/100)*12).toFixed(0);
        var meny3ProsentÅret = (((forbruk_i_mnd * 3)/100)*12).toFixed(0);
        bedrift_text = "På Meny vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus på alle dagligvarer på trippel-trumf dager. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + meny1Prosent + ",-</b> i Trumf bonus på hverdager, og <b>ca. kr " + meny3Prosent + ",-</b> på trippel-trumf dager. I tillegg får du dine helt egne personlige tilbudskuponger som gir deg rabatt på varer du kjøper ofte. <br></br> I løpet av et år får du <b>ca. kr " + meny1ProsentÅret + ",-</b> i Trumf bonus på hverdager og <b>ca. kr " + meny3ProsentÅret + ",-</b> på trippel-trumf dager, om du handler for kr " + forbruk_i_mnd + ",- i måneden.   <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos MENY</h2> <p>Spar Trumf-bonus på alt du handler av dagligvarer hos MENY, i tillegg får du personlige tilbudskuponger som gir deg rabatt på varer du kjøper ofte. Husk å aktivere kupongene før du handler, på nett eller i MENY-appen.</p>";
      } else if(bedrift_bilde_val == 'kiwi'){
        var kiwi1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var kiwi3Prosent = (forbruk_i_mnd * 0.03).toFixed(0);
        var kiwi15Prosent = (forbruk_i_mnd * 0.15).toFixed(0);
        var kiwi1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var kiwi3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        var kiwi15ProsentÅret = ((forbruk_i_mnd * 0.15)*12).toFixed(0);
        bedrift_text = "På Kiwi vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus hver gang det er trippel-trumf dager. I tillegg på fersk frukt og grønt, og ferskpakket fisk med KIWI PLUSS får du hele 15% i Trumf Bonus. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + kiwi1Prosent + ",-</b> i Trumf bonus på hverdager, <b>ca. kr " + kiwi3Prosent + ",-</b> på trippel-trumf dager. På fersk frukt og grønt og ferskpakket fisk med KIWI PLUSS får du <b>ca. kr " + kiwi15Prosent + ",-</b>. <br></br> I løpet av et år får du <b>ca. kr " + kiwi1ProsentÅret + ",-</b> i Trumf bonus på hverdager, <b>ca. kr " + kiwi3ProsentÅret + ",-</b> på trippel-trumf dager og hele <b> kr " + kiwi15ProsentÅret + ",-</b> på all fersk frukt og grønt og ferskpakket fisk med KIWI PLUSS. Om du handler for kr " + forbruk_i_mnd + ",- i måneden. <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos KIWI</h2> <p>Du sparer alltid Trumf-bonus på det du handler av dagligvarer hos KIWI, og ved å melde deg inn i KIWI PLUSS får du ekstra mye Trumf-bonus når du kjøper fersk frukt, grønt og ferskpakket fisk. Det er enkelt og gratis å melde seg inn i KIWI PLUSS i panelet under kommunikasjon fra KIWI.</p>";
      } else if(bedrift_bilde_val == 'joker'){
        var joker1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var joker3Prosent = (forbruk_i_mnd * 0.03).toFixed(0);
        var joker5Prosent = (forbruk_i_mnd * 0.05).toFixed(0);
        var joker1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var joker3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        var joker5ProsentÅret = ((forbruk_i_mnd * 0.05)*12).toFixed(0);
        bedrift_text = "På Joker vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus hver gang det er trippel-trumf dager. I tillegg vil du få 5% ekstra Trumf bonus hver eneste mandag med Joker GLAD. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + joker1Prosent + ",-</b> i Trumf bonus på hverdager, <b>ca. kr " + joker3Prosent + ",-</b> på trippel-trumf dager, og hver mandag vil du få <b>ca. kr " + joker5Prosent + ",-</b> ekstra i Trumf bonus. <br></br> I løpet av et år får du <b>ca. kr " + joker1ProsentÅret + ",-</b> i Trumf bonus på hverdager, <b>ca. kr " + joker3ProsentÅret + ",-</b> på trippel-trumf dager og hele <b> kr " + joker5ProsentÅret + ",-</b> ekstra Trumf bonus hver eneste mandag, om du handler for kr " + forbruk_i_mnd + ",- i måneden. <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos Joker</h2> <p>Du sparer Trumf-bonus på alt du handler av dagligvarer hos Joker, i tillegg lønner det seg å storhandle på mandager! For med Joker GLAD får du hele 5 % ekstra i Trumf-bonus på alle dagligvarer hver mandag. Det er enkelt og gratis å melde seg på Joker GLAD i panelet kommunikasjon fra Joker.</p>";
      } else if(bedrift_bilde_val == 'spar'){
        var spar1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var spar3Prosent = (forbruk_i_mnd * 0.03).toFixed(0);
        var spar1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var spar3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        bedrift_text = "På Spar vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus på alle dagligvarer på trippel-trumf dager. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + spar1Prosent + ",-</b> i Trumf bonus på hverdager, og <b>ca. kr " + spar3Prosent + ",-</b> på trippel-trumf dager. I tillegg får du dine helt egne personlige tilbudskuponger som gir deg 40 % avslag på utvalgte produkter. <br></br> I løpet av et år får du <b>ca. kr " + spar1ProsentÅret + ",-</b> i Trumf bonus på hverdager og <b>ca. kr " + spar3ProsentÅret + ",-</b> på trippel-trumf dager, om du handler for kr " + forbruk_i_mnd + ",- i måneden.   <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos SPAR</h2> <p>Spar Trumf-bonus på alt du handler av dagligvarer hos SPAR, i tillegg får du personlige tilbudskuponger som gir deg 40 % avslag på utvalgte produkter. Husk å aktivere kupongene før du handler, på nett eller i SPAR-appen.</p>";
      } else if(bedrift_bilde_val == 'jacobs'){
        var jacobs1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var jacobs3Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var jacobs1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var jacobs3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        bedrift_text = "Hos Jacob´s vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus på alle dagligvarer på trippel-trumf dager. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + jacobs1Prosent + ",-</b> i Trumf bonus på hverdager, og <b>ca. kr " + jacobs3Prosent + ",-</b> på trippel-trumf dager. I tillegg får du dine helt egne personlige tilbudskuponger. <br></br> I løpet av et år får du <b>ca. kr " + jacobs1ProsentÅret + ",-</b> i Trumf bonus på hverdager og <b>ca. kr " + jacobs3ProsentÅret + ",-</b> på trippel-trumf dager, om du handler for kr " + forbruk_i_mnd + ",- i måneden.   <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos Jacob's</h2> <p>Spar Trumf-bonus på alt du handler av dagligvarer hos Jacob's, i tillegg får du personlige tilbudskuponger som gir deg rabatt på utvalgte varer. Husk å aktivere kupongene på nett før du handler.</p>";
      } else if(bedrift_bilde_val == 'ccMat'){
        var ccMat1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var ccMat3Prosent = (forbruk_i_mnd * 0.03).toFixed(0);
        var ccMat1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var ccMat3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        bedrift_text = "Hos CC Mat vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus på alle dagligvarer på trippel-trumf dager. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + ccMat1Prosent + ",-</b> i Trumf bonus på hverdager, og <b>ca. kr " + ccMat3Prosent + ",-</b> på trippel-trumf dager. <br></br> I løpet av et år får du <b>ca. kr " + ccMat1ProsentÅret + ",-</b> i Trumf bonus på hverdager og <b>ca. kr " + ccMat3ProsentÅret + ",-</b> på trippel-trumf dager, om du handler for kr " + forbruk_i_mnd + ",- i måneden.   <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos CC Mat</h2> <p>Du sparer Trumf-bonus på alle dagligvarer hos CC Mat, og 3 % bonus hver gang det er Trippel-Trumf. CC Mat finner du strategisk plassert i de tre Mjøsbyene: Hamar, Gjøvik og Lillehammer, hvor veien også er kort til Hafjell, Kvitfjell, Sjusjøen, Skeikampen og Jotunheimen.</p>";
      } else if(bedrift_bilde_val == 'nærButikken'){
        var nærButikken1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var nærButikken3Prosent = (forbruk_i_mnd * 0.03).toFixed(0);
        var nærButikken1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var nærButikken3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        bedrift_text = "På Nær Butikken vil du få 1% Trumf bonus på alle dagligvarer alle hverdager, og 3% Trumf bonus på alle dagligvarer på trippel-trumf dager. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + nærButikken1Prosent + ",-</b> i Trumf bonus på hverdager, og <b>ca. kr " + nærButikken3Prosent + ",-</b> på trippel-trumf dager. <br></br> I løpet av et år får du <b>ca. kr " + nærButikken1ProsentÅret + ",-</b> i Trumf bonus på hverdager og <b>ca. kr " + nærButikken3ProsentÅret + ",-</b> på trippel-trumf dager, om du handler for kr " + forbruk_i_mnd + ",- i måneden.   <br></br> <i>*Til informasjon gis det ikke Trumf-bonus på pant, apotekvarer eller post i butikk.</i> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos Nær Butikken</h2> <p>Du sparer Trumf-bonus på alle dagligvarer hos Nærbutikken, og 3 % bonus hver gang det er Trippel-Trumf. Det gis ikke bonus på Nærbutikken Hellestrand og Nærbutikken Lyngnes.</p>";
      } else if(bedrift_bilde_val == 'mesterGrønn'){
        var mesterGrønn1Prosent = (forbruk_i_mnd * 0.01).toFixed(0);
        var mesterGrønn3Prosent = (forbruk_i_mnd * 0.03).toFixed(0);
        var mesterGrønn5Prosent = (forbruk_i_mnd * 0.05).toFixed(0);
        var mesterGrønn1ProsentÅret = ((forbruk_i_mnd * 0.01)*12).toFixed(0);
        var mesterGrønn3ProsentÅret = ((forbruk_i_mnd * 0.03)*12).toFixed(0);
        var mesterGrønn5ProsentÅret = ((forbruk_i_mnd * 0.05)*12).toFixed(0);
        bedrift_text = "Hos Mester Grønn vil du få 1% Trumf bonus på alle varer, alle hverdager! Og 3% Trumf bonus hver gang det er trippel-trumf. I tillegg vil du få 10% på utvalgte kampanjer. Bruker du <b>kr " + forbruk_i_mnd + ",-</b> i måneden vil du få <b>ca. kr " + mesterGrønn1Prosent + ",-</b> i Trumf bonus på hverdager, <b>ca. kr " + mesterGrønn3Prosent + ",-</b> på trippel-trumf dager. <br></br> I løpet av et år får du <b>ca. kr " + mesterGrønn1ProsentÅret + ",-</b> i Trumf bonus på hverdager, <b>ca. kr " + mesterGrønn3ProsentÅret + ",-</b> på trippel-trumf dager, om du handler for kr " + forbruk_i_mnd + ",- i måneden. <br></br> <h2 class='display-5 undertittel'>Gode Trumf-fordeler hos Mester Grønn</h2> <p>Meld deg på nyhetsbrev fra Mester Grønn og få med deg alle bonuskampanjer. Du får også gode tilbud på blomster, inspirasjon og stelletips tilpasset sesong.</p>";
      } else if(bedrift_bilde_val == 'esso'){
        var esso40øre = ((forbruk_i_mnd * 0.40)).toFixed(2);
        var esso20øre = ((forbruk_i_mnd * 0.20)).toFixed(2);
        var esso40øreÅret = ((forbruk_i_mnd * 0.40)*12).toFixed(2);
        var esso20øreÅret = ((forbruk_i_mnd * 0.20)*12).toFixed(2);
        bedrift_text = "På Esso får du 40 øre/l i Trumf bonus på bensin og diesel på betjente Esso stasjoner, og 20 øre/l på Esso Express/automat stasjoner. I tillegg vil du få ekstra Trumf-bonus ved kampanjer! Fyller du <b>" + forbruk_i_mnd + " liter</b> i måneden vil du få <b>kr " + esso40øre + ",-</b> i Trumf bonus på betjente Esso stasjoner, og <b>kr " + esso20øre + ",-</b> i Trumf bonus på Esso Express/automat-stasjoner. <br></br> I løpet av et år tjener du <b>kr " + esso40øreÅret + ",-</b> i Trumf bonus på betjente Esso stasjoner, og <b>kr " + esso20øreÅret + ",-</b> i Trumf bonus på Esso Express/automat-stasjoner.</b> <br></br> <h2 class='display-5 undertittel'>Ikke gå glipp av ekstra Trumf-bonus og gode tilbud</h2> <p>Meld deg på Esso sitt nyhetsbrev og få med deg bonuskampanjer, månedens tilbud og spennende nyheter.</p> <i>* Det gis ikke bonus på kjøp av avgiftsfri diesel, HVO eller AdBlue</i><br><i>** Det gis ikke Trumf-bonus hos Esso ved betaling med kredittkort, heller ikke i kombinasjon med Trumf-kort</i>";
      } else if(bedrift_bilde_val == 'shell'){
        var shell30øre = ((forbruk_i_mnd * 0.30)).toFixed(2);
        var shell30øreÅret = ((forbruk_i_mnd * 0.30)*12).toFixed(2);
        bedrift_text = "På Shell får du 30 øre/l i Trumf bonus på bensin og diesel på alle Shell stasjoner. I tillegg vil du få ekstra Trumf-bonus ved kampanjer! Fyller du <b>" + forbruk_i_mnd + " liter</b> i måneden vil du få <b>kr " + shell30øre + ",-</b> i Trumf bonus på alle Shell stasjoner. <br></br> I løpet av et år tjener du <b>kr " + shell30øreÅret + ",-</b> i Trumf bonus på alle Shell stasjoner.</b> <br></br> <h2 class='display-5 undertittel'>Ikke gå glipp av ekstra Trumf-bonus og gode tilbud</h2> <p>Meld deg på Shell sitt nyhetsbrev og få med deg bonuskampanjer og spennende nyheter.</p> <i>* Du får Trumf-bonus på inntil 500 literen i måneden</i>";
      } else if(bedrift_bilde_val == 'gudbrandsdalEnergi'){
        var gudbrandsdalEnergi2Prosent = ((forbruk_i_mnd * 0.02)).toFixed(0);
        var gudbrandsdalEnergi2ProsentÅret = ((forbruk_i_mnd * 0.02)*12).toFixed(0);
        bedrift_text = "Hos Gudbrandsdal Energi får du hele 2% på ditt strømforbruk med GE Spot. Bruker du kr " + forbruk_i_mnd + ",- i måneden på strøm, vil du få <b>kr " + gudbrandsdalEnergi2Prosent + ",- i Trumf bonus.</b>.  <br></br> I løpet av et år tjener du <b>kr " + gudbrandsdalEnergi2ProsentÅret + ",-</b> i Trumf bonus på strøm du bruker uansett!</b> <br></br> <h2 class='display-5 undertittel'>Som ny* kunde får du 225 kroner i velkomstbonus! Sikre deg en gunstig strømavtale med Trumf-bonus</h2> <p>Med Trumf strømavtale fra Gudbrandsdal Energi får du 2 % Trumf-bonus på strømforbruket ditt, og er sikret en god spotprisavtale med lavt påslag og uten fastbeløp.</p> <i>*  For å kvalifisere til velkomstbonus kan du ikke ha vært strømkunde hos Gudbrandsdal Energi eller Eidsiva Energi de siste 12 mnd</i>";
      } else if(bedrift_bilde_val == 'eidsivaEnergi'){
        var eidsivaEnergi2Prosent = ((forbruk_i_mnd * 0.02)).toFixed(0);
        var eidsivaEnergi2ProsentÅret = ((forbruk_i_mnd * 0.02)*12).toFixed(0);
        bedrift_text = "Hos Eidsiva Energi får du hele 2% på ditt strømforbruk. Bruker du kr " + forbruk_i_mnd + ",- i måneden på strøm, vil du få <b>kr " + eidsivaEnergi2Prosent + ",- i Trumf bonus</b>.  <br></br> I løpet av et år tjener du <b>kr " + eidsivaEnergi2ProsentÅret + ",-</b> i Trumf bonus på strøm du bruker uansett!</b> <br></br> <h2 class='display-5 undertittel'>Som ny* kunde får du 225 kroner i velkomstbonus!</h2> <p>Som Trumf-medlem kan du spare Trumf-bonus på den energismarte strømavtalen Eidsiva Spot, samt ved kjøp av solcelleanlegg og elbillader hos Eidsiva Energi. I tillegg får du 2500 kroner i Trumf-bonus ved kjøp av solcelleanlegg, og 1000 kroner i Trumf-bonus ved kjøp av hjemmelader til elbil.</p> <i>* For å kvalifisere til velkomstbonus kan du ikke ha vært strømkunde hos Eidsiva Energi eller Gudbrandsdal Energi de siste 12 mnd</i>";
      } else if(bedrift_bilde_val == 'tilbords'){
        var tilbords10_9Prosent = ((forbruk_i_mnd * 0.109)).toFixed(0);
        var tilbords10_9ProsentÅret = ((forbruk_i_mnd * 0.109)*12).toFixed(0);
        bedrift_text = "På Tilbords får du 10.9% i Trumf bonus på hele ditt kjøp. Bruker du kr " + forbruk_i_mnd + ",- i måneden hos Tilbords, vil du få <b>kr " + tilbords10_9Prosent + ",- i Trumf bonus</b>.  <br></br> I løpet av et år tjener du <b>kr " + tilbords10_9ProsentÅret + ",-</b> i Trumf bonus om du bruker <b>kr " + forbruk_i_mnd + ",-</b> i måneden.</b>";
      } else if(bedrift_bilde_val == 'bliVakker'){
        var bliVakker5Prosent = ((forbruk_i_mnd * 0.05)).toFixed(0);
        var bliVakker5ProsentÅret = ((forbruk_i_mnd * 0.05)*12).toFixed(0);
        bedrift_text = "På BliVakker.no får du 5% i Trumf bonus på hele ditt kjøp. Bruker du kr " + forbruk_i_mnd + ",- i måneden hos BliVakker.no, vil du få <b>kr " + bliVakker5Prosent + ",- i Trumf bonus</b>.  <br></br> I løpet av et år tjener du <b>kr " + bliVakker5ProsentÅret + ",-</b> i Trumf bonus om du bruker <b>kr " + forbruk_i_mnd + ",-</b> i måneden.</b>";
      } else if(bedrift_bilde_val == 'gymGrossisten'){
        var gymGrossisten6_2Prosent = ((forbruk_i_mnd * 0.062)).toFixed(0);
        var gymGrossisten6_2ProsentÅret = ((forbruk_i_mnd * 0.062)*12).toFixed(0);
        bedrift_text = "På Gymgrossisten.no får du 6.2% i Trumf bonus på hele ditt kjøp. Bruker du kr " + forbruk_i_mnd + ",- i måneden på Gymgrossisten.no, vil du få <b>kr " + gymGrossisten6_2Prosent + ",- i Trumf bonus</b>.  <br></br> I løpet av et år tjener du <b>kr " + gymGrossisten6_2ProsentÅret + ",-</b> i Trumf bonus om du bruker <b>kr " + forbruk_i_mnd + ",-</b> i måneden.</b>";
      }
      $("#kjørTekst").html(bedrift_text);
    }


    //Når man klikker på knappen "Kjør kalkulator"
    $('#kjør_kalkulator').click(function(){
      $("footer").show();
      $("#informasjons_boks").show();
        $('html, body').animate({
          scrollTop: $("#informasjons_boks").offset().top
        }, 1000);

    });

    //Når man klikker på knappen "Prøv igjen"
    $('#prøv_igjen').click(function(){
      $("footer").fadeOut(1500);
      $("#informasjons_boks").fadeOut(1500);
        $('html, body').animate({
          scrollTop: $("html, body").offset().top
        }, 1000);
    });



});