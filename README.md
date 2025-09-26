# MindShift – Sliding Puzzle

Een klein lokale schuifpuzzel die je kunt starten door index.html te openen.

## Lokaal draaien
1. Download de map of bestanden.
2. Open `index.html` in je browser (Chrome/Edge/Firefox).
3. Klik op **Nieuw Spel** om te schudden. Gebruik de muis of of pijltjes / WASD.
4. Optioneel: voer een **Seed** in en druk op **Bevestig** voor een reproduceerbare puzzel.

## Functies
- 3x3,4×4 & 5x5 schuifpuzzel (doel: puzzel op juiste volgorde organiseren)
- Zetjesteller & timer (start bij de eerste zet)
- “Nieuw Spel”, “Reset”, en **seeded** shuffle
- Toetsenbord- en muisinvoer
- Toegankelijke labels (role=grid, gridcell)

## Bestandsstructuur
- `index.html` – statische pagina (verwijst naar `src/`)
- `src/styles.css` – stijlen + theming (light/dark)
- `src/app.js` – puzzellogica, timer, seeded shuffle, themetoggle
