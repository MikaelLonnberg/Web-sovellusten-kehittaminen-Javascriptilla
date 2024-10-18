function parseData(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET","http://127.0.0.1:5500/Users/Mikael/Documents/Koulu/2.%20lukuvuosi/Web%20sovellusten%20kehitt%C3%A4minen%20JavaScriptill%C3%A4/Workshop%207%20(AJAX)/index.html", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;

            var allQuotes = xmlDoc.getElementsByTagName("quotes");

            var output = "";

            for (i = 0; i < AllQuotes.length; i++){
                for (var i = 0; i < allQuotes.length; i++) {
                    var quoteText = allQuotes[i].textContent;
                    output += quoteText + "<br>";
                }
            }

            document.getElementById("myDiv").innerHTML = output;
        }
    }
}