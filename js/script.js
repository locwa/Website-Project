// Reviews
const reviews = [
    {
        "name": "Daniel S.",
        "stars": 5,
        "comment": "Switching to InterDish was the best decision I made for my internet needs. Their blazing-fast speeds have transformed my online experience, and their reliable connection has never let me down. I couldn't be happier with their service!",
        "photo": "./assets/png/prof1.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/a-person-hands-wrapped-behind-his-head-7676282/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Sarah M.",
        "stars": 5,
        "comment": "I've been a loyal customer of InterDish for years now, and I have never once considered switching. Their customer service is top-notch, always resolving any issues promptly and courteously. Plus, their affordable pricing makes them unbeatable in the market!",
        "photo": "./assets/png/prof2.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/person-with-neon-mask-sitting-by-pink-smoke-19180589/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Benjamin H.",
        "stars": 5,
        "comment": "As a freelancer who relies on a stable internet connection, I can't express enough gratitude to InterDish. Their consistent speeds and minimal downtime have significantly boosted my productivity. I highly recommend them to anyone in need of a reliable ISP.",
        "photo": "./assets/png/prof3.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/christmas-themed-decors-688575/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Olivia T.",
        "stars": 5,
        "comment": "InterDish goes above and beyond to cater to their customers' needs. When I needed to upgrade my plan for increased bandwidth, they made the process seamless and hassle-free. Their commitment to customer satisfaction is truly commendable.",
        "photo": "./assets/png/prof4.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/person-wearing-a-floral-dress-standing-near-a-herd-of-horses-10953442/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Jacob L.",
        "stars": 5,
        "comment": "I was skeptical about switching ISPs, but InterDish proved me wrong. From the moment I signed up, their team has been nothing but helpful and accommodating. The transition was smooth, and I'm now enjoying faster speeds and better connectivity than ever before.",
        "photo": "./assets/png/prof5.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/a-person-wearing-a-costume-19019884/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Ava G.",
        "stars": 5,
        "comment": "I've tried several ISPs in the past, but none have impressed me as much as InterDish. Their internet packages are tailored to suit every budget and requirement, ensuring that everyone can access high-speed internet without breaking the bank.",
        "photo": "./assets/png/prof6.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/pedestrian-with-umbrella-on-pavement-19003188/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Ethan P.",
        "stars": 5,
        "comment": "InterDish network reliability is unmatched. Whether I'm streaming movies, gaming online, or video conferencing for work, I can always count on their stable connection. It's a relief knowing that I can rely on them for all my internet needs.",
        "photo": "./assets/png/prof7.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/snow-wood-light-dawn-13830722/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Mia K.",
        "stars": 5,
        "comment": "Kudos to InterDish for their excellent technical support team! Whenever I've encountered an issue, their knowledgeable staff have been quick to diagnose and resolve it, getting me back online in no time. Their expertise is truly commendable.",
        "photo": "./assets/png/prof8.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/orange-bag-leaning-on-an-orange-vase-8801084/. License on Pexels photos here https://www.pexels.com/license/ "
    },
    {
        "name": "Alexander W.",
        "stars": 5,
        "comment": "Since switching to XYZ ISP, I've noticed a significant improvement in my online gaming experience. Their low latency and high-speed connections have eliminated lag and buffering, allowing me to compete at the highest level without interruptions.",
        "photo": "./assets/png/prof9.jpg",
        "_locwa comment": "Original photo here: https://www.pexels.com/photo/mirror-reflecting-tender-hand-with-pink-rose-5235081/. License on Pexels photos here https://www.pexels.com/license/ "
    }
]
let commentIndex = 0;
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let profilePicture = document.getElementById('profile-picture');
let reviewerName = document.getElementById('reviewer-name');
let rating = document.getElementById('stars');
let comment = document.getElementById('comment');

leftButton.onclick = backComment;
rightButton.onclick = forwardComment;
reviewUpdate(reviews[0])

function forwardComment() {
    if (commentIndex < 9) {
        commentIndex += 1;
    }
    reviewUpdate(reviews[commentIndex]);
    console.log(commentIndex);
}
function backComment() {
    if (commentIndex > 0) {
        commentIndex -= 1;
    }
    reviewUpdate(reviews[commentIndex]);
    console.log(commentIndex);
}
function reviewUpdate(reviews) {
    profilePicture.src = reviews.photo;
    reviewerName.innerText = reviews.name;
    rating.innerText = reviews.stars;
    comment.innerText = reviews.comment;
}
