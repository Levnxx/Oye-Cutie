let stage = 0;

document.getElementById('yesBtn').onclick = function() {

    document.getElementById('message').innerText = 'Me janta tha cutie tum mujhse pyaar karti ho magar bolne se itratr ho 😘❤️';

    document.getElementById('gif').src = 'https://tenor.com/eRUhJD0jwCM.gif';

}

document.getElementById('noBtn').onclick = function() {

    if (stage === 0) {

        document.getElementById('message').innerText = 'Soch lo, me bohat achha ladka hu! 😏';

        stage++;

    } else if (stage === 1) {

        document.getElementById('message').innerText = 'Last baar bol raha hu, pyaar karti ho na mujhe? 😢';

        stage++;

    } else {

        moveButton();

    }

}

function moveButton() {

    const noBtn = document.getElementById('noBtn');

    noBtn.style.position = 'absolute';

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);

    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + 'px';

    noBtn.style.top = y + 'px';

}