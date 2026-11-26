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
        'Questa è la chiesa più grande d\'Austria per capienza: può accogliere circa ventimila persone. È lunga 130 metri. Fra poco entreremo dalla porta sotto la torre.'] },
    { id:'f2', titolo:'La storia', min:4,
      testo:[
        'Nel 1854 papa Pio Nono proclamò il dogma dell\'Immacolata Concezione di Maria. L\'anno dopo il vescovo di Linz, Franz Joseph Rudigier, annunciò che la sua diocesi le avrebbe dedicato un grande duomo. Da qui il nome: Duomo dell\'Immacolata Concezione, in tedesco Maria-Empfängnis-Dom.',
        'La prima pietra fu posta il primo maggio 1862. Per quella festa Anton Bruckner, allora organista del Duomo vecchio, compose una cantata: «Preiset den Herrn», lodate il Signore.',
        'I lavori durarono sessantadue anni. Si cominciò sotto l\'imperatore Francesco Giuseppe, quando Linz faceva parte dell\'Impero asburgico, che dal 1867 divenne Impero austro-ungarico. Poi vennero la Prima guerra mondiale e, nel 1918, la fine dell\'Impero. Il Duomo fu consacrato il 29 aprile 1924: in una Repubblica austriaca piccola e povera, ma con la sua cattedrale finalmente compiuta.',
        'Rudigier non la vide finita: morì nel 1884. Dopo Statz, i lavori passarono al figlio Franz e infine al capomastro del Duomo, Matthäus Schlager.'] },
    { id:'f3', titolo:'Il dettaglio: le campane', min:2,
      testo:[
        'Nella torre ci sono sette campane, fuse nel 1901 da Anton Gugg. La più grande si chiama «Immaculata» e pesa 8.120 chili, più di un camion carico.',
        'Se vi capita di sentirle suonare, ascoltate la nota più profonda: è lei.'] }
  ],

  avviso: 'In chiesa si parla sottovoce. Durante le Messe e le funzioni le visite non sono permesse: aspettiamo la fine o restiamo seduti in fondo. Con le radioguide l\'audio arriva solo nell\'auricolare e non disturba nessuno.',

  zone: [
    { n:1, nome:'Ingresso sotto la torre', breve:'L\'organo alle vostre spalle', x:50, y:88, min:3,
      testo:[
        'Siamo entrati dall\'atrio sotto la torre. Prima di andare avanti, voltatevi e guardate in alto, sopra la porta: c\'è l\'organo grande, chiamato «Rudigierorgel» in onore del vescovo fondatore.',
        'Fu inaugurato nel 1968 dalla ditta danese Marcussen ed è considerato uno dei più grandi organi meccanici del mondo: ogni tasto muove le canne con leve e tiranti, senza elettricità a fare il lavoro.',
        'Dietro l\'organo si nasconde un rosone con santa Cecilia, patrona della musica, circondata da musicisti e dai segni dello zodiaco. Da qui non si vede: si vede solo salendo nella sala dell\'organo.'],
      cerca:['L\'organo sopra la porta d\'ingresso','La luce che entra dalla navata davanti a voi'] },
    { n:2, nome:'La navata', breve:'Colonne di granito e vetrate che raccontano', x:50, y:66, min:5, foto:'navata',
      testo:[
        'Camminate lentamente lungo la navata centrale. Le chiese gotiche sono costruite come una processione: le colonne di granito guidano lo sguardo verso l\'altare e verso l\'alto, fino alle volte.',
        'Ora guardate le finestre. Il Duomo ha più di cento vetrate dipinte. Quelle della navata e del transetto, realizzate tra il 1910 e il 1924, non raccontano solo storie sacre: raccontano la storia della regione, la vita del vescovo Rudigier e la costruzione stessa del Duomo.',
        'Un dettaglio curioso: in alcune vetrate compaiono i ritratti dei benefattori che pagarono le finestre, dipinti copiando le loro fotografie. Cercate volti dall\'aria «moderna», con baffi e colletti dell\'epoca, accanto ai santi.',
        'La vetrata più famosa è la «Finestra di Linz», che racconta la storia della città; tra i personaggi c\'è anche Anton Bruckner.'],
      cerca:['Volti di benefattori nelle vetrate','La «Finestra di Linz» con Bruckner [v: chiedere al Domcenter dove si trova]','Le 14 stazioni della Via Crucis, del 1960'] },
    { n:3, nome:'L\'incrocio e i due rosoni', breve:'La guerra e la pace, una di fronte all\'altra', x:50, y:47, min:3,
      testo:[
        'Siamo al centro della croce, dove la navata incontra il transetto. Guardate a destra e a sinistra: i due bracci si chiudono con due grandi rosoni, uno di fronte all\'altro.',
        'Uno è la «Finestra della pace»: mostra le virtù e le sette opere di misericordia. L\'altro è la «Finestra della guerra», con i simboli della guerra e i sette vizi capitali.',
        'Il rosone della pace ha una storia amara: i suoi simboli di pace andarono distrutti nella Seconda guerra mondiale. Al loro posto oggi ci sono figure di vescovi e canonici del Duomo.'],
      cerca:['Il rosone della pace','Il rosone della guerra'] },
    { n:4, nome:'Il coro e l\'altare a baldacchino', breve:'Quindici metri di pietra, marmo e mosaico', x:50, y:30, min:4, foto:'altare',
      testo:[
        'Davanti a voi c\'è l\'altare maggiore, coperto da un baldacchino alto 15 metri. Lo disegnò l\'architetto Statz e lo realizzò lo scultore Ludwig Linzinger nel 1901.',
        'In alto, la croce è alta 4 metri. In cima a tutto sta la Madonna Immacolata, a cui il Duomo è dedicato. Attorno, le statue di santi, tra cui Pietro, Maria Maddalena, il buon ladrone Disma e il soldato Longino.',
        'Sul fronte della mensa, in marmo bianco, quattro mosaici mostrano Abele, Noè, Melchisedek e Abramo: quattro offerte a Dio dell\'Antico Testamento, che la tradizione legge come annuncio dell\'Eucaristia.',
        'Le undici vetrate del coro, del 1885, raccontano Maria nella vita di Gesù. Alcune sono in restauro: un lavoro che dovrebbe concludersi entro il 2030.'],
      cerca:['L\'Immacolata in cima al baldacchino','I quattro mosaici sulla mensa','Le vetrate del coro con Maria'] },
    { n:5, nome:'La corona di cappelle', breve:'Un santo, un vescovo e un contadino martire', x:24, y:18, min:5,
      testo:[
        'Attorno al coro gira una corona di cappelle. Ognuna è dedicata a Maria con un titolo diverso: Regina degli apostoli, dei martiri, dei profeti, delle vergini e così via. Percorretele con calma; ecco cosa cercare.',
        'Nella cappella di Maria Regina dei patriarchi, con san Giuseppe, c\'è la statua in bronzo del vescovo Rudigier disteso, del 1892. È un monumento, non la tomba: Rudigier è sepolto nella cripta.',
        'Nella cappella dei martiri c\'è una Pietà in pietra con san Floriano, patrono dell\'Alta Austria. Accanto, una stele ricorda Franz Jägerstätter, contadino dell\'Alta Austria che rifiutò di combattere per Hitler e fu giustiziato nel 1943. La Chiesa lo ha proclamato beato nel 2007.',
        'Vicino alla cappella votiva cercate la «Madonna della Wurmstraße»: una statua tardogotica, l\'oggetto più antico di tutto il Duomo, più vecchia della chiesa di almeno trecento anni [v].',
        'Nella cappella delle vergini, con sant\'Agnese, santa Caterina e santa Barbara, una lapide ricorda la Messa in mi minore di Bruckner.'],
      cerca:['Il vescovo Rudigier in bronzo','La stele di Franz Jägerstätter','La Madonna tardogotica','La lapide di Bruckner'] },
    { n:6, nome:'La cappella votiva', breve:'Dove tutto cominciò, con la musica di Bruckner', x:50, y:5, min:3,
      testo:[
        'Questa è la parte più antica del Duomo, e la più grande delle cappelle. Fu terminata per prima, quando il resto della chiesa era ancora un cantiere.',
        'Il 29 settembre 1869 fu consacrata insieme alla corona di cappelle. Per l\'occasione si eseguì per la prima volta la Messa in mi minore di Anton Bruckner, diretta da lui stesso.',
        'Pensateci: per decenni i fedeli di Linz pregarono qui, in questo piccolo pezzo di cattedrale, mentre attorno a loro cresceva il resto.'],
      cerca:['Le vetrate del 1868, le più antiche del Duomo'] },
    { n:7, nome:'La cripta e il presepe', breve:'Le tombe dei vescovi e uno dei presepi più grandi del mondo', x:78, y:22, min:5, foto:'presepe', opz:true,
      testo:[
        'Accanto alle sacrestie una scala di marmo scende nella cripta, sotto la cappella votiva. Qui riposano i vescovi di Linz: al centro, davanti, la tomba di Rudigier.',
        'Nella cripta si trova anche il presepe di Sebastian Osterrieder, scultore di Monaco. Il vescovo Doppelbauer glielo commissionò nel 1908; fu completato per il Natale 1913 e dal 1921 sta qui in modo permanente.',
        'Conta circa ottanta figure in legno di tiglio, dipinte e dorate, ed è considerato uno dei presepi più grandi del mondo. Nel 2020–2021 è stato restaurato completamente.'],
      cerca:['La tomba del vescovo Rudigier','Il presepe di Osterrieder'],
      nota:'Cripta: verificare con il Domcenter se è aperta ai gruppi a fine marzo [v].' }
  ],

  finale: 'Il nostro giro del Duomo finisce qui. Ritrovatevi all\'ingresso sotto la torre: da lì andiamo insieme a pranzo.',

  pranzo: {
    nome:'Pranzo da Vapiano',
    indirizzo:'Schmidtorstraße 1, angolo Hauptplatz [v: confermare con il ristorante]',
    strada:'Circa 12–15 minuti a piedi (stima). Dal Duomo raggiungete la Landstraße, la via pedonale dei negozi, un isolato verso est. Seguitela verso nord fino al Taubenmarkt; la breve Schmidtorstraße porta all\'Hauptplatz. Vapiano è sull\'angolo.'
  },

  fonti: [
    ['Diocesi di Linz, guida della chiesa (Kirchenführer)','https://www.dioezese-linz.at/dl/NmtNJKJlLolNJqx4KJK/kirchenfuehrer_als_datei.pdf'],
    ['Mariendom, le vetrate dipinte','https://dioezese-linz.at/site/mariendom/bauwerk/rundgang/article/43008.html'],
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
 ['Altare','Girate attorno al coro partendo dal lato sinistro: lì cominciano le cappelle, zona 5. [v: verificare che il passaggio dietro il coro sia aperto]','altare'],
 ['Cappelle','Al centro della corona, proprio dietro l\'altare, c\'è la cappella più grande: zona 6.',null],
 ['Votiva','Facoltativo: la scala per la cripta è accanto alle sacrestie, zona 7 [v: chiedere al Domcenter]. Altrimenti tornate all\'ingresso sotto la torre.',null],
 ['Cripta','Risalite e tornate all\'ingresso sotto la torre: è il punto di ritrovo del gruppo.','presepe']
].forEach((a,i)=>{const z=window.DOM.zone[i];z.corto=a[0];z.dopo=a[1];if(a[2])z.foto=a[2];});
window.DOM.fotoSlot={
 esterno:'La facciata e la torre viste dal sagrato',
 navata:'La navata verso l\'altare, con le colonne e le vetrate',
 altare:'L\'altare a baldacchino con l\'Immacolata in cima',
 presepe:'Il presepe di Osterrieder nella cripta'
};
window.DOM.zone[4].split=4; // nel libretto la zona 5 occupa due pagine
window.DOM.zone[1].split=3; window.DOM.zone[3].split=3; // navata e altare: due pagine nel libretto
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
 {d:'Chi compare in alcune vetrate, accanto ai santi?',o:['Gli operai del cantiere','I benefattori che pagarono le finestre','I re d\'Austria'],r:1,p:'I loro volti furono dipinti copiando le fotografie: cercate baffi e colletti dell\'epoca.'},
 {d:'Nel rosone della pace, cosa ha preso il posto dei simboli distrutti in guerra?',o:['Vescovi e canonici del Duomo','Colombe e rami d\'ulivo','Gli stemmi delle città austriache'],r:0,p:'I simboli di pace furono distrutti nella Seconda guerra mondiale e sostituiti con figure di vescovi e canonici.'},
 {d:'Chi sta in cima al baldacchino alto 15 metri?',o:['San Pietro con le chiavi','Il vescovo Rudigier','La Madonna Immacolata'],r:2,p:'Il Duomo è dedicato all\'Immacolata Concezione: per questo lei sta più in alto di tutti.'},
 {d:'La statua in bronzo del vescovo Rudigier disteso: è la sua tomba?',o:['Sì, è sepolto proprio lì sotto','No, è un monumento: la tomba è nella cripta','No, è sepolto a Vienna'],r:1,p:'Rudigier riposa nella cripta, al centro, insieme agli altri vescovi di Linz.'},
 {d:'Quale musica risuonò qui il giorno della consacrazione, nel 1869?',o:['La Messa in mi minore di Bruckner','Il Flauto magico di Mozart','L\'inno imperiale di Haydn'],r:0,p:'Anton Bruckner la diresse lui stesso, il 29 settembre 1869.'},
 {d:'Di che legno sono le circa ottanta figure del presepe?',o:['Quercia','Tiglio','Abete'],r:1,p:'Legno di tiglio, dipinto e dorato, scolpito da Sebastian Osterrieder tra il 1908 e il 1913.'}
];
/* Foto vere (Wikimedia Commons). pos = punto da tenere al centro quando la foto viene ritagliata */
window.DOM.foto={
 esterno:{src:'foto/esterno.jpg',pos:'60% 45%',cap:'Il Mariendom visto dal Domplatz. La torre è in restauro.',autore:'Leonhard Lenz',licenza:'CC0',link:'https://commons.wikimedia.org/wiki/File:Mariendom_Linz_2023-09-29_01.jpg',anno:'2023'},
 navata:{src:'foto/navata.jpg',pos:'50% 62%',cap:'La navata centrale verso il coro.',autore:'Uoaei1',licenza:'CC BY-SA 4.0',licUrl:'https://creativecommons.org/licenses/by-sa/4.0/',link:'https://commons.wikimedia.org/wiki/File:Linz_Neuer_Dom_Innenraum_01.jpg',anno:'2018'},
 altare:{src:'foto/altare.jpg',pos:'50% 48%',cap:'L\'altare maggiore con il baldacchino e la croce.',autore:'Zairon',licenza:'CC BY-SA 3.0',licUrl:'https://creativecommons.org/licenses/by-sa/3.0/',link:'https://commons.wikimedia.org/wiki/File:Linz_Neuer_Dom_Innen_Altar_1.JPG',anno:'2012'},
 ieri:{src:'foto/ieri-1898.jpg',cap:'Il Duomo verso il 1898, visto dal lato del coro: la torre è ancora un cantiere, chiusa dalle impalcature.',autore:'Adolf Nunwarz (1868–1931)',licenza:'Pubblico dominio',link:'https://commons.wikimedia.org/wiki/File:Adolf_Nunwarz_-_Der_neue_Marien-Dom.jpg',anno:'1898 circa'},
 oggi:{src:'foto/oggi.jpg',cap:'Oggi, dal Domplatz: la torre è finita (nella foto è in restauro).',autore:'Leonhard Lenz',licenza:'CC0',link:'https://commons.wikimedia.org/wiki/File:Mariendom_Linz_2023-09-29_01.jpg',anno:'2023'}
};
window.DOM.ieriOggi.nota='Le due foto sono prese da punti diversi: nel 1898 dal lato del coro, oggi dal Domplatz.';
