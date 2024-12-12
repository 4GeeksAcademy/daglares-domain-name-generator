let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon"];

let ext = [".com", ".net", ".on", ".er"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let m = 0; m < ext.length; m++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ext[m];
        console.log(domain);
      }
    }
  }
}
