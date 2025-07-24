const inputFile = document.getElementById('cartella');

const btnConferma = document.getElementById('btnConferma');

const outputDiv = document.getElementById('output');

let selectedFiles = [];
let newtable = [];
const rivenditori = [
  "2M S.r.l.",
  "3GI SERVICE S.r.l.",
  "A.M. ATTREZZATURE S.r.l.",
  "A.R.A.M. sas di Damiano Damiani & C.",
  "ABD S.R.L.",
  "ADAS TECHNOLOGY S.r.l.",
  "ADRIA YACHTS GROUP SRL",
  "AGIESSE S.A.S. di Turchetto Adelino & C.",
  "AL ASONI & LOI PIERO GIORGIO S.a.s.",
  "ALDO ROMEO S.p.A.",
  "ALLARA SERVICE S.A.S. di Berruto Giorgio Maria & C.",
  "ANGELELLI MARCO",
  "ARCA BOZEN S.r.l.",
  "ASFE ASSOCIAZIONE STUDIO FORMAZ. EUROPEA",
  "ASTECNICA S.n.c. di Moretti Marco & C.",
  "ATEC GROUP DI LANDI PASQUALE & C. S.a.s.",
  "AUTELEKTRA S.r.l.",
  "AUTO ATTREZZATURE TRIVENETO S.r.l.",
  "AUTO OPZIONAL S.a.s. di NANNI STEFANIA E C.",
  "AUTOATTREZZATURE BIDIN S.n.c. di BIDIN FERDINANDO & C.",
  "AUTOGAS S.a.s. di RONCA LUCIANO E C.",
  "AUTOLUCE S.r.l.",
  "AUTOTECK S.r.l.",
  "AUTOTECNICA S.r.l.",
  "BACAR S.r.l.",
  "BERTOROTTA SRL",
  "BIEMMEPI S.r.l.",
  "BINETTI S.P.A.",
  "BLU-GAS S.r.l. Unipersonale",
  "B.L.M. SPA",
  "C.A.F. - CONSORZIO AUTORIPARATORI FRIULANI Società Cooperativa",
  "C.A.I. S.r.l.",
  "C.F.F. S.r.l.",
  "C.T.A. AUTOMOTIVE S.R.L.S.",
  "CAAT CONSORZIO AUTORIPARATORI ARTIGIANI TRENTINI",
  "CAR SERVICE ITALIA S.R.L.",
  "CARAMORI ATTREZZATURE SRL SOC. UNIPERSONALE",
  "CARINI SRL",
  "CARTEST S.R.L.",
  "CARTRONIC GROUP SRL",
  "CARTRONIC SRL",
  "CENTRO RICAMBI CEMA S.p.A.",
  "CERRINET S.r.l.",
  "CFA DI SAMMARTINO LUCA",
  "COMPANY SERVICE S.p.A.",
  "CONSORZIO RICAMBI PER L'AGRICOLTURA S.r.l.",
  "CORIM S.r.l.",
  "COZZETTO CARMINE",
  "COZZETTO RICAMBI S.R.L. - SEMPLIFICATA",
  "D.E.C.A. S.p.A.",
  "D'ANGELANTONIO S.r.l.",
  "DEDRA S.r.l.",
  "DEMAUTO S.p.A.",
  "DIAGNOSTICA SRL",
  "DIAGTECH S.R.L.",
  "DIERRE DIMENSIONE RICAMBI S.p.A.",
  "DIERRE GROUP S.p.A.",
  "DILUISE - S.a.s di ROBERTO DILUISE & C.",
  "DIRIGI SRL",
  "DOIP S.r.l.",
  "E. BERGAMASCHI & FIGLIO S.p.A.",
  "EFRA S.R.L.",
  "EFFEGI SYSTEMS S.r.l.",
  "EMMETRE ENGINEERING S.n.c. di MIGLIETTA NICOLA e MOCCIA ROSSANO",
  "EPROM di GRIECO PAOLA",
  "ER.MA. S.r.l.",
  "EUROMASTER ITALIA S.R.L.",
  "EUROREPAR CAR SERVICE",
  "EUROTRADING PARTS S.r.l.",
  "EUROTRADING S.r.l",
  "EUROVALLEMOTORI SRL",
  "EXPERICA S.P.A.",
  "FABRETTI S.R.L.",
  "FALONE MARIO AUTOATTREZZATURE",
  "FAREF S.r.l.",
  "FCAR S.r.l.",
  "FILIPPETTI S.r.l.",
  "FIM - FORNITURE INDUSTRIALI E MECCANICHE S.a.s. di FABIANO SILVANA TERESA & C.",
  "FIORELLO RICAMBI S.r.l.",
  "FOR GOMM SRL",
  "FORMAU S.r.l.",
  "FRIULI RICAMBI AUTO SRL",
  "G&G DISTRIBUZIONE S.a.s. di Gervasi e Gemelli",
  "GLOBAL SERVICE CAR S.r.l.",
  "GLOBAL TEAM S.r.l.",
  "GRUPPO DEC S.r.l.",
  "GRUPPO MARCORA UNITEK 1878 - S.p.A.",
  "IL FRENO S.r.l.",
  "INFORMAUTO S.R.L.",
  "INNOTECH ITALIA S.r.l.",
  "ITALTEST SNC DI SCOLARO MASSIMO E C.",
  "JONIOGAS DI GIOVANNI D'ONGHIA",
  "LARIOLUX S.p.A.",
  "LARSSON ITALIA S.r.l.",
  "LECHLER spa",
  "LINEA AUTOCAR LAGUNA S.r.l.",
  "LOSITO MAURO ATTREZZATURE",
  "M ITALIA SRLS",
  "MABEL DI MASTROGIOVANNI CRISTIAN",
  "MEA AUTOMOTIVE S.R.L.",
  "METANO BOLOGNA S.r.l.",
  "MIGLIETTA SERVICE S.R.L.S.",
  "MOTOR D.A.T.A. SRL",
  "NEA AUTORICAMBI RAVENNA S.R.L.",
  "OVAM S.p.A.",
  "OXI S.a.s. di MENNON VINCENZO E C.",
  "P.I.CAR S.r.l.",
  "PASCOLI S.P.A",
  "PASSERI ALESSANDRO & C. Sas",
  "PELATTI S.r.l.",
  "PUNTO GAS S.r.l.",
  "R.A.B. S.R.L.",
  "REAB COMMERCIALE SRL a Socio Unico",
  "RECAM di GALANTE P. & C. s.a.s.",
  "RICAMBI PONTINA S.r.l.",
  "ROB-AUTO ATTREZZATURE di Efisio Sechi",
  "SALIOLA s.a.s. di G.Ciolli e D.Saliola & C.",
  "SALVATORE AIELLO & C. S.R.L.",
  "SARAT S.r.l.",
  "SBS EQUIPMENT S.r.l.",
  "SCAMA AUTRONICA SRL",
  "SCIALPI FRANCESCO",
  "SEMERARO UTENSILI S.r.l.",
  "SERVICE S.r.l.",
  "SHOP UTENSILI S.N.C.",
  "SIPAV S.p.A.",
  "SIRE S.p.A.",
  "SITALCOM S.n.c. di ANTONIO E ANDREA QUARESIMA",
  "STRAUDI S.p.A.",
  "TECNAUTO GROUP S.r.l.",
  "TECNAUTO S.r.l.s.",
  "TECNO OIL S.r.l.",
  "TECNOTESTA S.r.l.",
  "TEKNOSERVICE MOTOR di FRANCESCO MARTINELLI  & C. S.a.s.",
  "TEKSYSTEM SNC DI G. CASANO E P. CUCCHIARA",
  "TOMASO ATTREZZATURE S.R.L.",
  "U.T.I.L. S.r.l.",
  "VAMAG S.r.l.",
  "VARANO & C. S.r.l.",
  "VEMAC DI CAVALLO PAOLO",
  "VORI AUTORICAMBI SRL",
  "ZAGO S.r.l.",
  "ZAMMARCHI S.P.A.",
  "ZUCCHETTI S.r.l.",
  "ZURIGO SERVICE S.n.c. di ZURIGO ANDREA, ZURIGO CRISTIANA & C."
];


const idAx = [
  "12123131",
  "12122001",
  "12122914",
  "12120110",
  "12120071",
  "12123660",
  "12121788",
  "12120101",
  "12121573",
  "12122360",
  "12120074",
  "12121716",
  "12124179",
  "12121102",
  "12121971",
  "12122642",
  "12123102",
  "12120243",
  "12122948",
  "12121965",
  "12122626",
  "12120787",
  "12122168",
  "12121076",
  "12122186",
  "12120433",
  "12123720",
  "12121111",
  "12123032",
  "12121791",
  "12123125",
  "12120070",
  "12123779",
  "12124118",
  "12123638",
  "12120713",
  "12122305",
  "12120267",
  "12120169",
  "12121606",
  "12121447",
  "12122876",
  "12121110",
  "12122228",
  "12123201",
  "12122705",
  "12121468",
  "12121292",
  "12123478",
  "12120214",
  "12123637",
  "12121905",
  "12120218",
  "12120459",
  "12121767",
  "12123296",
  "12121194",
  "12121673",
  "12120091",
  "12123358",
  "12123311",
  "12120519",
  "12120010",
  "12123026",
  "12122575",
  "12122747",
  "12123957",
  "12122590",
  "12123828",
  "12121388",
  "12120178",
  "12123553",
  "12123905",
  "12120348",
  "12122026",
  "12123476",
  "12123612",
  "12122443",
  "12123607",
  "12120641",
  "12121676",
  "12121073",
  "12121557",
  "12123453",
  "12122935",
  "12123881",
  "12123906",
  "12121463",
  "12120489",
  "12123169",
  "12124309",
  "12120391",
  "12120265",
  "12123137",
  "12123817",
  "12120929",
  "12121968",
  "12124027",
  "12123259",
  "12123230",
  "12123200",
  "12124121",
  "12120314",
  "12120617",
  "12123841",
  "12123028",
  "12123005",
  "12123636",
  "12120964",
  "12122673",
  "12123459",
  "12120337",
  "12120344",
  "12120994",
  "12122461",
  "12120068",
  "12120791",
  "12121420",
  "12121696",
  "12122624",
  "12120500",
  "12120350",
  "12121688",
  "12121595",
  "12124460",
  "12121410",
  "12120184",
  "12121306",
  "12123809",
  "12120955",
  "12123794",
  "12123648",
  "12122791",
  "12122283",
  "12122195",
  "12120907",
  "12121932",
  "12120208",
  "12124124",
  "12122167",
  "12120029",
  "12122157",
  "12120034",
  "12120189",
  "12121895"
];

function levenshteinDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // sostituzione
          matrix[i][j - 1] + 1,     // inserimento
          matrix[i - 1][j] + 1      // cancellazione
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function findMostSimilarString(array, target) {
  let minDistance = Infinity;
  let mostSimilarIndex = -1;

  array.forEach((item, index) => {
    const distance = levenshteinDistance(item.toLowerCase(), target.toLowerCase());
    if (distance < minDistance) {
      minDistance = distance;
      mostSimilarIndex = index;
    }
  });

  return mostSimilarIndex;
}

inputFile.addEventListener('change', function(event) {

  selectedFiles = event.target.files;

  let hasPDF = false;

  for (let i = 0; i < selectedFiles.length; i++) {

    if (selectedFiles[i].name.toLowerCase().endsWith('.pdf')) {

      hasPDF = true;

    }

  }

  // Mostra il bottone di conferma solo se ci sono file PDF

  if (hasPDF) {

    btnConferma.style.display = 'block';

  } else {

    btnConferma.style.display = 'none';

  }

});

 btnConferma.addEventListener('click', async function() {
    let output = "";
    let posizioni = new Array(selectedFiles.length);
    let processedFiles = 0;
    let campi = 17;
    let numeropersone = 0;
    let bbaList = [];
    // Funzione asincrona per elaborare i file e creare la tabella
    async function preparaTabella() {
      try {
        for (let i = 0; i < selectedFiles.length; i++) {
          let numero = parseInt(selectedFiles[i].name.split("_")[0]);
          numeropersone += numero;
          posizioni[i] = numero;
        }

        for (let i = 0; i < numeropersone; i++) {
          newtable[i] = [];
          for (let j = 0; j < campi; j++) {
           newtable[i][j] = "";
          }
        }

        console.log("Tabella creata correttamente!");
      } catch (e) {
        output = '<strong>ERRORE: I FILE NON HANNO I TITOLI GIUSTI</strong>';
        console.log("Errore nella creazione della tabella: " + e);
      }
   }


    await preparaTabella();
    
    let slide = 0;
    
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      let textContent = '';
      
      // Usa FileReader per leggere il file PDF
      const reader = new FileReader();
      
      reader.onload = function() {
        const typedarray = new Uint8Array(reader.result);
        
        // Carica il PDF con pdf.js
        pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
          let pageNumber = 1;
          let fileText = '';

          // Funzione per estrarre il testo pagina per pagina
          const extractTextFromPage = (pageNum) => {
            pdf.getPage(pageNum).then(function(page) {
              page.getTextContent().then(function(textContent) {
                const pageText = textContent.items.map(item => item.str).join(' ');
                fileText += pageText;
                let ragsociale = false;
                
                // Se ci sono più pagine, continua a leggere
                if (pageNum < 1) {
                  extractTextFromPage(pageNum + 1);
                } else {
                  // Aggiungi il testo estratto alla tabella
                  
                    for(let reader = 0; reader < fileText.split(":").length; reader++){
                      
                        
                        for(let c = 0; c < fileText.split(":")[reader].split(" ").length; c++){
                        
                        
                        if ( file.name.toLowerCase().split("_")[1] == "bba"){

                          //per evitare che il codice inserisca più volte la parola BBA anche in righe che non centrano
                          if(!bbaList.includes(file.name, 0)){
                            try {
                              newtable[slide][0] = "Texa";
                              newtable[slide][1] = "12120038";
                              newtable[slide][16]="BBA, ";
                              bbaList = bbaList.concat(file.name);
                            } catch {

                            }

                          }
                          
                        } else {
                          
                          //NON BBA
                          
                              try {
                                //CONTROLLA RIVENDITORE
                                if(fileText.toUpperCase().split(":")[reader].split(" ")[c] == "RAGIONE" && fileText.toUpperCase().split(":")[reader].split(" ")[c + 1] == "SOCIALE" && fileText.toUpperCase().split(":")[reader].split(" ")[c+2] == "DEL" && fileText.toUpperCase().split(":")[reader].split(" ")[c+3] == "RIVENDITORE"){
                                  newtable[slide][0]="";
                                  for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
                                    if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("EMAIL" || fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("PARTITA"))){
                                      break;
                                    } else{
                                      newtable[slide][0]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                                      
                                    }
                                  }
                                  if(newtable[slide][0].replace(" ", "") != ""){
                                    const index = findMostSimilarString(rivenditori, newtable[slide][0]);
                                    newtable[slide][0] = rivenditori[index];
                                    newtable[slide][1] = idAx[index];
                                  }
                                  
                                } else {
                                  if (newtable[slide][0]==""){
                                    const index = findMostSimilarString(rivenditori, file.name.toLowerCase().split("_")[1]);
                                    newtable[slide][0] = rivenditori[index];
                                    newtable[slide][1] = idAx[index];
                                  }
                                  

                                }

                              } catch{
                                  
                              }
                              
                        }
    
                        //CONTROLLA RAGIONE SOCIALE OFFICINA
                        try{
                          if(fileText.toUpperCase().split(":")[reader].split(" ")[c] == "RAGIONE" && fileText.toUpperCase().split(":")[reader].split(" ")[c + 1] == "SOCIALE" && ((file.name.toLowerCase().split("_")[1] == "bba" && fileText.toUpperCase().split(":")[reader].split(" ")[c+2] == "OFFICINA" ) || (file.name.toLowerCase().split("_")[1] != "bba" && fileText.toUpperCase().split(":")[reader].split(" ")[c+2] != "DEL"))){
                                
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("PARTITA")){
                                break;
                              } else{
                                newtable[slide][10]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                                
                              }
                            }
                            ragsociale = true;
      
                          }
                        }catch{
                          
                        }
                        
                        
    
                        //CONTROLLA PARTITA IVA
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "PARTITA" && fileText.toUpperCase().split(":")[reader].split(" ")[c + 1] == "IVA" &&  ((file.name.toLowerCase().split("_")[1] != "bba" && fileText.toUpperCase().split(":")[reader].split(" ")[c+2] != "O") || file.name.toLowerCase().split("_")[1] == "bba") && ragsociale){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("EMAIL") || fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("NOME")){
                                break;
                              } else{
                                if (/\d/.test(fileText.split(":")[reader+1].split(" ")[wordgetter]))
                                  newtable[slide][11]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                              }
                            }
                            ragsociale = false;
                          }
                        }catch{
                          
                        }
                        
    
                        //CONTROLLA INDIRIZZO
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "INDIRIZZO"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("CAP")){
                                break;
                              } else{
                                newtable[slide][12]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                              }
                            }
                          }
                        }catch{
                          
                        }
                        
    
                        //CONTROLLA CITTÀ
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "CITTÀ"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("PROVINCIA")){
                                break;
                              } else{
                                newtable[slide][13]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                              }
                            }
                          }
      
                        }catch{
                          
                        } 
                        
                        //CONTROLLA PROVINCIA
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "PROVINCIA"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("TELEFONO")){
                                break;
                              } else{
                                newtable[slide][14]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                              }
                            }
                          }
                        }catch{
                         
                        }
                            
                        //CONTROLLA CAP
                        try { 
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "CAP"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("CITTÀ")){
                                break;
                              } else {
                                newtable[slide][15]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                              }
                            }
                          }
                        }catch{
                          
                        }
                        
    
                        //CONTROLLA TELEFONO/CELLULARE
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "TELEFONO"){
                            let cellulare = false;
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("NUMERO")){
                                break;
                              } else{
                                if(fileText.split(":")[reader+1].split(" ")[wordgetter].charAt(0) == '0'){
                                  cellulare = true;
                                } 
                                
                                if (cellulare){
                                  newtable[slide][8]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                                } else {
                                  newtable[slide][7]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                                }
                              }
                            }
                          }
                        }catch{
                          
                        }
                        
    
                        //CONTROLLA NOME SE INSERITO DIVERSAMENTE
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "NOME"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("COGNOME")){
                                break;
                              } else{
                                newtable[slide][2]+=fileText.split(":")[reader+1].split(" ")[wordgetter].toUpperCase() + ' ';
                                
                              }
                            }
                          }
                        }catch{
                         
                        }
                        
    
                        //CONTROLLA COGNOME SE INSERITO DIVERSAMENTE
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "COGNOME"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("CODICE")){
                                break;
                              } else{
                                newtable[slide][3]+=fileText.split(":")[reader+1].split(" ")[wordgetter].toUpperCase() + ' ';
                                
                              }
                            }
                          }
                        }catch{
                          
                        }
                        
    
                        //CONTROLLA CODICE FISCALE SE INSERITO DIVERSAMENTE
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "CODICE" && fileText.toUpperCase().split(":")[reader].split(" ")[c + 1] == "FISCALE" && fileText.toUpperCase().split(":")[reader].split(" ")[c+2] != "RIVENDITORE"){
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("EMAIL")){
                                break;
                              } else{
                                newtable[slide][9]+=fileText.split(":")[reader+1].split(" ")[wordgetter].toUpperCase() + ' ';
                                
                              }
                            }
                          }
                        }catch{
                          
                         
                        }
                        
    
                        //CONTROLLA EMAIL/EMAIL SCRITTA DA SE INSERITA DIVERSAMENTE
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "EMAIL" && fileText.toUpperCase().split(":")[reader].split(" ")[c+1] != "RIVENDITORE"){
                            newtable[slide][16]+="Email scritta da: ";
                            for(let wordgetter = 0; wordgetter < fileText.split(":")[reader+1].split(" ").length; wordgetter++){
      
                              if(fileText.toUpperCase().split(":")[reader+1].split(" ")[wordgetter].includes("INDIRIZZO")){
                                break;
                              } else{
                                newtable[slide][16]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                                newtable[slide][6]+=fileText.split(":")[reader+1].split(" ")[wordgetter] + ' ';
                              }
                            }
                          }
                        }catch{
                          
                        }
                        
    
    
                        //NOME, COGNOME, MAIL, CF
                        try{
                          if (fileText.toUpperCase().split(":")[reader].split(" ")[c] == "ISCRITTI"){
                            
                            let datipersone = "";
                            let cfestratto = "";
                            for (let iscritticounter = 0; iscritticounter < parseInt(file.name.split("_")[0]); iscritticounter++){
                                        
                              datipersone+=fileText.split(":")[reader+1+iscritticounter].replace("CF", "").replace(cfestratto,"");

                              if(/\d/.test(fileText.split(":")[reader+2+iscritticounter].split(" ")[1])){ // se ci sono numeri è un cf
                                datipersone+=fileText.split(":")[reader+2+iscritticounter].split(" ")[1] + ' /n' //estrae CF
                                cfestratto = fileText.split(":")[reader+2+iscritticounter].split(" ")[1];
                              }
                              
                            }

                          
                            
                            if(datipersone.toUpperCase().includes("ISCRITTI"))
                                continue;
      
                            console.log("dati persone = " + datipersone);

                            for(let iscritticounter = 0; iscritticounter < parseInt(file.name.split("_")[0]); iscritticounter++){
                           
                              if(iscritticounter != 0){
                                //INCLUDI GLI ALTRI DATI MESSI NEL PRIMO
                                for(let datitranslate = 0; datitranslate < campi; datitranslate++){
                                  newtable[slide+iscritticounter][datitranslate] = newtable[slide][datitranslate];
      
                                }
                      
                              }
                              
                              let numpos = 0;

                                //nome
                                try{
                                    
                                    
                                    if(newtable[slide+iscritticounter][2].length == 0){ // se non c'è già scritto qualcosa
                                      
                                      for(let z = 0; z < datipersone.split("/n")[iscritticounter].split(",")[0].split(" ").length; z++){
                                        if(datipersone.split("/n")[iscritticounter].split(",")[0].split(" ")[z] != ""){
                                          newtable[slide+iscritticounter][2]+=datipersone.split("/n")[iscritticounter].split(",")[0].split(" ")[z];
                                          numpos = z+1;
                                          break;
                                        } 

                                        
                                     }

                                     
                                    }
                                    
                                    
                                } catch {
                                  
                                }
                               
                                //cognome
                                try{
                                  if(newtable[slide+iscritticounter][3].length == 0){ // se non c'è già scritto qualcosa
                                  
                                    newtable[slide+iscritticounter][3] = "";
                                    for(let estraidati = numpos; estraidati < datipersone.split("/n")[iscritticounter].split(",")[0].split(" ").length; estraidati++){
                                      newtable[slide+iscritticounter][3]+=datipersone.split("/n")[iscritticounter].split(",")[0].split(" ")[estraidati] + ' ';
                                    }
                                  }
                                } catch {
                                  
                                }

                                //username
                                newtable[slide+iscritticounter][4] = "";
                                newtable[slide+iscritticounter][4] = (newtable[slide+iscritticounter][2].replace(" ", "") + '.' + newtable[slide+iscritticounter][3].replace(" ", "")).toLowerCase();
      
                                //email
                                try{

                                    if (newtable[slide+iscritticounter][6].length == 0)
                                      newtable[slide+iscritticounter][6]=datipersone.split("/n")[iscritticounter].split(",")[1].split(" ")[1];

                                } catch {
                                   
                                }
                                
                                //cf
                                try{
                                    if (newtable[slide+iscritticounter][9].length == 0)
                                    newtable[slide+iscritticounter][9]=datipersone.split("/n")[iscritticounter].split(",")[2].split(" ")[1].toUpperCase();
                                } catch {
                                  
                                }
                            
                            }

                            slide += posizioni[i];
                          }
                        }catch{
                          slide+=parseInt(file.name.split("_")[0]);
                        }
                        
    
                        
                        
                      }
                      
                    }
                    processedFiles++;
    
                    if (processedFiles === selectedFiles.length) {
                      
                      localStorage.setItem('newtable', JSON.stringify(newtable));
                     
                      window.location.replace('non toccare/showtable.html');
                      
                    }

                  outputDiv.innerHTML = output;
              }
            });
          });
        };

          // Inizia l'estrazione dalla prima pagina del PDF
        extractTextFromPage(pageNumber);

      });
    };
      
      // Leggi il PDF come ArrayBuffer
    reader.readAsArrayBuffer(file);
  }

});

// Funzione per leggere il file PDF come base64

function readPDFAsBase64(file) {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.onload = function(event) {

      resolve(event.target.result.split(',')[1]); // Ottieni solo la parte base64 del risultato

    };

    reader.onerror = reject;

    reader.readAsDataURL(file);

  });

}