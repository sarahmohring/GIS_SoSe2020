namespace Aufgabe_05 {
    export interface Produkte {
        imgurl: string;
        name: string;
        beschreibung: string;
        preis: string;
        
    }

    const kamera1: Produkte = {imgurl: "Canon-EOS-2000D.jpg", name: "Canon EOS 2000D", beschreibung: "- DSLR -", preis: "Preis: 299,99€"};
    const kamera2: Produkte = {imgurl: "Canon-EOS-9D.jpg", name: "Canon EOS 9D", beschreibung: "- DSLR -", preis: "Preis: 1.229,99€"};
    const kamera3: Produkte = {imgurl: "Nikon-D5600.jpg", name: "Nikon D5600", beschreibung: "- DSLR -", preis: "Preis: 559,99€"};
    const kamera4: Produkte = {imgurl: "Olympus-OMD-EM10-Mark-II.jpg", name: "Olympus OMD EM10 Mark II", beschreibung: "- Mirrorless-", preis: "Preis: 495,99€"};
    const kamera5: Produkte = {imgurl: "Panasonic-Lumix-DMC-G7.jpg", name: "Panasonic Lumix DMC G7", beschreibung: "- Mirrorless -", preis: "Preis: 399,99€"};
    const kamera6: Produkte = {imgurl: "Sony-Alpha-A-6000.jpg", name: "Sony Alpha A6000", beschreibung: "- Mirrorless-", preis: "Preis: 479,99€"};

    export let produkteKamera: Produkte[] = [kamera1, kamera2, kamera3, kamera4, kamera5, kamera6];

    const zubehoer1: Produkte = {imgurl: "Joby-GorillaPod.jpg", name: "Joby GorillaPod 1K", beschreibung: "stabiles und biegsames Stativ", preis: "Preis: 24,99€"};
    const zubehoer2: Produkte = {imgurl: "Streulichtblende.jpg", name: "Streulichtblende - Dreiteilig", beschreibung: "verhindert unerwünschten Lichteinfall", preis: "Preis: 12,99€"};
    const zubehoer3: Produkte = {imgurl: "Sandisk-128GB.jpg", name: "Sandisk Speicherkarte 128GB", beschreibung: "ausreichend Platz für alle Ihre Fotos", preis: "Preis: 19,99€"};
    const zubehoer4: Produkte = {imgurl: "Unterwassergehäuse.jpg", name: "Somikon Unterwassergehäuse", beschreibung: "endlich auch unter Wasser tolle Aufnahmen", preis: "Preis: 249,99€"};
    const zubehoer5: Produkte = {imgurl: "Kameragurt.jpg", name: "Kameragurt", beschreibung: "ein schönes Accessoire für Ihre Kamera", preis: "Preis: 15,99€"};
    const zubehoer6: Produkte = {imgurl: "Nissin-i60a-Blitzgerät.jpg", name: "Nissin i60a Blitzgerät", beschreibung: "für die professionelle Ausleuchtung", preis: "Preis: 174,99€"};

    export let produkteZubehoer: Produkte[] = [zubehoer1, zubehoer2, zubehoer3, zubehoer4, zubehoer5, zubehoer6];

}