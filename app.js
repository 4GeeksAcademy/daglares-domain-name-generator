let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon", "planet"];

let ext = [".com", ".net", ".on", ".er"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let m = 0; m < ext.length; m++) {
        if (noun[k].endsWith(ext[m].slice(1))) {
          let tamaño = (ext[m].length)-1;
          console.log(
            pronoun[i] + adj[j] + noun[k].slice(0, -tamaño) + ext[m]
          );
        } else {
          let domain = pronoun[i] + adj[j] + noun[k] + ext[m];
          console.log(domain);
        }
      }
    }
  }
}
