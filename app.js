var vowels = [];
var cons = [];

function add() {
    var word = document.getElementById("input").value.toLowerCase(); 
    var vowelfound = false;

    if (!word) {
        alert("Type any word");
        return; 
    }

    // Check if the word contains any vowels
    for (var i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') { 
            vowelfound = true; 
            break; 
        }
    }

    if (vowelfound) {
        vowels.push(word);
        var p = document.createElement("p");
        p.setAttribute('id', 'para');
        p.textContent = word; 
        document.getElementById("vowls").appendChild(p);
    } else {
        cons.push(word);
        var p = document.createElement("p");
        p.setAttribute('id', 'para');
        p.textContent = word;  
        document.getElementById("cons").appendChild(p);
    }

    // Clear the input field
    document.getElementById("input").value = "";
}
