$(function() {   // .ready function

var cardData = [
  ["censure","SEN shur","n. &nbsp;An expression of strong disapproval",null,"v. &nbsp;To find fault with",null,null,null,"Richardson was able to keep his job after the scandal but earned a censure that remained on his permanent record."],
  ["chimera","kie MERE uh","n. &nbsp;An imaginary monster",null,"n. &nbsp;A foolish idea",null,null,null,"Dana's brother plans to get rich quick by raising emus for their meat, selling Martian real estate, and other such chimeras."],
  ["idiosyncrasy","id ee owe SING kruh see","n. &nbsp;An odd behavior",null,null,null,null,null,"This psychologist believes that any idiosyncrasy is all right as long as the person practicing the strange habit doesn't mind it and it doesn't harm anyone."],
  ["morose","muh ROCE","a. &nbsp;Gloomy; unsociable",null,null,null,null,null,"Grandpa Jones was morose even before his dog died; after that, he was positively antisocial."],
  ["quibble","KWIB ul","v. &nbsp;To find fault over trivial objections",null,"n. &nbsp;A petty objection or criticism",null,null,null,"Janie won't go to garage sales anymore, because she doesn't like to quibble over prices in the driveways of strangers."],
  ["utility","you TILL i tee","n. &nbsp;Usefulness",null,"n. &nbsp;Something useful",null,"n. &nbsp;A public service","(ex: &nbsp;transportation)","The secretary was retained because of her adaptability and utility."],
  ["couch","COUCH","v. &nbsp;To express","(esp. &nbsp;using words of a certain kind)",null,null,null,null,"Len couched his request for raise in terms he hoped would make him appear deserving, but not needy."],
  ["eddy","ED ee","n. &nbsp;Swirling water or air",null,null,null,null,null,"The rafters could tell from the swirling eddies in the stream that turbulent water lay ahead."],
  ["incremental","in kruh MEN tul","a. &nbsp;Pertaining to a small change",null,null,null,null,null,"The incremental budget increase was inadequate to meet increased demands."],
  ["objective","ub JECK tiv","a. &nbsp;Pertaining to something real and observable",null,"a. &nbsp;Uninfluenced by emotion or bias",null,"n. &nbsp;A goal","(something striven for)","However we might feel about leaving the house, an objective look at our finances confirms that we can no longer afford it."],
  ["qualm","KWOM","n. &nbsp;A misgiving","(about the correctness of an action)","n. &nbsp;A sudden feeling of sickness or faintness",null,null,null,"Marla had some qualms about giving the promotion to Henry, but felt she should give him a chance to prove his worth."],
  ["tenet","TEN it","n. &nbsp;A belief held as true",null,null,null,null,null,"Freedom of speech is one of the most widely-cherished tenets of American democracy."],
  ["auspice","AW spice","n. &nbsp;Protection or support","(often \"auspices\")","n. &nbsp;An omen or forecast","(esp. based on the actions of birds)",null,null,"Many species of endangered animals have flourished under the auspices of organizations like Greenpeace and the National Wildlife Foundation."],
  ["forte","FOR tay","n. &nbsp;A person's strong point",null,null,null,null,null,"Stuart's forte was drawing connections between the various bits of information he had picked up here and there."],
  ["meal","MEAL","n. &nbsp;Ground grain",null,null,null,null,null,"During our tour of the mill we saw the various machines the grain must go through to be ground into meal."],
  ["yahoo","YA who","n. &nbsp;A brutish, coarse person",null,null,null,null,null,"Everything was fine until that yahoo jumped up and said we should take the law into our own hands."],
  ["vamoose","va MOOSE","v. &nbsp;To go away quickly",null,null,null,null,null,"We agreed to vamoose at the first sign of trouble."],
  ["quotidian","kwoe TID ee un","a. &nbsp;Common or ordinary",null,"a. &nbsp;Reappearing daily",null,null,null,"It was a big deal for me to see the Rocky Mountains, but to Shelby, who lives in Denver, it is quite quotidian."],
  ["fountainhead","FOUN tun head","n. &nbsp;A spring that is the start of a stream",null,"n. &nbsp;A source or origin",null,null,null,"This influential preacher's writings were a fountainhead for the later movement against slavery."],
  ["antigen","AN ti jin","n. &nbsp;Something that triggers the production of antibodies",null,null,null,null,null,"The doctor has assured Carla that, if she takes regular injections of the antigen, she will develop complete immunity to the pollens that cause her allergies."],
  ["sagacious","suh GAY shus","a. &nbsp;Wise",null,"a. &nbsp;Shrewd","(keenly perceptive)",null,null,"The travel guide suggested that it might be sagacious of prospective campers to call ahead for weather conditions."],
  ["perfidy","PER fi de","n. &nbsp;Treachery","(breech of trust)",null,null,null,null,"Those of us who are more trusting find it especially hard to accept the perfidy of loved ones."],
  ["inchoate","in KOE it","a. &nbsp;Undeveloped",null,"a. &nbsp;Unorganized",null,null,null,"At this point our plans for the housing development are still inchoate."],
  ["fatuous","FACH ooh us","a. &nbsp;Foolish",null,null,null,null,null,"The visitor from New Zealand was asked a number of fatuous questions about where his homeland was located, including whether it was part of Canada."],
  ["verboten","fer BOT un","a. &nbsp;Forbidden","(esp. &nbsp;by law)",null,null,null,null,"A sign near the swimming pool announces that running is completely verboten."]
];
var id = ["word","phonetic","def1","note1","def2","note2","def3","note3","sentence"];
var currentCard = -1; // ShowNextWord increments currentCard by 1.
var cardSide = "word";
var totalWords = 25;
var remainingWords = 25;
var wordsLearned = 0;
var wordsKnown = 0;
var learned = [];
var knew = [];
var defShown = [];
for (i=0; i<totalWords; i++) {
  learned[i] = false;
  knew[i] = false;
  defShown[i] = 0;
}
ShowNextWord();
UpdateStatus();

function ShowCurrentHint() {
  cardSide = "hint";
  document.getElementById("card-container").setAttribute = ("data-side", cardSide);
  document.getElementById("sentence").innerHTML = cardData[currentCard][8];
  console.log("hint : "+ cardData[currentCard][8]);

}

function ShowCurrentDef() {
  cardSide = "def";
  document.getElementById("card-container").setAttribute = ("data-side", cardSide);
  console.log(cardData[currentCard][0]+" def shown "+defShown[currentCard]+" times");
  defShown[currentCard]++;
  console.log(cardData[currentCard][0]+" def shown "+defShown[currentCard]+" times");
  for (i=1; i<id.length; i++) {
    if (cardData[currentCard][i] !== null) {
      document.getElementById(id[i]).innerHTML = cardData[currentCard][i];
      console.log(id[i] +" : "+ cardData[currentCard][i]);
    } else {
      document.getElementById(id[i]).innerHTML = "";
}}}

function ShowNextWord() {
  cardSide = "word";
  document.getElementById("card-container").setAttribute = ("data-side", cardSide);
  // Determine Next Word
  if (remainingWords > 0) {
    var foundNextWord = false;
    while (foundNextWord == false) {
      currentCard++;
      if (currentCard > totalWords-1) {
        currentCard = 0;
      }
      if (knew[currentCard] == false && learned[currentCard] == false) {
        foundNextWord = true;
      }
    }
  } else {currentCard = 0;}
  // Erase old Def data and display new word
  for (i=0; i<id.length; i++) {
    document.getElementById(id[i]).innerHTML = "";
  }
  document.getElementById(id[0]).innerHTML = cardData[currentCard][0];
  console.log("word : "+cardData[currentCard][0]);
}

function CompletedDeck() {
  document.getElementById("card-container").setAttribute = ("data-display", "no");
  document.getElementById("question").setAttribute = ("data-display", "no");
  document.getElementById("answer").setAttribute = ("data-display", "no");
  document.getElementById("completed-deck").setAttribute = ("data-display", "yes");
}

function UpdateStatus() {
  var notYet = 0;
  for (var i=0; i<totalWords; i++) {
    if (learned[i] == false && knew[i] == false && defShown[i] > 0) {
      notYet++;
    }
  }
  var totalWords = wordsLearned + notYet + wordsKnown;
  document.getElementById("learned-status").innerHTML = "Words Learned: " + wordsLearned;
  document.getElementById("not-yet-status").innerHTML = "Words Studying: " + notYet;
  document.getElementById("known-status").innerHTML =   "Words Known: " + wordsKnown;
  document.getElementById("total-status").innerHTML =   "Total Words: " + totalWords;
}

$("#skip").click(function() {
  if (cardSide !== "def") {
    ShowNextWord();
  }
});

$("#show").click(function() {
  if (cardSide !== "def") {
    ShowCurrentDef();
    // Toggle button panel display
    document.getElementById("question").setAttribute = ("data-display", "no");
    document.getElementById("answer").setAttribute = ("data-display", "yes");
    // Button 'Knew It' only appears at first show; thereafter 'Learned It' appears
    if (defShown[currentCard] = 0) {
      document.getElementById("knew").setAttribute = ("data-display", "yes");
      document.getElementById("learned").setAttribute = ("data-display", "no");
    } else {
      document.getElementById("knew").setAttribute = ("data-display", "no");
      document.getElementById("learned").setAttribute = ("data-display", "yes");
    }
  }
});

$("#hint").click(function() {
  if (cardSide == "word") {
    ShowCurrentHint();
  }
});

$("#knew").click(function() {
  if (cardSide == "def") {
    knew[currentCard] = true;
    wordsKnown++;
    remainingWords--;
    UpdateStatus();
    if (remainingWords == 0) {
      CompletedDeck();
    } else {
      ShowNextWord();
    }
  }
});

$("#learned").click(function() {
  if (cardSide == "def") {
    learned[currentCard] = true;
    wordsLearned++;
    remainingWords--;
    UpdateStatus();
    if (remainingWords == 0) {
      CompletedDeck();
    } else {
      ShowNextWord();
    }
  }
});

$("#not-yet").click(function() {
  if (cardSide == "def") {
      ShowNextWord();
      UpdateStatus();
}});



});
