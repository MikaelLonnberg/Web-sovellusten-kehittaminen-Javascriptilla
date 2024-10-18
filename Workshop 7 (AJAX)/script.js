// Tehtävä 1, funktio, joka parsii XML-datan ja näyttää lainaukset
function parseData() {
    var quotes = document.getElementsByTagName("quotes"); // Hae kaikki "quotes" -elementit
    var output = ""; // Muuttuja, johon kerätään tulokset

    for (var i = 0; i < quotes.length; i++) { // Käy läpi kaikki lainaukset
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent;  // Hae lainauksen teksti
        var author = quotes[i].getElementsByTagName("author")[0].textContent;  // Hae lainauksen tekijä
        
        output += quoteText + " - " + author + "<br>"; // Lisää lainaus ja tekijä outputiin
    }

    document.getElementById("myDiv").innerHTML = output; // Näytä tulos myDiv-elementissä
}

// Tehtävä 2, AJAX pyynto, joka lataa XML tiedoston ja näyttää sen sisällön
function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest(); // Luo uusi XMLHttpRequest-objekti
    xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5:%20Asynchronous%20JavaScript%20(AJAX)/famous-quotes.xml", true); // Määritä pyyntö
    xmlhttp.send(); // Lähetä pyyntö

    xmlhttp.onreadystatechange = function() { // Aseta funktio, joka suoritetaan, kun pyyntö on valmis
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Tarkista, että pyyntö on valmis ja onnistunut
            document.getElementById("quotes").innerHTML = xmlhttp.responseText; // Näytä XML-sisältö quotes-elementissä
        }
    }
} 

// Tehtävä 3, funktio parsii XML datan ja lisää sen tauluun
function loadAndParseXML(){
    var quotes = document.getElementsByTagName("quotes"); // Hae kaikki "quotes" -elementit
    var tableBody = document.querySelector("#tabledata table tbody") // Hae taulun runko

    while (tableBody.rows.length > 1) { // Poista kaikki rivit, paitsi ensimmäinen
        tableBody.deleteRow(1);
        }
    
    for (var i = 0; i < quotes.length; i++) { // Käy läpi kaikki lainaukset
        var quoteText = quotes[i].getElementsByTagName("quote")[0].textContent; // Hae lainauksen teksti
        var author = quotes[i].getElementsByTagName("author")[0].textContent; // Hae lainauksen tekijä 
        
        var newRow = tableBody.insertRow(-1); // Lisää uusi rivi tauluun
        var quoteCell = newRow.insertCell(0); // Lisää uusi solu lainaukselle
        var authorCell = newRow.insertCell(1); // Lisää uusi solu tekijälle

        quoteCell.textContent = quoteText; // Aseta lainauksen teksti soluun
        authorCell.textContent = author; // Aseta tekijän nimi soluun
    }
}
// Tehtävä 4, lataa funktio, joka lataa uutiset ja kutsuu parsimisfunktiota
function loadAndParseNews(url){
    var xmlhttp = new XMLHttpRequest(); // Luo uusi XMLHttpRequest-objekti
    xmlhttp.open("GET", url, true); // Määritä pyyntö
    xmlhttp.send(); // Lähetä pyyntö

    xmlhttp.onreadystatechange = function(){ // Aseta funktio, joka suoritetaan, kun pyyntö on valmis
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){ // Tarkista, että pyyntö on valmis ja onnistunut
            parseNews(xmlhttp.responseXML); // Kutsu parsintafunktiota XML-datalla
        }
    }
}

function parseNews(xml){
    var items = xml.getElementsByTagName("item"); // Hae kaikki "item" -elementit
    var newsFeedDiv = document.getElementById("newsfeed"); // Hae newsfeed-div
    newsFeedDiv.innerHTML = ""; // Tyhjennä newsfeed

    for (var i=0; items.length; i++){ // Käy läpi kaikki uutiset
        var title = items[i].getElementsByTagName("title")[0].textContent; // Hae uutisen otsikko
        var link = items[i].getElementsByTagName("link")[0].textContent; // Hae uutisen linkki

        var listItem = document.createElement("li"); // Luo uusi listaelementti
        var anchor = document.createElement("a"); // Luo uusi linkkielementti
        anchor.href = link; // Aseta linkin osoite
        anchor.textContent = title; // Aseta linkin teksti
        anchor.target = "_blank"; // Avaa linkki uuteen välilehteen
        listItem.appendChild(anchor); // Lisää linkki listaelementtiin


        newsFeedDiv.appendChild(listItem); // Lisää listaelementti uutisvirtaan
    }
}