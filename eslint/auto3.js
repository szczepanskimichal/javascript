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
//   // Change code below this line
//   const propCount = Object.keys(object).length;
//   return propCount;
//   // Change code above this line
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
//     const salaryValues = Object.values(salaries);
//     let totalSalary = 0;

//     for (const salary of salaryValues) {
//       totalSalary += salary;
//     }

//     return totalSalary;
//   }

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
