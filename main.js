const array = [
    {
        cell1: "Uralkodó", // Az első cella: Uralkodó
        cell2: "Esemény", // A második cella: Esemény
        cell3: "Évszám" // A harmadik cella: Évszám
    },
    {
        cell1: "I.István", // Az uralkodó neve
        cell2: "Koronázás", // Az esemény neve
        cell3: "1000", // Az esemény évszáma
        cella2: "Pannonhalmi apátság megalapítása", // Az esemény neve
        cella3: "1001" // Az esemény évszáma
    },
    {
        cell1: "IV. Béla", // Az uralkodó neve
        cell2: "tatárjárás", // Az esemény neve
        cell3: "1241-1242" // Az esemény időtartama
    },
    {
        cell1: "Mátyás Király", // Az uralkodó neve
        cell2: "Bécs elfoglalása", // Az esemény neve
        cell3: "1485", // Az esemény évszáma
        cella2: "Kenyérmezei csata", // Az esemény neve
        cella3: "1479" // Az esemény évszáma
    },
    {
        cell1: "II. Rákóczi Ferenc", // Az uralkodó neve
        cell2: "A szabadságharc kezdete", // Az esemény neve
        cell3: "1703", // Az esemény évszáma
        cella2: "A szabadságharc vége", // Az esemény neve
        cella3: "1711" // Az esemény évszáma
    },
];

// A táblázat elemeinek létrehozása során a változók mindig a megfelelő HTML elemet veszik fel, például az oszlopok a col-t.

const table = document.createElement('table'); // Létrehozom a táblázatot
document.body.appendChild(table); // Hozzáadom a táblázatot az oldal törzséhez

const tbody = document.createElement('tbody'); // Létrehozom a táblázat törzsét
table.appendChild(tbody); // Hozzáadom a táblázat törzsét a táblázathoz


function createHeader(){

    const colgroup = document.createElement('colgroup'); // Létrehozom az oszlopcsoportot
    table.appendChild(colgroup); // Az oszlopcsoportot hozzáadom a táblázathoz

    const col1 = document.createElement('col'); // Létrehozom az első oszlopot
    col1.className = "colored-column"; // Osztályt adok az első oszlopnak
    colgroup.appendChild(col1); // Hozzáadom az első oszlopot az oszlopcsoporthoz

    const col2 = document.createElement('col'); // Létrehozom a második oszlopot
    colgroup.appendChild(col2); // Hozzáadom a második oszlopot az oszlopcsoporthoz

    const col3 = document.createElement('col'); // Létrehozom a harmadik oszlopot
    col3.className = "colored-column"; // Osztályt adok a harmadik oszlopnak
    colgroup.appendChild(col3); // Hozzáadom a harmadik oszlopot az oszlopcsoporthoz

    const thead = document.createElement('thead'); // Létrehozom a táblázat fejlécét
    table.appendChild(thead); // Hozzáadom a fejlécet a táblázathoz

    const headerRow = document.createElement('tr'); // Létrehozok egy sort a fejléc számára
    thead.appendChild(headerRow); // Hozzáadom a sort a táblázat fejlécéhez

    for(const i of Object.values(array[0])){ // Végigmegy az array első objektumán ami tartalmazza a fejléc elemeit
        const headerCell = document.createElement('th'); // Létrehozom a cellát a fejlécben
        headerCell.innerHTML = i; // Beállítom a cella szövegét a tömb segítségével
        headerRow.appendChild(headerCell); // Hozzáadom a cellát a fejléc sorához
    }
}

createHeader(); // Függvény meghívása


function renderTable(array){//Függvény létrehozása
    for (let i = 1; i < array.length; i++) { // Iterálunk végig az array elemein, kezdve az index 1-től
        const row1 = document.createElement('tr'); // Létrehozunk egy új sort
        tbody.appendChild(row1); // Hozzáadjuk az új sort a tbody-hoz
    
        const cell1 = document.createElement('td'); // Létrehozunk egy új cellát az első oszlophoz
        cell1.innerHTML = array[i].cell1; // Beállítjuk a cella tartalmát az array[i].cell1 értékére
        row1.appendChild(cell1); // Hozzáadjuk az első cellát a sorhoz

        const cell2 = document.createElement('td'); // Létrehozunk egy új cellát a második oszlophoz
        cell2.innerHTML = array[i].cell2; // Beállítjuk a cella tartalmát az array[i].cell2 értékére
        row1.appendChild(cell2); // Hozzáadjuk a második cellát a sorhoz
    
        const cell3 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
        cell3.innerHTML = array[i].cell3; // Beállítjuk a cella tartalmát az array[i].cell3 értékére
        row1.appendChild(cell3); // Hozzáadjuk a harmadik cellát a sorhoz

        if (array[i].cella2 !== undefined || array[i].cella3 !== undefined){ // Megnézzük, hogy a cella2 vagy cella3 undefiened-e

            cell1.rowSpan = "2"; // Rowspant adunk a cell1-nek

            const row2 = document.createElement('tr'); // Létrehozunk egy új sort
            tbody.appendChild(row2); // Hozzáadjuk az új sort a tbody-hoz

            const cella2 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
            cella2.innerHTML = array[i].cella2; // Beállítjuk a cella tartalmát az array[i].cella2 értékére
            row2.appendChild(cella2); // Hozzáadjuk a harmadik cellát a sorhoz

            const cella3 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
            cella3.innerHTML = array[i].cella3; // Beállítjuk a cella tartalmát az array[i].cella3 értékére
            row2.appendChild(cella3); // Hozzáadjuk a harmadik cellát a sorhoz
        }
    }
    
}

renderTable(array)//Függvény meghívása


const form = document.getElementById('form'); // A form elemet kérjük le az ID alapján
form.addEventListener('submit', function(e) { // Eseményfigyelőt adunk a submit eseményre
    e.preventDefault(); // Megakadályozzuk az alapértelmezett form beküldését

    const thisForm = e.currentTarget; // Az esemény által kiváltott formot eltároljuk egy változóban.
    const errorElements = thisForm.querySelectorAll('.error'); // Lekérjük az összes elemet, amely rendelkezik "error" osztállyal.
    for (const i of errorElements) { // Iterálunk az "error" osztályú elemek felett.
        i.innerHTML = ""; // Kitöröljük ezek tartalmát.
    }

    let valid = true; // Kezdőértékként igazra állítjuk a validációs változót

    const cell1HtmlElement = document.getElementById('uralkodo_nev'); // Az uralkodó nevének input mezőjét kérjük le
    const cell2HtmlElement = document.getElementById('esemeny1'); // Az első esemény input mezőjét kérjük le
    const cell3HtmlElement = document.getElementById('evszam1'); // Az első évszám input mezőjét kérjük le
    const cella2HtmlElement = document.getElementById('esemeny2'); // A második esemény input mezőjét kérjük le
    const cella3HtmlElement = document.getElementById('evszam2'); // A második évszám input mezőjét kérjük le

    const cell1Value = cell1HtmlElement.value; // Az uralkodó nevének értékét eltároljuk
    const cell2Value = cell2HtmlElement.value; // Az első esemény értékét eltároljuk
    const cell3Value = cell3HtmlElement.value; // Az első évszám értékét eltároljuk

    const cella2Value = cella2HtmlElement.value === '' ? undefined : cella2HtmlElement.value; // Ha a második esemény üres, akkor undefined, különben eltároljuk az értékét
    const cella3Value = cella3HtmlElement.value === '' ? undefined : cella3HtmlElement.value; // Ha a második évszám üres, akkor undefined, különben eltároljuk az értékét


    if(!validateFormInputFields(cell1HtmlElement, "Kötelező megadni az uralkodót!")){ //Megnézi, hogy a validateFormInputFields false-e
        valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };
    
    if(!validateFormInputFields(cell2HtmlElement, "Kötelező megadni az eseményt!")){ //Megnézi, hogy a validateFormInputFields false-e
        valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    if(!validateFormInputFields(cell3HtmlElement, "Kötelező megadni az évszámot!")){ //Megnézi, hogy a validateFormInputFields false-e
        valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    if(!validateFormInputFieldsExtra(cella2HtmlElement, cella3HtmlElement, "Minden eseményhez kell tartoznia évszámnak")){ //Megnézi, hogy a validateFormInputFieldsExtra false-e
        valid=false // Amennyiben false volt a valid értékét false-ra állítja;
    }


    if(valid){
        const newElement = { // Új objektumot hozunk létre az adatokkal
            cell1: cell1Value, // Az uralkodó neve
            cell2: cell2Value, // Az első esemény
            cell3: cell3Value, // Az első évszám
            cella2: cella2Value, // A második esemény
            cella3: cella3Value // A második évszám
        };

        array.push(newElement); // Az új objektumot hozzáadjuk az array-hez
    
        tbody.innerHTML = ''; // Töröljük a táblázat jelenlegi tartalmát
        renderTable(array); // Frissítjük a táblázatot az új adatokkal
    
        thisForm.reset(); // A form mezőinek alaphelyzetbe állítása
    }

});


function validateFormInputFields(inputElement, errormessage){ // Függvény létrehozésa két bemeneti értékkel
    let validation = true; // Kezdőértékként igazra állítjuk a validációs változót
    if(inputElement.value === ""){ // Ellenőrizzük, hogy az uralkodó input mezője üres-e
        const parentElement = inputElement.parentElement; // Megkeressük az évszám input mezőjének szülőelemét
        const error = parentElement.querySelector('.error'); // Az évszám mező szülőelemében keresünk egy "error" osztályú elemet
        error.innerHTML = errormessage; // Beállítjuk a hibaüzenetet
        validation = false; // A valid változó értékét hamisra állítjuk
    }
    return validation;  //Vissaztér a validation értékével, ami igaz vagy hamis lehet
}


function validateFormInputFieldsExtra(inputElement1, inputElement2, errormessage){ // Függvény létrehozésa három bemeneti értékkel
    let validation = true; // Kezdőértékként igazra állítjuk a validációs változót
    if(inputElement1.value==="" && inputElement2.value!==""){ // Ellenőrizzük, hogy az inputElement1 értéke üres és az inputElement2 értéke nem
        const parentElement = inputElement1.parentElement; // Megkeressük az évszám input mezőjének szülőelemét
        const error = parentElement.querySelector('.error'); // Az évszám mező szülőelemében keresünk egy "error" osztályú elemet
        error.innerHTML = errormessage; // Beállítjuk a hibaüzenetet
        validation = false; // A valid változó értékét hamisra állítjuk
    }

    if(inputElement1.value!=="" && inputElement2.value===""){// Ellenőrizzük, hogy az inputElement2 értéke üres és az inputElement1 értéke nem

        const parentElement = inputElement2.parentElement; // Megkeressük az évszám input mezőjének szülőelemét
        const error = parentElement.querySelector('.error'); // Az évszám mező szülőelemében keresünk egy "error" osztályú elemet
        error.innerHTML = errormessage; // Beállítjuk a hibaüzenetet
        validation = false; // A valid változó értékét hamisra állítjuk
    }
    return validation;  //Vissaztér a validation értékével, ami igaz vagy hamis lehet
}