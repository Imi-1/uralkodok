const array = [
    {
        cell1: "Uralkodó", // Az első cella: Uralkodó
        cell2: "Esemény", // A második cella: Esemény
        cell3: "Évszám" // A harmadik cella: Évszám
    },
    {
        cell1: "I.István", // Az uralkodó neve
        cell2: "Koronázás", // Az esemény neve
        cell3: "1000" // Az esemény évszáma
    },
    {
        cell2: "Pannonhalmi apátság megalapítása", // Az esemény neve
        cell3: "1001" // Az esemény évszáma
    },
    {
        cell1: "IV. Béla", // Az uralkodó neve
        cell2: "tatárjárás", // Az esemény neve
        cell3: "1241-1242" // Az esemény időtartama
    },
    {
        cell1: "Mátyás Király", // Az uralkodó neve
        cell2: "Bécs elfoglalása", // Az esemény neve
        cell3: "1485" // Az esemény évszáma
    },
    {
        cell2: "Kenyérmezei csata", // Az esemény neve
        cell3: "1479" // Az esemény évszáma
    },
    {
        cell1: "II. Rákóczi Ferenc", // Az uralkodó neve
        cell2: "A szabadságharc kezdete", // Az esemény neve
        cell3: "1703" // Az esemény évszáma
    },
    {
        cell2: "A szabadságharc vége", // Az esemény neve
        cell3: "1711" // Az esemény évszáma
    }
];

// A táblázat elemeinek létrehozása során a változók mindig a megfelelő HTML elemet veszik fel, például az oszlopok a col-t.

const table = document.createElement('table'); // Létrehozom a táblázatot
document.body.appendChild(table); // Hozzáadom a táblázatot az oldal törzséhez

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

const headerCell = document.createElement('th'); // Létrehozom az első cellát a fejlécben
headerCell.innerHTML = array[0].cell1; // Beállítom az első cella szövegét a tömb segítségével
headerRow.appendChild(headerCell); // Hozzáadom az első cellát a fejléc sorához

const headerCell2 = document.createElement('th'); // Létrehozom a második cellát a fejlécben
headerCell2.innerHTML = array[0].cell2; // Beállítom a második cella szövegét a tömb segítségével
headerRow.appendChild(headerCell2); // Hozzáadom a második cellát a fejléc sorához

const headerCell3 = document.createElement('th'); // Létrehozom a harmadik cellát a fejlécben
headerCell3.innerHTML = array[0].cell3; // Beállítom a harmadik cella szövegét a tömb segítségével
headerRow.appendChild(headerCell3); // Hozzáadom a harmadik cellát a fejléc sorához

const tbody = document.createElement('tbody'); // Létrehozom a táblázat törzsét
table.appendChild(tbody); // Hozzáadom a táblázat törzsét a táblázathoz

for (let i = 1; i < array.length; i++) { // Iterálunk végig az array elemein, kezdve az index 1-től
    const row = document.createElement('tr'); // Létrehozunk egy új sort
    tbody.appendChild(row); // Hozzáadjuk az új sort a tbody-hoz

    const cell1 = document.createElement('td'); // Létrehozunk egy új cellát az első oszlophoz
    cell1.innerHTML = array[i].cell1; // Beállítjuk a cella tartalmát az array[i].cell1 értékére
    row.appendChild(cell1); // Hozzáadjuk az első cellát a sorhoz

    const cell2 = document.createElement('td'); // Létrehozunk egy új cellát a második oszlophoz
    cell2.innerHTML = array[i].cell2; // Beállítjuk a cella tartalmát az array[i].cell2 értékére
    row.appendChild(cell2); // Hozzáadjuk a második cellát a sorhoz

    const cell3 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
    cell3.innerHTML = array[i].cell3; // Beállítjuk a cella tartalmát az array[i].cell3 értékére
    row.appendChild(cell3); // Hozzáadjuk a harmadik cellát a sorhoz
}