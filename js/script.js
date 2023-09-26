var likeButtons = document.querySelectorAll("#likeButton");

likeButtons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log("j'ai cliqué sur un bouton")
        // Récupérer l'image et le texte
        var img = button.querySelector("img#like");
        var text = button.querySelector("span#txtLike");
        console.log(img,text);
        // Vérifiez sur quelle image je clique et je la remplace par l'autre et je change la couleur du texte
        if (img.src.endsWith('miniature_like.png')) {
            console.log("je dislike")
            img.src = "./img/miniature_unlike.png";
            text.style.color= "black";
        } else if (img.src.endsWith("miniature_unlike.png")) {
            console.log("je like")
            img.src = "./img/miniature_like.png";
            text.style.color= "blue";
        }
    })
})