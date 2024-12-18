let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon", "planet"];

let ext = [".com", ".net", ".on", ".er"];

for (const i in pronoun) { 
  for (const j in adj) { 
    for (const k in noun) {
      for (const m in ext) { 
        const hack = noun[k].endsWith(ext[m].slice(1)) ;
        if (hack) {
                    const tamaño = ext[m].length - 1;
                    console.log(pronoun[i] + adj[j] + noun[k].slice(0, -tamaño) + ext[m]);
                  } else {
                    console.log(pronoun[i] + adj[j] + noun[k] + ext[m]);
                  }
      } 
    }
  }
}