let currentDeck = "pytania";
let canShake = false;
let doneCount =
  Number(localStorage.getItem("doneCount")) || 0;

let drinkCount =
  Number(localStorage.getItem("drinkCount")) || 0;

const pytania = [
"Czy powiedziałeś/aś kiedyś „kocham Cię”, nie czując tego?",
"Jak oceniasz swój ostatni stosunek w skali od 1 do 10?",
"Z iloma osobami uprawiałeś/aś seks w ciągu ostatnich 3 miesięcy?",
"Jak najłatwiej doprowadzić Cię do orgazmu?",
"Gdybyś mógł/mogła spełnić swoją najskrytszą fantazję seksualną, co i z kim chciałbyś/chciałabyś zrobić?",
"Jak często oglądasz filmy dla dorosłych?",
"Jaka jest Twoja ulubiona kategoria filmów dla dorosłych?",
"Czy kiedykolwiek zdradziłeś/aś swojego partnera/swoją partnerkę?",
"Czy kiedykolwiek łączyło Cię coś z partnerem/partnerką któregoś z Twoich przyjaciół?",
"Jaki masz sekret, o którym nigdy nikomu nie powiedziałeś/aś?",
"Jaką największą głupotę zrobiłeś/aś z miłości?",
"Co najbardziej Cię we mnie pociąga?",
"Czy kiedykolwiek udawałeś/aś zainteresowanie kimś z czysto egoistycznych pobudek?",
"Jaka cecha mojego charakteru działa na Ciebie najmocniej?",
"Jakie jest Twoje największe życiowe rozczarowanie?",
"Czy byłeś/aś kiedyś zakochany/a bez wzajemności?",
"Jaką cechę charakteru cenisz w sobie najbardziej?",
"W jaki sposób okazujesz miłość?",
"Jak chcesz, żeby Tobie okazywano miłość?",
"Jaka jest cecha charakteru, której najbardziej w sobie nie lubisz?",
"Czy bywasz zazdrosny/a?",
"Kiedy, o kogo i o co byłeś/aś naprawdę zazdrosny/a?",
"Jak najłatwiej można Cię zawstydzić?",
"Czy zrobiłeś/aś kiedyś coś tylko dlatego, że ktoś Cię namówił?",
"Czy kiedykolwiek kogoś zghostowałeś/aś?",
"Czy zostałeś/aś kiedyś zghostowany/a?",
"Gdybyś mógł/mogła zmienić w swoim życiu tylko jedną decyzję, co byś wybrał/a?",
"Jaki jest Twój największy kompleks?",
"Co byłoby dla Ciebie niewybaczalne w związku?",
"Czy każdy zawsze zasługuje na drugą szansę?",
"Jaką część swojej osobowości pokazujesz tylko najbliższym?",
"Co najbardziej irytuje Cię w ludziach?",
"Czy ktoś kiedyś zdradził swojego partnera/swoją partnerkę z Tobą?",
"Ile razy w życiu byłeś/aś naprawdę zakochany/a?",
"Czy wróciłbyś/wróciłabyś do któregoś/którejś ze swoich ex?",
"Czy kiedykolwiek sprawdzałeś/aś telefon swojego partnera/swojej partnerki?",
"Czy przyznałbyś/przyznałabyś się do zdrady?",
"Z iloma osobami spałeś/aś?",
"Czy kiedykolwiek skłamałeś/aś na temat liczby swoich partnerów seksualnych?",
"Jaki był najgłupszy powód, którego użyłeś/aś, żeby z kimś zerwać?",
"Czy żałujesz któregoś ze swoich partnerów seksualnych?",
"Jaki był najlepszy seks Twojego życia i z kim?",
"Jaki był najgorszy seks Twojego życia i z kim?",
"Czy kiedykolwiek ktoś z najbliższych przyłapał Cię w bardzo niezręcznej sytuacji?",
"Czy uznajesz flirt za zdradę?",
"Jakie kłamstwo powiedziałeś/aś, żeby komuś zaimponować?",
"Jakie jest najbardziej ekstremalne miejsce, w którym uprawiałeś/aś seks?",
"Czy liczba partnerów seksualnych Twojego partnera/swojej partnerki ma dla Ciebie znaczenie?",
"Czy zdecydowałbyś/zdecydowałabyś się na seks grupowy razem ze mną?",
"Czy miałeś/aś sen erotyczny ze mną w roli głównej?",
"Kiedy ostatni raz robiłeś/aś sobie dobrze?",
"O kim zazwyczaj myślisz podczas masturbacji?",
"Jaka była Twoja pierwsza myśl, kiedy się poznaliśmy?",
"Czy zmieniłbyś/zmieniłabyś okoliczności, w jakich się poznaliśmy?",
"Czy poszedłbyś/poszłabyś ze mną na randkę? Jak miałaby wyglądać?",
"Skóra czy koronki?",
"Seks podczas miesiączki - tak czy nie?",
"Czy jest coś, czego nigdy byś nie zrobił/a w sferze seksu?",
"Ile najdłużej wytrzymałeś/aś bez seksu będąc w związku?",
"Ile czasu wytrzymałeś/aś bez seksu będąc singlem?",
"Gdybyś mógł/mogła zrobić ze mną w tym momencie cokolwiek, co by to było?",
"Jaka jest Twoja ulubiona zabawka erotyczna?",
"Jaka jest Twoja najważniejsza strefa erogenna?",
"Czy czujesz się przy mnie na tyle swobodnie, żeby być sobą w każdym aspekcie życia?",
"Czy zmieniłbyś/zmieniłabyś jakąś sytuację, która wydarzyła się między nami?",
"Jaka jest Twoja ulubiona pozycja seksualna?",
"Gdybyś mógł/mogła zadać mi jedno pytanie dotyczące naszej relacji, wiedząc, że odpowiem całkowicie szczerze, o co byś zapytał/a?",
"Czego brakuje Ci w seksie ze mną?",
"Jakiego pytania najbardziej boisz się usłyszeć podczas tej gry?",
];

const wyzwania = [
"Zadzwoń do kogoś z rodziny i powiedz, że porwali Cię kosmici.",
"Zadzwoń do mamy i poproś o przepis na jej popisowe ciasto, podczas gdy ja będę robić Ci dobrze.",
"Zadzwoń do najlepszego przyjaciela i powiedz, że zostaniesz ojcem/matką.",
"Napisz do brata lub siostry, że musisz pilnie porozmawiać, po czym nie odpisuj i nie odbieraj przez 10 minut.",
"Napisz do kogoś ze swoich byłych, że związek z nim/nią był największą pomyłką.",
"Zmień na 24 godziny zdjęcie profilowe na takie, które wybiorę.",
"Pozwól mi zmienić nazwy trzech Twoich znajomych na Messengerze.",
"Pokaż ostatnie 5 zdjęć z galerii.",
"Pokaż ostatnie 5 zdjęć wysłanych do Ciebie przez inne osoby.",
"Pokaż 5 ostatnich zapisanych screenów.",
"Przeczytaj 5 ostatnich wyszukiwań w przeglądarce.",
"Przeczytaj trzy ostatnie wiadomości, które napisałeś/aś.",
"Przeczytaj trzy ostatnie wiadomości, które otrzymałeś/aś.",
"Daj mi przeczytać wybraną przeze mnie rozmowę na Messengerze.",
"Daj mi przeczytać dowolnie wybraną przeze mnie rozmowę na WhatsAppie.",
"Daj mi przeczytać 3 ostatnie rozmowy na Instagramie.",
"Pokaż swoje najbardziej żenujące zdjęcie.",
"Pokaż najstarsze zdjęcie, jakie masz w telefonie.",
"Zapytaj kogoś ze znajomych tej samej płci, czy uważa Cię za atrakcyjnego/atrakcyjną.",
"Zaśpiewaj swoją ulubioną piosenkę.",
"Zatańcz do ostatniej piosenki, której słuchałeś/aś.",
"Udawaj mnie przez minutę.",
"Poderwij mnie swoim popisowym flirtem.",
"Nagraj odę do ziemniaka i umieść ją na relacji widocznej dla najbliższych znajomych.",
"Zrób najbardziej absurdalne selfie i wstaw je na relację widoczną dla najbliższych znajomych.",
"Opisz siebie jak luksusowy samochód.",
"Opisz mnie, jakbyś wystawiał/a mnie na sprzedaż na Allegro.",
"Napisz post widoczny dla najbliższych znajomych z manifestem poparcia dla prawa pingwinów do identyfikowania się jako gady.",
"Napisz do przyjaciela, że jesteś gejem/lesbijką.",
"Pocałuj mnie w swoją ulubioną część mojego ciała, która nie ma nic wspólnego z erotyzmem.",
"Dotknij tej części mojego ciała, którą uważasz za najatrakcyjniejszą.",
"Daj związać sobie oczy i pozwól robić ze sobą, co chcę, przez minutę.",
"Pokaż najcenniejszą rzecz, jaką posiadasz.",
"Opisz naszą relację jak zwiastun hollywoodzkiego filmu.",
"Pozwól mi wybrać zdjęcie, które musisz wysłać do wybranego znajomego bez żadnego komentarza.",
"Opisz swój ostatni związek, używając wyłącznie tytułów filmów.",
"Napisz do przyjaciela: „Potrzebuję alibi na jutro.” i nie tłumacz nic przez 10 minut.",
"Wymyśl trzy fakty o sobie. Jeden prawdziwy, dwa fałszywe. Muszę zgadnąć, który jest prawdziwy.",
"Pozwól mi przejrzeć zawartość Twojej torby, plecaka lub kieszeni.",
"Wymyśl trzy powody, dla których powinienem/powinnam się w Tobie zakochać.",
"Przez następne 5 rund musisz odpowiadać na pytania zawsze zgodnie z prawdą.",
"Udostępnij mi swoją lokalizację na najbliższe 24 godziny.",
"Ustaw na 24 godziny status, że wziąłeś/wzięłaś ślub.",
"Wypij tyle ml alkoholu, ile masz lat.",
"Zdejmij wybraną przeze mnie część garderoby.",
"Zrób mi 3-minutowy masaż wybranej przeze mnie części ciała.",
"Wyślij wybranemu znajomemu emoji 🥔 bez żadnego wyjaśnienia.",
"Przez następne 5 rund będziesz mieć związane z tyłu ręce.",
"Spędź następne trzy rundy w pozycji, którą dla Ciebie wybiorę.",
"Zmień w wybranym komunikatorze swoje imię i nazwisko na wybrane przeze mnie przezwisko.",
"Zrób mi trzyminutowy striptiz.",
"Pocałuj mnie najlepiej, jak potrafisz.",
"Zamień się ze mną ubraniami.",
"Pozwól mi wybrać jedną aplikację w Twoim telefonie, której nie możesz używać przez 24 godziny.",
"Odtwórz najdzikszy taniec swojego życia.",
"Zainscenizuj najgorszą randkę, którą przeżyłeś/aś.",
"Przedstaw tylko gestami wymyślone przeze mnie hasło.",
"Narysuj mój portret.",
"Nie używając słów, przedstaw mi swoją ulubioną pozycję seksualną.",
"Przekonaj mnie, że jesteś mistrzem świata w szydełkowaniu.",
"Pokaż na sobie strój, w którym chciałbyś/chciałabyś mnie zobaczyć.",
"Pokaż trzy przedmioty codziennego użytku, które chciałbyś/chciałabyś wykorzystać ze mną w łóżku.",
"Wybierz piosenkę, która najlepiej oddaje to, co nas łączy.",
"Daj mi numer do rodzeństwa lub przyjaciela. Zadzwonię i sprawdzę, czy będzie Cię kryć.",
"Przez 5 minut zachowuj się tak, jakbyś był/była sam/a w pokoju.",
"Pójdź do sąsiada i zapytaj, czy poratuje Cię majonezem, bo bez niego nie zaśniesz.",
"Zadzwoń do wybranej osoby i powiedz, żeby przywiozła Ci szybko mleko, bo musisz nakarmić owieczkę.",
"Zmień na miesiąc swój pseudonim we wszystkich grach online. Wymagane codzienne screeny.",
"Znajdź w domu coś, czego nie lubisz jeść, i zjedz to bez skrzywienia miny."
];
let pytaniaPozostale = [...pytania];
let wyzwaniaPozostale = [...wyzwania];
const savedDone = localStorage.getItem("doneCount");
const savedDrink = localStorage.getItem("drinkCount");
const savedPytania = localStorage.getItem("pytaniaPozostale");
const savedWyzwania = localStorage.getItem("wyzwaniaPozostale");

if (savedDone) doneCount = Number(savedDone);
if (savedDrink) drinkCount = Number(savedDrink);

if (savedPytania) {
  pytaniaPozostale = JSON.parse(savedPytania);
}

if (savedWyzwania) {
  wyzwaniaPozostale = JSON.parse(savedWyzwania);
}

const pytaniaBtn = document.getElementById("questionBtn");
const wyzwaniaBtn = document.getElementById("challengeBtn");
const shakeScreen = document.getElementById("shakeScreen");
const counter = document.getElementById("counter");
const deckCounter = document.getElementById("deckCounter");
const resetGame =
document.getElementById("resetGame");
function updateCounter() {
  counter.textContent = "✅ " + doneCount
    + " | 🥃 " + drinkCount;

  localStorage.setItem("doneCount", doneCount);
  localStorage.setItem("drinkCount", drinkCount);
}
  function updateDeckCounter() {
  deckCounter.textContent =
    "🤭 " + pytaniaPozostale.length + "/" + pytania.length +
    " | 😈 " + wyzwaniaPozostale.length + "/" + wyzwania.length;
}

function pokazShake(talia) {
    currentDeck = talia;
    canShake = true;
    shakeScreen.innerHTML = "<h2>SHAKE IT 🎲🔥</h2>";
    shakeScreen.classList.remove("hidden");
}

function losujKarte() {
    const deck = currentDeck === "pytania" ? pytaniaPozostale : wyzwaniaPozostale;

if (deck.length === 0) {
  shakeScreen.innerHTML = "<h2>Ta talia jest pusta.</h2>";
  return;
}

const index = Math.floor(Math.random() * deck.length);
const random = deck.splice(index, 1)[0];
updateDeckCounter();
localStorage.setItem(
  "pytaniaPozostale",
  JSON.stringify(pytaniaPozostale)
);

localStorage.setItem(
  "wyzwaniaPozostale",
  JSON.stringify(wyzwaniaPozostale)
);
    if (navigator.vibrate) {
        navigator.vibrate(300);
    }

shakeScreen.innerHTML = `
    <div class="shuffle">
        <div class="mini-card one"></div>
        <div class="mini-card two"></div>
        <div class="mini-card three"></div>
    </div>
`;

    setTimeout(() => {
    shakeScreen.innerHTML = `
    <div class='drawn-card ${currentDeck}-card'>${random}</div>
    <div class="choice-buttons">
  <button id="doneBtn">✅ <span id="cardDoneCount">${doneCount}</span></button>
  <button id="drinkBtn">🥃 <span id="cardDrinkCount">${drinkCount}</span></button>
</div>
`;
document.getElementById("doneBtn").addEventListener("click", () => {
  doneCount++;
updateCounter();

document.getElementById("cardDoneCount").textContent = doneCount;

setTimeout(() => {
  shakeScreen.classList.add("hidden");
}, 700);
});

document.getElementById("drinkBtn").addEventListener("click", () => {
  drinkCount++;
updateCounter();

document.getElementById("cardDrinkCount").textContent = drinkCount;

setTimeout(() => {
  shakeScreen.classList.add("hidden");
}, 1200);
});
}, 2200);
}

pytaniaBtn.addEventListener("click", () => {
    pokazShake("pytania");
});

wyzwaniaBtn.addEventListener("click", () => {
    pokazShake("wyzwania");
});

window.addEventListener("devicemotion", (event) => {
    if (!canShake) return;

    const x = event.accelerationIncludingGravity.x || 0;
    const y = event.accelerationIncludingGravity.y || 0;
    const z = event.accelerationIncludingGravity.z || 0;

    const sila = Math.abs(x) + Math.abs(y) + Math.abs(z);

    if (sila > 18) {
        canShake = false;
        losujKarte();
    }
});
updateCounter();
updateDeckCounter();
updateDeckCounter();
resetGame.addEventListener("click", () => {

    localStorage.removeItem("pytaniaPozostale");
    localStorage.removeItem("wyzwaniaPozostale");
    localStorage.removeItem("doneCount");
    localStorage.removeItem("drinkCount");

    pytaniaPozostale = [...pytania];
    wyzwaniaPozostale = [...wyzwania];

    doneCount = 0;
    drinkCount = 0;

    updateCounter();
    updateDeckCounter();

    shakeScreen.classList.add("hidden");
});
