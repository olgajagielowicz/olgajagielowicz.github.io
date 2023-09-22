
// select header links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    linksContainer.classList.toggle("show-links");

});
// navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
// arrow up to top
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
});
// ********** smooth scroll ************
// select list links
const scrollLinks = document.querySelectorAll(".scroll-link");
// scrolling to clicked link
scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        // prevent defailt
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop;

        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});

// *******************************************

// select members
// const members = document.querySelectorAll("#team_member");
// let a = document.querySelector(".founder_member");
// a.querySelector('.social_contacts').style.display = 'flex';
// change members properties
// members.forEach(function (member) {
//     member.addEventListener("mouseover", function (e) {
//         if (e.target != member) return;
//         let old_member = document.querySelector(".founder_member");
//         old_member.classList.remove("founder_member");
//         old_member.classList.add("member");
//         old_member.querySelector('img').classList.add("member_img");
//         old_member.querySelector('img').classList.remove("founder_img");
//         old_member.querySelector('.founder_name').classList.add("co_founder_name");
//         old_member.querySelector('.founder_name').classList.remove("founder_name");
//         old_member.querySelector('.founder_position').classList.add("position");
//         old_member.querySelector('.founder_position').classList.remove("founder_position");
//         old_member.querySelector('.social_contacts').style.display = 'none';

//         let new_member = e.target
//         new_member.classList.remove("member");
//         new_member.classList.add("founder_member");
//         new_member.querySelector('img').classList.add("founder_img");
//         new_member.querySelector('img').classList.remove("member_img");
//         new_member.querySelector('.co_founder_name').classList.add("founder_name");
//         new_member.querySelector('.co_founder_name').classList.remove("co_founder_name");
//         new_member.querySelector('.position').classList.add("founder_position");
//         new_member.querySelector('.position').classList.remove("position");
//         new_member.querySelector('.social_contacts').style.display = 'flex';
//     });
// });

// *******************************************

// local reviews data
const reviews = [
    {
        id: 1,
        name: 'Lorri Warf',
        job: 'UX Designer',
        img: '/real_estate/img//Profile.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magnapharetra in amet porta enim.",
    },
    {
        id: 2,
        name: 'David Elson',
        job: 'Developer',
        img: '/real_estate/img//Profile (1).png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magnapharetra in amet porta enim.',
    },
    {
        id: 3,
        name: 'Ricky Smith',
        job: 'Developer',
        img: '/real_estate/img//Profile (2).png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magnapharetra in amet porta enim.',
    },
    {
        id: 4,
        name: 'Floyd Miles',
        job: 'Co-Founder',
        img: '/real_estate/img//Profile.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magnapharetra in amet porta enim.',
    },
    {
        id: 5,
        name: 'Kathryn Murphy',
        job: 'The Boss',
        img: '/real_estate/img//Profile (1).png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magnapharetra in amet porta enim.',
    },
];

// select items
const img_left = document.getElementById("person-img-left");
const author_left = document.getElementById("author-left");
const job_left = document.getElementById("job-left");
const info_left = document.getElementById("info-left");

// select items
const img_center = document.getElementById("person-img-center");
const author_center = document.getElementById("author-center");
const job_center = document.getElementById("job-center");
const info_center = document.getElementById("info-center");

// select items
const img_right = document.getElementById("person-img-right");
const author_right = document.getElementById("author-right");
const job_right = document.getElementById("job-right");
const info_right = document.getElementById("info-right");

const prevBtn = document.querySelector(".prev-btn-spec");
const nextBtn = document.querySelector(".next-btn-spec");
const centerBtn = document.querySelector(".center-btn-spec");

// set starting items
let leftItem = 0;
let currentItem = 1;
let rightItem = 2;

// load initial items
window.addEventListener('DOMContentLoaded', function () {
    showPerson(leftItem, currentItem, rightItem);
});

// show persons based on item

function showPerson(left_person, central_person, right_person) {
    const left_item = reviews[left_person];
    img_left.src = left_item.img;
    author_left.textContent = left_item.name;
    job_left.textContent = left_item.job;
    info_left.textContent = left_item.text;

    const center_item = reviews[central_person];
    img_center.src = center_item.img;
    author_center.textContent = center_item.name;
    job_center.textContent = center_item.job;
    info_center.textContent = center_item.text;

    const right_item = reviews[right_person];
    img_right.src = right_item.img;
    author_right.textContent = right_item.name;
    job_right.textContent = right_item.job;
    info_right.textContent = right_item.text;
}

// show next persons
const next_img = document.querySelector(".next_dot_img");
const center_dot = document.querySelector(".active_dot");
nextBtn.addEventListener('click', function () {
    leftItem++;
    currentItem++;
    rightItem++;
    if (rightItem > reviews.length - 1) {
        leftItem = reviews.length - 3;
        currentItem = reviews.length - 2;
        rightItem = reviews.length - 1;
    }
    showPerson(leftItem, currentItem, rightItem);
    next_img.classList.add("next_dot");
    center_dot.classList.add("active_dot_img");
    prev_img.classList.remove("prev_dot");
});

// show prev persons
const prev_img = document.querySelector(".prev_dot_img");
prevBtn.addEventListener('click', function () {
    leftItem--;
    currentItem--;
    rightItem--;
    if (leftItem < 0) {
        leftItem = 0;
        currentItem = leftItem + 1;
        rightItem = leftItem + 2;
    }
    showPerson(leftItem, currentItem, rightItem);
    prev_img.classList.add("prev_dot");
    center_dot.classList.add("active_dot_img");
    next_img.classList.remove("next_dot");
});

// show center persons
centerBtn.addEventListener('click', function () {
    leftItem = 0;
    currentItem = leftItem + 1;
    rightItem = leftItem + 2;

    showPerson(leftItem, currentItem, rightItem);
    prev_img.classList.remove("prev_dot");
    center_dot.classList.remove("active_dot_img");
    next_img.classList.remove("next_dot");
});
