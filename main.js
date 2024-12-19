const headerObj = { 
    cell1: "Uralkodó", // Az első cella: Uralkodó
    cell2: "Esemény", // A második cella: Esemény
    cell3: "Évszám" // A harmadik cella: Évszám
};

const row1 = {
    cell1: "I.István", // Az uralkodó neve
    cell2: "Koronázás", // Az esemény neve
    cell3: "1000" // Az esemény évszáma
};

const row2 = {
    cell1: "Pannonhalmi apátság megalapítása", // Az esemény neve
    cell2: "1001" // Az esemény évszáma
};

const row3 = {
    cell1: "IV. Béla", // Az uralkodó neve
    cell2: "tatárjárás", // Az esemény neve
    cell3: "1241-1242" // Az esemény időtartama
};

const row4 = {
    cell1: "Mátyás Király", // Az uralkodó neve
    cell2: "Bécs elfoglalása", // Az esemény neve
    cell3: "1485" // Az esemény évszáma
};

const row5 = {
    cell1: "Kenyérmezei csata", // Az esemény neve
    cell2: "1479" // Az esemény évszáma
};

const row6 = {
    cell1: "II. Rákóczi Ferenc", // Az uralkodó neve
    cell2: "A szabadságharc kezdete", // Az esemény neve
    cell3: "1703" // Az esemény évszáma
};

const row7 = {
    cell1: "A szabadságharc vége", // Az esemény neve
    cell2: "1711" // Az esemény évszáma
};

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
headerCell.innerHTML = headerObj.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
headerRow.appendChild(headerCell); // Hozzáadom az első cellát a fejléc sorához

const headerCell2 = document.createElement('th'); // Létrehozom a második cellát a fejlécben
headerCell2.innerHTML = headerObj.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
headerRow.appendChild(headerCell2); // Hozzáadom a második cellát a fejléc sorához

const headerCell3 = document.createElement('th'); // Létrehozom a harmadik cellát a fejlécben
headerCell3.innerHTML = headerObj.cell3; // Beállítom a harmadik cella szövegét az osszetett objektum segítségével
headerRow.appendChild(headerCell3); // Hozzáadom a harmadik cellát a fejléc sorához

const tbody = document.createElement('tbody'); // Létrehozom a táblázat törzsét
table.appendChild(tbody); // Hozzáadom a táblázat törzsét a táblázathoz

const tbodyRow1 = document.createElement('tr'); // Létrehozom az első sort a törzsben
tbody.appendChild(tbodyRow1); // Hozzáadom az első sort a táblázat törzséhez

const tbodyRow1Cell1 = document.createElement('td'); // Létrehozom az első cellát az első sorban
tbodyRow1Cell1.innerHTML = row1.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow1.appendChild(tbodyRow1Cell1); // Hozzáadom az első cellát az első sorhoz
tbodyRow1Cell1.rowSpan = "2"; // Az első cella két sort foglal össze

const tbodyRow1Cell2 = document.createElement('td'); // Létrehozom a második cellát az első sorban
tbodyRow1Cell2.innerHTML = row1.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow1.appendChild(tbodyRow1Cell2); // Hozzáadom a második cellát az első sorhoz

const tbodyRow1Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát az első sorban
tbodyRow1Cell3.innerHTML = row1.cell3; // Beállítom a harmadik cella szövegét az osszetett objektum segítségével
tbodyRow1.appendChild(tbodyRow1Cell3); // Hozzáadom a harmadik cellát az első sorhoz

const tbodyRow2 = document.createElement('tr'); // Létrehozom a második sort a törzsben
tbody.appendChild(tbodyRow2); // Hozzáadom a második sort a táblázat törzséhez

const tbodyRow2Cell1 = document.createElement('td'); // Létrehozom az első cellát a második sorban
tbodyRow2Cell1.innerHTML = row2.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow2.appendChild(tbodyRow2Cell1); // Hozzáadom az első cellát a második sorhoz

const tbodyRow2Cell2 = document.createElement('td'); // Létrehozom a második cellát a második sorban
tbodyRow2Cell2.innerHTML = row2.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow2.appendChild(tbodyRow2Cell2); // Hozzáadom a második cellát a második sorhoz

const tbodyRow3 = document.createElement('tr'); // Létrehozom a harmadik sort a törzsben
tbody.appendChild(tbodyRow3); // Hozzáadom a harmadik sort a táblázat törzséhez

const tbodyRow3Cell1 = document.createElement('td'); // Létrehozom az első cellát a harmadik sorban
tbodyRow3Cell1.innerHTML = row3.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow3.appendChild(tbodyRow3Cell1); // Hozzáadom az első cellát a harmadik sorhoz

const tbodyRow3Cell2 = document.createElement('td'); // Létrehozom a második cellát a harmadik sorban
tbodyRow3Cell2.innerHTML = row3.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow3.appendChild(tbodyRow3Cell2); // Hozzáadom a második cellát a harmadik sorhoz

const tbodyRow3Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát a harmadik sorban
tbodyRow3Cell3.innerHTML = row3.cell3; // Beállítom a harmadik cella szövegét az osszetett objektum segítségével
tbodyRow3.appendChild(tbodyRow3Cell3); // Hozzáadom a harmadik cellát a harmadik sorhoz

const tbodyRow4 = document.createElement('tr'); // Létrehozom a negyedik sort a törzsben
tbody.appendChild(tbodyRow4); // Hozzáadom a negyedik sort a táblázat törzséhez

const tbodyRow4Cell1 = document.createElement('td'); // Létrehozom az első cellát a negyedik sorban
tbodyRow4Cell1.innerHTML = row4.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow4.appendChild(tbodyRow4Cell1); // Hozzáadom az első cellát a negyedik sorhoz
tbodyRow4Cell1.rowSpan = "2"; // Az első cella két sort foglal össze

const tbodyRow4Cell2 = document.createElement('td'); // Létrehozom a második cellát a negyedik sorban
tbodyRow4Cell2.innerHTML = row4.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow4.appendChild(tbodyRow4Cell2); // Hozzáadom a második cellát a negyedik sorhoz

const tbodyRow4Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát a negyedik sorban
tbodyRow4Cell3.innerHTML = row4.cell3; // Beállítom a harmadik cella szövegét az osszetett objektum segítségével
tbodyRow4.appendChild(tbodyRow4Cell3); // Hozzáadom a harmadik cellát a negyedik sorhoz

const tbodyRow5 = document.createElement('tr'); // Létrehozom az ötödik sort a törzsben
tbody.appendChild(tbodyRow5); // Hozzáadom az ötödik sort a táblázat törzséhez

const tbodyRow5Cell1 = document.createElement('td'); // Létrehozom az első cellát az ötödik sorban
tbodyRow5Cell1.innerHTML = row5.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow5.appendChild(tbodyRow5Cell1); // Hozzáadom az első cellát az ötödik sorhoz

const tbodyRow5Cell2 = document.createElement('td'); // Létrehozom a második cellát az ötödik sorban
tbodyRow5Cell2.innerHTML = row5.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow5.appendChild(tbodyRow5Cell2); // Hozzáadom a második cellát az ötödik sorhoz

const tbodyRow6 = document.createElement('tr'); // Létrehozom a hatodik sort a törzsben
tbody.appendChild(tbodyRow6); // Hozzáadom a hatodik sort a táblázat törzséhez

const tbodyRow6Cell1 = document.createElement('td'); // Létrehozom az első cellát a hatodik sorban
tbodyRow6Cell1.innerHTML = row6.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow6.appendChild(tbodyRow6Cell1); // Hozzáadom az első cellát a hatodik sorhoz
tbodyRow6Cell1.rowSpan = "2"; // Az első cella két sort foglal össze

const tbodyRow6Cell2 = document.createElement('td'); // Létrehozom a második cellát a hatodik sorban
tbodyRow6Cell2.innerHTML = row6.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow6.appendChild(tbodyRow6Cell2); // Hozzáadom a második cellát a hatodik sorhoz

const tbodyRow6Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát a hatodik sorban
tbodyRow6Cell3.innerHTML = row6.cell3; // Beállítom a harmadik cella szövegét az osszetett objektum segítségével
tbodyRow6.appendChild(tbodyRow6Cell3); // Hozzáadom a harmadik cellát a hatodik sorhoz

const tbodyRow7 = document.createElement('tr'); // Létrehozom a hetedik sort a törzsben
tbody.appendChild(tbodyRow7); // Hozzáadom a hetedik sort a táblázat törzséhez

const tbodyRow7Cell1 = document.createElement('td'); // Létrehozom az első cellát a hetedik sorban
tbodyRow7Cell1.innerHTML = row7.cell1; // Beállítom az első cella szövegét az osszetett objektum segítségével
tbodyRow7.appendChild(tbodyRow7Cell1); // Hozzáadom az első cellát a hetedik sorhoz

const tbodyRow7Cell2 = document.createElement('td'); // Létrehozom a második cellát a hetedik sorban
tbodyRow7Cell2.innerHTML = row7.cell2; // Beállítom a második cella szövegét az osszetett objektum segítségével
tbodyRow7.appendChild(tbodyRow7Cell2); // Hozzáadom a második cellát a hetedik sorhoz
