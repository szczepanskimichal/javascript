'use strict';
// Ex 1 "early return"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// W funkcji może pojawić się więcej niż jeden operator return, zazwyczaj pojawi się on wcześniej lub później w zależności od argumentów. Najważniejsze, aby pamiętać, że wykonanie funkcji zostaje przerwane, gdy funkcja coś "zwróci" – cały kod po tym zostanie zignorowany dla danego wywołania funkcji.

// Wywołamy znaną nam już funkcję sprawdzenia pełnoletności. Funkcja działa, ale znajduje się w niej "zbędny" kod, co oznacza, że ciało funkcji można zoptymalizować. W tym wypadku zastosujemy podejście (wzór) "early return" ("wcześniejszy zwrot").

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "Jesteś pełnoletni";
//   } else {
//     message = "Nie jesteś pełnoletni";
//   }

//   return message;
// }
// Jeśli warunek if zostaje wypełniony, to znaczy jest truthy, zwracamy string "You are an adult" i kod niżej nie zostanie już wykonany.
// Jeśli warunek if nie zostaje wypełniony, to znaczy sprowadza się do falsy, zwracamy string "You are a minor".
// Wykorzystując wzór "early return" i to, że wykonanie funkcji zostaje przerwane na operatorze return, pozbywamy się zbędnej zmiennej i bloku else. Takie podejście pomaga "spłaszczyć" blok funkcji i pozbyć się niepotrzebnych instrukcji warunkowych

// Zapisz warunek w instrukcji if tak, aby funkcja spełniła wymagania.

// Zadeklarowano funkcję checkAge(age).
// W wyrażeniu sprawdzenia wieku wykorzystywany jest operator >=
// Wywołanie checkAge(20) zwraca "You are an adult"
// Wywołanie checkAge(8) zwraca "You are a minor"
// Wywołanie checkAge(14) zwraca "You are a minor"
// Wywołanie checkAge(38) zwraca "You are an adult"
// W ciele funkcji jest tylko jedna instrukcja if
// W ciele funkcji nie ma instrukcji else lub else if

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//Ex 2 SPRAWDZENIE HASŁA (WCZEŚNIEJSZY ZWROT)

// Funkcja checkPassword otrzymuje hasło użytkownika i parametr password, porównuje go z hasłem administratora w zmiennej ADMIN_PASSWORD i zwraca wiadomość o rezultacie sprawdzenia.

// Przeprowadź refaktor kodu funkcji checkPassword, wykorzystując wzór "early return":

// usuń zmienną message
// usuń else
// kod powinien działać tak samo, jak przed refaktorem
// Zadeklarowano funkcję checkPassword(password)
// Wywołanie checkPassword("mangohackzor") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword("polyhax") zwraca "Access denied, wrong password!"
// Wywołanie checkPassword("jqueryismyjam") zwraca "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) return 'Welcome';
//   return 'Access denied, wrong password';
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

//Ex 3  MAGAZYN TOWARÓW 3.0

// Funkcja checkStorage sprawdza możliwość złożenia zamówienia i zwraca wiadomość o rezultacie. Przyjmuje dwa parametry:

// available - dostępna ilość towarów w magazynie
// ordered - ilość jednostek towaru w zamówieniu
// Przeprowadź refaktor kodu funkcji checkStorage, wykorzystując wzór "early return".

// Zadeklarowano funkcję checkStorage(available, ordered)
// Wywołanie checkStorage(100, 50) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(100, 130) zwraca "Your order is too large, not enough goods in stock!"
// Wywołanie checkStorage(70, 0) zwraca "Your order is empty!"
// Wywołanie checkStorage(200, 20) zwraca "The order is accepted, our manager will contact you"
// Wywołanie checkStorage(200, 250) zwraca "Your order is too large, not enough goods in stock!"
// Wywołanie checkStorage(150, 0) zwraca "Your order is empty!"

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//Ex 4 TABLICE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Tablice wykorzystuje się do przechowywania uporządkowanej kolekcji elementów. Deklaruje się je najczęściej przy pomocy kwadratowych nawiasów [] - tak zwanych literałów tablicy. Wewnątrz nawiasu każdy element tablicy oddziela się przecinkiem.

// const planets = ["Earth", "Mars", "Venus"];
// Warto wiedzieć
// Przy deklarowaniu zmiennej dla obiektu lub tablicy programiści zazwyczaj wykorzystują słowo kluczowe const. Robią to, aby przypadkiem nie nadpisać całej tablicy, ponieważ próba nadpisania pokaże nam błąd jeszcze podczas pisania kodu.

// Zadeklaruj zmienną fruits i przypisz jej elementy/owoce - stringi "apple", "plum", "pear" i "orange".

// Zadeklarowano zmienną fruits
// Wartość zmiennej fruits to tablica ["apple", "plum", "pear", "orange"]

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);

//Ex 5

// W celu uzyskania dostępu do wartości elementu tablicy zazwyczaj używa się składni kwadratowych nawiasów array[index]. Między nazwą zmiennej tablicy i kwadratowym nawiasem nie powinno być spacji.

// Uwaga
// Indeksowanie (liczenie) elementów tablicy zaczyna się od zera. Podobnie więc jak dla stringa, ostatni indeks jest o jeden mniejszy od długości tablicy.

// const planets = ["Earth", "Mars", "Venus"];
// planets[0]; // "Earth"
// planets[2]; // "Venus"

// Zadeklaruj trzy zmienne i przypisz każdej z nich wartość, wykorzystując notację kwadratowych nawiasów.

// Nazwa zmiennej	Wartość zmiennej
// firstElement	pierwszy element tablicy
// secondElement	drugi element tablicy
// lastElement	ostatni element tablicy
// Zadeklarowano zmienną firstElement
// Wartość zmiennej firstElement to string "apple"
// Zadeklarowana zmienna secondElement
// Wartość zmiennej secondElement to string "plum"
// Zadeklarowana zmienna lastElement
// Wartość zmiennej lastElement to string "orange"

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// // Change code below this line
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// Ex 6

// W odróżnieniu od stringów, elementy tablicy można zmieniać używając ich indeksu, kwadratowych nawiasów i przypisując inną wartość bezpośrednio do elementu.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];

// Zmień wartość elementów z indeksem 1 i 3. Zamień "plum" na "peach", a "orange" na "banana".

// Zadeklarowano zmienną fruits
// Wartość zmiennej fruits to tablica ["apple", "peach", "pear", "banana"]

//Ex 7

// Zadeklaruj zmienną fruitsArrayLength i przypisz jej długość tablicy fruits, wykorzystując właściwość length.

// Zadeklarowano zmienną fruitsArrayLength
// Wartość zmiennej fruitsArrayLength to liczba 4

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// console.log(fruits.length);
// console.log(fruits[3]);
// console.log(fruits);

//Ex 8

// Tablice w kodzie najczęściej będą dynamicznie zmieniać swoją wielkość. W celu otrzymania wartości ostatniego elementu pamiętamy o podstawowej zasadzie – rozmiar tablicy jest zawsze o jeden większy niż indeks ostatniego elementu. Wykorzystując więc formułę jako indeks długośćTablicy - 1 możemy otrzymać wartość ostatniego elementu tablicy nie znając jej wielkości w momencie pisania kodu.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

// Zadeklaruj dwie zmienne:

// Nazwa zmiennej	Oczekiwana wartość
// lastElementIndex	Indeks ostatniego elementu tablicy fruits przez długość_tablicy - 1
// lastElement	Wartość ostatneigo elementu tablicy
// Zadeklarowano zmienną lastElementIndex
// Wartość zmiennej lastElementIndex to liczba 3
// Zadeklarowana zmienną lastElement
// Wartość zmiennej lastElement to łańcuch "banana"

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line
// console.log(fruits[lastElementIndex]);

//Ex 9 SKRAJNE ELEMENTY TABLICY

// Napisz funkcję getExtremeElements(array), która przyjmuje jeden parametr array – tablica elementów dowolnej długości. Funkcja powinna zwracać tablicę składającą się z dwóch elementów – pierwszego i ostatniego elementu wartości parametru array.

// Zadeklarowano funkcję getExtremeElements(array)
// Wywołanie getExtremeElements([1, 2, 3, 4, 5]) zwraca [1, 5]
// Wywołanie getExtremeElements(["Earth", "Mars", "Venus"]) zwraca ["Earth", "Venus"]
// Wywołanie getExtremeElements(["apple", "peach", "pear", "banana"]) zwraca ["apple", "banana"]

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements);

// function getExtremeElements(array) {
//   //sprawdzam czy tablica ma 2 elementy
//   if (array.length < 2) {
//     throw new Error('Array must have at least two elements.');
//   }
//   //teraz musze pobrac 1 i ostatni element
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   // a teraz glupi michal musi to wypluc na monitor
//   return [firstElement, lastElement];
// }

//Ex 10

// Metoda split(delimiter) pozwala zamienić string w talibcę, "dzieląc" go separatorem (delimiter). Jeśli separatorem jest pusty string, wtedy otrzymamy po prostu tablicę z pojedynczymi znakami jako elementami. Separatorem może być string składający się z zera, jednego lub więcej znaków

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

// Uzupełnij kod funkcji splitMessage(message, delimiter) tak, aby najpierw przypisywała do zmiennej words, a następnie zwracała rezultat podzielenia wartości parametru message zgodnie z separatorem delimiter.

// Zadeklarowano funkcję splitMessage(message, delimiter)
// Wywołanie splitMessage("Mango hurries to the train", " ") zwraca ["Mango", "hurries", "to", "the", "train"]
// Wywołanie splitMessage("Mango", "") zwraca ["M", "a", "n", "g", "o"]
// Wywołanie splitMessage("best_for_week", "_") zwraca ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('best for week', '&&'));

//Ex 11 GRAWEROWANIE BIŻUTERII

// Serwis grawerowania biżuterii potrzebuje funkcji, która automatycznie policzy cenę grawerunku w zależności od ilości słów i ceny za słowo.

// Zadeklarowano funkcję calculateEngravingPrice(message, pricePerWord). Przyjmuje ona string składający się ze słów oddzielonych tylko spacjami (parametr message) i cenę wygrawerowania jednego słowa (parametr pricePerWord).

// Zaprogramuj funkcję, aby zwracała całkowity koszt grawerunku wszystkich słów w parametrze.

// Zadeklarowano funkcję calculateEngravingPrice(message, pricePerWord)
// Wywołanie calculateEngravingPrice("JavaScript is in my blood", 10) zwraca 50
// Wywołanie calculateEngravingPrice("JavaScript is in my blood", 20) zwraca 100
// Wywołanie calculateEngravingPrice("Web-development is creative work", 40) zwraca 160
// Wywołanie calculateEngravingPrice("Web-development is creative work", 20) zwraca 80

// function calculateEngravingPrice(message, pricePerWord) {
//   let words = [];
//   words = message.split(` `);
//   return words.length * pricePerWord;
// }
// console.log(
//   calculateEngravingPrice(
//     'kocham marysie bardzo, to jest moj ukochany koteczek',
//     200
//   )
// );

//Ex 12

// Metoda tablicowa join(delimiter) pozwala połączyć elementy tablicy w string. W stringu elementy będą oddzielone łańcuchem przekazanym jako delimiter. Jest to operacja odwrotna do metody stringów split(delimiter). Domyślnie funkcja join użyje "," do połączenia elementów jeśli nie podamy innego argumentu.

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'

// Uzupełnij kod funkcji makeStringFromArray(array, delimiter) tak, aby zwracał w zmiennej string rezultat połączenia elementów tablicy array z separatorem delimiter.

// Zadeklarowano funkcję makeStringFromArray(array, delimiter)
// Wywołanie makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") zwraca "Mango hurries to the train"
// Wywołanie makeStringFromArray(["M", "a", "n", "g", "o"], "")) zwraca "Mango"
// Wywołanie makeStringFromArray(["top", "picks", "for", "you"], "_") zwraca "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   return string;
// }
// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// );
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));

//Ex 13 GENERATOR SLUG

// Slug - to inaczej unikalny identyfikator, który jest wykorzystywany między innymi przy tworzeniu stron internetowych dla utworzenia czytelnych ale poprawnych adresów URL.

// Na przykład, zamiast tego, aby użytkownik zobaczył w adresie mysite.com/posts/1q8fh74tx, można utworzyć slug z nazwy artykułu. W rezultacie otrzymany adres będzie łatwiejszy do odczytania: mysite.com/posts/arrays-for-begginers, ale nadal poprawny jako URL.

// Uwaga
// Slug jest zawsze łańcuchem składającym się z małych liter, którego słowa oddzielone są dywizem.

// Napisz funkcję slugify(title), która przyjmuje tytuł artykułu (parametr title), i zwraca slug utworzony z tego stringa.

// Wartością parametru title będą stringi, w których słowa oddzielone są tylko spacjami
// Wszystkie symbole slug powinny być zapisane małymi literami
// Wszystkie słowa slug powinny być oddzielone myślnikiem
// Zadeklarowano funkcję slugify(title)
// Wywołanie slugify("Arrays for begginers") zwraca "arrays-for-begginers"
// Wywołanie slugify("English for developer") zwraca "english-for-developer"
// Wywołanie slugify("Ten secrets of JavaScript") zwraca "ten-secrets-of-javascript"
// Wywołanie slugify("How to become a JUNIOR developer in TWO WEEKS") zwraca "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//     return title.toLowerCase().replace(/ /g, '-');
//   }
//console.log(slugify("Ten secrets of JavaScript"));

//Ex 14

// Metoda slice(begin, end) zwraca nową tablicę zawierającą (shallow/płytką) kopię części oryginalnej tablicy, nie zmieniając jej. Kopia powstaje od begin i do, jednak nie włączając, end - gdzie begin i end to indeksy elementów oryginalnej tablicy.

// Jeśli begin i end nie są wskazane, utworzona zostanie pełna kopia oryginalnej tablicy.
// Jeśli nie jest wskazany end, kopiowanie zacznie się od begin i przebiegnie do końca oryginalnej tablicy.
// Jeśli wartość begin jest negatywna, a end nie była wskazana, zostanie skopiowane ostatnie begin elementów.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// Uzupełnij kod tak, aby zmienne zawierały kopie oryginalnej tablicy fruits.

// firstTwoEls - tablica składająca się z dwóch pierwszych elementów tablicy fruits
// nonExtremeEls - tablica składająca się ze wszystkich elementów, oprócz pierwszego i ostatniego elementu tablicy fruits
// lastThreeEls - tablica składająca się z trzech ostatnich elementów tablicy fruits
// Zadeklarowano zmienną fruits
// Wartość zmiennej fruits to tablica ["apple", "plum", "pear", "orange", "banana"]
// Zadeklarowano zmienną firstTwoEls
// Wartość zmiennej firstTwoEls to tablica ["apple", "plum"]
// Zadeklarowano zmienną nonExtremeEls
// Wartość zmiennej nonExtremeEls to tablica ["plum", "pear", "orange"]
// Zadeklarowano zmienną lastThreeEls
// Wartość zmiennej lastThreeEls to tablica ["pear", "orange", "banana"]
// Do zmiennej lastThreeEls przypisana jest kopia tablicy fruits po zastosowaniu metody slice z prawidłowymi argumentami

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstElement = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastElement = fruits.slice(-3);
// console.log(fruits.firstElement);

// Ex 15 METODA CONCAT()

// METODA CONCAT()
// Teoria

// Metoda concat wykorzystywana jest do połączenia dwóch lub więcej tablic. Nie zmienia tablicy, na której zostaje wywołana, a zwraca nową. Kolejność argumentów metody wpływa na kolejność elementów nowej tablicy.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// Uzupełnij kod tak, aby w zmiennej allClients utworzyła się tablica ze wszystkich elementów tablic oldClients i newClients.

// Zadeklarowano zmienną oldClients
// Wartość zmiennej oldClients to tablica ["Mango", "Ajax", "Poly", "Kiwi"]
// Zadeklarowano zmienną newClients
// Wartość zmiennej newClients to tablica ["Peach", "Houston"]
// Zadeklarowano zmienną allClients
// Wartość zmiennej allClients to tablica ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Zmiennej allClients przypisano tablicę po zastosowaniu metody concat z prawidłowymi argumentami

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(newClients);
// console.log(oldClients.concat(newClients));
// console.log('jakies to pojebane, ale postaramsie zrozumiec to pozniej');

//Ex 16 POŁĄCZENIE TABLIC

// Napisz funkcję makeArray(firstArray, secondArray, maxLength) tworzącą nową tablicę ze wszystkimi elementami podanych tablic firstArray i secondArray. Parametr maxLength będzie zawierał maksymalną możliwą długość nowej tablicy.

// Jeśli ilość elementów nowej tablicy przewyższa maxLength, funkcja powinna zwrócić kopię tablicy o długości maxLength elementów. W przeciwnym razie funkcja powinna zwrócić nową tablicę w całości.

// Zadeklarowano funkcję makeArray(firstArray, secondArray, maxLength)
// Wywołanie makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) zwraca ["Mango", "Poly", "Ajax"]
// Wywołanie makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) zwraca ["Mango", "Poly", "Houston", "Ajax"]
// Wywołanie makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) zwraca ["Mango", "Ajax", "Chelsea"]
// Wywołanie makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) zwraca ["Earth", "Jupiter"]
// Wywołanie makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) zwraca ["Earth", "Jupiter", "Neptune", "Uranus"]
// Wywołanie makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) zwraca []
// Wywołanie funkcji makeArray() z losowymi tablicami i losową liczbą zwraca prawidłową tablicę

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   }

//   return newArray;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

// Ex 17

// Pętle z zasady wykorzystywane są do wielokrotnego powtórzenia fragmentu kodu. Zadeklarowanie pętli for składa się z trzech wyrażeń.

// for (Inicjalizacja; Warunek; Post - wyrażenie) {
//   // Ciało pętli
// }
// Inicjalizacja - wykonuje się jeden raz przed pierwszym obrotem pętli. Wykorzystuje się dla utworzenia zmiennej-licznika iteratora) i przypisania jej początkowej wartości.

// Warunek - wyrażenie oceniane przed każdą iteracją (powtórzeniem/obrotem) pętli. Ciało pętli wykonuje się tylko wtedy, gdy warunek ma wartość true. Pętla kończy się, jeśli wartość osiągnie false. Najczęściej w warunku wykorzystujemy iterator i sprawdzamy czy osiągnął on już konkretną wartość graniczną dla której chcemy przerwać wykonywanie pętli.

// Post-wyrażenie - wykonuje się na końcu każdego powtórzenia pętli, przed sprawdzeniem warunku. Wykorzystuje się je najczęściej do aktualizacji (zazwyczaj inkrementacji czyli zwiększenia o jeden) zmiennej iteratora.

// Ciało - zbiór instrukcji wykonujących się przy każdej iteracji. Wykonuje się, jeśli wyrażenie warunku osiąga wartość true dla danego obrotu pętli.

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// W przykładzie deklarowana jest zmienna i, inicjalizuje się wartością 0 i pętla wykonuje się (jej ciało) tak długo jak i <= 20, czyli i jest mniejsze lub równe 20. Po każdej iteracji licznik zwiększa się o 5.

// Uzupełnij pętlę for tak, aby wypisała wszystkie liczby całkowite w zakresie od start do end włącznie.

// Zadeklarowano zmienną start
// Wartość zmiennej start to liczba 3
// Zadeklarowano zmienną end
// Wartość zmiennej end to liczba 7
// Zadeklarowano zmienną i - iterator dla - licznik pętli
// Początkowa wartość zmiennej i równa się 3
// Warunek pętli osiąga true do czasu, póki i jest mniejsze bądź równe 7
// Przy każdej iteracji wartość zmiennej i zwiększa się o jeden
// Wypisano w konsoli liczby 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// Ex 18 SUMA LICZB (CYKL FOR)

// Napisz funkcję calculateTotal(number), która przyjmuje liczbę całkowitą (parametr number) i zwraca sumę wszystkich liczb całkowitych od jedynki do tej liczby. Na przykład, jeśli number wynosi 3, to wynikiem działania funkcji jest 1 + 2 + 3, to znaczy 6.

// Zadeklarowano funkcję calculateTotal(number)
// Wywołanie funkcji calculateTotal(1) zwraca 1
// Wywołanie funkcji calculateTotal(3) zwraca 6
// Wywołanie funkcji calculateTotal(7) zwraca 28
// Wywołanie funkcji calculateTotal(18) zwraca 171
// Wywołanie funkcji calculateTotal(24) zwraca 300
// Wywołanie funkcji calculateTotal() z losową liczbą zwraca prawidłową wartość

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(10));

//Ex 19

// Pętlę for można wykorzystać do iteracji po tablicy, to znaczy do dostania się do każdego elementu po kolei.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// W celu dostępu do elementów wykorzystuje się składnię nawiasów kwadratowych array[index], gdzie index to wartość iteratora od 0 do ostatniego indeksu tablicy, który jest o jednostkę mniejszy od długości tablicy.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
// console.log(fruits.length - 1);
// console.log(fruits[3]);

//Ex 20 OBLICZENIE SUMY ZAKUPU

// Napisz funkcję calculateTotalPrice(order), która przyjmuje jeden parametr order – tablicę liczb i oblicza całkowitą sumę jej elementów. Wynik tego działania powinien zapisywać się w zmiennej total, która zostaje zwrócona jako rezultat działania funkcji.

// Zadeklarowano funkcję calculateTotalPrice(order)
// Wywołanie funkcji calculateTotalPrice([12, 85, 37, 4]) zwraca 138
// Wywołanie funkcji calculateTotalPrice([164, 48, 291]) zwraca 503
// Wywołanie funkcji calculateTotalPrice([412, 371, 94, 63, 176]) zwraca 1116
// Wywołanie funkcji calculateTotalPrice() z losową tablicą zwraca prawidłową wartość

// function calculateTotalPrice(order) {
//   let total = 0;
//   //total = 0; // Inicjalizujemy zmienną total na 0, aby zsumować elementy tablicy.
//   // Iterujemy przez każdy element tablicy i dodajemy go do zmiennej total.
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total; // Zwracamy sumę wszystkich elementów.
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//Ex 21 POSZUKIWANIE NAJDŁUŻSZEGO SŁOWA

// Napisz funkcję findLongestWord(string), która przyjmuje dowolny string składający się wyłącznie ze słów rozdzielonych spacją (parametr string) i zwraca najdłuższe słowo w tym stringu.

// Zadeklarowano funkcję findLongestWord(string)
// Wywołanie funkcji findLongestWord("The quick brown fox jumped over the lazy dog") zwraca "jumped"
// Wywołanie funkcji findLongestWord("Google do a roll") zwraca "Google"
// Wywołanie funkcji findLongestWord("May the force be with you") zwraca "force"
// Wywołanie funkcji findLongestWord() z losowym zdaniem zwraca prawidłową wartość

// function findLongestWord(string) {
//   const words = string.split(` `);
//   let longestWord = ``;
//   words.forEach(function (word) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });
//   return longestWord;
// }
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// console.log(findLongestWord());

//cos tutaj wyszlo nie tak, jak bedziesz powtarzal to sie przypatrz!!!

//Ex 22

// Metoda push() pozwala dodać jeden lub więcej elementów na końcu tablicy bez konieczności wskazywania nowych indeksów dla dodawanych elementów.

// const planets = ['Earth', 'Mars', 'Venus'];
// planets.push('Jupiter');
// planets.push('Saturn', 'Uranus', 'Neptune');

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// Uzupełnij kod funkcji createArrayOfNumbers(min, max) tak, aby zwracał tablicę wszystkich liczb całkowitych od wartości min do max. Zakładamy, że min < max

// Zadeklarowano funkcję createArrayOfNumbers(min, max)
// Wywołanie funkcji createArrayOfNumbers(1, 3) zwraca [1, 2, 3]
// Wywołanie funkcji createArrayOfNumbers(14, 17) zwraca [14, 15, 16, 17]
// Wywołanie funkcji createArrayOfNumbers(29, 34) zwraca [29, 30, 31, 32, 33, 34]
// Wywołanie funkcji createArrayOfNumbers() z losowymi liczbami min i max zwraca prawidłową tablicę
// W pętli for wykorzystywana jest metoda push
//
// function createArrayOfNumbers(min, max) {
//   const number = [];
//   for (let i = min; i < max; i++) {
//     number.push[i];
//   }
//   return number;
// }
// createArrayOfNumbers(14, 17); //zwraca [14, 15, 16, 17];
// function createArrayOfNumbers(min, max) {
//   const number = [];
//   for (let i = min; i <= max; i++) {
//     number.push(i);
//   }
//   return number;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

//Ex 23  FILTROWANIE TABLICY LICZB

// Napisz funkcję filterArray(numbers, value), która przyjmuje tablicę liczb (parametr numbers) i zwraca nową tablicę, w której będą tylko te elementy tablicy numbers, które są większe niż wartość parametru value (liczba).

// Zadeklarowano funkcję filterArray(numbers, value)
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 3) zwraca [4, 5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 4) zwraca [5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 5) zwraca []
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 38) zwraca [41, 76]
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 20) zwraca [24, 41, 76]
// Wywołanie funkcji filterArray() z losową tablicą i liczbą zwraca prawidłową tablicę
// W pętli for wykorzystywana jest metoda push

// function filterArray(numbers, value) {
//   const filteredArray = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filteredArray.push(numbers[i]);
//     }
//   }
//   return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log();

//Ex 24

// Metoda includes(value) sprawdza, czy w tablicy znajduje się element z wartością podaną dla parametru value i zwraca odpowiednio true lub false. Metodę tę stosujemy tylko dla typów prymitywnych (ponieważ porównanie odbywa się poprzez precyzyjny operator ===) i wtedy kiedy nie potrzebujemy znać indeksu poszukiwanego elementu.

// const planets = ['Earth', 'Mars', 'Venus'];

// console.log(planets.includes('Earth')); // true
// console.log(planets.includes('Mars')); // true
// console.log(planets.includes('Venus')); // true
// console.log(planets.includes('Jupiter')); // false

// Funkcja checkFruit(fruit) przyjmuje string z nazwą owocu (parametr fruit) i sprawdza, czy dany owoc znajduje się na tablicy fruits.

// Uzupełnij kod funkcji tak aby spełniał następujące zależności:

// owoc jest w tablicy, funkcja zwraca true;
// owocu nie ma w tablicy, funkcja zwraca false.
// Zadeklarowano funkcję checkFruit(fruit)
// Wywołanie checkFruit("plum") zwraca true
// Wywołanie checkFruit("mandarin") zwraca false
// Wywołanie checkFruit("pear") zwraca true
// Wywołanie checkFruit("Pear") zwraca false
// Wywołanie checkFruit("apple") zwraca true
// Wywołanie funkcji checkFruit() z losowym słowem zwraca prawidłową wartość boolean
// W funkcji wykorzystana była metoda includes

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruit.includes(fruit);
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));
// console.log();

//Ex 25 WSPÓLNE ELEMENTY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Wspólnymi elementami tablic nazywane są te elementy, które są obecne we wszystkich tablicach które sprawdzamy. Operację taką nazywamy też intersection

// Na przykład w dwóch tablicach [1, 3, 5] i [0, 8, 5, 3] wspólne będą liczby 3 i 5, ponieważ są obecne w obu oryginalnych tablicach. A liczby 0, 1 i 8 są obecne w tylko jednej z tablic.

// Napisz funkcję getCommonElements(array1, array2), która otrzymuje dwie tablice dowolnej długości w parametrach array1 i array2 i zwraca nową tablicę składającą się z tych elementów, które są obecne w obu oryginalnych tablicach (Array Intersection). Jeśli tablice nie mają wspólnych elementów, zwracamy pustą tablicę.

// Zadeklarowano funkcję getCommonElements(array1, array2)
// Wywołanie getCommonElements([1, 2, 3], [2, 4]) zwraca [2]
// Wywołanie getCommonElements([1, 2, 3], [2, 1, 17, 19]) zwraca [1, 2]
// Wywołanie getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) zwraca [12, 27, 3]
// Wywołanie getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) zwraca [10, 30, 40]
// Wywołanie getCommonElements([1, 2, 3], [10, 20, 30]) zwraca []
// Wywołanie funkcji getCommonElements() z dwiema losowymi tablicami zwraca prawidłową tablicę
// W pętli for wykorzystane są metody includes i push

// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//EX 26

// Instrukcja for...of deklaruje pętlę przechodzący przez obiekty pozwalające się iterować, takie jak tablice i stringi. Ciało pętli będzie wykonywać się dla wartości każdego elementu. Oferuje ona prostszą składnię względem pętli for, jeżeli niepotrzebny jest nam indeks poszczególnych elementów.

// for (const variable of iterable) {
//   // ciało cyklu
// }
// variable — zmienna, która będzie przechowywać wartość elementu dla każdej iteracji
// iterable — zmienna, która zawiera iterowalne elementy, na przykład tablica lub string
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
//}

// Wykonaj refaktor kodu funkcji calculateTotalPrice(order) zamieniając pętlę for na for...of.

// Zdeklarowano funkcję calculateTotalPrice(order)
// Wywołanie funkcji calculateTotalPrice([12, 85, 37, 4]) zwraca 138
// Wywołanie funkcji calculateTotalPrice([164, 48, 291]) zwraca 503
// Wywołanie funkcji calculateTotalPrice([412, 371, 94, 63, 176]) zwraca 1116
// Wywołanie funkcji calculateTotalPrice([]) zwraca 0
// Wywołanie funkcji calculateTotalPrice() z losową tablicą liczb zwraca prawidłową sumę

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }

//     // Change code above this line
//     return total;
//   }

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const price of order) {
//       total += price;
//     }

//     return total;
//   }
//console.log(calculateTotalPrice([12, 85, 37, 4]));

//Ex 27  FILTROWANIE TABLICY LICZB 2.0!!!!!!!!!!!!!!!!!!!!!!!

// Wykonaj refaktor funkcji filterArray(numbers, value) zamieniając pętlę for na for...of.

// Zadeklarowano funkcję filterArray(numbers, value)
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 3) zwraca [4, 5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 4) zwraca [5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 5) zwraca []
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 38) zwraca [41, 76]
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 20) zwraca [24, 41, 76]
// Wywołanie funkcji filterArray() z losową tablicą i liczbą zwraca prawidłową tablicę
// Funkcja filterArray() wykorzystuje pętlę for..of

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//Ex 28

// Operator % to modulo, zwraca on całkowitą resztę z dzielenia dwóch liczb – dzielnej (po lewej stronie) i dzielnika (po prawej).

// 5 % 1 = 0;
// // 5, podzielone na 1, równa się 5, i reszta - 0

// 5 % 2 = 1;
// //  5, podzielone na 2, równa się 2, i reszta - 1

// 5 % 3 = 2;
// //  5, podzielone na 3, równa się 1, i reszta - 2

// 5 % 4 = 1;
// //  5, podzielone na 4, równa się 1, i reszta - 1

// 5 % 5 = 0;
// //  5, podzielone na 5, równa się 1, i reszta - 0

// Uzupełnij wyrażenia reszty z dzielenia tak, aby kod spełniał założenia testów.

// Zadeklarowana zmienna a
// Wartość zmiennej a to liczba 0
// Zadeklarowana zmienna b
// Wartość zmiennej b to liczba 1
// Zadeklarowana zmienna c
// Wartość zmiennej c to liczba 3
// Zadeklarowana zmienna d
// Wartość zmiennej d to liczba 5
// Zadeklarowana zmienna e
// Wartość zmiennej e to liczba 2

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

//Ex 29 LICZBY PARZYSTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Napisz funkcję getEvenNumbers(start, end), która zwróci tablicę wszystkich liczb parzystych od start do end (włącznie).

// Zadeklarowano funkcję getEvenNumbers(start, end)
// Wywołanie funkcji getEvenNumbers(2, 5) zwraca [2, 4]
// Wywołanie funkcji getEvenNumbers(3, 11) zwraca [4, 6, 8, 10]
// Wywołanie funkcji getEvenNumbers(6, 12) zwraca [6, 8, 10, 12]
// Wywołanie funkcji getEvenNumbers(8, 8) zwraca [8]
// Wywołanie funkcji getEvenNumbers(7, 7) zwraca []
// Wywołanie funkcji getEvenNumbers() z losowymi start i end zwraca prawidłową tablicę

// function getEvenNumbers (start, end){
// for(let i = start; i <= end, i++){
//     if (i%2===0) {
//         EvenNumbers.push(i);
//     }
// }
// return EvenNumbers;
// }
// console.log(getEvenNumbers(6, 12));

// function getEvenNumbers(start, end) {
//   if (start === undefined || end === undefined) {
//     // Jeśli start lub end nie zostały podane, zwróć pustą tablicę
//     return [];
//   }

//   const result = [];
//   for (let number = start; number <= end; number++) {
//     if (number % 2 === 0) {
//       result.push(number);
//     }
//   }
//   return result;
// }

// // Przykłady użycia:
// console.log(getEvenNumbers(2, 5)); // Zwraca [2, 4]
// console.log(getEvenNumbers(3, 11)); // Zwraca [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // Zwraca [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // Zwraca [8]
// console.log(getEvenNumbers(7, 7)); // Zwraca []
// console.log(getEvenNumbers);

// Ex 30

// Wykonywanie większości pętli można przerwać w dowolnym momencie. W tym celu istnieje operator break, który w pełni przerywa wykonywanie pętli (w przypadku zagnieżdżonych pętli jedynie "najbliższej" z nich).

// Przykładowo szukamy liczby 3. Jak tylko wykonany zostanie warunek if, pętla zakończy swoje wykonywanie, kolejne iteracje nie zostaną wykonane co stanowi optymalizację.

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Znaleźliśmy liczbę 3, przerywamy wykonanie pętli");
//     break;
//   }
// }

// console.log("Log po pętli");

// Uzupełnij kod tak, aby w zmiennej number zapisywała się pierwsza liczba znajdująca się pomiędzy start i end, dzieląca się na 5 bez reszty.

// Zadeklarowano zmienną start z wartością 6
// Zadeklarowano zmienną end z wartością 27
// Zadeklarowano zmienną number bez inicjalizacji
// Końcowa wartość zmiennej number jest równa 10
// W pętli for wykorzystuje się break w celu uniknięcia wykonania się niepotrzebnych iteracji

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

//Ex 31

// Jeśli pętla znajduje się w ciele funkcji, to operator break nie przerywa wykonania funkcji, a przerwie tylko pętlę. W celu przerwania wykonania jednocześnie pętli i funkcji stosuje się operator return.

// W przykładzie szukamy liczby 3. Jak tylko spełniony zostanie warunek if, zwracamy wartość przy użyciu słowa kluczowego return, które przerwie wykonanie zarówno pętli i funkcji.

// function fn() {
//   for (let i = 0; i <= 5; i+=) {
//     console.log(i);

//     if (i === 3) {
//       console.log(
//         'Znaleźliśmy liczbę 3, robimy zwrot, przerywając pętlę w funkcji'
//       );
//       return i;
//     }
//   }

//   // Ten console.log nie wykona się
//   console.log('Log po pętli w ciele funkcji');
// }

// const result = fn();
// console.log('Log po wyjściu z funkcji');
// console.log(`Rezultat wykonania funkcji ${result}`);

// Ex 32

// Napisz funkcję includes(array, value), która robi to samo, co metoda tablicy tablica.includes(wartość) - sprawdza, czy na tablicy array jest wartość value, zwracając true, jeżeli jest i false w przeciwnym wypadku.

// W trakcie wykonywania tego zadania w ciele funkcji includes() nie można wykorzystywać metody tablica.includes(wartość).

// Zadeklarowana funkcja includes(array, value)
// Wywołanie includes([1, 2, 3, 4, 5], 3) zwraca true
// Wywołanie includes([1, 2, 3, 4, 5], 17) zwraca false
// Wywołanie includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") zwraca true
// Wywołanie includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") zwraca false
// Wywołanie includes(["apple", "plum", "pear", "orange"], "plum") zwraca true
// Wywołanie includes(["apple", "plum", "pear", "orange"], "kiwi") zwraca false
// Wywołanie includes() dla losowej tablicy z losowym value zwraca prawidłową wartość boolowską
// W funkcji includes wykorzystuje się for, return, ale nie metodę tablicy includes

// function includes(array, value) {
//   for (let cos = 0; cos <= array.length; cos++) {
//     if (array[cos] === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
