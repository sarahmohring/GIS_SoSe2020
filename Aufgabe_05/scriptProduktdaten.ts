namespace Aufgabe_05 {

    // allgemeines Interface mit allen Aspekten eines Artikels
    export interface Produkt {
        imgurl: string;
        name: string;
        beschreibung: string;
        preis: string;

    }

    // Liste der Kamera-Artikel, mit allen zugehörigen Aspekten
    let kamera1: Produkt = { imgurl: "Canon-EOS-2000D.jpg", name: "Canon EOS 2000D", beschreibung: "- DSLR -", preis: "Preis: 299,99€" };
    let kamera2: Produkt = { imgurl: "Canon-EOS-90D.jpg", name: "Canon EOS 90D", beschreibung: "- DSLR -", preis: "Preis: 1.229,99€" };
    let kamera3: Produkt = { imgurl: "Nikon-D5600.jpg", name: "Nikon D5600", beschreibung: "- DSLR -", preis: "Preis: 559,99€" };
    let kamera4: Produkt = { imgurl: "Olympus-OMD-EM10-Mark-II.jpg", name: "Olympus OMD EM10 Mark II", beschreibung: "- Mirrorless-", preis: "Preis: 495,99€" };
    let kamera5: Produkt = { imgurl: "Panasonic-Lumix-DMC-G7.jpg", name: "Panasonic Lumix DMC G7", beschreibung: "- Mirrorless -", preis: "Preis: 399,99€" };
    let kamera6: Produkt = { imgurl: "Sony-Alpha-A-6000.jpg", name: "Sony Alpha A6000", beschreibung: "- Mirrorless-", preis: "Preis: 479,99€" };

    // Kameraartikel in Array
    export let produkteKamera: Produkt[] = [kamera1, kamera2, kamera3, kamera4, kamera5, kamera6];

    // Liste der Zubehör-Artikel, mit allen zugehörigen Aspekten
    let zubehoer1: Produkt = { imgurl: "Joby-GorillaPod.jpg", name: "Joby GorillaPod 1K", beschreibung: "stabiles und biegsames Stativ", preis: "Preis: 24,99€" };
    let zubehoer2: Produkt = { imgurl: "Streulichtblende.jpg", name: "Streulichtblende - Dreiteilig", beschreibung: "verhindert unerwünschten Lichteinfall", preis: "Preis: 12,99€" };
    let zubehoer3: Produkt = { imgurl: "Sandisk-128GB.jpg", name: "Sandisk Speicherkarte 128GB", beschreibung: "ausreichend Platz für alle Ihre Fotos", preis: "Preis: 19,99€" };
    let zubehoer4: Produkt = { imgurl: "Unterwassergehäuse.jpg", name: "Somikon Unterwassergehäuse", beschreibung: "endlich auch unter Wasser tolle Aufnahmen", preis: "Preis: 249,99€" };
    let zubehoer5: Produkt = { imgurl: "Kameragurt.jpg", name: "Kameragurt", beschreibung: "ein schönes Accessoire für Ihre Kamera", preis: "Preis: 15,99€" };
    let zubehoer6: Produkt = { imgurl: "Nissin-i60a-Blitzgerät.jpg", name: "Nissin i60a Blitzgerät", beschreibung: "für die professionelle Ausleuchtung", preis: "Preis: 174,99€" };

    // Zubehörartikel in Array
    export let produkteZubehoer: Produkt[] = [zubehoer1, zubehoer2, zubehoer3, zubehoer4, zubehoer5, zubehoer6];

}