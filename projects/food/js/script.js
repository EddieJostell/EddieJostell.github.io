
/// WHAT YOU WANT FOR DIN DINS?
//FOOD ARRAY
var foodArray = [];

//FOOD CONSTRUCTOR
function foodNetwork(name, veg, url) {
    this.name = name;
    this.veg = veg;
    this.url = url;
}

//FUNCTION THAT PUSH ALL THE OBJECTS DISHES MADE FROM THE CONSTRUCTOR INTO THE ARRAY
function addfoodNetwork() {
     foodArray.push(
         kottbullar = new foodNetwork("Köttbullar med potatismos, gräddsås, lingon och stektlök", false, "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"),
         coalBun = new foodNetwork("Grillad kolbulle med lingonsylt.", false, "http://www.koket.se/sommar-med-ernst/ernst-kirchsteiger/kolbulle-pa-ernsts-vis/"),
         springRoll = new foodNetwork("Vårrulle med sötsursås", true, "http://www.ica.se/recept/farska-varrullar-med-grillad-tofu-och-ingefarsdipp-720099/"),
         haloumi = new foodNetwork("Haloumisallad", true, "http://mittkok.expressen.se/recept/halloumisallad/"),
         baconChicken = new foodNetwork("Baconinlindad kycklingfile.", false, "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"),
         lasagne = new foodNetwork("Lasagne med köttfärssås", false, "http://www.koket.se/lasagne-med-kottfarssas"),
         corn = new foodNetwork("Majsplättar med avokadoröra", true, "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"),
         soppachori = new foodNetwork("Grönkålssoppa med chorizo", false, "http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I"),
         pasta = new foodNetwork("Pastagratäng med rökt lax och spenat.", false, "http://www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"),
         thaiChicken = new foodNetwork("Thaigryta med kyckling", false, "http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/"),
         salmon = new foodNetwork("Lax med nudelsallad", false, "https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander"),
         lasagnehall = new foodNetwork("Lasagne med halloumi, spenat och pumpakärnor", true, "http://www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/"),
         risotto = new foodNetwork("Rödbetsrisotto med hyvlad halloumi och valnötter", true, "http://www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/"),
         tuna = new foodNetwork("Halstrad tonfisk med avokadohummus", false, "http://www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"),
         wildHog = new foodNetwork("Viltskavsgryta med mandelpotatispuré & rårörda lingon", false, "https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon"),
         coq = new foodNetwork("Coq Au Vin", false, "http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html"),
         indianSoup = new foodNetwork("Indisk linssoppa ”Mulligatawny”", true, "http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/"),
         falaFel = new foodNetwork("Falafel med hummus, yoghurtdressing och picklad rödlök", true, "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"),
         veggoPasta = new foodNetwork("Vegetarisk pastagratäng", true, "https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"),
         carrotBiff = new foodNetwork("Morotsbiffar", true, "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"),
         teriyakiBiff = new foodNetwork("Biff Teriyaki", false, "http://www.arla.se/recept/biff-teriyaki"),
         strogaNoff = new foodNetwork("Korvstroganoff", false, "http://www.ica.se/recept/korvstroganoff-med-ris-533512/"),
         owenRoast = new foodNetwork("Ugnssteks falukorv med rostade rotsaker", false, "http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/"),
         pizzaChipotle = new foodNetwork("Vegetarisk Chipotle Chilipizza", true, "http://www.koket.se/vegetariska-chipotle-chilipizzor"),
         baconLoaf = new foodNetwork("Baconlindad köttfärslimpa", false, "http://mittkok.expressen.se/recept/baconlindad-kottfarslimpa/")
         //SOME LINKS DONT WORK? DONT KNOW THE REASON YET...
     );
}
addfoodNetwork();

//CHECKBOX FOR VEGETARIAN OR NOT VEGETARIAN
var vegCheck = document.getElementById("vegCheck");

//LINK FOR THE FOODDISPLAY ON THE PAGE
var foodLink = document.getElementById("foodLink");

//FOOD BUTTON WITH CLICK EVENT
var goBtn = document.getElementById("foodBtn");
goBtn.addEventListener("click", showFood);

//FUNCTION THAT SELECTS A DISH AT RANDOM
function randomizeFood() {
    var vegChecked = document.getElementById("vegCheck").checked;
    
    // IF NOT CHECKED PICK A OBJECT FROM THE ARRAY ON RANDOM
    if (vegChecked === false) {
        var r = Math.floor(Math.random() * foodArray.length);
        foodLink.innerHTML = foodArray[r].name;
        foodLink.href = foodArray[r].url;
    }
    //IF CHECKED PICK A OBJECT ON RANDOM FROM THE ARRAY THAT MATCHES TRUE
    else if (vegChecked === true) {
        var vegTrue = true;
        while (vegTrue) {
            var i = Math.floor(Math.random() * foodArray.length);
            if (foodArray[i].veg) {
                foodLink.innerHTML = foodArray[i].name;
                foodLink.href = foodArray[i].url;
                vegTrue = false;
            }
        }
    }
}

//FUNCTION TO SHOW THE FOOD
function showFood() {
    randomizeFood();
}

// SHOW A DISH ON PAGE LOAD
function onStartup() {
    var r = Math.floor(Math.random() * foodArray.length);
        foodLink.innerHTML = foodArray[r].name;
        foodLink.href = foodArray[r].url;
}

onStartup();