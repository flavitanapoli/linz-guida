/* Contenuti della tappa pilota "Mariendom".
   Usati sia dalla pagina per telefono sia dal libretto da stampare.
   [v] = da verificare sul posto o con il Domcenter. */
window.DOM = {
  titolo: 'Mariendom',
  sottotitolo: 'Il Duomo dell\'Immacolata Concezione',
  durata: 'circa 35 minuti: 10 fuori, 25 dentro',
  arrivo: 'Dall\'Alter Dom circa 800 metri in piano, 10–12 minuti a piedi. La torre si vede da lontano: è il punto di riferimento.',

  fuori: [
    { id:'f1', titolo:'Guardate', min:3, foto:'esterno',
      testo:[
        'Fermatevi sul sagrato e alzate lo sguardo. La torre misura 134,6 metri: è la seconda d\'Austria, circa due metri più bassa del campanile di Santo Stefano a Vienna.',
        'Tutto quello che vedete è neogotico: costruito tra Ottocento e Novecento, ma nello stile delle grandi cattedrali medievali. Archi a punta, pinnacoli, guglie, rosoni. Il progetto è di Vincenz Statz, architetto di Colonia, la città della cattedrale gotica più famosa di Germania.',
        'Questa è la chiesa più grande d\'Austria per capienza: può accogliere circa ventimila persone. Non è un numero a caso: il vescovo Rudigier la volle grande abbastanza da contenere tutti gli abitanti della Linz di allora. È lunga 130 metri. Fra poco entreremo dalla porta sotto la torre.'] },
    { id:'f2', titolo:'La storia', min:4, foto:'ieri',
      testo:[
        'Nel 1854 papa Pio Nono proclamò il dogma dell\'Immacolata Concezione di Maria. L\'anno dopo il vescovo di Linz, Franz Joseph Rudigier, annunciò che la sua diocesi le avrebbe dedicato un grande duomo. Da qui il nome: Duomo dell\'Immacolata Concezione, in tedesco Maria-Empfängnis-Dom.',
        'La prima pietra fu posta il primo maggio 1862. Per quella festa Anton Bruckner, allora organista del Duomo vecchio, compose una cantata: «Preiset den Herrn», lodate il Signore.',
        'I lavori durarono sessantadue anni. Si cominciò sotto l\'imperatore Francesco Giuseppe, quando Linz faceva parte dell\'Impero asburgico, che dal 1867 divenne Impero austro-ungarico. Poi vennero la Prima guerra mondiale e, nel 1918, la fine dell\'Impero. Il Duomo fu consacrato il 29 aprile 1924: in una Repubblica austriaca piccola e povera, ma con la sua cattedrale finalmente compiuta.',
        'Rudigier non la vide finita: morì nel 1884. Dopo Statz, i lavori passarono al figlio Franz e infine al capomastro del Duomo, Matthäus Schlager.',
        'Nel 1886 i costruttori fecero una mossa astuta: cominciarono la torre, staccata dalla chiesa ancora incompiuta. Così nessuno, per mancanza di soldi, avrebbe potuto rimpicciolire il progetto: prima o poi i due pezzi andavano uniti. E i soldi vennero solo dalle offerte dei fedeli.'] },
    { id:'f3', titolo:'Il dettaglio: le campane', min:2,
      testo:[
        'Nella torre ci sono sette campane, fuse nel 1901 da Anton Gugg. La più grande si chiama «Immaculata» e pesa 8.120 chili, più di un camion carico.',
        'Quando suonano tutte e sette insieme, intonano l\'inizio del «Salve Regina». È l\'unico grande concerto di campane del 1900 rimasto completo in tutti i paesi di lingua tedesca.',
        'Se vi capita di sentirle suonare, ascoltate la nota più profonda: è lei.'] }
  ],

  avviso: 'In chiesa si parla sottovoce. Durante le Messe e le funzioni le visite non sono permesse: aspettiamo la fine o restiamo seduti in fondo.',

  zone: [
    { n:1, nome:'Ingresso sotto la torre', breve:'L\'organo alle vostre spalle', x:50, y:88, min:3,
      testo:[
        'Siamo entrati dall\'atrio sotto la torre. Prima di andare avanti, voltatevi e guardate in alto, sopra la porta: c\'è l\'organo grande, chiamato «Rudigierorgel» in onore del vescovo fondatore.',
        'Fu inaugurato nel 1968 dalla ditta danese Marcussen ed è considerato uno dei più grandi organi meccanici del mondo: ogni tasto muove le canne con leve e tiranti, senza elettricità a fare il lavoro.',
        'Dietro l\'organo si nasconde un rosone con santa Cecilia, patrona della musica, circondata da musicisti e dai segni dello zodiaco. Da qui non si vede: si vede solo salendo nella sala dell\'organo.'],
      cerca:['L\'organo sopra la porta d\'ingresso','La luce che entra dalla navata davanti a voi'] },
    { n:2, nome:'La navata', breve:'Colonne di granito e vetrate che raccontano', x:50, y:66, min:5, foto:'navata', foto2:'finestra',
      testo:[
        'Camminate lentamente lungo la navata centrale. Le chiese gotiche sono costruite come una processione: le colonne di granito guidano lo sguardo verso l\'altare e verso l\'alto, fino alle volte.',
        'Ora guardate le finestre. Il Duomo ha più di cento vetrate dipinte. Quelle della navata e del transetto, realizzate tra il 1910 e il 1924, non raccontano solo storie sacre: raccontano la storia della regione, la vita del vescovo Rudigier e la costruzione stessa del Duomo.',
        'Un dettaglio curioso: in alcune vetrate compaiono i ritratti dei benefattori che pagarono le finestre, dipinti copiando le loro fotografie. Cercate volti dall\'aria «moderna», con baffi e colletti dell\'epoca, accanto ai santi.',
        'La vetrata più famosa è la «Finestra di Linz»: la città raccontata dai suoi personaggi. Sopra il profilo di Linz c\'è Maria; più sotto tre imperatori e l\'astronomo Keplero con il cannocchiale. In basso, sulla stessa lastra, Beethoven e Bruckner.',
        'La pagò la Cassa di risparmio di Linz: 10.000 corone, più delle 8.000 sperate dal vescovo. Il grazie è nel vetro: il presidente della banca dà un libretto di risparmio a due contadini, e sotto le api lavorano attorno all\'alveare.'],
      cerca:['Volti di benefattori nelle vetrate','La «Finestra di Linz» con Beethoven e Bruckner, tra le grandi vetrate della navata','La Via Crucis del 1960, con figure a grandezza naturale'] },
    { n:3, nome:'L\'incrocio e i due rosoni', breve:'La guerra e la pace, una di fronte all\'altra', x:50, y:47, min:3,
      testo:[
        'Siamo al centro della croce, dove la navata incontra il transetto. Guardate a destra e a sinistra: i due bracci si chiudono con due grandi rosoni, uno di fronte all\'altro.',
        'Uno è la «Finestra della pace»: mostra le virtù e le sette opere di misericordia. L\'altro è la «Finestra della guerra», con i simboli della guerra e i sette vizi capitali.',
        'Il rosone della pace ha una storia amara: i suoi simboli di pace andarono distrutti nella Seconda guerra mondiale. Al loro posto oggi ci sono figure di vescovi e canonici del Duomo.',
        'Al centro dell\'incrocio c\'è l\'isola dell\'altare, rifatta nel 2017 in pietra calcarea bavarese. Fuori dalle funzioni la parte centrale si abbassa: si può salire e stare proprio «in mezzo al Duomo».'],
      cerca:['Il rosone della pace','Il rosone della guerra','L\'isola dell\'altare del 2017'] },
    { n:4, nome:'Il coro e l\'altare a baldacchino', breve:'Quindici metri di pietra, marmo e mosaico', x:50, y:30, min:4, foto:'altare',
      testo:[
        'Davanti a voi c\'è l\'altare maggiore, coperto da un baldacchino alto 15 metri. Lo disegnò l\'architetto Statz e lo realizzò lo scultore Ludwig Linzinger nel 1901.',
        'In alto, la croce è alta 4 metri. In cima a tutto sta la Madonna Immacolata, a cui il Duomo è dedicato. Attorno, le statue di santi, tra cui Pietro, Maria Maddalena, il buon ladrone Disma e il soldato Longino.',
        'La mensa è di marmo bianco di Lasa, in Alto Adige. Sul fronte, quattro mosaici mostrano Abele, Noè, Melchisedek e Abramo: offerte a Dio dell\'Antico Testamento, lette come annuncio dell\'Eucaristia.',
        'Le undici vetrate del coro, del 1885, raccontano Maria nella vita di Gesù. Alcune sono in restauro: un lavoro che dovrebbe concludersi entro il 2030.'],
      cerca:['L\'Immacolata in cima: il Bambino con un\'asta a croce schiaccia la testa del serpente','I quattro mosaici sulla mensa','Le vetrate del coro con Maria'] },
    { n:5, nome:'La corona di cappelle', breve:'Un santo, un vescovo e un contadino martire', x:24, y:18, min:5,
      testo:[
        'Attorno al coro gira una corona di cappelle. Ognuna è dedicata a Maria con un titolo diverso: Regina degli apostoli, dei martiri, dei profeti, delle vergini e così via. Percorretele con calma; ecco cosa cercare.',
        'Nella cappella di Maria Regina dei patriarchi, con san Giuseppe, c\'è il vescovo Rudigier disteso, in bronzo, del 1892: l\'imperatore Francesco Giuseppe ne lodò la somiglianza. È un monumento, non la tomba: Rudigier è sepolto nella cripta. Cercate la tavola con la pianta del Duomo: in colore, le poche parti finite quando morì.',
        'Nella cappella dei martiri c\'è una Pietà in pietra con san Floriano, patrono dell\'Alta Austria. Accanto, una stele ricorda Franz Jägerstätter, contadino dell\'Alta Austria che rifiutò di combattere per Hitler e fu giustiziato nel 1943. La Chiesa lo ha proclamato beato nel 2007.',
        'Subito a destra della cappella votiva c\'è la «Madonna della Wurmstraße»: una statua tardogotica, l\'oggetto più antico del Duomo. Per secoli stette in una cappella e poi in una casa privata di Linz; nel 2001 la città e la regione la comprarono e la portarono qui.',
        'Nella cappella delle vergini, con sant\'Agnese, santa Caterina e santa Barbara, una lapide ricorda la Messa in mi minore di Bruckner.'],
      cerca:['La pianta del Duomo sul monumento a Rudigier','La stele di Franz Jägerstätter','La Madonna tardogotica','La lapide di Bruckner'] },
    { n:6, nome:'La cappella votiva', breve:'Dove tutto cominciò, con la musica di Bruckner', x:50, y:5, min:3,
      testo:[
        'Questa è la parte più antica del Duomo, e la più grande delle cappelle. Fu terminata per prima, quando il resto della chiesa era ancora un cantiere.',
        'Il 29 settembre 1869 fu consacrata insieme alla corona di cappelle. Per l\'occasione si eseguì per la prima volta la Messa in mi minore di Anton Bruckner, diretta da lui stesso.',
        'Pensateci: per decenni i fedeli di Linz pregarono qui, in questo piccolo pezzo di cattedrale, mentre attorno a loro cresceva il resto.',
        'Guardatevi attorno. La porticina del tabernacolo è fatta con l\'argento dei gioielli che i fedeli donarono per il Duomo. La corona d\'oro della Madonna fu un regalo di papa Leone XIII. I 24 mosaici sotto le finestre vengono da Venezia, dalla bottega di Antonio Salviati.',
        'Nella vetrata di destra c\'è il vescovo Rudigier in ginocchio con in mano il modellino del Duomo, e accanto a lui l\'architetto con il progetto.'],
      cerca:['Le vetrate del 1868, le più antiche del Duomo','Rudigier con il modellino del Duomo, nella vetrata di destra','Il tabernacolo d\'argento','I mosaici veneziani sotto le finestre'] },
    { n:7, nome:'La cripta e il presepe', breve:'Le tombe dei vescovi e uno dei presepi più grandi del mondo', x:78, y:22, min:5, foto:'presepe', opz:true,
      testo:[
        'Accanto alle sacrestie una scala di marmo scende nella cripta, sotto la cappella votiva. Qui riposano i vescovi di Linz: al centro, davanti, la tomba di Rudigier.',
        'Sulla parete dietro l\'altare c\'è la prima pietra del Duomo, posata nel 1862, con una lapide in latino.',
        'Nella cripta si trova anche il presepe di Sebastian Osterrieder, scultore di Monaco. Il vescovo Doppelbauer glielo commissionò nel 1908; fu completato per il Natale 1913 e dal 1921 sta qui in modo permanente.',
        'Conta circa ottanta figure in legno di tiglio, dipinte e dorate, ed è considerato uno dei presepi più grandi del mondo. Nel 2020–2021 è stato restaurato completamente.'],
      cerca:['La tomba del vescovo Rudigier','La prima pietra del 1862','Il presepe di Osterrieder'] }
  ],

  finale: 'Il nostro giro del Duomo finisce qui. Ritrovatevi all\'ingresso sotto la torre.',

  pranzo: {
    nome:'Pranzo da Vapiano',
    indirizzo:'Schmidtorstraße 1, 4020 Linz',
    strada:'Circa 12–15 minuti a piedi (stima). Dal Duomo raggiungete la Landstraße, la via pedonale dei negozi, un isolato verso est. Seguitela verso nord fino al Taubenmarkt; la breve Schmidtorstraße porta all\'Hauptplatz. Vapiano è sull\'angolo.'
  },

  fonti: [
    ['Mariendom, la Via Crucis','https://www.dioezese-linz.at/mariendom/erleben/kreuzweg'],
    ['Mariendom, il vescovo Rudigier','https://www.dioezese-linz.at/mariendom/erleben/bischof-franz-joseph-rudigier'],
    ['Mariendom, il presbiterio (2017)','https://www.dioezese-linz.at/mariendom/erleben/altarraum'],
    ['Mariendom, le campane','https://www.dioezese-linz.at/mariendom/erleben/glocken'],
    ['Mariendom, la cappella votiva','https://www.dioezese-linz.at/mariendom/erleben/votivkapelle'],
    ['Mariendom, storia della costruzione','https://www.dioezese-linz.at/mariendom/erleben/geschichte-des-mariendoms'],
    ['Mariendom, le vetrate','https://www.dioezese-linz.at/mariendom/erleben/gemaeldefenster'],
    ['Diocesi di Linz, guida della chiesa (Kirchenführer)','https://www.dioezese-linz.at/dl/NmtNJKJlLolNJqx4KJK/kirchenfuehrer_als_datei.pdf'],
    ['Mariendom, «Dalla bozza alla Finestra di Linz di oggi» (2022)','https://www.dioezese-linz.at/mariendom/blog/von-der-skizze-bis-zum-heutigen-linzer-fenster'],
    ['Mariendom, la corona di cappelle','https://www.dioezese-linz.at/mariendom/erleben/kapellenkranz'],
    ['Mariendom, l\'altare a baldacchino','https://www.dioezese-linz.at/mariendom/erleben/baldachinaltar'],
    ['Mariendom, la cripta','https://www.dioezese-linz.at/mariendom/erleben/krypta'],
    ['Mariendom, il presepe di Osterrieder','https://dioezese-linz.at/mariendom/erleben/osterriederkrippe'],
    ['Diocesi di Linz, comunicato «100 anni di Mariendom» (2024)','https://dioezese-linz.at/dl/qnpoJKJkMOKoLJqx4KJK/PA_100_Jahre_Mariendom_20240227_pdf'],
    ['Wikipedia, Linz Cathedral (torre, campane, Bruckner)','https://en.wikipedia.org/wiki/Linz_Cathedral']
  ],

  foto: {} // riempito più sotto se ci sono foto vere
};

/* Navigazione: nome breve per la barra di avanzamento e indicazioni per la zona successiva */
[
 ['Ingresso','Avanzate lungo la navata centrale, verso l\'altare. Fermatevi a metà: è la zona 2.',null],
 ['Navata','Proseguite fino a dove la chiesa si allarga a destra e a sinistra: è l\'incrocio, zona 3.',null],
 ['Rosoni','Avvicinatevi al coro e fermatevi davanti all\'altare, senza salire i gradini: zona 4.',null],
 ['Altare','Girate attorno al coro partendo dal lato sinistro: lì cominciano le cappelle, zona 5.','altare'],
 ['Cappelle','Al centro della corona, proprio dietro l\'altare, c\'è la cappella più grande: zona 6.',null],
 ['Votiva','Facoltativo: la scala per la cripta è accanto alle sacrestie, zona 7. Altrimenti tornate all\'ingresso sotto la torre.',null],
 ['Cripta','Risalite e tornate all\'ingresso sotto la torre: è il punto di ritrovo del gruppo.','presepe']
].forEach((a,i)=>{const z=window.DOM.zone[i];z.corto=a[0];z.dopo=a[1];if(a[2])z.foto=a[2];});
window.DOM.fotoSlot={
 esterno:'La facciata e la torre viste dal sagrato',
 navata:'La navata verso l\'altare, con le colonne e le vetrate',
 altare:'L\'altare a baldacchino con l\'Immacolata in cima',
 presepe:'Il presepe di Osterrieder nella cripta'
};
window.DOM.zone[4].split=4; // nel libretto la zona 5 occupa due pagine
window.DOM.zone[1].split=3; window.DOM.zone[3].split=3; window.DOM.zone[2].split=2; window.DOM.zone[5].split=3; window.DOM.zone[6].split=2; // navata e altare: due pagine nel libretto
window.DOM.cronologia=[
 ['1854','Papa Pio IX proclama il dogma dell\'Immacolata Concezione'],
 ['1855','Il vescovo Rudigier annuncia il nuovo duomo'],
 ['1862','Prima pietra, 1° maggio. Bruckner compone una cantata per la festa'],
 ['1869','Consacrata la cappella votiva con la Messa in mi minore di Bruckner'],
 ['1884','Muore il vescovo Rudigier'],
 ['1901','L\'altare a baldacchino e le sette campane'],
 ['1913','Completato il presepe di Osterrieder (in cripta dal 1921)'],
 ['1918','Finisce l\'Impero austro-ungarico'],
 ['1924','Consacrazione del Duomo, 29 aprile'],
 ['1968','Inaugurato il grande organo Rudigier'],
 ['2024','Il Duomo compie cento anni']
];
/* GPS: arrivo alla tappa (coordinate dal centro dell'edificio, Wikipedia de) */
window.DOM.gps={
  tappa:{nome:'Mariendom',lat:48.300556,lon:14.285556,raggio:90},
  prima:{nome:'Alter Dom',lat:48.305039,lon:14.287906},
  precisioneMax:60
};
window.DOM.ieriOggi={
  ieri:'Il cantiere (illustrazione provvisoria)',
  oggi:'Oggi (illustrazione provvisoria)',
  nota:'Nel sito finale: una fotografia storica di pubblico dominio del Duomo in costruzione, accanto a una foto di oggi scattata dallo stesso punto.'
};
/* Gioco facoltativo "Indovina il dettaglio": una domanda per zona, risposte dal testo della zona */
window.DOM.gioco=[
 {d:'L\'organo sopra la porta: come funziona?',o:['Con un computer','Con leve e tiranti','Con un motore elettrico'],r:1,p:'È uno dei più grandi organi meccanici del mondo: tasti, leve e tiranti, senza elettricità a fare il lavoro.'},
 {d:'Chi compare in alcune vetrate, accanto ai santi?',o:['Gli operai del cantiere','I benefattori che pagarono le finestre','Gli architetti del Duomo'],r:1,p:'I loro volti furono dipinti copiando le fotografie: cercate baffi e colletti dell\'epoca.'},
 {d:'Nel rosone della pace, cosa ha preso il posto dei simboli distrutti in guerra?',o:['Vescovi e canonici del Duomo','Colombe e rami d\'ulivo','Gli stemmi delle città austriache'],r:0,p:'I simboli di pace furono distrutti nella Seconda guerra mondiale e sostituiti con figure di vescovi e canonici.'},
 {d:'Chi sta in cima al baldacchino alto 15 metri?',o:['San Pietro con le chiavi','Il vescovo Rudigier','La Madonna Immacolata'],r:2,p:'Il Duomo è dedicato all\'Immacolata Concezione: per questo lei sta più in alto di tutti.'},
 {d:'La statua in bronzo del vescovo Rudigier disteso: è la sua tomba?',o:['Sì, è sepolto proprio lì sotto','No, è un monumento: la tomba è nella cripta','No, è sepolto a Vienna'],r:1,p:'Rudigier riposa nella cripta, al centro, insieme agli altri vescovi di Linz.'},
 {d:'Quale musica risuonò qui il giorno della consacrazione, nel 1869?',o:['La Messa in mi minore di Bruckner','Il Flauto magico di Mozart','L\'inno imperiale di Haydn'],r:0,p:'Anton Bruckner la diresse lui stesso, il 29 settembre 1869.'},
 {d:'Di che legno sono le circa ottanta figure del presepe?',o:['Quercia','Tiglio','Abete'],r:1,p:'Legno di tiglio, dipinto e dorato, scolpito da Sebastian Osterrieder tra il 1908 e il 1913.'}
];
/* Foto vere (Wikimedia Commons). pos = punto da tenere al centro quando la foto viene ritagliata */
window.DOM.foto={
 esterno:{src:'foto/esterno.jpg',pos:'60% 45%',cap:'Il Mariendom visto dal Domplatz. La torre è in restauro.',autore:'Leonhard Lenz',licenza:'CC0',link:'https://commons.wikimedia.org/wiki/File:Mariendom_Linz_2023-09-29_01.jpg',anno:'2023'},
 finestra:{src:'foto/finestra.jpg',pos:'50% 40%',cap:'Beethoven e Bruckner sulla stessa lastra della «Finestra di Linz».',autore:'Wolfgang Sauber, ritaglio di Blutgretchen',licenza:'CC BY-SA 3.0',licUrl:'https://creativecommons.org/licenses/by-sa/3.0/',link:'https://commons.wikimedia.org/wiki/File:Linzer_Dom_-_Fenster_-_Beethoven_und_Bruckner_deriv_bg.jpg',solo:'web'},
 navata:{src:'foto/navata.jpg',pos:'50% 62%',cap:'La navata centrale verso il coro.',autore:'Uoaei1',licenza:'CC BY-SA 4.0',licUrl:'https://creativecommons.org/licenses/by-sa/4.0/',link:'https://commons.wikimedia.org/wiki/File:Linz_Neuer_Dom_Innenraum_01.jpg',anno:'2018'},
 altare:{src:'foto/altare.jpg',pos:'50% 48%',cap:'L\'altare maggiore con il baldacchino e la croce.',autore:'Zairon',licenza:'CC BY-SA 3.0',licUrl:'https://creativecommons.org/licenses/by-sa/3.0/',link:'https://commons.wikimedia.org/wiki/File:Linz_Neuer_Dom_Innen_Altar_1.JPG',anno:'2012'},
 ieri:{src:'foto/ieri-1898.jpg',cap:'Il Duomo verso il 1898, visto dal lato del coro: la torre è ancora un cantiere, chiusa dalle impalcature.',autore:'Adolf Nunwarz (1868–1931)',licenza:'Pubblico dominio',link:'https://commons.wikimedia.org/wiki/File:Adolf_Nunwarz_-_Der_neue_Marien-Dom.jpg',anno:'1898 circa'},
};
window.DOM.ieriOggi.nota='Le due foto sono prese da punti diversi: nel 1898 dal lato del coro, oggi dal Domplatz.';

/* confronto con la linea che scorre: stessa inquadratura dalla collina del Freinberg */
window.DOM.foto.s1914={src:'foto/slider-1914.jpg',cap:'Il Duomo in una cartolina del 1914, vista dalla collina del Freinberg.',autore:'cartolina d\'epoca, scansione di Wolfgang Sauber',licenza:'CC BY-SA 4.0',licUrl:'https://creativecommons.org/licenses/by-sa/4.0/',link:'https://commons.wikimedia.org/wiki/File:1914_Linhz_Mariendom.png',solo:'web'};
window.DOM.foto.s2016={src:'foto/slider-oggi.jpg',cap:'Lo stesso panorama oggi, dalla Franz-Josefs-Warte sul Freinberg (2016).',autore:'Thomas Ledl',licenza:'CC BY-SA 4.0',licUrl:'https://creativecommons.org/licenses/by-sa/4.0/',link:'https://commons.wikimedia.org/wiki/File:Linzer_Dom_von_der_Franz_Josefs-Warte.jpg',solo:'web'};
window.DOM.ieriOggi.nota='Trascinate la linea: a sinistra il 1914, a destra oggi. La cartolina è stata adattata per sovrapporsi alla foto: le proporzioni sono indicative.';

/* audio registrati (voce di Francesca). Le parti senza file usano la voce del telefono. */
window.DOM.audio={f1:'audio/mariendom-01-guardate.mp3',f2:'audio/mariendom-02-storia.mp3',f3:'audio/mariendom-03-campane.mp3',z1:'audio/mariendom-z1-ingresso.mp3',z2:'audio/mariendom-z2-navata.mp3',z3:'audio/mariendom-z3-incrocio.mp3',z4:'audio/mariendom-z4-altare.mp3',z5:'audio/mariendom-z5-cappelle.mp3',z6:'audio/mariendom-z6-votiva.mp3',z7:'audio/mariendom-z7-cripta.mp3'};

/* musica da ascoltare in una zona */
window.DOM.musica={6:{src:'audio/bruckner-kyrie-1938.mp3',titolo:'Ascoltate Bruckner',testo:'L\'inizio del Kyrie della Messa in mi minore, la Messa scritta per questa cappella. Poco più di un minuto e mezzo.',cred:'Filarmonica di Amburgo, direttore Max Thurn, disco Telefunken del 1938. Pubblico dominio, da Wikimedia Commons.',link:'https://commons.wikimedia.org/wiki/File:PDP-CH_-_Philharmoniker_Hamburg,_Max_Thurn_-_Mass_No._2_in_E_minor,_WAB_27_-_1st_Movement,_Kyrie,_Part_1_-_Bruckner_-_Telefunken-e2607-023233.flac'}};

/* foto non libere: sul sito solo un collegamento alla pagina ufficiale */
window.DOM.fotoLink={_presepe:{url:'https://www.dioezese-linz.at/mariendom/erleben/osterriederkrippe',testo:'Guardate le foto del presepe sul sito della diocesi'}};

window.DOM.foto.presepe={src:'foto/presepe.jpg',pos:'50% 60%',cap:'Il presepe di Osterrieder: la Natività, con gli angeli dorati.',autore:'privata',licenza:'uso riservato al gruppo',link:''};

/* perché il nome della guida */
window.DOM.cammino={titolo:'Perché «Cammino Sonoro»',testo:'Linz è una città che si racconta con la musica. Bruckner fu per tredici anni organista del Duomo Vecchio. Mozart qui scrisse in quattro o cinque giorni la Sinfonia «Linz». Keplero qui pubblicò «L\'armonia del mondo». E dal 1979 la Klangwolke, la «nuvola sonora», porta la musica sul Danubio. Per questo la visitiamo così: camminando e ascoltando. Sei tappe, e a ogni tappa una voce che racconta.'};

/* mappa del percorso (Google My Maps, sola lettura) */
window.DOM.mappa={url:'https://www.google.com/maps/d/viewer?mid=12_Pj7vyBmFPnf3WmlMY6Mt7HnFZWDZ4',testo:'La mappa del percorso: le sei tappe e il ristorante.'};
