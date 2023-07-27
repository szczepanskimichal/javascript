console.log(a);
console.log('test');
if (true) {
  console.log('test');
}

//Excercise 1
// Zadeklaruj dwie zmienne: productName dla nazwy produktu oraz pricePerItem do przechowywania ceny za sztukę. Przy deklaracji nadaj zmiennym następujące wartości

// dla productName string 'Droid';
// dla pricePerItem number 2000.

// const productName = 'Droid';
// console.log(productName);
// const pricePerItem = 2000;
// console.log(pricePerItem);

//ex 2
// Aby zadeklarować zmienną, której będzie można w przyszłości przypisać nową wartość, użyj słowa kluczowego let. Utworzenie zmiennej bez słowa kluczowego let lub const spowoduje błąd.

// let age = 5;
// age = 10;

// let userName = 'Mango';
// userName = 'Poly;
// Próba odwołania się do zmiennej za pomocą nazwy przed jej deklaracją zakończy się błędem jeżeli użyjemy słowa kluczowego let lub const.

// Innymi słowy, nie możemy ani odczytać ani zmienić wartości zmiennej przed jej zadeklarowaniem:

// // ❌ Nieprawidłowe przypisanie, wystąpi błąd
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// // Deklaracja zmiennej age
// let age = 20;

// // ✅ Prawidłowe przypisanie następujące po deklaracji
// age = 25;
// console.log(age); // 25

// Nazwę produktu zmieniono na 'Repair droid', a jego cenę zwiększono o 1500. Przypisz nowe wartości zmiennych pricePerItem i productName po ich zadeklarowaniu.

// let productName = 'Droid';
// let pricePerItem = 2000;
// productName = 'Repair Droid';
// pricePerItem += 1500;
// console.log(productName);
// console.log(pricePerItem);

//Ex 3

// W JavaScript zmienna nie jest powiązana z żadnym typem danych; to jej wartość ma typ. Oznacza to, że zmienna może przechowywać wartości o różnych typach, takich jak:

// Number to liczby całkowite i zmiennoprzecinkowe, czyli takie przechowujące wartości ułamkowe. W innych językach możemy spotkać się z alternatywnymi typami takimi jak int (integer), float, double. Deklarujemy je jako liczby, najczęściej w systemie dziesiętnym.
// String - wiersze lub inaczej ciągi znaków, mogą być puste (o długości 0 znaków). Deklarujemy je przy pomocy symboli ' lub " lub `. Ostatni znak to backtick, stosowany przy korzystaniu ze String Literals, które pozwalają łatwo dodać do stringa wartości innych zmiennych.
// Boolean to zero-jedynkowy typ danych, przechowujący jedną z dwóch możliwych wartości, true lub false, czyli prawda lub fałsz. Włączone lub wyłączone napięcie, spełniony lub nie spełniony warunek. Czasem mówimy o tym typie jako o wartości logicznej z uwagi na istnienie logiki booleanowej.
// // Liczby
// const age = 20;
// const salary = 3710.84;

// // Ciągi znaków
// const name = "Mango";
// const description = "JavaSript essentials";

// // Wartości logiczne
// const isModalOpen = true;
// const isLoggedIn = false;

// Zadeklaruj następujące zmienne za pomocą słowa kluczowego const lub let i przypisz im odpowiednie wartości.

// topSpeed - number 160.
// distance - number 617.54.
// login - string 'mango935'.
// isOnline - boolean true.
// isAdmin - boolean false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// Ex 4

// Co do zasady, operatory matematyczne w JavaScript podążają za zasadami poznanymi w szkole. W taki sam sposób uznawana jest kolejność wykonywania działań.

// const x = 10;
// const y = 5;

// // Dodawanie
// console.log(x + y); // 15

// // Odejmowanie
// console.log(x - y); // 5

// // Mnożenie
// console.log(x * y); // 50

// // Dzielenie
// console.log(x / y); // 2
// Pomocne
// Ważne jest, aby pamiętać o prawidłowym nazewnictwie składników wyrażenia algebraicznego: +, -, * i / nazywane są operatorami (operators), a to, do czego mają zastosowanie (liczby) - operandy (operands).

// Uzupełnij kod, przypisując do zmiennej totalPrice wyrażenie opisujące obliczenie całkowitej kwoty zamówienia. Zmienna pricePerItem przechowuje cenę jednej jednostki produktu, a orderedQuantity liczbę jednostek produktu w zamówieniu, przemnożone przez siebie dadzą pełną kwotę.

// const pricePerItem = 3500;
// const orderedQuantity = 6;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//Ex 5
// Ciągi szablonów są alternatywą dla konkatenacji czyli dodawania do siebie stringów, z wygodniejszą składnią. Ciąg ujęty jest w znaki (grawis lub backtick) zamiast w cudzysłów podwójny lub pojedynczy i może zawierać zmienne, które są wpisane są w nawiasy klamrowe i poprzedzone znakiem dolara, w następujący sposób:${nazwaZmiennej}`.

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Witaj w ${guestName}, jesteś w pokoju numer ${roomNumber}`;

// Zadeklaruj zmienną message i przypisz jej wartość wiadomości o zakupie, string w formacie: You picked <productName>, price per item is <pricePerItem> credits.

// Użyj składni template literal / ciągu szablonów.

// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//Ex 6

// Nasz sklep sprzedający droidy naprawcze jest niemal gotowy do otwarcia. Musimy napisać kod który pozwoli je zamówić. Zadeklaruj zmienne i przypisz im odpowiednie wartości:

// Zdefiniuj zmienne wedle podanego wzoru: nazwaZmiennej = wartośćZmiennej - opisZmiennej

// pricePerDroid = 800 - cena jednego droida"
// orderedQuantity = 8 - liczba droidów w zamówieniu
// deliveryFee = 80 - koszt dostawy
// totalPrice - wyliczona całkowita kwota zamówienia do zapłaty, nie zapomnij uwzględnić kosztu wysyłki (niezależnego od ilości kupowanych droidów) message - wiadomość o statusie zamówienia w formacie You ordered droids worth <totalPrice> credits. Delivery (<deliveryFee> credits) is included in total price.

// const pricePerDroid = 800;
// const orderedQuantity = 8;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordred droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
// console.log(message);

//Ex 7

// Funkcja - inaczej podprogram, to niezależna część kodu, przeznaczona do wielokrotnego wywoływania, bez potrzeby duplikowania kodu. Powtarzalne instrukcje/fragmenty kodu najlepiej zapisywać jako funkcje ponieważ poprawia to czystość kodu i pozwala na łatwiejszy refactoring (zmiany w kodzie mające na celu poprawę jego działania lub zastosowanie lepszych praktyk). Funkcje wykorzystują parametry do modyfikacji swojego działania, mogą również zwracać wartości które następnie mogą zostać przypisane do zmiennych i użyte w dalszych częściach naszego programu.". Metaforycznie możemy wyobrazić sobie funkcję jako małą maszynę która w zależności od otrzymanych materiałów może wyprodukować jeden z pożądanych przez nas rezultatów.

// // 1. Zadeklarowanie funkcji multiply
// function multiply() {
//   // Ciało funkcji
//   console.log("multiply function invocation");
// }

// // 2. Wywołanie (invocation) funkcji multiply
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// multiply(); // multiply function invocation
// Zadeklarowanie funkcji rozpoczynamy od słowa kluczowego function, następnie podajemy nazwę naszej funkcji, najlepiej jako czasownik odpowiadający na pytanie "co zrobić?". Kolejnym elementem jest para okrągłych nawiasów gdzie możemy (nieobowiązkowo) wypisać parametry które przyjmuje nasza funkcja. Następny element to nawias klamrowy który otacza instrukcje (kod) który ma wykonać się przy każdym wywołaniu funkcji.

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// console.log(sayHi);
// console.log(sayHi());

//Ex 8

// W okrągłych nawiasach po nazwie funkcji deklarujemy parametry – zmienne dla których wartości (argumenty) podajemy przy wywołaniu funkcji

// Parametry - to lokalne zmienne dostępne tylko w obrębie danego wywołania funkcji (w kodzie znajdującym się w jej ciele). Oddziela się je przecinkami. Parametrów może być kilka lub wcale może ich nie być – wtedy nawias okrągły pozostawiamy pusty.

// Przy wywołaniu funkcji, w okrągłym nawiasie można przekazać argumenty – wartości dla zadeklarowanych parametrów funkcji.

// // 1. Zadeklarowanie parametrów x, y, z
// function multiply(x, y, z) {
//   console.log(`Rezultat mnożenia równy ${x * y * z}`);
// }

// // 2. Przekazanie argumentów
// multiply(2, 3, 5); // Rezultat mnożenia równy 30
// multiply(4, 8, 12); // Rezultat mnożenia równy 384
// multiply(17, 6, 25); // Rezultat mnożenia równy 2550
// Kolejność przekazywanych argumentów odpowiada porządkowi deklarowanych parametrów tzn. pierwszy argument dostępny będzie jako wartość pierwszego parametru, drugi argument jako wartość drugiego parametru i tak dalej.

// Funkcja add powinna potrafić dodawać do siebie trzy podane argumenty i wypisywać wynik w konsoli. Dodaj do funkcji add trzy parametry a, b i c które zostaną zsumowane w ciele funkcji i wypisane w konsoli

// Uzupełnij console.log() tak, aby wypisał string "Addition result equals <result>", gdzie <result> to suma przekazanych liczb. Użyj template literals (zapisu z grawisami)

//function add(a, b, c) {
//   console.log(`"Addition result equals ${a + b + c}`);
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//Ex 9

// Słowo kluczone return wykorzystuje się do przekazania wartości którą traktujemy jako "wynik" działania kodu w ciele funkcji. Gdy interpreter napotka to słowo kluczowe, natychmiast zwracana jest wartość podana bezpośrednio po nim (w tej samej linijce) i wykonywanie kodu funkcji kończy się. Kod znajdujący się w linijkach pod słowem return nie zostanie wykonany i nazywa się go "unreachable". Słowo kluczowe return może być użyte jedynie w ciele funkcji.

// function multiply(x, y, z) {
//   console.log("Kod do momentu wystąpienia słowa kluczowego return wykonuje się jak zwykle");

//   // Zwracamy wynik wyrażenia mnożenia
//   return x * y * z;

//   console.log("Ten string nigdy nie zostanie wypisany w konsoli ponieważ znajduje się pod return, inaczej mówiąc jest unreachable");
// }

// // Rezultat wykonania funkcji można zapisać jako wartość nowo deklarowanej zmiennej
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550
// Operator return bez następującej po nim w tej samej linijce wartości, zwraca wartość specjalną undefined. Przy nieobecności return w ciele funkcji, ta również zwróci undefined.

// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//Ex 10

// Funkcja makeMessage(name, price) łączy i zwraca wiadomość o zakupie. Deklarujemy w niej dwa parametry:

// name - nazwa towaru
// price - cena towaru
// Uzupełnij kod funkcji tak, aby w zmiennej message zapisywał się string "You picked <name>, price per item is <price> credits". Wykorzystaj składnię template literals

// Uwaga
// Zwróć uwagę na to, że w kodzie nie ma wywołania funkcji makeMessage. Zaczynając od tego zadania, dalej sami będziemy wywoływać twoje funkcje w testach i sprawdzać, jak działają. Rezultat naszego sprawdzania zobaczysz w bloku Rezultaty pod edytorem kodu.

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price is ${price} credits`;
//   return message;
// }
// // console.log(makeMessage('globus', 2000));
// console.log(makeMessage('Piotrek', 55));

//Ex 11

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 20));
// console.log(calculateTotalPrice);

//Ex 12

// Funkcja makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) łączy i zwraca wiadomość o zakupie droidów naprawczych. Deklarujemy trzy parametry:

// orderedQuantity - zamawiana ilość droidów w zamówieniu
// pricePerDroid - cena jednego droida
// deliveryFee - cena dostawy
// Uzupełnij kod funkcji tak, aby zwracała wiadomość o zamówieniu w formacie "You ordered droids worth <totalPrice> credits. Delivery (<deliveryFee> credits) is included in total price.". Nie zapomnij o dodaniu kosztów dostawy przy obliczaniu całkowitej kwoty.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const calculateTotalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${calculateTotalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//Ex 13

// Wykorzystuje się je do porównania dwóch wartości. W rezultacie swojego wykonania zwracają wartość typu boolean - true albo false, tzn. prawda lub fałsz, 1 lub 0.

// > - większe od
// < - mniejsze od
// >= - większe lub równe
// <= - mniejsze lub równe

// Funkcja isAdult posiada jeden parametr age (wiek). Przypisz zmiennej passed wartość zwróconą przez sprawdzenie czy użytkownik jest pełnoletni, tzn czy wartość parametru age jest większa lub równa 18. Następnie zwróć zmienną passed.

// function isAdult(age) {
//   const passed = age > 18;
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(15));
// console.log(isAdult(22));
// console.log(isAdult(55));

//Ex 14

// "Luźne" (loose) operatory == i != mogą dokonywać zmiany typów podczas porównywania wartości przez co ich przydatność jest ograniczona i może prowadzić do nieprzewidzianych błędów. Używanie ich jest ogólnie złą praktyką zwłaszcza przez początkujących.

// // ❌ Źle, wartości nie zgadzają się typami i następują niekoniecznie poprawne porównania
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// Dlatego dla sprawdzenia równości lub nierówności dwóch wartości wykorzystywane są operatory === (ścisła równość) i !== (ścisła nierówność), które nie próbują zrównać typów porównywanych zmiennych.

// // ✅ Dobrze, nie następuje rzutowanie typów
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === 'jqueryismyjam';
//   return isMatch;
// }
// console.log(isValidPassword('skldknds'));
// console.log(isValidPassword('jqueryismyjam'));
// console.log(isValidPassword('jqueryismyjam'));

//Ex 15

// Rozgałęzienia (realizowane przez słowa kluczowe if...else) wykorzystywane są do wykonania innego kodu w zależności od warunków. Zasada działania jest prosta – wynik wyrażenia w warunku bloku if ewaluowany (obliczany) jest i sprawdza się czy jest true/truthy czy false/falsey.

// if (warunek) {
//   // ciało if
// } else {
//   // ciało else
// }
// Jeśli warunek sprowadza się do wartości true lub truthy, to wykonywany jest kod w nawiasie klamrowym następującym po warunku, a kod w bloku else zostaje zignorowany.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Jeśli warunek sprowadza się do false/falsey, kod bloku if zostanie pominięty i wykonany zostanie kod w nawiasie klamrowym po bloku else.

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// Dodaj sprawdzenie pełnoletności użytkownika, używając parametru age do warunku w instrukcji if

// Jeśli użytkownik jest pełnoletni, powinien wykonywać się blok if i w zmiennej message zapisujemy string "You are an adult".
// W przeciwnym razie powinien wykonać się blok else i jako wartość zmiennej message zapisujemy "You are a minor".

// function checkAge(age) {
//   let message;
//   if (age > 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(17));
// console.log(checkAge(22));
// console.log(checkAge(67));
// console.log(checkAge(12));

//Ex 16

// Funkcja checkStorage(available, ordered) sprawdza możliwość złożenia zamówienia i zwraca string z rezultatem. Deklarujemy w nije dwa parametry:

// available - całkowita ilość sztuk towaru w magazynie
// ordered - ilość sztuk towaru w zamówieniu
// Wykorzystując warunki if...else uzupełnij kod funkcji tak, aby:

// Jeśli w zamówieniu wskazano liczbę przewyższającą ilość sztuk towaru w magazynie, w zmiennej message zapisujemy się string "Not enough goods in stock!".
// W przeciwnym razie do zmiennej message zapisujemy się string "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 10));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//Ex 17

// Złożone operatory przypisania (compound assignment operators) to skrócone zapisy pozwalające na wykorzystanie obecnej wartości zmiennej w celu przypisania jej nowej wartości.

// Chcemy zwiększyć wartość zmiennej age o 1 wobec jej poprzedniej wartości, imitując aktualizację wieku po urodzinach użytkownika.

// let age = 25;
// // Klasyczny zapis
// age = age + 1;
// console.log(age); // 26
// Na początku wykonywana jest pierwsza część wyrażenia, do obecnej wartości age (25) dodawane jest 1 i w wyniku tego działania jako nowa wartość zapisywane jest 26

// Wykonamy refaktoryzację powyższego kodu, wykorzystując złożony operator przypisania z dodawaniem.
// let age = 25;
// // += to złożony operator który dodaje do obecnej wartości zmiennej liczbę po prawej, jednocześnie zapisując wynik do zmiennej
// age += 1;
// console.log(age); // 26

// Zamień wyrażenia ze standardowymi operatorami matematycznymi na złożone operatory przypisania - dodawanie, odejmowanie, mnożenie i dzielenie.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//Ex 18

// Stanowisko sprzedaży droidów do wykonywania napraw jest coraz bliżej bycia gotowym do rozpoczęcia pracy, musimy napisać program dla działu sprzedaży.

// Funkcja makeTransaction(pricePerDroid, orderedQuantity, customerCredits) dokonuje transakcji sprzedaży droidów i zwraca wiadomość o rezultacie operacji. Deklarujemy trzy parametry:

// pricePerDroid - cena jednego droida
// orderedQuantity - ilość zamówionych droidów
// customerCredits - saldo środków na koncie klienta
// Uzupełnij ją następującą funkcjonalnością:

// Zadeklaruj zmienną totalPrice i przypisz jej całkowitą wartość zamówienia (ilość droidów pomnożona przez cenę jednego droida)
// Dodaj następującą logikę sprawdzającą czy klient jest w stanie zapłacić za zamówienie
// jeśli kwota do zapłaty przewyższa ilość kredytów na koncie klienta, zapisz w zmiennej message string "Insufficient funds!";
// w przeciwnym wypadku, odejmij koszt zakupu z konta klienta i zapisz w zmiennej message wiadomość: "You ordered <orderedQuantity> droids, you have <customerCredits> credits left".
// Zadeklarowano funkcję makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Wywołanie makeTransaction(3000, 5, 23000) zwraca "You ordered 5 droids, you have 8000 credits left"
// Wywołanie makeTransaction(1000, 3, 15000) zwraca "You ordered 3 droids, you have 12000 credits left"
// Wywołanie makeTransaction(5000, 10, 8000) zwraca "Insufficient funds!"
// Wywołanie makeTransaction(2000, 8, 10000) zwraca "Insufficient funds!"
// Wywołanie makeTransaction(500, 10, 5000) zwraca "You ordered 10 droids, you have 0 credits left"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   const totalPrice = pricePerDroid * orderedQuantity;
//   let message;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `"You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left"`;
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 2300));
// console.log(makeTransaction(1000, 3, 150000));
// console.log(makeTransaction(2456, 67, 456365));
// console.log(makeTransaction());
// console.log(makeTransaction());

//Ex 19

// Konstrukcja `if...else` jest nieco ograniczona może sprawdzić i zareagować na spełnienie lub niespełnienie tylko jednego warunku.
// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Blok else...if pozwala dodać po else jeszcze jeden operator if z warunkiem. Na końcu instrukcji może znajdować się klasyczny blok else (bez kolejnego if-a), który wykona się tylko w wypadku, gdy żaden z warunków nie będzie true/truthy.

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500
// Podczas wykonywania takiego łańcucha, zatrzyma się on na pierwszym spełnionym (truthy) warunku. Kod znajdujący się w niespełnionych blokach nie wykona się.

// Funkcja checkPassword(password) otrzymuje hasło użytkownika w parametrze password, sprawdza je pod względem zgodności z hasłem administratora w zmiennej ADMIN_PASSWORD i zwraca wiadomość o rezultacie sprawdzenia, przechowywaną w zmiennej message.

// Jeśli argument dla parametru password wynosi null, oznacza to, że użytkownik anulował operację i w message zapisuje się łańcuch "Canceled by user!".
// Jeśli wartość parametru password jest zgodna z wartością ADMIN_PASSWORD, w zmiennej message przypisany zostaje łańcuch "Welcome!".
// Jeśli żaden z poprzednich warunków nie zostanie spełniony, w zmiennej message zapisuje się string "Access denied, wrong password!".
// Zadeklarowano funkcję checkPassword(password)
// Wywołanie checkPassword("mangohackzor") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword(null) zwraca "Canceled by user!"
// Wywołanie checkPassword("polyhax") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword("jqueryismyjam") zwraca "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

//Ex 20

// Funkcja checkStorage(available, ordered) sprawdza możliwość złożenia zamówienia i zwraca wiadomość o rezultacie. Deklarujemy dwa parametry:

// available - dostępna ilość towarów w magazynie
// ordered - ilość jednostek towaru w zamówieniu
// Wykorzystując rozgałęzienia, uzupełnij kod funkcji tak, aby:

// Jeżeli w zamówieniu jest zero sztuk towaru, to znaczy wartość parametru ordered jest równa 0, jako wartości zmiennej message zapisujemy string "There are no products in the order!".
// Jeżeli ilość towarów w zamówieniu jest większa niż ilość towarów dostępnych w magazynie, to w zmiennej message zapisujemy string "Your order is too large, there are not enough items in stock!".
// W przeciwnym razie w zmiennej message zapisujemy string "The order is accepted, our manager will contact you".
// Zadeklarowano funkcję checkStorage(available, ordered)
// Wywołanie checkStorage(100, 50) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(100, 130) zwraca "Your order is too large, there are not enough items in stock!"
// Wywołanie checkStorage(70, 0) zwraca "There are no products in the order!"
// Wywołanie checkStorage(200, 20) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(200, 250) zwraca "Your order is too large, there are not enough items in stock!"
// Wywołanie checkStorage(150, 0) zwraca "There are no products in the order!"

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//Ex21

// Operatory logiczne wykorzystywane są do sprawdzenia warunków z wieloma składowymi.

// Operator && konwertuje operandy po lewej i prawej do wartości typu boolean i zwraca jeden z nich. Lewy operator, jeśli jest on falsey i prawy w pozostałych przypadkach.

// wyrażenie && wyrażenie
// W następnym przykładzie oba warunki zwrócą true, dlatego wynikiem całego wyrażenia będzie true – zwrócona zostanie wartość prawego operatora.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// Jeżeli przynajmniej jeden z operandów jest falsey, rezultatem wyrażenia będzie ten operand.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false
// To znaczy logiczne "I" zatrzymuje się na fałszu i zwraca to, na czym się zatrzymało.

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true

// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(3 && true); // true
// console.log(true && 3); // 3
// Warto wiedzieć

// Zapamiętaj sześć wartości, które dla operatorów logicznych są falsy: `0`, `NaN`, `null`, `undefined`, pusty string `""` lub `''` i sama wartośc boolean `false`. Absolutnie wszystko pozostałe jest truthy.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ''
// console.log("Mango" && ""); // true && false -> ''
// console.log("Mango" && "Poly"); // true && true -> 'Poly'
// console.log("Poly" && "Mango"); // true && true -> 'Mango'

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

//Ex 22

// Operator || konwertuje wszystkie operandy do boolean typu danych i zwraca wartość jednego z nich. Lewy operand, jeśli jest truthy i prawy w pozostałych wypadkach.

// wyrażenie || wyrażenie
// W następnym przykładzie warunek po lewej zwróci true, dlatego rezultatem całego wyrażenia będzie true - zwrócona zostanie wartość pierwszego operandu, który jest truthy.

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true
// Tutaj rezultatem także będzie true, ponieważ przynajmniej jeden z operandów, w tym przypadku prawy, był truthy.

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true
// A tutaj żaden z warunków nie zostaje spełniony, dlatego otrzymujemy false - wartość ostatniego operandu.

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false
// Powyższe przykłady pokazują, że logiczne "LUB" zatrzymuje się na pierwszej napotkanej wartości truthy i zwraca to, na czym się zatrzymało lub ostatni operand.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('star'));
// console.log(checkIfCanAccessContent('vip'));

//Ex 23

// Wszystkie operatory, które rozważaliśmy do tej pory, były binarne. Tzn. składały się z dwóch operandów: lewego i prawego. Logiczna negacja – to operator jednoargumentowy, wykonujący operację na jednym operandzie po prawej.

// ! wyrażenie
// Operator ! przekształca operand w wartość boolean i powoduje inwersję – zmienia go na przeciwny: !truthy -> false lub !falsy -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !'Mango' -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !'' -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(10, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

//Ex 24  OBLICZANIE ZNIŻKI

// function getDiscount(totalSpend) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpend >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpend <= 50000 && totalSpend >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpend <= 20000 && totalSpend >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpend < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(23567));

//Ex 25  TERNARY OPERATOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Operator ternary to składnia pozwalająca skrócić zapis instrukcji if...else, najczęściej gdy jedna i ta sama zmienna musi mieć przypisane różne wartości w zależności od prostego warunku logicznego.

// <warunek> ? <wyrażenie jeśli warunek prawdziwy> : <wyrażenie jeśli warunek fałszywy>
// Zapis ten interpretowany jest w następujący sposób:

// Obliczana jest wartość warunek.
// Jeśli warunek jest truthy, to znaczy przekształca się w true, zwracany jest wynik wyrażenia lub wartość po znaku ?.
// Jeśli warunek jest f, zwracany jest wynik wyrażenia lub wartość po znaku :.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"
// Wykonamy refaktor, zamieniając if...else na operator warunkowy.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"
// Uwaga
// Operator trójargumentowy powinien być wykorzystywany w prostych operacjach przypisywania lub zwracania. Stosowanie go jako zamiennika bardziej skomplikowanej logiki `if...else` jest złą praktyką (antywzorzec).

// Wykonaj refaktor rozwiązania zadania «Magazyn towarów», zamieniając instrukcję if...else na ternary operator.

// Zadeklarowano funkcję checkStorage(available, ordered).
// Wykorzystany ternary operator.
// Wywołanie checkStorage(100, 50) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(100, 130) zwraca "Not enough goods in stock!"
// Wywołanie checkStorage(200, 20) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(200, 150) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(150, 180) zwraca "Not enough goods in stock!"

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   //if (ordered > available) {
//   //message = "Not enough goods in stock!";
//   //} else {
//   //message = "The order is accepted, our manager will contact you";
//   //}
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// //THIS IS VERY IMPORTANT, TRY TO REMEMBER IT!!!!!!!!!!!!!!!!!!!!!!!!

//Ex 26

// Funkcja checkPassword(password) porównuje przekazane jej hasło (parametr password) z zapisanym hasłem administratora (stała ADMIN_PASSWORD) i zwraca string z wiadomością o rezultacie.

// Wykorzystując ternary operator, uzupełnij funkcję tak, aby:

// Jeżeli wartości password i ADMIN_PASSWORD są takie same, przypisz zmiennej message string "Access is allowed".
// W przeciwnym wypadku przypisz message string "Access denied, wrong password!".
// Zadeklarowno funkcję checkPassword(password)
// Wykorzystano operator ternary
// Wywołanie checkPassword("jqueryismyjam") zwraca "Access is allowed"
// Wywołanie checkPassword("angul4r1sl1f3") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword("r3actsux") zwraca "Access denied, wrong password!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   message =
//     ADMIN_PASSWORD === password
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));
//-------------------------------------------------------
//Ex 27   SWITCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// W niektórych przypadkach, stosowanie skomplikowanych rozgałęzień if...else można uniknąć, wykorzystując bardziej "płaską" i czytelniejszą składnię instrukcji rozgałęzienia switch.

// Switch możemy stosować jedynie w ograniczonej ilości przypadków, gdy mamy tylko jedną zmienną od której zależy kod, a wszystkie warunki logiczne to precyzyjne (===) porównanie

// switch (wartość) {
//   case wartość:
//     instrukcje;
//     break;

//   case wartość:
//     instrukcje;
//     break;
// }
// Instrukcja ta składa się z bloku switch(variable) – to, co trzeba porównać i instrukcji dla każdego z obsługiwanych przez przypadków w postaci: case wartość: Dla porównania stosowany się operator równości ===. Nie możemy stosować żadnego innego operatora.

// Zmienna w bloku switch(variable) – string lub liczba, które porównuje się przy pomocy ścisłej równości z wszystkimi wartościami w blokach case wartość: zachowując kolejność od góry do dołu.

// Operator break w zakończeniu każdego bloku case jest niezbędny, aby przerwać dalsze sprawdzanie i przejść od razu do kodu poza instrukcją switch w tym przypadku, gdy dany przypadek został spełniony.

// Funkcja getSubscriptionPrice(type) otrzymuje łańcuch z typem subskrypcji użytkownika (parametr type), porównuje go pod z trzema możliwymi typami comiesięcznej subskrypcji i zwraca cenę przechowywaną w zmiennej price.

// Jeżeli znaczenie parametru type to string:

// "starter" - cena subskrypcji 0 kredytów.
// "professional" - cena subskrypcji 20 kredytów.
// "organization" - cena subskrypcji 50 kredytów.
// Na początku w ciele funkcji była instrukcja if...else, która wyglądła następująco.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Po refaktorze instrukcja if..else została zamieniona na switch. Uzupełnij kod instrukcji switch, aby funkcja zwracała takie same wartości co wcześniej..

// Zadeklarowano funkcję getSubscriptionPrice(type)
// Wywołanie getSubscriptionPrice("professional") zwraca liczbę 20
// Wywołanie getSubscriptionPrice("organization") zwraca liczbę 50
// Wywołanie getSubscriptionPrice("starter") zwraca liczbę 0

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));
//-------------------------------------------------------

//Ex 28

// Jeśli żaden warunek w bloku switch nie został spełniony, należy zapisać domyślne zachowanie instrukcji, podobnie, jak w bloku else dla instrukcji if...else. W tym celu po wszystkich blokach case dodaje się blok default.

// switch (wartość) {
//   case wartość:
//     instrukcje;
//     break;

//   case wartość:
//     instrukcje;
//     break;

//   default:
//     instrukcje;
// }
// Operator break po bloku default nie jest potrzebny, ponieważ to i tak ostatnie co może zostać wykonane w instrukcji switch.

// Funkcja checkPassword(password) otrzymuje hasło w parametrze password, porównuje je z hasłem administratora w stałej ADMIN_PASSWORD i zwraca wiadomość o rezultacie porównania, zapisaną w zmiennej message.

// Jeżeli parametru password posiada wartość:

// równą null oznacza to, że użytkownik anulował operację i w message zapisujemy string "Canceled by user!".
// jest zgodne z wartością stałej ADMIN_PASSWORD, w zmiennej message przypisywany jest string "Welcome!".
// nie odpowiada żadnemu z wcześniejszych warunków, w zmiennej message zapisujemy jest string "Access denied, wrong password!".
// Przeprowadź refaktor kodu, zamieniając instrukcję if..else na switch (nie zapomnij o bloku default).

// Zadeklarowano funkcję checkPassword(password)
// Wywołanie checkPassword("mangohackzor") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword(null) zwraca "Canceled by user!"
// Wywołanie checkPassword("polyhax") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword("jqueryismyjam") zwraca "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome';
//       break;
//     default:
//       message = 'Acces denied, wrong password';
//   }
//   return message;
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

//Ex 29 ZADANIE: DOSTAWA TOWARU

// Funkcja getShippingCost(country) powinna sprawdzać możliwość dostawy towaru do kraju użytkownika (parametr country) i zwracać wiadomość o rezultacie zapisaną w zmiennej message. Obowiązkowo wykorzystaj instrukcję switch.

// Format zwracanego stringa to "Shipping to <country> will cost <price> credits"

// Lista krajów i koszt dostawy:

// China - 100 kredytów
// Chile - 250 kredytów
// Australia - 170 kredytów
// Jamaica - 120 kredytów
// Z listy wynika, że dostawa nie jest dostępna dla każdego kraju. Jeżeli wskazanego państwa nie ma na liście, to funkcja powinna zwrócić string "Sorry, there is no delivery to your country"

// Zadeklarowano funkcję getShippingCost(country)
// W funkcji wykorzystana jest instrukcja switch
// Wywołanie getShippingCost("Australia") zwraca
// "Shipping to Australia will cost 170 credits"
// Wywołanie getShippingCost("Germany") zwraca "Sorry, there is no delivery to your country"
// Wywołanie getShippingCost("China") zwraca "Shipping to China will cost 100 credits"
// Wywołanie getShippingCost("Chile") zwraca "Shipping to Chile will cost 250 credits"
// Wywołanie getShippingCost("Jamaica") zwraca "Shipping to Jamaica will cost 120 credits"
// Wywołanie getShippingCost("Sweden") zwraca "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;
//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;
//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));

//Ex 30 STRINGS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// W celu poznania długości stringa, to znaczy ilości znaków z których się składa, w stringach dostępna jest własność length, wartość której można otrzymać po zwróceniu się do niej przez kropkę po nazwie zmiennej lub po literale łańcuchowym.

// const productName = "Repair droid";

// // Jeśli w zmiennej przechowywany jest string
// console.log(productName.length); // 12

// // Jeśli jest to zapis w postaci literału łańcuchowego
// console.log("Repair droid".length); // 12

// Funkcja getNameLength(name) przyjmuje nazwę (parametr name) i zwraca string, w którym zawarta jest jego długość. Uzupełnij szablon w zmiennej message długością stringa będącego wartością parametru name.

// Zadeklarowano funkcję getNameLength(name)
// Wywołanie funkcji getNameLength("Poly") zwraca "Name Poly is 4 characters long"
// Wywołanie funkcji getNameLength("Harambe") zwraca "Name Harambe is 6 characters long"
// Wywołanie funkcji getNameLength("Billy") zwraca "Name Billy is 5 characters long"
// Wywołanie funkcji getNameLength("Joe") zwraca "Name Joe is 3 characters long"

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }
// console.log(getNameLength('Poly'));
// console.log(getNameLength('Harambe'));
// console.log(getNameLength('Billy'));
// console.log(getNameLength('Joe'));

//Ex 31

// String (Łańcuch) — to indeksowany zbiór składający się z zera lub większej ilości symboli, zamkniętych w pojedynczym, podwójnym lub między grawisami (backticks).

// Indeksacja elementów łańcucha zaczyna się od zera. Na przykład w stringu "JavaScript" litera 'J' znajduje się na pozycji z indeksem 0, a 't' z indeksem 9. W takim przypadku długość stringa "JavaScript" jest równa 10. Indeks ostatniego elementu jest zawsze o jeden mniejszy niż jego długość.

// Dla uzyskania dostępu do wartości elementu łańcucha wykorzystuje się składnię nawiasu kwadratowego string[index].

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"
// Poszczególnych znaków stringa nie można przy pomocy tego zapisu zmieniać.

// Uzupełnij kod przypisując zadeklarowanym zmiennym odpowiednie wartości dla stringa znajdującego się w zmiennej course.

// courseTopicLength - długość łańcucha.
// firstElement - pierwszy symbol łańcucha.
// lastElement - ostatni symbol łańcucha.
// Zadeklarowano zmienną courseTopic
// Wartość zmiennej courseTopic to string "JavaScript essentials"
// Zadeklarowano zmienną courseTopicLength
// Wartość zmiennej courseTopicLength to liczba 21
// Zadeklarowano zmienną firstElement
// Wartość zmiennej firstElement to string "J"
// Zadeklarowano zmienną lastElement
// Wartość zmiennej lastElement to string "s"

// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(firstElement);
// console.log(courseTopicLength);
// console.log(lastElement);

//Ex 32

// Metodę string slice(startIndex, endIndex) wykorzystuje się do utworzenia kopii części lub całego stringa. Tworzy ona kopię znaków w łańcuchu od startIndex i do, ale nie włączając w to endIndex i zwraca nowy string.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// Funkcja getSubstring(string, length) przyjmuje string i zwraca substring od zerowego symbolu o długości length. Deklarujemy dwa parametry:

// string - oryginalny string
// length - długość substringa który chcemy otrzymać z oryginalnie podanego stringa
// Przypisz zmiennej substring wyrażenie utworzenia substring długości length symboli (od początku) z łańcucha string.

// Zadeklarowano funkcję getSubstring(string, length)
// Wywołanie funkcji getSubstring("Hello world", 3) zwraca "Hel"
// Wywołanie funkcji getSubstring("Hello world", 6) zwraca "Hello"
// Wywołanie funkcji getSubstring("Hello world", 8) zwraca "Hello wo"
// Wywołanie funkcji getSubstring("Hello world", 11) zwraca "Hello world"
// Wywołanie funkcji getSubstring("Hello world", 0) zwraca ""

// function getSubstring(string, length) {
//   const substring = string.substring(0, length);
//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

//Ex 33 ZADANIE: FORMATOWANIE WIADOMOŚCI

// Funkcja formatMessage(message, maxLength) przyjmuje string (prametr message) i formatuje go, jeżeli długość przekracza wartość w parametrze maxLength.

// Uzupełnij kod funkcji tak, że jeżeli długość stringa:

// nie przekracza wartości maxLength, funkcja zwraca go w oryginalnej wersji.
// przekracza maxLength, wtedy funkcja zwraca łańcuch do maxLength symboli i dodaje na końcu wielokropek "...", po czym zwraca skróconą wersję.
// Zadeklarowano funkcję formatMessage(message, maxLength)
// Wywołanie funkcji formatMessage("Curabitur ligula sapien", 16) zwraca "Curabitur ligula..."
// Wywołanie funkcji formatMessage("Curabitur ligula sapien", 23) zwraca "Curabitur ligula sapien"
// Wywołanie funkcji formatMessage("Vestibulum facilisis purus nec", 20) zwraca "Vestibulum facilisis..."
// Wywołanie funkcji formatMessage("Vestibulum facilisis purus nec", 30) zwraca "Vestibulum facilisis purus nec"
// Wywołanie funkcji formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) zwraca "Nunc sed turpis..."
// Wywołanie funkcji formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) zwraca "Nunc sed turpis a felis in nunc fringilla"

// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//     return result;
//   }
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

//Ex 34

// Czasem chcemy przekształcić wszystkie litery w naszym stringu na tkzw małe lub duże litery (majuskuły i minuskuły). Może się to przydać na przykład w trakcie wyszukiwania po słowie kluczowym, gdy użytkownik wprowadza łańcuch 'saMsUng', a porównać chcemy go z 'samsung' lub 'SAMSUNG'.

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false
// Aby użytkownik nie musiał martwić się wpisywaniem odpowiedniego rodzaju liter, można przeprowadzić "standaryzację" wprowadzonego przez użytkownika stringa, to znaczy przekształcić wszystkie znaki na wielkie lub małe. Metody string toLowerCase() i toUpperCase() zwrócą nowy string w odpowiednim formacie, nie zmieniając oryginalnego.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// Funkcja normalizeInput(input) przyjmuje string (parametr input) i zwraca taki sam string, ale w odpowiednim formacie. Przypisz zmiennej normalizedInput wyrażenie utworzenia stringa w formacie minuskuł z parametru input.

// Zadeklarowano funkcję normalizeInput(input)
// Wywołanie funkcji normalizeInput("Hello world") zwraca "hello world"
// Wywołanie funkcji normalizeInput("This ISN'T SpaM") zwraca "this isn't spam"
// Wywołanie funkcji normalizeInput("Big SALE") zwraca "big sale"

// function normalizedInput(input) {
//   const normalizedInput = input.toUpperCase();
//   return normalizedInput;
// }
// console.log(normalizedInput('Hello world'));
// console.log(normalizedInput("This ISN'T SpaM"));
// console.log(normalizedInput('Big SALE'));

//Ex 35

// Metoda łańcuchów includes(substring) sprawdza, czy substring wchodzi w skład stringa. Zwraca wartość boolean true jeżeli wchodzi i false jeśli nie. Wielkość znaków w łańcuchu i substringu ma znaczenie, tak jak na przykład litera "a" nie jest równa literze "А".

// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("droid")); // true
// console.log(productName.includes("Droid")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false

// Funkcja checkForName(fullname, name) przyjmuje dwa parametry i zwraca wartość boolean true lub false - rezultat sprawdzenia, czy substring name wchodzi w skład stringa fullName.

// fullname - pełne imie składające się z dwóch słów (pierwszego imienia i nazwiska) oddzielonych spacją. oddzielonych spacją.
// name - imię dla sprawdzenia, czy wchodzi w skład pełnego imienia i nazwiska.
// Przypisz zmiennej result rezultat sprawdzenia, czy imie (parametr name) wchodzi w skład pełnego imienia i nazwiska (parametr fullName). Funkcja nie powinna formatować parametrów pod kątem wielkości liter, to znaczy "Piotr" i "piotr" powinny być traktowane jako różne imiona.

// Zadeklarowana funkcja checkForName(fullName, name).
// Wywołanie funkcji checkForName("Egor Kolbasov", "Egor") zwraca true
// Wywołanie funkcji checkForName("Egor Kolbasov", "egor") zwraca false
// Wywołanie funkcji checkForName("Egor Kolbasov", "egOr") zwraca false
// Wywołanie funkcji checkForName("Egor Kolbasov", "Zhenya") zwraca false
// Wywołanie funkcji checkForName("Vadim Nekrasov", "Vadim") zwraca true
// Wywołanie funkcji checkForName("Vadim Nekrasov", "vadim") zwraca false
// Wywołanie funkcji checkForName("Vadim Nekrasov", "Dima") zwraca false

// function checkForName(fullname, name) {
//   const result = fullname.includes(name);

//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'egOr'));
// console.log(checkForName('Egor Kolbasov', 'Zhenya'));
// console.log(checkForName('Vadim Nekrasov', 'Vadim'));
// console.log(checkForName('Vadim Nekrasov', 'vadim'));
// console.log(checkForName('Vadim Nekrasov', 'Dima'));

//Ex 36 ZADANIE: SPRAWDZENIE SUMY

// Funkcja checkForSpam(message) przyjmuje string (parametr message), sprawdza go pod kątem zawierania zakazanych słów spam i sale, i zwraca rezultat sprawdzenia. Słowa w stringu message mogą być w dowolnym formacie, na przykład SPAM lub sAlE.

// Jeżeli znalezione zostanie zakazane słowo (spam lub sale) to funkcja zwraca wartość boolean true.
// Jeżeli w łańcuchu nie ma zakazanych słów, funkcja zwraca wartość boolean false.
// Zadeklarowano funkcję checkForSpam(message).
// Wywołanie funkcji checkForSpam("Latest technology news") zwraca false
// Wywołanie funkcji checkForSpam("JavaScript weekly newsletter") zwraca false
// Wywołanie funkcji checkForSpam("Get best sale offers now!") zwraca true
// Wywołanie funkcji checkForSpam("Amazing SalE, only tonight!") zwraca true
// Wywołanie funkcji checkForSpam("Trust me, this is not a spam message") zwraca true
// Wywołanie funkcji checkForSpam("Get rid of sPaM emails. Our book in on sale!") zwraca true
// Wywołanie funkcji checkForSpam("[SPAM] How to earn fast money?") zwraca true

// function checkForSpam(message) {
//   let result;
//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// const value = 5;
// const result = value > 100 ? 'High' : value > 5 ? 'Moderate' : 'Low';
// console.log(result);
