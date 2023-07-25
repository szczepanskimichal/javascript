// Ex 1

// Funkcje nie różnią się od liczb, łańcuchów czy tablic – to po prostu specjalny rodzaj danych (obiekt wyższego rzędu), wartość, którą można przechowywać w zmiennej lub przekazywać jak argument, do drugiej funkcji.

// function greet(name) {
//   return `Witaj ${name}.`;
// }

// // Wywołujemy funkcję greet
// // i wyprowadzamy rezultat na konsolę
// console.log(greet('Mango'));
// // Witaj Mango.

// // Wyprowadzamy funkcję greet
// // na konsolę nie wywołując jej
// console.log(greet);
/*
ƒ greet() {
     return `Witaj ${name}.`;
}
*/
// W pierwszym logu wywołujemy funkcję greet za pomocą okrągłych nawiasów i na konsolę wyprowadzany jest rezultat jej wykonania. W drugim logu przekazywane jest odesłanie do funkcji, a nie rezultat jej wywołania (brak okrągłych nawiasów), dlatego na konsolę wyprowadzane jest ciało funkcji. Oznacza to, że funkcję można przypisać do zmiennej lub przekazać, jak argument, do drugiej funkcji.

// Uzupełnij kod tak, aby w zmiennej result był rezultat wykonania funkcji makePizza, a w zmiennej pointer był odnośnik do funkcji makePizza.

// Zadeklarowana funkcja makePizza
// Zadeklarowana zmienna result
// Wartość zmiennej result to łańcuch "Your pizza is being prepared, please wait."
// Wartość zmiennej result otrzymano przy pomocy wywołania funkcji
// Zadeklarowana zmienna pointer
// Wartość zmiennej pointer to odnośnik do funkcji makePizza

// function makePizza(){
//     return "Your pizza is being prepared, please wait."
// }
// const result = makePizza();
// const pointer = makePizza;

// Ex 2

// Funkcja zwrotna (callback) - to funkcja, która jest przekazywana do innej funkcji jako argument i w swojej kolejce wywołuje przekazaną funkcję.

// Funkcja wyższego rzędu (higher order function) - funkcja, która przyjmuje jako argumenty inne funkcje lub zwraca funkcję jako rezultat.

// // Funkcja callback
// function greet(name) {
//   console.log(`Witaj ${name}.`);
// }

// // Funkcja wyższego rzędu
// function registerGuest(name, callback) {
//   console.log(`Rejestrujemy gościa ${name}.`);
//   callback(name);
// }

// registerGuest('Mango', greet);

// // Przekazaliśmy odnośnik do funkcji greet jako argument, dlatego będzie ona przypisana do parametru callback i wywołana wewnątrz funkcji registerGuest za pomocą okrągłych nawiasów. Nazwa parametru dla callback może być dowolna, najważniejsze, aby pamiętać, że wartością będzie funkcja.

// function powitanie(imie) {
//   console.log(`witaj ${imie}`);
// }

// function rejestracjaGoscia(imie, callback) {
//   console.log(`rejestrujemy frajera ${imie} i go skubiemy`);
//   callback(imie);
// }

// rejestracjaGoscia('michal', powitanie);

// Uzupełnij funkcję makeMessage tak, aby ona oczekiwała jako drugiego parametru (parametr callback) funkcji callback i zwracała jej wywołanie. Funkcja deliverPizza lub makePizza będzie przekazywana jako callback i oczekiwała jako argumentu nazwy gotowej pizzy w dostawie.

// Zadeklarowana funkcja deliverPizza
// Zadeklarowana funkcja makePizza
// Zadeklarowana funkcja makeMessage
// Funkcja makeMessage przyjmuje dwa parametry, nazwane zgodnie z zadaniem, pizzaName i callback
// Wywołanie makeMessage("Royal Grand", makePizza) zwraca łańcuch "Pizza Royal Grand is being prepared, please wait..."
// Wywołanie makeMessage("Ultracheese", deliverPizza) zwraca łańcuch "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivery ${pizzaName} pizzaName.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));

// Ex 3

// Jeśli funkcja callback jest mała i potrzebna tylko do przekazywania do argumentów, można ją zadeklarować bezpośrednio przy wywołaniu funkcji, do której przekazujemy callback. Taka funkcja będzie dostępna tylko jako wartość parametru i nigdzie więcej nie będzie dostępna w kodzie.

// function registerGuest(name, callback) {
//   console.log(`Rejestrujemy gościa ${name}.`);
//   callback(name);
// }

// // Przekazujemy funkcję inline greet jako callback
// registerGuest('Mango', function greet(name) {
//   console.log(`Witaj ${name}.`);
// });

// // Przekazujemy funkcję inline notify jako callback
// registerGuest('Poly', function notify(name) {
//   console.log(
//     `Szanowny(a) ${name}, twój numer będzie gotowy w ciągu 30 minut.`
//   );
// });

// Uzupełnij drugie wywołanie funkcji makePizza(pizzaName, callback), przekazując jako drugi argument inline funkcję callback eatPizza(pizzaName), któng pizza <nazwa pizzy>".ktora loguje łańcuch "Eating pizza <nazwa pizzy>".

// Zadeklarowana funkcja makePizza
// Funkcja makePizza przyjmuje dwa parametry
// Drugim argumentem przy wywołaniu makePizza("Ultracheese") przekazana funkcja eatPizza z jednym parametrem pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// Ex 4

// Funkcja może przyjmować dowolną ilość callbacków. Na przykład, wyobraźmy sobie, że piszemy logikę przyjmowania połączeń dla telefonu. Program powinien włączać automatyczną odpowiedź, jeśli abonent jest niedostępny lub uskutecznić połączenie w przeciwnym wypadku. Dostępność abonenta będziemy imitować generatorem losowych liczb, aby między różnymi wywołaniami funkcji można było otrzymać inne rezultaty.

// function processCall(recipient) {
//   // Imitujemy dostępność abonenta poprzez losowy numer
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Abonent ${recipient} niedostępny, zostaw wiadomość.`);
//     // Logika aktywacji automatycznej sekretarki
//   } else {
//     console.log(`Łączymy z ${recipient}, proszę czekać...`);
//     // Logika przyjęcia połączenia
//   }
// }

// processCall('Mango');
// Problem takiego podejścia polega na tym, że funkcja processCall wykonuje zbyt wiele pracy i przywiązuje sprawdzenie dostępności abonenta do dwóch określonych wcześniej działań. Co w sytuacji, gdy w przyszłości zamiast automatycznej sekretarki trzeba będzie zostawiać hologram?

// Moglibyśmy napisać funkcję tak, aby zwracała jakąś wartość i następnie, zgodnie z rezultatem jej wykonania, sprawdzała i wykonywała potrzebny kod. Sprawdzenie nie odnosi się do zewnętrznego kodu i będzie go zaśmiecać.

// Wykonamy refaktor funkcji tak, aby przyjmowała dwa callabacki onAvailable i onNotAvailable i wywoływała je po spełnieniu warunku.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Imitujemy dostępność abonenta losowym numerem
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Łączymy z ${name}, proszę czekać...`);
//   // Logika przyjęcia połączenia
// }

// function activateAnsweringMachine(name) {
//   console.log(`Abonent ${name} niedostępny, zostaw wiadomość.`);
//   // Logika aktywacji automatycznej sekretarki
// }

// function leaveHoloMessage(name) {
//   console.log(`Abonent ${name} niedostępny, zapisujemy hologram.`);
//   // Logika zapisu hologramu
// }

// processCall('Mango', takeCall, activateAnsweringMachine);
// processCall('Poly', takeCall, leaveHoloMessage);

// Callbacki wykorzystywane są do opracowywania działań użytkownika na stronie, przy opracowywaniu zapytań do serwera, wykonywania wcześniej nieznanych funkcji itp. Na tym polega ich sens – to funkcje przenaczone do opóźnionego wykonania.

// Należy napisać logikę opracowywania zamówień pizzy. Wykonaj refaktor metody order tak, aby jako drugi i trzeci parametr przyjmowała dwa callbacki onSuccess i onError.

// Jeśli we właściwości pizzas nie ma pizzy o nazwie z parametru pizzaName, metoda order powinna zwracać rezultat callbacku onError, przekazując mu jako argument łańcuch "There is no pizza with a name <nazwa pizzy> in the assortment."
// Jeśli we właściwości pizzas jest pizza o nazwie z parametru pizzaName, metoda order powinna zwracać rezultat wywołania callbacku onSuccess, przekazując mu jako argument nazwę zamówionej pizzy.
// Po zadeklarowaniu obiektu pizzaPalace dodaliśmy callbacki i wywołanie metod. Prosimy niczego tam nie zmieniać.

// Metoda order deklaruje trzy parametry
// Wywołanie pizzaPalace.order("Smoked", makePizza, onOrderError) zwraca "Your order is accepted. Cooking pizza Smoked."
// Wywołanie pizzaPalace.order("Four meats", makePizza, onOrderError) zwraca "Your order is accepted. Cooking pizza Four meats."
// Wywołanie pizzaPalace.order("Big Mike", makePizza, onOrderError) zwraca "Error! There is no pizza with a name Big Mike in the assortment."
// Wywołanie pizzaPalace.order("Vienna", makePizza, onOrderError) zwraca "Error! There is no pizza with a name Vienna in the assortment."

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSucces, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       onSucces(pizzaName);
//       return makePizza(pizzaName);
//     } else {
//       onError(pizzaName);
//       return onOrderError(
//         (error = `There is no pizza with a name ${pizzaName} in the assortment.`)
//       );
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Ex 5

// Iterująca metoda tablicy, która jest wykorzystywana jako zamiana cykli for i for...of przy pracy ze zbiorem.

// tablica.forEach(function callback(element, index, array) {
//   // Ciało funkcji callback
// });
// Iteruje po tablicy element po elemencie.
// Wywołuje funkcję callback dla każdego elementu tablicy.
// Niczego nie zwraca.
// Argumenty funkcji callback to wartość aktualnego elementu element, jego indeks index i sama źródłowa tablica array. Deklarować można tylko te parametry, które są potrzebne, najczęściej to element. Najważniejsze, aby nie zapominać o ich porządku.

// const numbers = [5, 10, 15, 20, 25];

// // Klasyczny for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Indeks ${i}, wartość ${numbers[i]}`);
// }

// // Iterujący forEach
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });
// Jedynym przypadkiem, gdy warto wykorzystać pętlę for lub for...of dla iteracji po tablicy są zadania z przerywaniem wykonywania pętli. Przerwać wykonywania metody forEach nie można – zawsze iteruje tablicę do końca.

// Funkcja calculateTotalPrice(orderedItems) przyjmuje jeden parametr orderedItems - tablicę liczb. Podlicza ogólną sumę jej elementów, która zapisuje się w zmiennej totalPrice i zostaje zwrócona jako rezultat działania funkcji.

// Wykonaj refaktor funkcji tak, aby zamiast pętli for wykorzystywała metodę forEach.

// Zadeklarowana funkcja calculateTotalPrice(orderedItems)
// Dla iteracji po tablicy orderedItems wykorzystuje się metodę forEach
// Wywołanie funkcji calculateTotalPrice([12, 85, 37, 4]) zwraca 138
// Wywołanie funkcji calculateTotalPrice([164, 48, 291]) zwraca 503
// Wywołanie funkcji calculateTotalPrice([412, 371, 94, 63, 176]) zwraca 1116
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     for (let i = 0; i < orderedItems.length; i += 1) {
//       totalPrice += orderedItems[i];
//     }

//     // Change code above this line
//     return totalPrice;
//   }

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function(item) {
//       totalPrice += item;
//     });

//     // Change code above this line
//     return totalPrice;
//   }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Ex 6 FILTROWANIE TABLICY LICZB

// Funkcja filterArray(numbers, value) przyjmuje tablicę liczb numbers i zwraca nową tablicę, na której będą tylko te elementy oryginalnej tablicy, które są większe niż wartość parametru value.

// Wykonaj refaktor funkcji tak, aby zamiast pętli for wykorzystywała metodę forEach.

// Zadeklarowana funkcja filterArray(numbers, value)
// Dla iteracji po tablicy numbers wykorzystuje się metodę forEach
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 3) zwraca [4, 5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 4) zwraca [5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 5) zwraca []
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 38) zwraca [41, 76]
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 20) zwraca [24, 41, 76]
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// function filterArray(numbers, value) {
//   const fileredArray = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       fileredArray.push(number);
//     }
//   });
//   return fileredArray;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Ex 7 WSPÓLNE ELEMENTY

// Funkcja getCommonElements(firstArray, secondArray) przyjmuje dwie tablice dowolnej długości jako parametry firstArray i secondArray i zwraca nową tablicę ich wspólnych elementów, to znaczy tych, które można znaleźć na obu tablicach.

// Wykonaj refaktor funkcji tak, aby zamiast cyklu for wykorzystywała metodę forEach.

// Zadeklarowana funkcja getCommonElements(firstArray, secondArray)
// Dla iteracji parametru (tablicy) wykorzystuje się metodę forEach
// Wywołanie getCommonElements([1, 2, 3], [2, 4]) zwraca [2]
// Wywołanie getCommonElements([1, 2, 3], [2, 1, 17, 19]) zwraca [1, 2]
// Wywołanie getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) zwraca [12, 27, 3]
// Wywołanie getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) zwraca [10, 30, 40]
// Wywołanie getCommonElements([1, 2, 3], [10, 20, 30]) zwraca []
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//Ex 8 FUNKCJE STRZALKOWE

// Funkcje strzałkowe mają skróconą, bardziej lakoniczną składnię, co zmniejsza objętość kodu, zwłaszcza gdy funkcja jest mała lub jest wykorzystywana jako callback.

// Wszystkie strzałki są tworzone jak wyrażenie funkcjonalne i jeśli funkcja nie jest anonimowa, to powinna być przypisana do zmiennej.

// Zwykłe zadeklarowanie funkcji
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // To samo, co funkcja strzałkowa
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// Słowo kluczowe function nie jest wykorzystywane, zamiast tego od razu następuje zadeklarowanie parametrów, za którymi pojawia się symbol => i ciało funkcji.

// Jeśli parametrów jest kilka, to wyliczane są po przecinku w okrągłych nawiasach, między znakami równa się = i strzałką =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };
// // Jeżeli występuje tylko jeden parametr, jego zadeklarowanie może się odbyć bez okrągłych nawiasów.

// const add = (a) => {
//   return a + 5;
// };
// // Jeśli nie ma parametrów, to obowiązkowo powinny pojawić się puste okrągłe nawiasy.

// const greet = () => {
//   console.log('Cześć!');
// };

// Wykonaj refaktor funkcji calculateTotalPrice() tak, aby była zadeklarowana jako strzałkowa.

// Zadeklarowana funkcja calculateTotalPrice
// Zmiennej calculateTotalPrice przypisana funkcja strzałkowa z parametrami (quantity, pricePerItem)
// Wywołanie calculateTotalPrice(5, 100) zwraca 500
// Wywołanie calculateTotalPrice(8, 60) zwraca 480
// Wywołanie calculateTotalPrice(3, 400) zwraca 1200
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość
// Change code below this line

//function calculateTotalPrice(quantity, pricePerItem) {
// Change code above this line

//   const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   };
//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));

//Ex 9

// W funkcji strzałkowej po symbolu => pojawia się jej ciało. Tutaj mogą być dwa warianty: z nawiasami klamrowymi i bez nich.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Jeśli pojawiają się nawiasy klamrowe i funkcja powinna zwracać jakąś wartość, należy jawnie wstawić return. Nazywane jest to jawnym zwrotem (explicit return). Taka składnia wykorzystywana jest w wypadku, gdy w ciele funkcji należy wykonać jeszcze jakieś instrukcje oprócz zwrotu wartości.

// const add = (a, b, c) => a + b + c;
// Jeśli nie ma nawiasu klamrowego, to zwracany jest rezultat wyrażenia znajdującego się po =>. Nazywane jest to niejawnym zwrotem (implicit return). Dla przykładu, zwrócony zostaje rezultat wyrażenia dodawania parametrów a, b i c.

// Składnia niejawnego zwrotu mocno skraca "szum" zadeklarowania funkcji z ciałem i zwracanym wyrażeniem, ale jest odpowiednia tylko, gdy w ciele funkcji nie potrzeba wykonywać żadnych uzupełniających instrukcji oprócz zwrotu wartości.

// {Przed}
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Po
// const arrowAdd = (a, b, c) => a + b + c;

// Wykonaj refaktor funkcji calculateTotalPrice() tak, aby wykorzystywała niejawny zwrot.

// Zadeklarowana zmienna calculateTotalPrice
// Zmiennej calculateTotalPrice przypisana funkcja strzałkowa z parametrem (quantity, pricePerItem)
// W funkcji wykorzystywany jest niejawny zwrot
// Wywołanie calculateTotalPrice(5, 100) zwraca 500
// Wywołanie calculateTotalPrice(8, 60) zwraca 480
// Wywołanie calculateTotalPrice(3, 400) zwraca 1200
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// Change code below this line
//const calculateTotalPrice = (quantity, pricePerItem) => {
//return quantity * pricePerItem;
//};
// Change code above this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity*pricePerItem;

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

//Ex 10
// Anonimowe funkcje strzałkowe świetnie nadają się jako callbacki dla iterujących metod tablicy z powodu krótszej składni deklarowania, szczególnie jeśli niepotrzebne jest ciało funkcji.

// const numbers = [5, 10, 15, 20, 25];

// // Zadeklarowanie funkcji
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });

// // Anonimowa funkcja strzałkowa
// numbers.forEach((number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });
// Funkcję strzałkową callback można również deklarować oddzielnie i przekazywać odnośnik do niej. Warto to robić, jeśli jedna funkcja jest wykorzystywana w kilku miejscach programu lub jeśli jest on duży.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// };

// numbers.forEach(logMessage);

// Wykonaj refaktor funkcji calculateTotalPrice(orderedItems), zamieniając jej zadeklarowanie na funkcję strzałkową. Zamień funkcję callback przekazywaną do metody forEach() na funkcję strzałkową.

// Zadeklarowana zmienna calculateTotalPrice
// Zmiennej calculateTotalPrice przypisana funkcja strzałkowa z parametrem (orderedItems)
// Dla iteracji po tablicy orderedItems wykorzystuje się metodę forEach
// Callback dla metody forEach to funkcja strzałkowa
// Wywołanie funkcji calculateTotalPrice([12, 85, 37, 4]) zwraca 138
// Wywołanie funkcji calculateTotalPrice([164, 48, 291]) zwraca 503
// Wywołanie funkcji calculateTotalPrice([412, 371, 94, 63, 176]) zwraca 1116
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// Change code below this line
//function calculateTotalPrice(orderedItems) {
//let totalPrice = 0;

//orderedItems.forEach(function (item) {
//totalPrice += item;
//});

//return totalPrice;
//}
// Change code above this line

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Ex 11 FILTROWANIE TABLICY LICZB 2.0

// Zamień zadeklarowanie funkcji filterArray() i callback dla metody forEach() na funkcje strzałkowe.

// Zadeklarowana zmienna filterArray
// Zmiennej filterArray przypisana funkcja strzałkowa z parametrem (numbers, value)
// Dla iteracji po tablicy numbers wykorzystuje się metodę forEach
// Callback dla metody forEach to funkcja strzałkowa
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 3) zwraca [4, 5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 4) zwraca [5]
// Wywołanie funkcji filterArray([1, 2, 3, 4, 5], 5) zwraca []
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 38) zwraca [41, 76]
// Wywołanie funkcji filterArray([12, 24, 8, 41, 76], 20) zwraca [24, 41, 76]
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// Change code below this line
//function filterArray(numbers, value) {
//const filteredNumbers = [];

//numbers.forEach(function (number) {
//if (number > value) {
// filteredNumbers.push(number);
// }
// });

// Change code above this line
//return filteredNumbers;
//}
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach(number => {
//       if (number>value) {
//       filteredNumbers.push(number);
//       }

//     });
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

//Ex 12 WSPÓLNE ELEMENTY 2.0

// Zamień zadeklarowanie funkcji getCommonElements() i callback dla metody forEach() na funkcje strzałkowe.

// Zadeklarowana zmienna getCommonElements.

// Zmiennej getCommonElements przypisana funkcja strzałkowa z parametrami (firstArray, secondArray)

// Dla iteracji po tablicy firstArray wykorzystuje się metodę forEach

// Callback dla metody forEach to funkcja strzałkowa

// Wywołanie getCommonElements([1, 2, 3], [2, 4]) zwraca [2]

// Wywołanie getCommonElements([1, 2, 3], [2, 1, 17, 19]) zwraca [1, 2]

// Wywołanie getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) zwraca [12, 27, 3]

// Wywołanie getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) zwraca [10, 30, 40]

// Wywołanie getCommonElements([1, 2, 3], [10, 20, 30]) zwraca []

// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// Change code below this line
//function getCommonElements(firstArray, secondArray) {
//const commonElements = [];

//firstArray.forEach(function (element) {
//if (secondArray.includes(element)) {
// commonElements.push(element);
// }
//});

// Change code above this line
//return commonElements;
//}

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//Ex 13 Funkcja z efektami ubocznymi

// Funkcja z efektami ubocznymi - to funkcja, która w procesie wykonywania może zmieniać lub wykorzystywać globalne zmienne, zmieniać wartość argumentów typu referencyjnego, wykonywać operacje wprowadzenia-wyprowadzenia itd.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// Zaszła mutacja pierwotnych danych – tablicy numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Funkcja dirtyMultiply(array, value) zwielokrotnia każdy element tablicy array o liczbę value. Zmienia (mutuje) pierwotną tablicę po odnośniku.

// Czysta funkcja (pure function) - to funkcja, której rezultat zależy tylko od wartości przekazanych argumentów. Przy jednakowych argumentach zawsze zwraca ten sam rezultat i nie ma efektów ubocznych, to znaczy nie zmienia wartości argumentów.

// Napiszemy realizację czystej funkcji, zwielokrotnienia elementów tablicy zwracającą nową tablicę, nie zmieniając oryginalnej.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Nie zaszła mutacja oryginalnych danych
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Funkcja zwróciła nową tablicę ze zmienionymi danymi
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Funkcja changeEven(numbers, value) przyjmuje tablicę liczb numbers i odnawia każdy element, wartością którego jest liczba parzysta, dodając do niego wartość parametru value.

// Wykonaj refaktor funkcji tak, aby stała się czysta – nie zmieniała tablic liczb numbers, a tworzyła, wypełniała i zwracała nową tablicę z odnowionymi wartościami.

// Zadeklarowana funkcja changeEven(numbers, value)
// Funkcja changeEven nie zmienia wartości parametru numbers
// Wywołanie changeEven([1, 2, 3, 4, 5], 10) zwraca nową tablicę [1, 12, 3, 14, 5]
// Wywołanie changeEven([2, 8, 3, 7, 4, 6], 10) zwraca nową tablicę [12, 18, 3, 7, 14, 16]
// Wywołanie changeEven([17, 24, 68, 31, 42], 100) zwraca nową tablicę [17, 124, 168, 31, 142]
// Wywołanie changeEven([44, 13, 81, 92, 36, 54], 100) zwraca nową tablicę [144, 13, 81, 192, 136, 154]
// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

//function changeEven(numbers, value) {
// Change code below this line
//for (let i = 0; i < numbers.length; i += 1) {
//if (numbers[i] % 2 === 0) {
// numbers[i] = numbers[i] + value;
// }
// }
// Change code above this line
//}
// function changeEven(numbers, value) {
//     const updatedNumbers = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         updatedNumbers.push(numbers[i] + value);
//       } else {
//         updatedNumbers.push(numbers[i]);
//       }
//     }

//     return updatedNumbers;
//   }

//Ex 14 Metoda map(callback)

// Większość iterujących metod tablicy to czyste funkcje. Tworzą one nową tablicę, wypełniają ją, stosując do wartości każdego elementu wskazaną funkcję callback, po czym zwracają tę nową tablicę.

// Metoda map(callback) wykorzystywana jest dla transformowania tablicy. Wywołuje funkcję callback dla każdego elementu oryginalnej tablicy, a rezultat jej działania zapisuje się na nowej tablicy, która będzie też rezultatem wykonania metody.

// tablica.map((element, index, array) => {
//   // Ciało funkcji callback
// });
// Iteruje oryginalną tablicę element po elemencie.
// Nie zmienia oryginalnej tablicy.
// Rezultat pracy funkcji callback zapisuje się na nowej tablicy.
// Zwraca nową tablicę takiej samej długości.
// Można ją wykorzystywać po to, aby zmienić każdy element tablicy. Oryginalna tablica wykorzystywana jest jako wzór, na bazie którego można stworzyć nowy zbiór.

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Oryginalna tablica nie zmienia się
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
// Wykorzystywanie anonimowych funkcji strzałkowych z niejawnym zwrotem mocno skraca "szum" zadeklarowania funkcji callback, czyniąc kod czystszym i łatwiejszym do przyjęcia.

// Uzupełnij kod tak, aby w zmiennej planetsLengths otrzymać tablicę długości nazw planet. Obowiązkowo wykorzystaj metodę map().

// Zadeklarowana zmienna planets
// Wartość zmiennej planets to tablica ["Earth", "Mars", "Venus", "Jupiter"]
// Zadeklarowana zmienna planetsLengths
// Wartość zmiennej planetsLengths to tablica [5, 4, 5, 7]
// Dla iteracji po tablicy planet wykorzystuje się metodę map()

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

//Ex 15

// Wiemy już, że zadania powszednie to manipulacja tablicą obiektów. Na przykład otrzymanie tablicy wartości właściwości ze wszystkich obiektów. Istnieje tablica studentów, a trzeba stworzyć oddzielną tablicę ich imion.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Wykorzystując metodę map() można ziterować tablicę obiektów i w funkcji callback zwrócić wartość właściwości każdego z nich.

// Wykorzystując metodę map() spraw, aby w zmiennej titles otrzymać tablicę tytułów książek (właściwość title) ze wszystkich obiektów tablicy books.

// Zadeklarowana zmienna books
// Wartość zmiennej books to tablica
// Zadeklarowana zmienna titles
// Wartość zmiennej titles to tablica ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Dla iteracji po tablicy books wykorzystuje się metodę map() jako czysta funkcja

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);
// console.log(titles);

// Ex 16

// Metoda flatMap(callback) jest analogiczna do metody map(), ale stosuje się ją w wypadkach, gdy rezultat to wielowymiarowa tablica, którą trzeba "wygładzić".

// массив.flatMap((element, index, array) => {
//   // Ciało funkcji callback
// });
// Na tablicy students zapisana jest lista studentów z listą przedmiotów, na które uczęszcza student we właściwości courses. Kilku studentów może chodzić na ten sam przedmiot. Należy stworzyć listę wszystkich przedmiotów, na które uczęszcza ta grupa studentów, tymczasem także tych powtarzających się.

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// students.map((student) => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap((student) => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Wywołuje funkcję callback dla każdego elementu oryginalnej tablicy, a rezultat jej pracy zapisuje się na nowej tablicy. Różnica z map() polega na tym, że nowa tablica "wygładza się" na głębokość równą jednostce (jeden poziom). Ta wygładzona tablica jest rezultatem pracy flatMap().

// Wykorzystując metodę flatMap() spraw, aby w zmiennej genres otrzymać tablicę wszystkich gatunków książek (właściwość genres) z tablicy książek books.

// Zadeklarowana zmienna books
// Wartość zmiennej books to tablica obiektów
// Zadeklarowana zmienna genres
// Wartość zmiennej genres to tablica [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Dla iteracji po tablicy books wykorzystuje się metodę flatMap()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

//Ex 17
// Uzupełnij funkcję getUserNames(users) tak, aby zwracała tablicę imion użytkowników (właściwość name) z tablicy obiektów w parametrze users.

// Zadeklarowana zmienna getUserNames

// Zmiennej getUserNames przypisana funkcja strzałkowa z parametrem (users).

// Dla iteracji parametru users wykorzystuje się metodę map()

// Wywołanie funkcji ze wskazaną tablicą użytkowników zwraca tablicę ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Wywołanie funkcji z losowymi, ale prawidłowymi argumentami, zwraca poprawną wartość

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// // Przykładowe dane testowe
// const users = [
//   { id: 1, name: 'Moore Hensley', age: 23 },
//   { id: 2, name: 'Sharlene Bush', age: 43 },
//   { id: 3, name: 'Ross Vazquez', age: 25 },
//   { id: 4, name: 'Elma Head', age: 31 },
//   { id: 5, name: 'Carey Barr', age: 27 },
//   { id: 6, name: 'Blackburn Dotson', age: 38 },
//   { id: 7, name: 'Sheree Anthony', age: 32 },
// ];

// console.log(getUserNames(users));

//Ex 19 Metoda filter(callback)

// Metoda filter(callback) wykorzystywana jest dla jednej operacji – filtrowania tablicy, to znaczy gdy trzeba wybrać więcej niż jeden element z kolekcji zgodnie z jakimś kryterium.

// tablica.filter((element, index, array) => {
//   // Ciało funkcji callback
// });
// Nie zmienia oryginalnej tablicy.
// Iteruje oryginalną tablicę element po elemencie.
// Zwraca nową tablicę.
// Dodaje do zwracanej tablicy elementy, które spełniają warunki funkcji callback.
// Jeśli callback zwrócił true, element dodawany jest do zwracanej tablicy.
// Jeśli callabck zwrócił false, element nie jest dodawany do zwracanej tablicy.
// Jeśli żaden element nie spełnił warunku, zwraca pustą tablicę.
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Oryginalna tablica nie zmienia się
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// To znaczy metoda filter wywołuje funkcję callback dla każdego elementu oryginalnej tablicy i jeśli rezultat jej wywołania to true, obecny element dodaje do nowej tablicy.

// Uzupełnij kod tak, aby w zmiennej evenNumbers otrzymać tablicę liczb parzystych z tablicy numbers, a w zmiennej oddNumbers tablicę liczb nieparzystych. Obowiązkowo wykorzystaj metodę filter().

// Zadeklarowana zmienna numbers
// Wartość zmiennej numbers to tablica [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Zadeklarowana zmienna evenNumbers
// Wartość zmiennej evenNumbers to tablica [24, 82, 36, 18, 52]
// Zadeklarowana zmienna oddNumbers
// Wartość zmiennej oddNumbers to tablica [17, 61, 47, 73]
// Dla iteracji po tablicy numbers wykorzystuje się metodę filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

//Ex 20  metodę filter()

// Wykorzystując metodę filter() można wykonać filtrowanie tablicy tak, że zostaną na niej tylko unikalne elementy. To podejście działa tylko z tablicą prymitywnych wartości – nie obiektów.

// Wróćmy do grupy studentów i tablicy wszystkich przedmiotów, na które uczęszczają, co otrzymaliśmy dzięki metodzie flatMap().

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// W zmiennej allCourses zapisana jest tablica wszystkich przedmiotów, na które uczeszczają studenci i które mogą się powtarzać. Zadanie polega na tym, aby stworzyć nową tablicę, na której będą tylko oryginalne parametry, to znaczy bez powtórzeń.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Wykorzystując array.indexOf(course) wykonujemy wyszukiwanie pierwszej zgodności obecnego elementu course i otrzymujemy jego indeks w oryginalnej tablicy wszystkich przedimotów. W parametrze index zapisuje się indeks obecnego elementu course przy iteracji tablicy metodą filter.

// Jeśli rezultat indexOf() i wartość index są równe – otrzymujemy unikalny element, ponieważ to pierwszy raz, gdy taka wartość jest spotykana na tablicy i w obecnej iteracji filtr opracowuje dokładnie ją.

// # Tablica wszystkich przedmiotów
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Dla elementu "mathematics" pod indeksem 0:

// indexOf() zwróci 0, ponieważ szuka pierwszej zgodności.
// Wartość parametru index wynosi 0.
// Są równe, znaczy, że to unikalny element.
// Dla elementu "mathematics" pod indeksem 3:

// indexOf() zwróci 0, ponieważ szuka pierwszej zgodności.
// Wartość parametru index wynosi 3.
// Nie są równe, co oznacza, że to powtarzający się, a nie unikalny element.
