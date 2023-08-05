//            OBJETS

//Ex 1

// Obiekty to potężna struktura danych pozwalają łatwo opisać i pogrupować cechy np dla: użytkownika, książki, produktu w sklepie i tak dalej. Obiekty są również porównywane do słowników, czyli zawierają klucze (właściwości) i ich definicje (wartości).

// const book = {
//   title: "Ostatnie królestwo",
//   author: "Bernard Cornwell",
//   genres: ["proza ​​historyczna", "przygody"],
//   public: true,
//   rating: 8.38,
// };
// Do deklaracji zazwyczaj używane są nawiasy klamrowe {} - literał obiektowy. Kiedy tworzysz obiekt, możesz dodać właściwości (properties lub props), z których każda jest opisana parami klucz:wartość. Klucz jest również nazywany nazwą właściwości i niemal zawsze jest stringiem. Wartością właściwości może być dowolny typ: prymitywny, tablice, obiekty, wartości logiczne, funkcje itp. Właściwości są oddzielane przecinkami w zapisie literałowym.

// Przypisz zmiennej apartment obiekt opisujący mieszkanie o następującej charakterystyce:

// imgUrl - zdjęcie, wartość "https://via.placeholder.com/640x480";
// descr - opis, wartość "Spacious apartment in the city center";
// rating - ocena, wartość 4;
// price - cena, wartość 2153;
// tags - metainformacje, tablica ["premium", "promoted", "top"].
// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Obiekt posiada właściwość imgUrl
// Wartość właściwości imgUrl to ciąg "https://via.placeholder.com/640x480"
// Obiekt posiada właściwość descr
// Wartość właściwości descr to ciąg "Spacious apartment in the city center"
// Obiekt posiada właściwość rating
// Wartość właściwości rating to liczba 4
// Obiekt posiada właściwość price
// Wartość właściwości price to liczba 2153
// Obiekt posiada właściwość tags
// Wartość właściwości tags to tablica ["premium", "promoted", "top"]

// const apartment={
//     imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"]
// }

// Ex 2

// Wartością właściwości może być inny obiekt. Służy do przechowywania zagnieżdżonych/dołączonych i pogrupowanych danych.

// Dla przykładu może przechowywać statystyki użytkownika sieci społecznościowej składają się z liczby obserwujących, wyświetleń i polubień, gdzie najwygodniej jest przechowywać te dane w postaci obiektu. Tak samo jest jego lokalizacją, osobno kraj i miasto.

// W przyszłości można to wykorzystać do wyszukiwania użytkowników według kraju, miasta, minimalnej lub maksymalnej liczby obserwujących itp.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// Uzupełnij obiekt apartamentu o właściwość owner, której wartością będzie obiekt z informacją o właścicielu. Dodaj do niego następujące właściwości:

// name - imię właściciela, wartość "Henry";
// phone - telefon, wartość "982-126-1588";
// email - poczta elektroniczna, wartość "henry.carter@aptmail.com".
// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Obiekt zmiennej apartment posiada właściwości imgUrl, descr, rating, price i tags z wartościami
// Obiekt apartment posiada właściwość owner
// Wartość właściwości owner to obiekt
// Obiekt owner posiada właściwość name
// Wartość właściwości name to "Henry"
// Obiekt owner posiada właściwość phone
// Wartość właściwości phone to "982-126-1588"
// Obiekt owner posiada właściwość email
// Wartość właściwości email to "henry.carter@aptmail.com"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com"
//     }
//   };

//Ex 3

// Pierwszym sposobem uzyskania dostępu do właściwości obiektu jest składnia obiekt.kluczWłaściwości. Składnia za pomocą kropki jest używana w większości przypadków i jest odpowiednia, gdy znamy z góry nazwę (klucz) właściwości, do której chcemy uzyskać dostęp i nie zawiera on niedozwolonych w tej notacji znaków takich jak spacja.

// Wartość właściwości o podanej nazwie zostanie zwrócona w miejscu wywołania.
// Jeśli w obiekcie nie ma właściwości o danej nazwie, zwrócone zostanie undefined.
// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "Ostatnie królestwo"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["proza ​​historyczna", "przygody"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined - nie ma wlasciwosci

// Uzupełnij kod, przypisując zadeklarowanym zmiennym odpowiednie właściwości obiektu apartment.

// aptRating - ocena;
// aptDescr - opis;
// aptPrice - cena;
// aptTags - tagi.
// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Obiekt zmiennej apartment posiada właściwości imgUrl, descr, rating, price i tags z wartościami
// Zadeklarowano zmienną aptRating
// Wartość zmiennej aptRating to liczba 4
// Zadeklarowano zmienną aptDescr
// Wartość zmiennej aptDescr to ciąg "Spacious apartment in the city center"
// Zadeklarowano zmienną aptPrice
// Wartość zmiennej aptPrice to liczba 2153
// Zadeklarowano zmienną aptTags
// Wartość zmiennej aptTags to tablica znaków ["premium", "promoted", "top"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

//   // Change code below this line

//   const aptRating=apartment.rating;
//   const aptDescr=apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;

// Ex 4

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };
//   Aby uzyskać dostęp do dołączonych właściwości, używane jest łańcuch odwołań za pomocą kropki. Na przykład, jeśli chcesz uzyskać wartość kraju użytkownika, napisz user.location.country, gdzie user.location to odwołanie (ścieżka) do obiektu we właściwości location, natomiast user.locaton.country to odwołanie do właściwości country w tym obiekcie. Oznacza to, że każda kolejna „kropka” wskazuje na zagnieżdżony obiekt

//   Uwaga
//   Jeżeli spróbujemy odwołać się do własności zagnieżdżonej obiektu który nie istnieje np. `user.locationS.country` JavaScript wyrzuci błąd.

// const location = user.location;
// console.log(location); // Obiekt location

// const country = user.location.country;
// console.log(country); // "Jamaica"
//   Jeśli wartością właściwości jest tablica, w naszym przykładzie user.hobbies jest wywołaniem tej tablicy. Następnie możesz uzyskać dostęp do jego elementów poprzez nawiasy kwadratowe i indeks lub użyj właściwości i metod.

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// Uzupełnij kod, przypisując zadeklarowanym zmiennym wartości odpowiednich właściwości obiektu apartment.

// ownerName - imię właściciela;
// ownerPhone - telefon właściciela;
// ownerEmail - poczta właściciela;
// numberOfTags - liczba elementów tablicy we właściwości tags;
// firstTag - pierwszy element tablicy we właściwości tags;
// lastTag - ostatni element tablicy we właściwości tags;
// Zadeklarowano zmienną apartment za pomocą const
// Wartość zmiennej apartment to obiekt
// Zadeklarowano zmienną ownerName za pomocą const
// Wartość zmiennej ownerName to ciąg "Henry"
// Zadeklarowano zmienną ownerPhone za pomocą const
// Wartość zmiennej ownerPhone to "982-126-1588"
// Zadeklarowano zmienną ownerEmail za pomocą const
// Wartość zmiennej ownerEmail to "henry.carter@aptmail.com"
// Zadeklarowano zmienną numberOfTags za pomocą const
// Wartość zmiennej numberOfTags to 3
// Zadeklarowano zmienną firstTag za pomocą const
// Wartość zmiennej firstTag to "premium"
// Zadeklarowano zmienną lastTag za pomocą const
// Wartość zmiennej lastTag to "top"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// Ex 5

// Drugim sposobem uzyskania dostępu do właściwości obiektu jest składnia obiekt["kluczWłaściwości"]. Jest podobna do odwołania się do elementu tablicy, z tą różnicą, że nawiasy wskazują nie indeks elementu, ale nazwę właściwości jako ciąg.

// Znacznie rzadziej używana jest składnia „nawiasów kwadratowych”, pozwala ona jednak użyć zmiennej jako klucza, możemy więc jej użyć gdy nie znamy z góry nazwy właściwości.

// Tak jak przy notacji z kropką, wartość właściwości o podanej nazwie zostanie zwrócona do miejsca wywołania.
// Jeśli obiekt nie posiada właściwości o podanej nazwie, zwrócone zostanie undefined.
// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   public: true,
//   rating: 8.38,
// };

// // const bookTitle = book['title'];
// // console.log(bookTitle);
// // // "Ostatnie królestwo"

// const bookGenres = book['genres'];
// console.log(bookGenres);
// // ["proza ​​historyczna", "przygody"]

// const propKey = 'author';
// const bookAuthor = book[propKey];
// console.log(bookAuthor);
// // "Bernard Cornwell"

// Uzupełnij kod, przypisując zadeklarowanym zmiennym odpowiednie właściwości obiektu apartment przy użyciu składni „nawiasów kwadratowych”.

// aptRating - ocena;
// aptDescr - opis;
// aptPrice - cena;
// aptTags - tagi.
// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Zadeklarowano zmienną aptRating
// Wartość zmiennej aptRating to 4
// Zadeklarowano zmienną aptDescr
// Wartość zmiennej aptDescr to "Spacious apartment in the city center"
// Zadeklarowano zmienną aptPrice
// Wartość zmiennej aptPrice to 2153
// Zadeklarowano zmienną aptTags
// Wartość zmiennej aptTags to ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// // Change code below this line
// const aptRating = apartment['rating'];
// console.log(aptRating);
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// Ex 6

// Po utworzeniu obiektu można zmienić wartość jego właściwości. Aby to zrobić, musisz odnieść się do nich poprzez nazwę, na przykład „za pomocą kropki”, i przypisać nową wartość.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   public: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push('dramat');

// console.log(book.rating); // 9
// console.log(book.public); // false
// console.log(book.genres); // ["proza ​​historyczna", "przygody", "dramat"]

// Uzupełnij kod, zmieniając wartości właściwości obiektu apartment:

// cenę we właściwości price na 5000;
// ocenę mieszkania we właściwości rating na 4.7;
// imię i nazwisko właściciela w dołączonej właściwości name na "Henry Sibola";
// tablicę tagów we właściwości tags przez dodanie na końcu ciągu "trusted".
// Zadeklarowana zmienna apartment
// Wartość zmiennej apartment to obiekt
// Wartość dołączonej właściwości price to liczba 5000
// Wartość dołączonej właściwości rating to liczba 4.7
// Wartość dołączonej właściwości name to ciąg "Henry Sibola"
// Wartość dołączonej właściwości tags to tablica ["premium", "promoted", "top", "trusted"]

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 5;
// apartment.owner.name = 'Michal';
// apartment.tags.push('trusted');

// console.log(apartment.owner);

//Ex 7  dodania nowej właściwości!!!!!

// Operacja dodania nowej właściwości po utworzeniu obiektu nie różni się od zmiany wartości istniejącej właściwości. Jeśli podczas zapisywania wartości po nazwie nie ma takiej właściwości w obiekcie, zostanie ona utworzona.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// Dodaj kilka nowych właściwości do obiektu apartment:

// area - powierzchnia mieszkania w metrach kwadratowych, liczba 60;
// rooms - ilość pokoi, liczba 3;
// location - lokalizacja mieszkania, obiekt z następującymi właściwościami;
// country - kraj, string "Jamaica";
// city - miasto, string "Kingston".
// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Wartość dołączonej właściwości area to liczba 60
// Wartość dołączonej właściwości rooms to liczba 3
// Wartość dołączonej właściwości location to obiekt
// Wartość dołączonej właściwości location.country to ciąg "Jamaica"
// Wartość dołączonej właściwości location.city to ciąg "Kingston"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Norway',
//   city: 'Oslo',
// };
// console.log(apartment.location);

// Ex 8

// Czasami podczas tworzenia obiektu wartość właściwości pochodzi ze zmiennej lub parametru funkcji o tej samej nazwie co klucz danej właściwości

// Składnia w poniższym przykładzie jest nieco niepotrzebnie powtarzalna, ponieważ trzeba powielić nazwę właściwości i nazwę zmiennej przechowującą wymaganą wartość.

// const name = 'Henry Cibola';
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Henry Cibola"
// console.log(user.age); // 25
// Na szczęście mamy dostęp do skróconej składni właściwości (shorthand properties) rozwiązuje ten problem, umożliwiając użycie kluczanazwy zmiennej jako nazwy właściwości i jej wartości jako wartości właściwości.

// const name = 'Henry Cibola';
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Cibola"
// console.log(user.age); // 25
// Oznacza to, że podczas deklarowania obiektu wystarczy podać tylko nazwę właściwości, a wartość zostanie przypisana ze zmiennej o tej samej nazwie.

// Uzupełnij kod deklaracji obiektu tak, aby posiadał właściwości name, price, image oraz tags z wartościami ze zmiennych o takich samych nazwach. Pamiętaj, aby użyć skróconej składni właściwości.

// Zadeklarowano zmienną product
// Wartość zmiennej product to obiekt
// Wartość dołączonej właściwości name to ciąg "Repair Droid"
// Wartość dołączonej właściwości price to liczba 2500
// Wartość dołączonej właściwości image to ciąg "https://via.placeholder.com/640x480"
// Wartość dołączonej właściwości tags to tablica ["on sale", "trending", "best buy"]

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// Ex 9

// Zdarzają się sytuacje, w których podczas deklarowania obiektu konieczne jest dodanie właściwości o nazwie, której z góry nie znamy, ponieważ pochodzi ona z wartości zmiennej lub jest wynikiem funkcji.

// Wcześniej w tym celu trzeba było najpierw utworzyć obiekt, a następnie dodać właściwości za pomocą nawiasów kwadratowych, co nie jest zbyt wygodne i może sprawić że kod jest mniej czytelny.

// const propName = 'name';
// const user = {
//   age: 25,
// };

// user[propName] = 'Henryk Cibola';
// console.log(user.name); // "Henryk Cibola"
// Składnia wyliczalnych właściwości (computed properties) pomaga uprościć zapis. Wyrażenie może być między innymi zmienną, funkcją, ważne, żeby zwracało poprawny klucz dla właściwości obiektu.

// const propName = 'name';
// const user = {
//   age: 25,
//   // Nazwa tej właściwości zostanie pobrana z wartości zmiennej propName
//   [propName]: 'Henryk Cibola',
// };

// console.log(user.name); // "Henryk Cibola"

// Uzupełnij kod deklarujący obiekt credentials, aby w rezultacie miał dwie właściwości: email i password, których nazwy są przechowywane w zmiennych emailInputName i passwordInputName.

// Wartością właściwości email musi być ciąg "henry.carter@aptmail.com" a wartością właściwości password ciąg "jqueryismyjam".

// Zadeklarowano zmienną credentials
// Wartość zmiennej credentials to obiekt
// Obiekt credentials posiada właściwość email
// Wartość dołączonej właściwości email to ciąg "henry.carter@aptmail.com"
// Obiekt credentials posiada właściwość password
// Wartość dołączonej właściwości password to ciąg "jqueryismyjam"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// Ex 10

// W przeciwieństwie do tablicy lub ciągu, obiekt nie jest typem danych iterowalnym, to znaczy nie może być iterowany za pomocą pętli for or for...of. Aby osiągnąć ten efekt na obiektach, możemy użyć specjalnej pętli for...in, która iteruje po kluczach obiektu object.

// for (key in object) {
//   // instrukcje
// }
// Zmienna key jest dostępna tylko w ciele pętli. W każdej iteracji zostanie do niej zapisana wartość klucza (nazwa) właściwości. Aby uzyskać wartość właściwości z takim kluczem (nazwą), używana jest składnia nawiasów kwadratowych czyli object[key].

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Klucz
//   console.log(key);
//   // Wartość właściwości z tym kluczem
//   console.log(book[key]);
// }

// Przeiteruj po obiekcie apartment za pomocą pętli for...in i zapisz wszystkie jego klucze w tablicy keys, a wszystkie jego wartości właściwości w tablicy values.

// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Zadeklarowano zmienną keys
// Wartość zmiennej keys to tablica ["descr", "rating", "price"]
// Zadeklarowano zmienną values
// Wartość zmiennej values to tablica ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let key in apartment) {
//   //petla
//   keys.push(key); //zapisanie na nowej tablicy
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//Ex 11

// Przeanalizujmy pojęcie własnych i dziedziczonych właściwości obiektu i nauczmy się poprawnie używać pętli for...in.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
// Metoda Object.create(animal) tworzy i zwraca nowy obiekt, wiążąc go z obiektem animal - jest to więc bardziej rozbudowana alternatywa dla poznanego już sposobu deklaracji obiektu przy pomocy jego literału. Dlatego możesz uzyskać wartość właściwości legs, odnosząc się do niej poprzez dog.legs, nawet jeśli nie ma jej w obiekcie dog - jest to dziedziczona w obiekcie dog właściwość obiektu animal.

// Operator in, używany w pętli for...in, nie rozróżnia własnych i dziedziczonych właściwości obiektu. Ta funkcjonalność może nam przeszkadzać, ponieważ najczęściej chcemy iterować tylko własne właściwości. Aby dowiedzieć się, czy dana własność jest "własna" w danych obiekcie czy nie, użyj metody hasOwnProperty(key), która zwraca true lub false

// // ❌ Zwraca true dla wszystkich właściwości
// console.log('name' in dog); // true
// cueonsole.log('legs' in dog); // tr

// // ✅ Zwraca true tylko dla własnych właściwości
// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.hasOwnProperty());

// Dlatego podczas iteracji pętli for...in może być konieczne dodanie sprawdzenia właściwości przy każdej iteracji. Nawet jeśli teraz mamy pewność, że obiekt nie ma dziedziczonych właściwości, może nas to uchronić to przed ewentualnymi błędami w przyszłości.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Jeśli to jest właściwość własna, wykonaj if body
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Jeśli to nie jest właściwość własna, nie rób nic
// }

// Refaktoryzuj rozwiązanie poprzedniego zadania, dodając sprawdzenie własnej właściwości do pętli for...in.

// Zadeklarowano jest zmienną advert.
// Wartość zmiennej advert to obiekt.
// Zadeklarowano jest zmienną apartment.
// Wartość zmiennej apartment to obiekt.
// Zadeklarowano jest zmienną keys.
// Wartość zmiennej keys to tablica ["descr", "rating", "price"].
// Zadeklarowano jest zmienną values.
// Wartość zmiennej values to tablica ["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

//Ex 12

// Napisz funkcję countProps(object), która zlicza i zwraca liczbę własnych (czyli nie odziedziczonych) właściwości obiektu z parametru object. Użyj zmiennej propCount do liczenia własności

// Zadeklarowano funkcję countProps(object)
// Wywołanie countProps({}) zwraca 0
// Wywołanie countProps({ name: "Mango", age: 2 }) zwraca 2
// Wywołanie countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) zwraca 3
// Funkcja oblicza tylko własne właściwości obiektu

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//Ex 13

// Wbudowana w język JavaScript klasa Object posiada kilka przydatnych metod pracy z obiektami. Pierwsza z nich którą poznamy to Object.keys(obj), która przyjmuje obiekt jako argument i zwraca tablicę kluczy jego własnych właściwości. Jeśli obiekt nie ma właściwości, metoda zwróci pustą tablicę. Metoda ta nie zwróci kluczy własności odziedziczonych

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Łącząc wynik Object.keys() i pętlę for...of, można wygodnie iterować po własnych właściwościach obiektu bez uciekania się do archaicznej pętli for...in gdzie musimy pamiętać o sprawdzaniu własności właściwości

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Klucz
//   console.log(key);
//   // Wartość właściwości
//   console.log(book[key]);
// }
// Iterujemy po tablicy kluczy obiektu i w każdej iteracji otrzymujemy wartość właściwości z takim kluczem.

// Przeiteruj po obiekcie apartment za pomocą metody Object.keys() i pętli for...of. Zapisz w zmiennej keys tablicę kluczy własnych właściwości obiektu apartment i dodaj wszystkie wartości jego właściwości do tablicy values.

// Zadeklarowano zmienną apartment.
// Wartością zmiennej apartment jest obiekt.
// Zadeklarowano zmienną keys.
// Wartością zmiennej keys jest tablica ["descr", "rating", "price"].
// Wartość zmiennej keys została uzyskana przy użyciu metody Object.keys().
// Zadeklarowano zmienną values.
// Wartością zmiennej values jest tablica ["Spacious apartment in the city center", 4, 2153].
// Wartość zmiennej values została uzyskana przy użyciu pętli for...of.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = []; //tworze tablice
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//Ex 14 LICZENIE WŁAŚCIWOŚCI 2.0

// Zadeklarowano funkcję countProps(object) za pomocą metody Object.keys() i opcjonalnie, ale niekoniecznie, pętli for...of.

// Zadeklarowana jest funkcja countProps(object)
// Wywołanie countProps({}) zwraca 0
// Wywołanie countProps({ name: "Mango", age: 2 }) zwraca 2
// Wywołanie countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) zwraca 3
// Funkcja zlicza tylko własne właściwości obiektu
// Funkcja używa metody Object.keys()

// function countProps(object) {
//   const keys = Object.keys(object);
//   let propCount = 0;

//   for (const key of keys) {
//     propCount++;
//   }

//   return propCount;
// // }
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// function countProps(object) {
//   Change code below this line
//   const propCount = Object.keys(object).length;
//   return propCount;
//   Change code above this line
// }

// Ex 15

// Metoda Object.keys(obj) zwraca tablicę kluczy własnych właściwości obiektu, jak można więc się domyślać, metoda Object.values(obj) zwraca tablicę wartości jej własnych właściwości. Jeśli obiekt nie ma właściwości, metoda Object.values(obj) również zwróci pustą tablicę.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["Ostatnie królestwo", "Bernard Cornwell", 8.38]
// Tablicę wartości właściwości można również iterować za pomocą pętli for...of, co pozwoli dość łatwo np. policzyć całkowitą sumę własności liczbowych.

// Zapisz w zmiennej keys tablicę kluczy własnych właściwości obiektu apartment, do zmiennej values tablicę wszystkich wartości jego właściwości. Użyj metod Object.keys() i Object.values().

// Zadeklarowano zmienną apartment
// Wartość zmiennej apartment to obiekt
// Zadeklarowano zmienną keys
// Wartość zmiennej keys to tablica ["descr", "rating", "price"]
// Zadeklarowano zmienną values
// Wartość zmiennej values to tablica ["Spacious apartment in the city center", 4, 2153]
// Aby uzyskać tablicę kluczy obiektu apartment użyta jest metoda Object.keys()
// Aby uzyskać tablicę wartości obiektu apartment użyta jest metoda Object.values()

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(values);

//Ex 16

// Napisz funkcję countTotalSalary(salaries), która jako argument otrzymuje obiekt z wynagrodzeniami, gdzie nazwą właściwości jest nazwisko pracownika, a wartością właściwości jest wynagrodzenie. Funkcja powinna obliczyć łączną kwotę wynagrodzeń pracowników i zwrócić ją. Użyj zmiennej totalSalary, aby zapisać sumę wynagrodzeń.

// Zadeklarowano funkcję countTotalSalary(salaries)
// Wywołanie countTotalSalary({}) zwraca 0
// Wywołanie countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) zwraca 330
// Wywołanie countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) zwraca 400
// Funkcja uwzględnia tylko własne właściwości obiektu

// function countTotalSalary(salaries) {
//   const salaryValues = Object.values(salaries);
//   let totalSalary = 0;

//   for (const salary of salaryValues) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// Ex 17

// Dość często potrzebujemy manipulować tablicą obiektów o takich samych właściwościach i różnych ich wartościach.

// const books = [
//   {
//     title: 'Ostatnie królestwo',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'Sen śmiesznego człowieka',
//     author: 'Fiodor Dostojewski',
//     rating: 7.75,
//   },
// ];
// // Do iteracji po takiej tablicy używana jest standardowa pętla for...of. Wartości właściwości każdego obiektu możemy uzyskać za pomocą składni "z kropką”, ponieważ w każdym obiekcie zestaw właściwości i ich nazwy będą takie same, różnią się jedynie wartościami.

// for (const book of books) {
//   // Obiekt książki
//   console.log(book);
//   // Tytuł
//   console.log(book.title);
//   // Autor
//   console.log(book.author);
//   // Ocena
//   console.log(book.rating);
// }

// Przeiteruj po tablicy obiektów colors używając pętli for...of. Dodaj do tablicy hexColors wartości właściwości hex, do tablicy rgbColors wartości właściwości rgb ze wszystkich obiektów w tablicy colors.

// Zadeklarowano zmienną colors
// Wartość zmiennej colors to tablica
// Zadeklarowano zmienną hexColors
// Wartość zmiennej hexColors to tablica ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Zadeklarowano zmienną rgbColors
// Wartość zmiennej rgbColors to tablica ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);

//Ex 18 POSZUKIWANIE OBIEKTU WEDŁUG WARTOŚCI WŁAŚCIWOŚCI

// Napisz funkcję getProductPrice(productName) która przyjmuje jeden parametr productName - nazwę produktu. Funkcja powinna szukać obiektu produktu o tej nazwie (po właściwości name) w tablicy products i zwrócić jego cenę (właściwość price). Jeśli nie zostanie znaleziony żaden produkt o tej nazwie, funkcja powinna zwrócić null.

// Zadeklarowano funkcję getProductPrice(productName).
// Wywołanie getProductPrice("Radar") zwraca 1300.
// Wywołanie getProductPrice("Grip") zwraca 1200.
// Wywołanie getProductPrice("Scanner") zwraca 2700.
// Wywołanie getProductPrice("Droid") zwraca 400.
// Wywołanie getProductPrice("Engine") zwraca null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return;
// }
// console.log(getProductPrice('Radar'));

//Ex 19 KOLEKCJA WARTOŚCI WŁAŚCIWOŚCI

// Napisz funkcję getAllPropValues(propName), która przyjmuje jeden parametr - propName - nazwę (klucz) właściwości. Funkcja powinna zwracać tablicę wszystkich wartości właściwości o tej nazwie z każdego obiektu w tablicy products. Jeśli w obiektach nie ma właściwości o tej nazwie, funkcja powinna zwrócić pustą tablicę.

// Zadeklarowano funkcję getAllPropValues(propName)
// Wywołanie getAllPropValues("name") zwraca ["Radar", "Scanner", "Droid", "Grip"]
// Wywołanie getAllPropValues("quantity") zwraca [4, 3, 7, 9]
// Wywołanie getAllPropValues("price") zwraca [1300, 2700, 400, 1200]
// Wywołanie getAllPropValues("category") zwraca []

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const propValues = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));

//Ex 20 CAŁKOWITY KOSZT TOWARU

// Napisz funkcję calculateTotalPrice(productName), która przyjmuje jeden parametr productName - nazwę produktu. Funkcja powinna zwrócić całkowity koszt (cena * ilość) produktu o tej nazwie z tablicy products.

// Zadeklarowano funkcję calculateTotalPrice(productName)
// Wywołanie calculateTotalPrice("Blaster") zwraca 0
// Wywołanie calculateTotalPrice("Radar") zwraca 5200
// Wywołanie calculateTotalPrice("Droid") zwraca 2800
// Wywołanie calculateTotalPrice("Grip") zwraca 10800
// Wywołanie calculateTotalPrice("Scanner") zwraca 8100

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Scanner'));

//Ex 21

// Złożone dane są zawsze reprezentowane jako obiekt. Wielokrotne wywołania właściwości obiektu wizualnie zanieczyszczają kod i są zwyczajnie mniej czytelne.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   public: true,
//   rating: 8.38,
// };

// const accessType = book.public ? 'publiczny' : 'zamknięty';
// const message = `Książka ${book.title} autorstwa ${book.author} z oceną ${book.rating} jest w dostępie ${accessType}.`;

// Destrukturyzacja umożliwia „rozpakowanie” wartości właściwości obiektu do zmiennych lokalnych. Dzięki temu kod w miejscu ich użycia nie wymaga użycia wielu kropek i staje się czytelniejszy.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
//   genres: ['proza ​​historyczna', 'przygody'],
//   public: true,
//   rating: 8.38,
// };

// // Destrukturyzacja
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? 'publiczny' : 'zamknięty';
// const message = `Książka ${title} autorstwa ${author} z oceną ${rating} jest w dostępie ${accessType}.`;
// Destrukturyzacja zawsze znajduje się po lewej stronie operacji przypisania. Zmiennym wewnątrz nawiasów klamrowych przypisywane są wartości właściwości obiektu. Jeśli nazwa zmiennej i nazwa właściwości są takie same, to przypisanie ma miejsce, w przeciwnym razie zostanie mu przypisane undefined. Kolejność, w jakiej zmienne są deklarowane w nawiasach klamrowych, nie ma znaczenia ponieważ odnosimy się bezpośrednio po kluczach, natomiast obiekty jako takie nie mają kolejności tak jak ma to miejsce w przypadku tablic..

// Otrzymaliśmy trzydniową prognozę maksymalnych temperatur i obliczamy średnią temperaturę z trzech dni (meanTemperature). Zastąp deklaracje zmiennych yesterday, today i tomorrow jedną operacją destrukturyzacji właściwości obiektu highTemperatures.

// Zadeklarowano zmienną highTemperatures
// Wartość zmiennej highTemperatures to obiekt
// Zadeklarowano zmienną yesterday za pomocą destrukturyzacji
// Wartość zmiennej yesterday to liczba 28
// Zadeklarowano zmienną today za pomocą destrukturyzacji
// Wartość zmiennej today to liczba 26
// Zadeklarowano zmienną tomorrow za pomocą destrukturyzacji
// Wartość zmiennej tomorrow to liczba 33
// Zadeklarowano zmienną meanTemperature
// Wartość zmiennej meanTemperature to liczba 29
// Używana jest składnia destrukturyzacji obiektu highTemperatures

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   //const yesterday = highTemperatures.yesterday;
//   //const today = highTemperatures.today;
//   //const tomorrow = highTemperatures.tomorrow;
//   const { yesterday, today, tomorrow } = highTemperatures;
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//Ex 22

// Aby uniknąć przypisania undefined jako wartości podczas destrukturyzacji nieistniejących właściwości (co może mieć miejsce gdy nie mamy pewności, że obiekt który "rozpakowujemy" ma wszystkie właściwości), możesz ustawić domyślne wartości zmiennych, które zostaną przypisane tylko wtedy, gdy obiekt nie ma właściwości o tej samej nazwie.

// const book = {
//   title: 'Ostatnie królestwo',
//   author: 'Bernard Cornwell',
// };

// // Dodaj zdjęcie na okładkę, jeśli nie ma go w obiekcie książki
// const {
//   title,
//   coverImage = 'https://via.placeholder.com/640/480',
//   author,
// } = book;

// console.log(title); // Ostatnie królestwo
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// Prognoza maksymalnej temperatury może mieć również opcjonalną właściwość icon - ikonę pogody. Zastąp deklaracje zmiennych yesterday, today, tomorrow i icon jedną operacją destrukturyzującą właściwości obiektu highTemperatures. Ustaw domyślną wartość dla icon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Zadeklarowano zmienną highTemperatures
// Wartość zmiennej highTemperatures to obiekt
// Zadeklarowano zmienną highTemperatures
// Wartość zmiennej highTemperatures to obiekt
// Zadeklarowano zmienną yesterday przy użyciu destrukturyzacji
// Wartość zmiennej yesterday to liczba 28
// Zadeklarowano zmienną today przy użyciu destrukturyzacji
// Wartość zmiennej today to liczba 26
// Zadeklarowano zmienną tomorrow przy użyciu destrukturyzacji
// Wartość zmiennej tomorrow to liczba 33
// Zadeklarowano zmienną icon przy użyciu destrukturyzacji
// Wartość zmiennej icon to string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Używana jest destrukturyzacja obiektów

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   //const yesterday = highTemperatures.yesterday;
//   //const today = highTemperatures.today;
//   //const tomorrow = highTemperatures.tomorrow;
//   //const icon = highTemperatures.icon;
//   const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//Ex 23

// Podczas destrukturyzacji możesz zmienić nazwę zmiennej, do której rozpakowana jest wartość właściwości. Aby to zrobić, piszemy najpierw nazwę właściwości, z której chcemy uzyskać wartość, następnie dwukropek i wpisujemy nazwę właściwości obiektu.

// const firstBook = {
//   title: 'Ostatnie Królestwo',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // Ostatnie Królestwo
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Sen śmiesznego człowieka',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Sen śmiesznego człowieka
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
// // Taki wpis brzmi "Utwórz zmienną firstTitle, w której należy umieścić wartość właściwości title z obiektu firstBook" itd.

// Zastąp deklaracje zmiennych highYesterday, highToday, highTomorrow i highIcon jedną operacją destrukturyzacji właściwości obiektu highTemperatures. Pamiętaj, podobnie jak w poprzednim zadaniu wartość dla highIcon ma pochodzić z wartości właściwości icon w obiekcie highTemperatures, jeżeli w obiekcie nie ma takiej wartości, ustaw ją dla highIcon domyślnie na string: "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Zadeklarowano zmienną highTemperatures
// Wartość zmiennej highTemperatures to obiekt
// Zadeklarowano zmienną highYesterday
// Wartość zmiennej highYesterday to liczba 28
// Zadeklarowano zmienną highToday
// Wartość zmiennej highToday to liczba 26
// Zadeklarowano zmienną highTomorrow
// Wartość zmiennej highTomorrow to liczba 33
// Zadeklarowano zmienną highIcon
// Wartość zmiennej highIcon to string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Używana jest destrukturyzacja obiektów

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   //const highYesterday = highTemperatures.yesterday;
//   //const highToday = highTemperatures.today;
//   //const highTomorrow = highTemperatures.tomorrow;
//   //const highIcon = highTemperatures.icon;
//   const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Ex 24

// Podczas iteracji po tablicy obiektów z pętlą for...of otrzymujemy wiele identycznych wywołań obiektów z takimi samymi właściwościami.

// const books = [
//   {
//     title: 'Ostatnie królestwo',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }
// // Aby zmniejszyć liczbę powtórzeń, możesz dokonać destrukturyzacji właściwości obiektu do zmiennych lokalnych w ciele pętli.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// // Jeśli obiekt ma niewiele właściwości i nie zaburzy to czytelności kodu, destrukturyzację można przeprowadzić bezpośrednio w miejscu, w którym była zadeklarowana zmienna book.

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Refaktoryzuj pętlę for...of, aby używała destrukturyzacji obiektu.

// Zadeklarowano zmienną colors
// Wartość zmiennej colors to tablica
// Zadeklarowano zmienną hexColors
// Wartość zmiennej hexColors to tablica ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Zadeklarowano zmienną rgbColors
// Wartość zmiennej rgbColors to tablica ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Aby iterować po tablicy, użyto pętli for...of
// Destrukturyzacja obiektów jest używana w pętli for...of

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }

//Ex 25

// Te same zasady jak w poprzednich ćwiczeniach używane są przy destrukturyzowaniu właściwości obiektów zagnieżdżonych.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Otrzymaliśmy prognozę pogody na dwa dni, z minimalną i maksymalną temperaturą oraz opcjonalnymi ikonami. Zastąp wszystkie deklaracje zmiennych jedną operacją destrukturyzującą właściwości obiektu forecast. Ustaw domyślną wartość dla ikon, zmiennych todayIcon i tomorrowIcon - string "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Zadeklarowano zmienną forecast
// Wartość zmiennej forecast to obiekt
// Zadeklarowano zmienną highToday przy użyciu destrukturyzacji
// Wartość zmiennej highToday to liczba 32
// Zadeklarowano zmienną lowToday przy użyciu destrukturyzacji
// Wartość zmiennej lowToday to liczba 28
// Zadeklarowano zmienną todayIcon przy użyciu destrukturyzacji
// Wartość zmiennej todayIcon to string "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Zadeklarowano zmienną highTomorrow przy użyciu destrukturyzacji
// Wartość zmiennej highTomorrow to liczba 31
// Zadeklarowana zmienna lowTomorrow przy użyciu destrukturyzacji
// Wartość zmiennej lowTomorrow to liczba 27
// Zadeklarowano zmienną tomorrowIcon przy użyciu destrukturyzacji
// Wartość zmiennej tomorrowIcon to ciąg "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Używana jest składnia destrukturyzacji obiektu highTemperatures

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// //const highToday = forecast.today.high;
// //const lowToday = forecast.today.low;
// //const todayIcon = forecast.today.icon;

// //const highTomorrow = forecast.tomorrow.high;
// //const lowTomorrow = forecast.tomorrow.low;
// //const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

//Ex 26

// Jeśli funkcja przyjmuje więcej niż jeden parametr, bardzo łatwo jest pomylić się co i w jakiej kolejności je przekazywać, zwłaszcza gdy wywołań funkcji jest wiele w różnych miejscach a jej parametry mają ustawione wartości domyślne. Rezultatem jest bardzo nieoczywisty kod w miejscu jego wywołania.

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//   // Robimy coś z parametrami
//   console.log(title);
//   console.log(numberOfPages);
//   // Itd
// }

// // // ❌ Co to jest 736? Co to jest 10283? Co to jest true?
// // doStuffWithBook("Ostatnie królestwo", 736, 10283, 8.38, true);
// // Wzorzec «Obiekt ustawień» pomaga rozwiązać ten problem, zastępując zestaw parametrów tylko jednym — obiektem o nazwanych właściwościach - nie liczy się wtedy kolejność ich podania a jedynie ważne są klucze pod którymi znajdują się wartości.

// function doStuffWithBook(book) {
//   // Robimy coś z właściwościami obiektu
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // Itd
// }
// Wtedy podczas wywołania przekazujemy jeden obiekt z niezbędnymi właściwościami.

// ✅ Wszystko jasne
// doStuffWithBook({
//   title: 'Ostatnie królestwo',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   public: true,
// });
// // Kolejnym plusem jest to, że możesz zdestrukturyzować obiekt w parametrze book.

// // Można to zrobić w ciele funkcji.
// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, public } = book;
//   console.log(title);
//   console.log(numberOfPages);
//   // Itd
// }

// // Lub w deklaracji, zależy to jedynie od przyjętej konwencji oba sposoby są w porządku.
// function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // Itd
// }

// Funkcja calculateMeanTemperature(forecast) przyjmuje jeden parametr forecast - obiekt temperatury na dwa dni następnego formatu.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Zastąp deklaracje zmiennych todayLow, todayHigh, tomorrowLow i tomorrowHigh jedną operacją destrukturyzacji właściwości obiektu forecast.

// Zadeklarowana jest funkcja calculateMeanTemperature(forecast)
// Ciało funkcji wykorzystuje destrukturyzację obiektu
// Zmienna todayHigh jest deklarowana w ciele funkcji za pomocą destrukturyzacji
// Zmienna todayLow jest deklarowana w ciele funkcji za pomocą destrukturyzacji
// Zmienna tomorrowLow jest deklarowana w ciele funkcji za pomocą destrukturyzacji
// Zmienna tomorrowHigh jest deklarowana w ciele funkcji za pomocą destrukturyzacji
// Wywołanie calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) zwraca 28.5
// Wywołanie calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) zwraca 37

// Change code below this line
//function calculateMeanTemperature(forecast) {
//const todayLow = forecast.today.low;
//const todayHigh = forecast.today.high;
//const tomorrowLow = forecast.tomorrow.low;
//const tomorrowHigh = forecast.tomorrow.high;

// Change code above this line
//return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//}

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//EX 27 ...SPREAD

// Składnia ... (spread) umożliwia "rozkładanie" kolekcji elementów (tablicy, ciągu lub obiektu) w miejscu, w którym oczekiwany jest ciąg różnych wartości. Oczywiście istnieją pewne ograniczenia, na przykład nie można "rozłożyć" tablicy do obiektu i odwrotnie.

// Możemy użyć analogii z pudełkiem jabłek. Kładąc pudełko na podłodze bez wyjmowania z niego jabłek, otrzymujemy analog tablicy wartości. Jeśli wysypać jabłka z pudełka na podłogę, następuje "rozkładanie" - zestaw oddzielnych wartości. Każde jabłko staje się w danym miejscu osobną wartością która może zostać wykorzystana.

// Jest tylko jedna różnica - w JavaScript "rozkładanie" nie zmienia oryginalnej kolekcji, czyli tworzy (shallow copy) płytką kopię każdego elementu. Po "rozkładaniu" na podłodze będzie pudełko pełne jabłek i kopia każdego jabłka.

// Na przykład metoda Math.max(arguments) wyszukuje i zwraca największy z podanych argumentów (liczb), co oznacza, że ​​nie oczekuje tablicy wartości, ale dowolnej liczby argumentów.

// const temps = [14, -4, 25, 8, 11];

// Konsola wyświetli tablicę a nie wszystko elementy pojedynczo
// console.log(temps);
// ❌ To nie zadziała, ponieważ przekazujemy całą tablicę a nie poszczególne jej elementy jako poszczególne argumenty
// console.log(Math.max(temps)); // NaN

// Konsola wyświetli po kolei liczby z tablicy
// console.log(...temps);
// ✅ Rozłóżmy kolekcję elementów jako oddzielne argumenty
// console.log(Math.max(...temps)); // 25
// Czyli wpis Math.max(...[14, -4, 25, 8, 11]) po interpretacji zamienia się w Math.max(14, -4, 25, 8, 11) - składnia ... zwraca rozpakowaną tablicę, czyli rozkłada jej elementy jako oddzielne argumenty.

// Zmienna scores przechowuje tablicę wyników testów. Używając operatora spread i metod Math.max() i Math.min(), uzupełnij kod tak, aby do zmiennej bestScore przypisany został najwyższy wynik, natomiast do worstScore najniższy.

// Zadeklarowano zmienną scores
// Wartość zmiennej scores to tablica [89, 64, 42, 17, 93, 51, 26]
// Zadeklarowano zmienną bestScore
// Wartość zmiennej bestScore to liczba 93
// Zadeklarowano zmienną worstScore
// Wartość zmiennej worstScore to liczba 17
// Do przekazywania argumentów do metody Math.max() używany jest operator spread ... w tablicy scores
// Do przekazywania argumentów do metody Math.min() używany jest operator spread ... w tablicy scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(worstScore);

//Ex 28

// Operacja spread pozwala na utworzenie płytkiej kopii tablicy lub "sklejenie" dowolnej liczby tablic w jedną nową. Wcześniej używano do tego metod slice() i concat(), ale operacja rozkładania pozwala zrobić to samo w bardziej skróconej i czytelnej formie.

// const temps = [14, -4, 25, 8, 11];

// // To jest dokładna, ale niezależna płytka kopia tablicy temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// // W powyższym przykładzie mamy pudełko jabłek temps i chcemy zrobić jego dokładną kopię. Bierzemy puste pudełko i wsypujemy do niego jabłka z oryginalnego pudełka temps - rozkładamy je do innej kolekcji. W tym przypadku pudełko temps nie zmieni się, nadal będzie zawierało jabłka, a nowe pudełko będzie zawierało ich dokładne kopie.

// // W poniższym przykładzie wsypujemy jabłka z dwóch pudełek do jednego nowego. Oryginalne pudełka (tablice) nie ulegną zmianie, ale nowe będą zawierały kopie wszystkich ich jabłek (elementów). Kolejność rozkładania jest ważna - wpływa na kolejność elementów w nowej tablicy.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// W zmiennych firstGroupScores, secondGroupScores i thirdGroupScores przechowywane są wyniki testów poszczególnych grup. Używając rozkładania, uzupełnij kod tak, aby:

// Zmienna allScores przechowywała tablicę wszystkich wyników od pierwszej do trzeciej grupy.
// Zmienna bestScore miała najwyższy ogólny wynik.
// Zmienna worstScore miała najniższy ogólny wynik.
// Zadeklarowano zmienną firstGroupScores
// Wartością zmiennej firstGroupScores jest tablica [64, 42, 93]
// Zadeklarowano zmienną secondGroupScores
// Wartością zmiennej secondGroupScores jest tablica [89, 14, 51, 26]
// Zadeklarowano zmienną thirdGroupScores
// Wartością zmiennej thirdGroupScores jest tablica [29, 47, 18, 97, 81]
// Zadeklarowano zmienną allScores.
// Wartością zmiennej allScores jest tablica [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Zadeklarowano zmienną bestScore
// Wartością zmiennej bestScore jest liczba 97
// Zadeklarowano zmienną worstScore
// Wartością zmiennej worstScore jest liczba 14
// Podczas przypisywania wartości do zmiennej allScores do wypełnienia tablicy użyto operatora spread ...
// Aby przekazać argumenty do metody Math.max() używany jest operator spread ... natablicy allScores
// Aby przekazać argumenty do metody Math.min() używany jest operator spread ... na tablicy allScores

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//Ex 29

// Operacja spread pozwala na rozkładanie właściwości dowolnej liczby obiektów w jeden nowy.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// Kolejność rozkładania ma znaczenie. Nazwy właściwości obiektu są niepowtarzalne, więc właściwości rozkładanego obiektu mogą nadpisać wartość istniejącej właściwości, jeśli ich nazwy są takie same.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Gdyby jabłka w pudełku miały etykiety, to w jednym pudełku nie mogłyby znajdować się dwa jabłka z tymi samymi etykietami. Dlatego podczas "wysypania" drugiego pudełka wszystkie jabłka, których etykiety pokrywają się z tymi, które są już w nowym, zastąpią tamte, które już są.

// Podczas rozkładania możesz dodać właściwości do dowolnego miejsca. Najważniejszą rzeczą do zapamiętania jest to, że nazwa właściwości jest unikalna i że jej wartość można nadpisać.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// W konstruktorze można tworzyć nowe testy, których domyślne ustawienia są przechowywane w zmiennej defaultSettings. Podczas tworzenia testu wszystkie lub część ustawień można nadpisać, są one przechowywane w zmiennej overrideSettings.

// Aby uzyskać ostateczne ustawienia testu, musisz wybrać ustawienia domyślne i zastosować na nich nadpisane ustawienia. Uzupełnij kod w ten sposób, aby zmienna finalSettings zawierała obiekt ostatecznych ustawień testu.

// Zadeklarowano zmienną defaultSettings
// Wartość zmiennej defaultSettings to obiekt
// Zadeklarowano zmienną overrideSettings
// Wartość zmiennej overrideSettings to obiekt
// Zadeklarowano zmienną finalSettings
// Wartość zmiennej finalSettings to obiekt
// Wartość właściwości finalSettings.theme to "light"
// Wartość właściwości finalSettings.public to "false"
// Wartość właściwości finalSettings.withPassword to "true"
// Wartość właściwości finalSettings.minNumberOfQuestions to 10
// Wartość właściwości finalSettings.timePerQuestion to 30
// Podczas przypisywania wartości zmiennej finalSettings używana jest składnia ...

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

//Ex 30 KARTY ZADAŃ

// Napisz funkcję makeTask(data), która przyjmuje jeden parametr data - obiekt o następujących właściwościach:

// text - tekst zadania.
// category - kategoria zadania.
// priority - priorytet zadania.
// Funkcja powinna utworzyć i zwrócić nowy obiekt zadania bez bezpośredniej modyfikacji parametru data. Nowy obiekt musi mieć właściwość completed, której wartość jest przechowywana w zmiennej lokalnej o tej samej nazwie.

// W parametrze data jest gwarantowana tylko właściwość text, i może brakować pozostałych dwóch category i priority. Wtedy w nowym obiekcie zadania właściwości category i priority powinny zawierać wartości domyślne przechowywane w zmiennych lokalnych o tej samej nazwie.

// Zadeklarowano funkcję makeTask(data)
// Wywołanie makeTask({}) zwraca { category: "General", priority: "Normal", completed: false }
// Wywołanie makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) zwraca { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Wywołanie makeTask({ category: "Finance", text: "Take interest" }) zwraca { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Wywołanie makeTask({ priority: "Low", text: "Choose shampoo" }) zwraca { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Wywołanie makeTask({ text: "Buy bread" }) zwraca { category: "General", priority: "Normal", text: "Buy bread", completed: false }
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const task = {
//     category: data.category || category,
//     priority: data.priority || priority,
//     text: data.text,
//     completed: completed,
//   };
//   return task;
//   // Change code above this line
// }

//Ex 31  ...REST

// Operacja ... (rest) umożliwia zebranie grupy niezależnych elementów do nowej kolekcji. Syntaktycznie jest to bliźniak operacji rozkładania, ale łatwo je rozróżnić - spread/rozkładanie następuje, gdy ... znajduje się po prawej stronie operacji przypisania, a rest/zbiór ma miejsce, gdy ... znajduje się po lewej stronie.

// Wróćmy do analogii z jabłkami. Jeśli na podłodze są jabłka i mamy puste pudełko, to operacja rest pozwoli nam „zbierać” jabłka do pudełka. W takim przypadku oryginalne jabłka pozostaną na podłodze, a w pudełku będzie kopia każdego jabłka.

// Najczęstszym z zastosowaniem operacji rest jest tworzenie funkcji, które mogą przyjmować dowolną liczbę argumentów.

// Jak zadeklarować parametry funkcji tak,
// aby można było przekazać dowolną liczbę argumentów?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// // Jeśli usuniemy cały „szum składni” i spojrzymy na argumenty i parametry funkcji, to argumenty znajdują się po prawej stronie operacji przypisania, a parametry po lewej, ponieważ wartości argumentów są przypisane do zadeklarowanego parametru. Możesz więc "zbierać" wszystkie argumenty funkcji w jeden parametr za pomocą operacji rest.

// function multiply(...args) {
//   console.log(args); // tablica wszystkich argumentów
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// // Nazwa parametru może być dowolna. Najczęściej nazywa się to args, restArgs lub otherArgs, co jest skrótem od arguments.

// Korzystając z operacji rest, uzupełnij kod funkcji add(), aby przyjmowała dowolną liczbę argumentów, odczytywała i zwracała ich sumę.

// Zadeklarowano funkcję add
// Funkcja add używa parametru args
// Aby zebrać argumenty do zmiennej args, w podpisie funkcji używa się składni ... (operator rest)
// Wywołanie add(15, 27) zwraca 42
// Wywołanie add(12, 4, 11, 48) zwraca 75
// Wywołanie add(32, 6, 13, 19, 8) zwraca 78
// Wywołanie add(74, 11, 62, 46, 12, 36) zwraca 241

// function add(...args) {
//     return args.reduce((sum, num) => sum + num, 0);
//   }

//Ex 32

// Operacja ... (rest) umożliwia również zbieranie do tablicy tylko tej części argumentów, która jest potrzebna poprzez zadeklarowanie parametrów przed „zbiorem”.

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Wartość pierwszego argumentu
//   console.log(secondNumber); // Wartość drugiego argumentu
//   console.log(otherArgs); // Tablica pozostałych argumentów
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// Wszystkie argumenty, dla których zostaną zadeklarowane parametry przekażą im swoje wartości, reszta argumentów zostanie umieszczona w tablicy. Operacja rest zbiera wszystkie pozostałe argumenty i dlatego musi znajdować się na końcu w sygnaturze funkcji, w przeciwnym razie wyrzucony zostanie błąd.

// Funkcja addOverNum() oblicza sumę wszystkich argumentów. Zmień parametry i ciało funkcji addOverNum() tak, aby obliczała tylko sumę tych argumentów, które są większe niż określona liczba. Ta liczba musi być pierwszym parametrem funkcji.

// Zadeklarowano funkcję addOverNum()
// Wywołanie addOverNum(50, 15, 27) zwraca 0
// Wywołanie addOverNum(10, 12, 4, 11, 48, 10, 8) zwraca 71
// Wywołanie addOverNum(15, 32, 6, 13, 19, 8) zwraca 51
// Wywołanie addOverNum(20, 74, 11, 62, 46, 12, 36) zwraca 218

// function addOverNum(num, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//Ex 33 TABLICA DOPASOWAŃ

// Funkcja findMatches() powinna przyjmować dowolną liczbę argumentów. Pierwszy argument zawsze będzie tablicą liczb, a pozostałe argumenty będą pojedynczymi liczbami.

// Uzupełnij kod funkcji, aby zwracała nową tablicę matches, która będzie zawierać tylko te argumenty, zaczynając od drugiego, które znajdują się w tablicy pierwszego argumentu.

// Na przykład findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) powinno zwrócić tablicę [1, 2], ponieważ tylko one znajdują się w tablicy którą podajemy jako pierwszy argument.

// Zadeklarowano funkcję findMatches()
// Wywołanie findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) zwraca [1, 2]
// Wywołanie findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) zwraca [17, 89, 2]
// Wywołanie findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) zwraca [24, 9, 41]
// Wywołanie findMatches([63, 11, 8, 29], 4, 7, 16) zwraca []

// Change code below this line
//function findMatches() {
// const matches = []; // Don't change this line

// Change code above this line
// return matches;
//}

// function findMatches(arr, ...args) {
//   const matches = args.filter((arg) => arr.includes(arg));
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// Oto poprawiona wersja funkcji findMatches() wykorzystująca ...rest:

// javascript
// Copy code
// function findMatches(arr, ...rest) {
//   const matches = [];

//   for (const numToFind of rest) {
//     if (arr.includes(numToFind)) {
//       matches.push(numToFind);
//     }
//   }

//   return matches;
// }
// W tej wersji funkcji findMatches() pierwszy argument arr jest normalnym argumentem, a ...rest to operator rest, który przechwytuje wszystkie pozostałe argumenty jako tablicę. Teraz możemy bezpośrednio iterować po tablicy rest, sprawdzając, czy każda z tych pojedynczych liczb znajduje się w tablicy arr za pomocą metody includes(). Jeśli tak, to dodajemy ją do tablicy matches. Po przejściu przez wszystkie argumenty zwracamy tablicę matches, która zawiera tylko te liczby, które znajdują się w tablicy przekazanej jako pierwszy argument.

// Możemy również użyć operatora ...spread (spread syntax) do rozpakowania pozostałych argumentów w wywołaniu funkcji. W takim przypadku wywołanie funkcji będzie wyglądać następująco:

// javascript
// Copy code
// const arr = [1, 2, 3, 4, 5];
// const result = findMatches(arr, ...[1, 8, 2, 7]);
// console.log(result); // Output: [1, 2]
// Operator ...[1, 8, 2, 7] rozpakowuje tablicę i przekazuje jej elementy jako pojedyncze argumenty do funkcji findMatches(). Funkcja będzie działała w taki sam sposób, jak wcześniej.

//Ex 34

// Do tej pory traktowaliśmy obiekty tylko jako magazyny powiązanych ze sobą danych, na przykład informacji o książce itp. Obiekty używane jako tego typu "pamięć" zwykle znajdują się w tablicy tych samych obiektów, która reprezentuje kolekcję podobnych elementów.

// Obiekty mogą przechowywać nie tylko dane, ale także funkcje do pracy z tymi danymi - metody. Jeśli wartością właściwości jest funkcja, właściwość ta nazywana jest metodą obiektu.

// // ✅ Logiczne i syntaktycznie pogrupowane encje
// const bookShelf = {
//   books: ['Ostatnie królestwo', 'Strażnicy snów'],
//   // To jest metoda obiektu
//   getBooks() {
//     console.log('Ta metoda zwróci wszystkie książki - właściwość books');
//   },
//   // To jest metoda obiektu
//   addBook(bookName) {
//     console.log('Ta metoda doda nową książkę do właściwości books');
//   },
// };

// // Wywołania metod
// bookShelf.getBooks();
// bookShelf.addBook('Nowa książka');
// // Takie obiekty można nazwać „modelami”. Wiążą one dane i metody do pracy z tymi danymi. Na przykład, można zadeklarować zmienną books i dwie funkcje getBooks() i addBook(bookName), ale wtedy byłyby trzema niezależnymi jednostkami bez wyraźnej składni i ze słabym połączeniem logicznym.

// // ❌ Luźno powiązane, niezależne encje
// const books = [];
// function getBooks() {}
// function addBook() {}

// Dodaj dwie dodatkowe metody do obiektu bookShelf, które na razie będą zwracały tylko stringi przez analogię do getBooks() i addBook(bookName).

// Metoda removeBook(bookName) usunie książkę według tytułu. Zwraca string "Deleting book <tytuł książki>", gdzie <tytuł ksiązki> jest wartością parametru bookName.

// Metoda updateBook(oldName, newName) zaktualizuje tytuł książki. Zwraca string "Updating book <stary tytuł> to <nowy tytuł>", gdzie <stary tytuł> i <nowy tytuł> są wartościami parametrów oldName i newName odpowiednio.

// Zadeklarowano zmienną bookShelf

// Wartością zmiennej bookShelf jest obiekt

// Wartością właściwości bookShelf.getBooks jest metoda obiektu

// Wywołanie metody bookShelf.getBooks() zwraca ciąg "Returning all books"

// Wartością właściwości bookShelf.addBook jest metoda obiektu

// Wywołanie metody bookShelf.addBook("Haze") zwraca ciąg "Adding book Haze"

// Wartością właściwości bookShelf.removeBook jest metoda obiektu

// Wywołanie metody bookShelf.removeBook("Red sunset") zwraca ciąg "Deleting book Red sunset"

// Wartością właściwości bookShelf.updateBook jest metoda obiektu

// Wywołanie metody bookShelf.updateBook("Sands of dune", "Dune") zwraca ciąg "Updating book Sands of dune to Dune"

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     const index = this.books.indexOf(bookName);
//     if (index === -1) {
//       this.books.splice(index, 1);
//       return `Deleting book ${bookName}`;
//     } else {
//       return `Book ${bookName} not found`;
//     }
//   },
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index === -1) {
//       this.books[index] = newName;
//       return `Updating book ${oldName} to ${newName}`;
//     } else {
//       return `Book ${oldName} not found`;
//     }
//   },
// };
// console.log(bookShelf.removeBook('Red sunset'));

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName, ...rest) {
//     const bookIndex = this.books.indexOf(bookName);
//     if (bookIndex !== -1) {
//       this.books.splice(bookIndex, 1);
//       return `Deleting book ${bookName}`;
//     } else {
//       return `Book ${bookName} not found`;
//     }
//   },
//   updateBook(oldName, newName, ...rest) {
//     const bookIndex = this.books.indexOf(oldName);
//     if (bookIndex !== -1) {
//       this.books[bookIndex] = newName;
//       return `Updating book ${oldName} to ${newName}`;
//     } else {
//       return `Book ${oldName} not found`;
//     }
//   },
// };
// console.log(bookShelf.removeBook('Red sunset'));

// Ex 35

// Metody służą do pracy z właściwościami obiektów i ich zmiany. Aby uzyskać dostęp do obiektu, metoda nie używa nazwy zmiennej, na przykład bookShelf, ale słowa kluczowego this - oznaczającego tutaj kontekst. Wartością this będzie obiekt przed punktem (kropką), czyli obiekt, który wywołał tę metodę, w naszym przypadku jest to link do obiektu bookShelf.

// const bookShelf = {
//   books: ['Ostatnie Królestwo'],
//   getBooks() {
//     console.log(this);
//   },
// };

// Kropka jest poprzedzona obiektem bookShelf,
// więc kiedy metoda jest wywoływana, this będzie przechowywać link do niego.
//bookShelf.getBooks(); // {books: ["Ostatnie Królestwo"], getBooks: f}
// Aby uzyskać dostęp do właściwości obiektu w metodach, odwołujemy się do niego przez this, a następnie, jak zwykle, przez kropkę, do właściwości.

// const bookShelf = {
//   books: ['Ostatnie Królestwo'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["Ostatnie Królestwo"]
// bookShelf.addBook('Mgła');
// bookShelf.addBook('Strażnicy snów');
// console.log(bookShelf.getBooks()); // ["Ostatnie Królestwo", "Mgła", "Strażnicy snów"]
// bookShelf.removeBook('Mgła');
// console.log(bookShelf.getBooks()); // ["Ostatnie Królestwo", "Strażnicy snów"]

// Logicznie byłoby myśleć - dlaczego nie użyć nazwy obiektu podczas odwoływania się do właściwości, ponieważ wyraźnie nie zamierzamy jej zmieniać. Chodzi o to, że nazwa obiektu oże nie być jednoznaczna i "wiarygodna", metody jednego obiektu można skopiować do innego (o innej nazwie), a w przyszłości przekonamy się, że często tworząc obiekt, w ogóle nie znamy nazwy z góry. Użycie this zapewnia, że ​​metoda działa dokładnie na obiekcie, który ją wywołał.

// Uzupełnij metodę updateBook(oldName, newName) tak, aby zmieniała tytuł książki z oldName na newName we właściwości books. Użyj indexOf(), aby znaleźć żądany element tablicy, i splice(), aby zastąpić ten element.

// Zadeklarowana zmienna bookShelf

// Wartością zmiennej bookShelf jest obiekt

// Wartością właściwości bookShelf.updateBook jest metoda obiektu

// Po wywołaniu metody bookShelf.updateBook("Haze", "Dungeon chronicles"), wartością właściwości books jest tablica ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Po wywołaniu metody bookShelf.updateBook("The last kingdom", "Dune"), wartością właściwości books jest tablica ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//   const index = this.books.indexOf(oldName);
//       if (index !==-1){
//         this.books.splice(index, 1, newName);
//       }

//       // Change code above this line
//     },
//   };

// Ex 36  SKLEP Z ELIKSIRAMI „U STAREJ ROPUCHY”

// Zwrócił się do nas właściciel sklepu z eliksirami "U Starej Ropuchy" i zamówił program do prowadzenia inwentarza - dodawania, usuwania, wyszukiwania i aktualizacji mikstur. W tym zadaniu na razie dodaj tylko do obiektu atTheOldToad właściwość potions, której wartość jest pustą tablicą.

// Zadeklarowano zmienną atTheOldToad
// Wartością zmiennej atTheOldToad jest obiekt
// Wartością właściwości atTheOldToad.potions jest tablica []

// const atTheOldToad = {
//     options: [],
// }

// Ex 37 OTRZYMUJEMY WSZYSTKIE MIKSTURY

// Dodaj do obiektu atTheOldToad metodę getPotions(), która po prostu zwraca wartość wartość właściwości potions.

// Zadeklarowano zmienną atTheOldToad
// Wartością zmiennej atTheOldToad jest obiekt
// Wartością właściwości atTheOldToad.potions jest tablica ["Speed potion", "Dragon breath", "Stone skin"]
// Wartością właściwości atTheOldToad.getPotions jest metoda obiektu
// Wywołanie metody atTheOldToad.getPotions() zwraca ["Speed potion", "Dragon breath", "Stone skin"]

// const atTheOldToad = {
//   options: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getOptions()
//   {
//     return this.options; //--------------MATODA
//   },
// };
// console.log(atTheOldToad.getOptions());

// Ex 38 DODAJ NOWĄ MIKSTURĘ

// Uzupełnij metodę addPotion(potionName), aby dodawała miksturę potionName na końcu tablicy mikstur we właściwości potions.

// Zadeklarowano zmienną atTheOldToad
// Wartość zmiennej atTheOldToad to obiekt
// Wartość właściwości atTheOldToad.potions to tablica ["Speed potion", "Dragon breath", "Stone skin"]
// Wartość właściwości atTheOldToad.addPotion to metoda obiektu
// Po pierwszym wywołaniu metody atTheOldToad.addPotion("Invisibility"), właściwość potions będzie zawierać tablicę ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// Po drugim wywołaniu metody atTheOldToad.addPotion("Power potion"), właściwość potions będzie zawierać tablicę ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   options: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addOption(optionName) {
//     this.options.push(optionName);
//   },
// };

// Ex 39 USUŃ MIKSTURĘ

// Uzupełnij metodę removePotion(potionName) aby usuwała miksturę potionName z tablicy mikstur we właściwości potions przy użyciu indexOf i splice.

// Zadeklarowana zmienna atTheOldToad
// Wartość zmiennej atTheOldToad to obiekt
// Wartość właściwości atTheOldToad.potions to tablica ["Speed potion", "Dragon breath", "Stone skin"]
// Wartość właściwości atTheOldToad.removePotion to metoda obiektu
// Po pierwszym wywołaniu metody atTheOldToad.removePotion("Dragon breath"), właściwość potions będzie zawierać tablicę ["Speed potion", Stone skin"]
// Po drugim wywołaniu metody atTheOldToad.removePotion("Speed potion"), właściwość potions będzie zawierać tablicę ["Stone skin"]

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     if (potionIndex !== -1) {
//       this.potions.splice(potionIndex, 1);
//     }
//   },
// };

// // Testy
// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad.potions); // Output: ["Speed potion", "Stone skin"]

// atTheOldToad.removePotion('Speed potion');
// console.log(atTheOldToad.potions); // Output: ["Stone skin"]

// Ex 40  ZAKTUALIZUJ MIKSTURĘ

// Uzupełnij metodę updatePotionName(oldName, newName) tak, aby zmieniała nazwę mikstury z oldName do newName, w tablicy mikstur we właściwości potions.

// Zadeklarowano zmienną atTheOldToad
// Wartość zmiennej atTheOldToad to obiekt
// Wartość właściwości atTheOldToad.potions to tablica ["Speed potion", "Dragon breath", "Stone skin"]
// Wartość właściwości atTheOldToad.updatePotionName to metoda obiektu
// Po pierwszym wywołaniu metody atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), właściwość potions będzie zawierać tablicę ["Speed potion", "Polymorth", "Stone skin"]
// Po drugim wywołaniu metody atTheOldToad.updatePotionName("Stone skin", "Invisibility"), właściwość potions będzie zawierać tablicę ["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const index = this.potions.indexOf(oldName);
//     if (index !== -1) {
//       this.potions[index] = newName;
//     }
//     return this.potions; //-----MUSIMY zwrocic tablice DEBILU!!!!!!!!!!!!!!!!!
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));

// Ex 41  POWIĘKSZANIE INWENTARZA

// Klient chce, aby dla każdej mikstury była zapisana nie tylko nazwa, ale także cena. W przyszłości każda mikstura może mieć również inne cechy. Musimy zamienić prostą tablicę stringów potions na poniższą strukturę tablicy obiektów.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Refaktoryzuj metody obiektu atTheOldToad aby działały gdy w tablicy potions znajdują się obiekty a nie stringi.

// getPotions() - metoda na zdobycie wszystkich mikstur. Zwraca wartość właściwości potions.
// addPotion(newPotion) - metoda dodaje obiekt newPotion do tablicy potions, pod warunkiem, że nie istnieje w niej już obiekt o takiej samej właściwości name jak w newPotion. Jeżeli taka mikstura już istnieje, zwracamy string Error! Potion ${newPotion.name} is already in your inventory!
// removePotion(potionName) - usuwa obiekt mikstury o nazwie (właściwości name) potionName z tablicy we właściwości potions.
// updatePotionName(oldName, newName) - zmienia właściwość name obiektu-mikstury w tablicy potions z oldName do newName.
// Zadeklarowano zmienną atTheOldToad
// Wartość zmiennej atTheOldToad to obiekt
// Wartość właściwości atTheOldToad.getPotions to metoda obiektu
// Wywołanie metody atTheOldToad.getPotions() na oryginalnym obiekcie zwraca [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Wartość właściwości atTheOldToad.addPotion to metoda obiektu.
// Dla oryginalnego obiektu, po wywołaniu metody atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), w tablicy potions ostatnim elementem będzie ten obiekt
// Dla oryginalnego obiektu, po wywołaniu metody atTheOldToad.addPotion({ name: "Power potion", price: 270 }), w tablicy potions ostatnim elementem będzie ten obiekt
// Jeśli dodany potions już jest w tablicy potions, metoda addPotion zwraca ciąg z tekstem z kodu źródłowego
// Jeśli dodany potions już jest w tablicy potions, metoda addPotion nie dodaje do niego przekazanego obiektu
// Dla oryginalnego obiektu po wywołaniu atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), tablica potions się nie zmienia
// Dla oryginalnego obiektu po wywołaniu atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), tablica potions się nie zmienia
// W przypadku oryginalnego obiektu wezwanie atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), zwraca ciąg "Error! Potion Dragon breath is already in your inventory!"
// W przypadku oryginalnego obiektu wezwanie atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), zwraca ciąg "Error! Potion Stone skin is already in your inventory!"
// Wartość właściwości atTheOldToad.removePotion to metoda obiektu
// Dla oryginalnego obiektu, po wywołaniu metody atTheOldToad.removePotion("Dragon breath"), właściwość potions będzie zawierać tablicę [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Dla oryginalnego obiektu, po wywołaniu metody atTheOldToad.removePotion("Speed potion"), właściwość potions będzie zawierać tablicę [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Wartość właściwości atTheOldToad.updatePotionName to metoda obiektu
// Dla oryginalnego obiektu, po wywołaniu metody atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), właściwość potions będzie zawierać tablicę [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Dla oryginalnego obiektu, po wywołaniu metody atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), właściwość potions będzie zawierać tablicę [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionNames = this.potions.map((potion) => potion.name);
//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(
//       (potion) => potion.name === potionName
//     );

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionToUpdate = this.potions.find(
//       (potion) => potion.name === oldName
//     );

//     if (!potionToUpdate) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potionToUpdate.name = newName;
//   },
// };
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// );
// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     const index = this.books.indexOf(bookName);
//     if (index === -1) {
//       this.books.splice(index, 1);
//       return `Deleting book ${bookName}`;
//     } else {
//       return `Book ${bookName} not found`;
//     }
//   },
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index === -1) {
//       this.books[index] = newName;
//       return `Updating book ${oldName} to ${newName}`;
//     } else {
//       return `Book ${oldName} not found`;
//     }
//   },
// };
// // console.log(bookShelf);
// // console.log(bookShelf.getBooks());
// // console.log(bookShelf.books);

// // console.log(bookShelf.addBook('Marysia jest super kotem'));
// // console.log(bookShelf);
// // bookShelf.addBook;
// // bookShelf.addBook('Haze');
// // console.log(bookShelf);
// bookShelf.removeBook('The last kingdom');
// bookShelf.updateBook('Sands of dune', 'Dune');
// console.log(bookShelf);
