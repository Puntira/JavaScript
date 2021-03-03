function correctTitle(str) {
    str = str.toLowerCase();
    str = str
      .split(" ")
      .map(word =>
        ["and", "the", "of", "in"].includes(word)
          ? word
          : word[0].toUpperCase() + word.slice(1)
      )
      .join(" ");
    return str
      .split("-")
      .map(word =>
        ["and", "the", "of", "in"].includes(word)
          ? word
          : word[0].toUpperCase() + word.slice(1)
      )
      .join("-");
  }
  console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));
  console.log(correctTitle("sansa stark, lady of winterfell."));
  