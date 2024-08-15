# Js-basics-counter

Progetto realizzato per il corso Full Stack development di Start2impact.

In questo progetto ho realizzato un'applicazione che funziona come un counter, e che permetta all'utente di aumentare e decrementare il valore. L'utente, appena entrato nella pagina, visualizzerà 0 come valore del counter e avrà a disposizione due pulsanti +/- per cambiare il valore del counter.
L'applicazione deve essere sviluppata con JavaScript. Non è permesso l'utilizzo di Jquery, non è permesso l'utilizzo di nessun framework (React, Angular, Vue o altri).
È permesso l'utilizzo, se necessario, di librerie esterne JavaScript. I pulsanti +/- e la visualizzazione del valore del counter sono stati costruiti con la manipolazione del DOM. 
Una volta costruiti gli elementi con JavaScript, è stata implementata la **funzione che aggiunge e diminuisce** il valore del counter.
Oltre alla funzione per aumentare e decrementare il valore, sono stati implementati:

- **Feedback Visivo**: Messaggi dinamici che cambiano in base al valore del contatore, cercando di incoraggiare l'utente a superare le sfide.
- 
- **Audio Interattivo**: Effetti sonori al clic dei pulsanti.
- 
- **Persistenza del Dato**: Il valore del contatore viene salvato nel `localStorage` e ripristinato al caricamento della pagina.

Per l'implementazione del background dinamico, ho utilizzato una libreria esterna [Vanta.JS](https://www.vantajs.com/?effect=dots#(backgroundAlpha:1,backgroundColor:2236962,color:16746528,color2:16746528,gyroControls:!f,minHeight:200,minWidth:200,mouseControls:!t,scale:1,scaleMobile:1,showLines:!f,size:10,spacing:36,touchControls:!t))

Per rendere la pagina responsive, ho utilizzato tecniche come clamp per il font, e flexbox per gli elementi.

Durante la creazione di questo progetto non sono mancate le difficoltà, che però ho superato grazie al materiale di studio fornito da s2i, grazie alla community, e grazie al mindset trasmesso da essa. 

### Screenshot dell'applicazione

##### Visualizzazione desktop 
![Desktop](/assets/img/screenshot-desktop.png)

##### Visualizzazione tablet 
![Desktop](/assets/img/screenshot-tablet.png)

##### Visualizzazione mobile
![Desktop](/assets/img/screenshot-mobile.png)

[Provalo cliccando qui](https://javascript-counter-gianluigi-fadda.netlify.app)
