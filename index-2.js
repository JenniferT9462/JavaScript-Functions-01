function song() {
    //verse 1
    console.log("If I, I get to know your name");
    console.log("Well I could trace");
    console.log("Your private number, baby\n");

    let r2;
    r2 = refrain2();
    console.log(r2);

    //verse 2
    console.log("I want some, want some");
    console.log("I've set my sights on you");
    console.log("(Like no one else will do)");
    console.log("And I, I've got to have");
    console.log("My way now, baby\n");

    console.log(r2);
    let r1;
    r1 = refrain1();
    console.log(r1);
    console.log(r1);

    //verse 3
    console.log("I, I got to be your friend now, baby");
    console.log("And I, I-I-I-I would like to move");
    console.log("In just a little bit closer\n");

    console.log(r2);

    console.log(r1);
    console.log(r1);

    //verse 4
    console.log("I want your love");
    console.log("I want your love\n");

    console.log(r2);

    console.log(r1);
    console.log(r1);
    console.log(r1);
    console.log(r1);
}
song()

function refrain1() {
    let words = ""; 
    words += "You spin me right 'round, baby\n";
    words += "Right 'round like a record, baby\n";
    words += "Right 'round, 'round, 'round\n";
    return words;

}
function refrain2() {
    let words = "";
    words += "All I know is that to me\n";
    words += "You look like you're lots of fun\n";
    words += "Open up your lovin' arms\n";
    words += "Watch out, here I come\n";
    return words;
}
