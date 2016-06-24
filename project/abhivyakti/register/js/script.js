var euphonycell = [
    {display: "Surtaaj : Hindi Solos (For Boys) (1)", value: "Surtaaj : Hindi Solos (For Boys)" },
    {display: "Raag : Hindi Solos (For Girls) (1)", value: "Raag : Hindi Solos (For Girls)" },
    {display: "Blue:Western Solo & Rap (1)", value: "Blue:Western Solo & Rap (1)" },
    {display: "Saamanjasya : Duet Singing (2)", value: "Saamanjasya : Duet Singing (2)" },
    {display: "Old Blues (Non Filmy Old Songs) (4-6)", value: "Old Blues (Non Filmy Old Songs) (4-6)" },
    {display: "VaadyaTarang : Instrumental Solos (1)", value: "VaadyaTarang : Instrumental Solos" }];

var choreographycell = [
    {display: "EKLA A SOLO SOLE(Solo for Girls & Boys) (1)", value: "EKLA A SOLO SOLE (Solos for Girls & Boys)" },
    {display: "JITTERBUG (Group Dance) (max=8)", value: "JITTERBUG (Group Dance)" }];

var draculacell = [
    {display: "BOLLYWOOD QUIZ (max=2)", value: "BOLLYWOOD QUIZ" },
    {display: "DUMB MAN ACT - Mime (min=4 & max=8)", value: "DUMB MAN ACT - Mime" },
    {display: "TO B OR NOT TO B - Skit/Spoof", value: "TO B OR NOT TO B - Skit/Spoof" },
    {display: "JO DIKHTA HAI VO BIKHTA HAI - Ad-Mad", value: "JO DIKHTA HAI VO BIKHTA HAI - Ad-Mad" },
    {display: "I STAND ALONE - Mimicry/Mono acting", value: "I STAND ALONE - Mimicry/Mono acting" },
    {display: "FGT ( Faculty Got Talent)", value: "FGT ( Faculty Got Talent)" },
    {display: "MAI SHAYAR TO NAHI – Kavyanjali", value: "MAI SHAYAR TO NAHI – Kavyanjali" }];


var informalcell = [
    {display: "ABHIVYAKTI PREMIER LEAGUE (Faculty)", value: "ABHIVYAKTI PREMIER LEAGUE (Faculty)" },
    {display: "ABHIVYAKTI PREMIER LEAGUE (Student)", value: "ABHIVYAKTI PREMIER LEAGUE (Student)" },
    {display: "COUPLE RACE", value: "COUPLE RACE" },
    {display: "TUG OF WAR", value: "TUG OF WAR" },
    {display: "TREASURE HUNT", value: "TREASURE HUNT" },
    {display: "LEMON SPOON RACE", value: "LEMON SPOON RACE" },
    {display: "SACK RACE", value: "SACK RACE" },
    {display: "BUILDING OF CARDS", value: "BUILDING OF CARDS" },
    {display: "BALL IN BETWEEN", value: "BALL IN BETWEEN" },
    {display: "DART GAME", value: "DART GAME" },
    {display: "BANANA RACE", value: "BANANA RACE" }];

var creativecell = [
    {display: "Rising Star", value: "Rising Star" },
    {display: "Ethnically Black and White", value: "Ethnically Black and White" },
    {display: "Rangoli", value: "Rangoli" },
    {display: "Paint and Spray", value: "Paint and Spray" },
    {display: "Theme Painting", value: "Theme Painting" }];


var handicraftcell = [
    {display: "Clay Modelling", value: "Clay Modelling" },
    {display: "Bottle Designing", value: "Bottle Designing" },
    {display: "Button & Matchstick Art", value: "Button & Matchstick Art" },
    {display: "Origamy Creations", value: "Origamy Creations" },
    {display: "Mehendi Designing", value: "Mehendi Designing" },
    {display: "Power Couple", value: "Power Couple" }];

var mediacell = [
    {display: "Mascot drawing", value: "Mascot drawing" },
    {display: "RJ Hunt", value: "RJ Hunt" },
    {display: "VJ hunt", value: "VJ hunt" },
    {display: "Toon Tales", value: "Toon Tales" }];

var photocell = [
    {display: "Photo Funia", value: "Photo Funia" },
    {display: "#Selfie#Akks (SELFIE CONTEST)", value: "#Selfie#Akks (SELFIE CONTEST)" },
    {display: "Short Movie Making Contest", value: "Short Movie Making Contest" }];


var literaticell = [
    {display: "Bone of Contention", value: "Bone of Contention" },
    {display: "Whispers of Lyres", value: "Whispers of Lyres" },
    {display: "Witty Pen", value: "Witty Pen" },
    {display: "The Head Start", value: "The Head Start" },
    {display: "Vaktavya", value: "Vaktavya" },
    {display: "Samvaad", value: "Samvaad" },
    {display: "General Quiz", value: "General Quiz" },
    {display: "Entertainment Quiz", value: "Entertainment Quiz" },
    {display: "The Toon's Eye", value: "The Toon's Eye" },
    {display: "Graffiti", value: "Graffiti" },
    {display: "Spell Bee", value: "Spell Bee" },
    {display: "Just a Minute", value: "Just a Minute" },
    {display: "Dumbcharades", value: "Dumbcharades" }];

var newspapercell = [
    {display: "Collage", value: "Collage" },
    {display: "Tattoo Making", value: "Tattoo Making" },
    {display: "T-Shirt Painting", value: "T-Shirt Painting" },
    {display: "Tambola", value: "Tambola" },
    {display: "Quizard", value: "Quizard" }];

$("#parent_selection").change(function() {
    var parentone = $(this).val();
    switch(parentone){
        case 'Euphony':
             listone(euphonycell);
            break;
        case 'Choreography':
             listone(choreographycell);
            break;
        case 'Dramatics':
             listone(draculacell);
            break;
        case 'Informal':
             listone(informalcell);
            break;
        case 'Creative Canvas':
             listone(creativecell);
            break;
        case 'Handicraft':
             listone(handicraftcell);
            break;
        case 'Media':
             listone(mediacell);
            break;
        case 'Photography':
             listone(photocell);
            break;
        case 'Literaty':
             listone(literaticell);
            break;
        case 'Newspaper':
             listone(newspapercell);
            break;
        default: //default child option is blank
            $("#child_selection").html('');
            break;
           }
});
    //function to populate child select box
function listone(array_list)
{
  $("#child_selection").html(""); //reset child options
  $(array_list).each(function (i) { //populate child options
      $("#child_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
  });
}

var btechyear = [
    {display: " Ist Year", value: " Ist Year" },
    {display: " IInd Year", value: " IInd Year" },
    {display: " IIIrd Year", value: " IIIrd Year" },
    {display: "IVth Year", value: "IVth Year" }];

var srdtyear = [
    {display: " Ist Year", value: " Ist Year" },
    {display: " IInd Year", value: " IInd Year" },
    {display: " IIIrd Year", value: " IIIrd Year" }];

var myear = [
    {display: " Ist Year", value: " Ist Year" },
    {display: " IInd Year", value: " IInd Year" }];

$("#parent_branch").change(function() {
    var parenttwo = $(this).val();
    switch(parenttwo){
        case 'Computer Science':
             listtwo(btechyear);
            break;
        case 'Information Technology':
             listtwo(btechyear);
            break;
        case 'Electronics Communication':
             listtwo(btechyear);
            break;
        case 'Machanical Engineering':
             listtwo(btechyear);
            break;
        case 'Electrical Engineering':
             listtwo(btechyear);
            break;
        case 'Electronics Instrumentation':
             listtwo(btechyear);
            break;
        case 'Civil Engineering':
             listtwo(btechyear);
            break;
        case 'Electrical Electronics':
             listtwo(btechyear);
            break;
        case 'BBA':
             listtwo(srdtyear);
            break;
        case 'BCA':
             listtwo(srdtyear);
            break;
        case 'MBA':
             listtwo(myear);
            break;
        case 'MCA':
             listtwo(myear);
            break;
        default: //default child option is blank
            $("#child_year").html('');
            break;
           }
});
function listtwo(array_list)
{
    $("#child_year").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#child_year").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
    });
}
