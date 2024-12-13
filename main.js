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
headerCell.innerHTML = "Uralkodó"; // Beállítom az első cella szövegét
headerRow.appendChild(headerCell); // Hozzáadom az első cellát a fejléc sorához

const headerCell2 = document.createElement('th'); // Létrehozom a második cellát a fejlécben
headerCell2.innerHTML = "Esemény"; // Beállítom a második cella szövegét
headerRow.appendChild(headerCell2); // Hozzáadom a második cellát a fejléc sorához

const headerCell3 = document.createElement('th'); // Létrehozom a harmadik cellát a fejlécben
headerCell3.innerHTML = "Évszám"; // Beállítom a harmadik cella szövegét
headerRow.appendChild(headerCell3); // Hozzáadom a harmadik cellát a fejléc sorához

const tbody = document.createElement('tbody'); // Létrehozom a táblázat törzsét
table.appendChild(tbody); // Hozzáadom a táblázat törzsét a táblázathoz

const tbodyRow1 = document.createElement('tr'); // Létrehozom az első sort a törzsben
tbody.appendChild(tbodyRow1); // Hozzáadom az első sort a táblázat törzséhez

const tbodyRow1Cell1 = document.createElement('td'); // Létrehozom az első cellát az első sorban
tbodyRow1Cell1.innerHTML = "I.István"; // Beállítom az első cella szövegét
tbodyRow1.appendChild(tbodyRow1Cell1); // Hozzáadom az első cellát az első sorhoz
tbodyRow1Cell1.rowSpan = "2"; // Az első cella két sort foglal össze

const tbodyRow1Cell2 = document.createElement('td'); // Létrehozom a második cellát az első sorban
tbodyRow1Cell2.innerHTML = "Koronázás"; // Beállítom a második cella szövegét
tbodyRow1.appendChild(tbodyRow1Cell2); // Hozzáadom a második cellát az első sorhoz

const tbodyRow1Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát az első sorban
tbodyRow1Cell3.innerHTML = "1000"; // Beállítom a harmadik cella szövegét
tbodyRow1.appendChild(tbodyRow1Cell3); // Hozzáadom a harmadik cellát az első sorhoz

const tbodyRow2 = document.createElement('tr'); // Létrehozom a második sort a törzsben
tbody.appendChild(tbodyRow2); // Hozzáadom a második sort a táblázat törzséhez

const tbodyRow2Cell1 = document.createElement('td'); // Létrehozom az első cellát a második sorban
tbodyRow2Cell1.innerHTML = "Pannonhalmi apátság megalapítása"; // Beállítom az első cella szövegét
tbodyRow2.appendChild(tbodyRow2Cell1); // Hozzáadom az első cellát a második sorhoz

const tbodyRow2Cell2 = document.createElement('td'); // Létrehozom a második cellát a második sorban
tbodyRow2Cell2.innerHTML = "1001"; // Beállítom a második cella szövegét
tbodyRow2.appendChild(tbodyRow2Cell2); // Hozzáadom a második cellát a második sorhoz

const tbodyRow3 = document.createElement('tr'); // Létrehozom a harmadik sort a törzsben
tbody.appendChild(tbodyRow3); // Hozzáadom a harmadik sort a táblázat törzséhez

const tbodyRow3Cell1 = document.createElement('td'); // Létrehozom az első cellát a harmadik sorban
tbodyRow3Cell1.innerHTML = "IV. Béla"; // Beállítom az első cella szövegét
tbodyRow3.appendChild(tbodyRow3Cell1); // Hozzáadom az első cellát a harmadik sorhoz

const tbodyRow3Cell2 = document.createElement('td'); // Létrehozom a második cellát a harmadik sorban
tbodyRow3Cell2.innerHTML = "tatárjárás"; // Beállítom a második cella szövegét
tbodyRow3.appendChild(tbodyRow3Cell2); // Hozzáadom a második cellát a harmadik sorhoz

const tbodyRow3Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát a harmadik sorban
tbodyRow3Cell3.innerHTML = "1241-1242"; // Beállítom a harmadik cella szövegét
tbodyRow3.appendChild(tbodyRow3Cell3); // Hozzáadom a harmadik cellát a harmadik sorhoz

const tbodyRow4 = document.createElement('tr'); // Létrehozom a negyedik sort a törzsben
tbody.appendChild(tbodyRow4); // Hozzáadom a negyedik sort a táblázat törzséhez

const tbodyRow4Cell1 = document.createElement('td'); // Létrehozom az első cellát a negyedik sorban
tbodyRow4Cell1.innerHTML = "Mátyás Király"; // Beállítom az első cella szövegét
tbodyRow4.appendChild(tbodyRow4Cell1); // Hozzáadom az első cellát a negyedik sorhoz
tbodyRow4Cell1.rowSpan = "2"; // Az első cella két sort foglal össze

const tbodyRow4Cell2 = document.createElement('td'); // Létrehozom a második cellát a negyedik sorban
tbodyRow4Cell2.innerHTML = "Bécs elfoglalása"; // Beállítom a második cella szövegét
tbodyRow4.appendChild(tbodyRow4Cell2); // Hozzáadom a második cellát a negyedik sorhoz

const tbodyRow4Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát a negyedik sorban
tbodyRow4Cell3.innerHTML = "1485"; // Beállítom a harmadik cella szövegét
tbodyRow4.appendChild(tbodyRow4Cell3); // Hozzáadom a harmadik cellát a negyedik sorhoz

const tbodyRow5 = document.createElement('tr'); // Létrehozom az ötödik sort a törzsben
tbody.appendChild(tbodyRow5); // Hozzáadom az ötödik sort a táblázat törzséhez

const tbodyRow5Cell1 = document.createElement('td'); // Létrehozom az első cellát az ötödik sorban
tbodyRow5Cell1.innerHTML = "Kenyérmezei csata"; // Beállítom az első cella szövegét
tbodyRow5.appendChild(tbodyRow5Cell1); // Hozzáadom az első cellát az ötödik sorhoz

const tbodyRow5Cell2 = document.createElement('td'); // Létrehozom a második cellát az ötödik sorban
tbodyRow5Cell2.innerHTML = "1479"; // Beállítom a második cella szövegét
tbodyRow5.appendChild(tbodyRow5Cell2); // Hozzáadom a második cellát az ötödik sorhoz

const tbodyRow6 = document.createElement('tr'); // Létrehozom a hatodik sort a törzsben
tbody.appendChild(tbodyRow6); // Hozzáadom a hatodik sort a táblázat törzséhez

const tbodyRow6Cell1 = document.createElement('td'); // Létrehozom az első cellát a hatodik sorban
tbodyRow6Cell1.innerHTML = "II. Rákóczi Ferenc"; // Beállítom az első cella szövegét
tbodyRow6.appendChild(tbodyRow6Cell1); // Hozzáadom az első cellát a hatodik sorhoz
tbodyRow6Cell1.rowSpan = "2"; // Az első cella két sort foglal össze

const tbodyRow6Cell2 = document.createElement('td'); // Létrehozom a második cellát a hatodik sorban
tbodyRow6Cell2.innerHTML = "A szabadságharc kezdete"; // Beállítom a második cella szövegét
tbodyRow6.appendChild(tbodyRow6Cell2); // Hozzáadom a második cellát a hatodik sorhoz

const tbodyRow6Cell3 = document.createElement('td'); // Létrehozom a harmadik cellát a hatodik sorban
tbodyRow6Cell3.innerHTML = "1703"; // Beállítom a harmadik cella szövegét
tbodyRow6.appendChild(tbodyRow6Cell3); // Hozzáadom a harmadik cellát a hatodik sorhoz

const tbodyRow7 = document.createElement('tr'); // Létrehozom a hetedik sort a törzsben
tbody.appendChild(tbodyRow7); // Hozzáadom a hetedik sort a táblázat törzséhez

const tbodyRow7Cell1 = document.createElement('td'); // Létrehozom az első cellát a hetedik sorban
tbodyRow7Cell1.innerHTML = "A szabadságharc vége"; // Beállítom az első cella szövegét
tbodyRow7.appendChild(tbodyRow7Cell1); // Hozzáadom az első cellát a hetedik sorhoz

const tbodyRow7Cell2 = document.createElement('td'); // Létrehozom a második cellát a hetedik sorban
tbodyRow7Cell2.innerHTML = "1711"; // Beállítom a második cella szövegét
tbodyRow7.appendChild(tbodyRow7Cell2); // Hozzáadom a második cellát a hetedik sorhoz