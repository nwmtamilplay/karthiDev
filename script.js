let swiper;
let nav = ['About Me', 'My Experience', 'My Projects', 'Contact']
function initSwiper() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) { // Breakpoint for desktop
        if (swiper) swiper.destroy(); // Destroy any existing Swiper instance
        swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true,
            pagination: {
                el: ".navigation",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + nav[index] + "</span>";
                },
            },
        });
    } else {
        if (swiper) swiper.destroy(); // Destroy any existing Swiper instance
        document.querySelector('#destroy').style.display = 'flex';
    }
}

// Initialize Swiper on page load
initSwiper();

// Re-initialize Swiper on window resize
window.addEventListener('resize', initSwiper);

document.querySelector("#hireMe").addEventListener("click", () => {
    swiper.slideTo(3, 1000); // This will slide to the third slide with a 500ms transition.
})


const projects = [".electronjs", ".reactnative"];
projects.forEach(cls => {
    var cls = new Swiper(cls, {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        },
    });
})



document.querySelectorAll(".project").forEach((pro, index) => {
    pro.addEventListener('click', () => {
        document.querySelector(".project.active").classList.remove('active');
        pro.classList.add('active');
        document.querySelector('.project-box.active').classList.remove('active');
        document.querySelectorAll(".project-box")[index].classList.add('active');
    })
})



document.getElementById('telegramForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#form-name').value;
    const phone = document.querySelector('#form-phone').value;
    const email = document.querySelector('#form-email').value;
    const message = document.querySelector('#form-message').value;
    const msg =
        `Name : ${name} \nPhone : ${phone} \nEmail : ${email} \nMessage : ${message} \n
`
    sendTelegramMessage(msg);
});

function sendTelegramMessage(message) {
    const token = '7231340191:AAEW_PLNaMoaDmcvwUskQHJ_N43TEAYQUjQ'; // Replace with your bot token
    const chat_id = '-1002174362877'; // Replace with the chat ID
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message: ' + data.description);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message');
        });
}


