let likeCount = 0;
let liked = //recupera lo stato del like al local storage. se non esiste imposta su falso
JSON.parse(localStorage.getItem("liked"))|| false; 

if (liked) {
    likeCount += 1;

    document.getElementById('likeImage').src = 'images/like-on.png';
}

else {
    document.getElementById('likeImage').src = 'images/like-off.png';
}

document.getElementById('likeCount').innerText = likeCount;

document.getElementById('likeButton').addEventListener('click', function(){
    if (liked) {
        if (likeCount > 0){
            likeCount--;
        }
        liked = false;
        document.getElementById('likeImage').src = 'images/like-off.png';
    }
    else {
        likeCount++;
        liked = true;
        document.getElementById('likeImage').src = 'images/like-on.png';
    }
    document.getElementById('likeCount').innerText = likeCount

    localStorage.setItem('liked', JSON.stringify(liked));
});
