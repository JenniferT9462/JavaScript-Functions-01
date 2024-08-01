console.log("Hello World!");

function youSpinMeRound() {
    console.log(refrain1());
    console.log(refrain1());
    
    //verse 1
    console.log("If I, I get to know your name");
    console.log("Well I could trace");
    console.log("Your private number, baby\n");

    console.log(refrain2());

     //verse 2
    console.log("I want some, want some");
    console.log("I've set my sights on you");
    console.log("(Like no one else will do)");
    console.log("And I, I've got to have");
    console.log("My way now, baby\n");

    refrain3();

    //verse 3
    console.log("I, I got to be your friend now, baby");
    console.log("And I, I-I-I-I would like to move");
    console.log("In just a little bit closer\n");

    refrain3();

    //verse 4
    console.log("I want your love");
    console.log("I want your love\n");

    refrain3();
    console.log(refrain1());
    console.log(refrain1());
    
}
youSpinMeRound();

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
function refrain3() {
    let r1 = refrain1();
    let r2 = refrain2();
    console.log(r2);
    console.log(r1);
    console.log(r1);
}