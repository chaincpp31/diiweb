// "members" variable contain everyone data that will be displayed after the search occurs.
// "path" index is used for locating image after search action.
// "tName" stand for Thai name and "fName" stand for Facebook account name.
// "quote" is used to display quote.
// "alt" is for displaying alternate name.
var members = [
    { tName: "กรวิชญ์	วิไลรัตน์", fName: "korawit wilairat", path: "./img/ice.jpg", quote: ".", alt: "ไอซ์" },
    { tName: "ก้องภพ	ธนรัตน์ศิริกุล", fName: "Katsu Miyajima", path: "./img/keng.jpg", quote: "รูปกูอย่างเหี้ย555", alt: "เก่ง" },
    { tName: "จักร์ภูริณัท เจริญเดชาวงศ์", fName: "Wake Up", path: "./img/kla.jpg", quote: ".", alt: "กล้า" },
    { tName: "ชาญชล	ทรัพย์ศิริ", fName: "Boat Charnchon", path: "./img/boatj.jpg", quote: ".", alt: "โบ๊ท" },
    { tName: "ธาริณี	หลวงกอง", fName: "Toey Talinee", path: "./img/toeyT.jpg", quote: "สีเขียว", alt: "เตย" },
    { tName: "ธีระพัฒน์	แซ่ตั้ง", fName: "Doge Thiraphat", path: "./img/pond.jpg", quote: "You shall not pass.", alt: "ปอนด์" },
    { tName: "นพราช	แก้วใส", fName: "Kaow nopparat", path: "./img/9.jpg", quote: "9", alt: "เก้า" },
    { tName: "นราธิป	สุผาคอง", fName: "Naratip Supakong", path: "./img/new.jpg", quote: "สวัสดีครับ  !!!!!!", alt: "นิว" },
    { tName: "นริศสา	กรสังข์", fName: "Narisza Kornsanka", path: "./img/kt.jpg", quote: "อยากกินวิงซ์แซ่บ", alt: "กระตุ้น" },
    { tName: "ปองพล	พันตารักษ์", fName: "Pongpon pantarak", path: "./img/act.jpeg", quote: "ระฆังดังเพราะคนตี เขียนได้แต่ภาษาซี จาว่าไม่มี", alt: "แอ๊ค" },
    { tName: "พลวัต	ปัญสุวรรณ์", fName: "เชน  พลวัต", path: "./img/chain.jpg", quote: "ไม่มีอะไรในดงหญ้า แต่ถ้าพี่กล้าเดี๋ยวผมเปิด", alt: "เชน" },
    { tName: "ภาณุวัฒน์	มูลคำ", fName: "Fo'fun Fo Ai Wo", path: "./img/fiew.jpg", quote: ".", alt: "ฟิว" },
    { tName: "รมิตา	คหาปนะ", fName: "Ramita Kahapana", path: "./img/sa.jpeg", quote: "ทรงโจรนะจ้ะ", alt: "ซาร่อ" },
    { tName: "รัฐภูมิ	อิกำเหนิด", fName: "Bbest Best", path: "./img/best.jpg", quote: ".", alt: "เบสท์" },
    { tName: "วรัญญู	คงชัย", fName: "Xeemusx's Grapher", path: "./img/boatT.jpg", quote: "เดี๋ยวก็รู้", alt: "โบ๊ท" },
    { tName: "วราลักษณ์	คำน้อย", fName: "Fah Walaluck", path: "./img/fah.jpg", quote: ".", alt: "ฟ้า" },
    { tName: "วีระพันธ์	ลาน้อย", fName: "Vee victorez", path: "./img/vee.jpg", quote: "เน้นเข้าเรียนไม่เน้นเข้าใจ", alt: "วี" },
    { tName: "ศศิกานต์	บุญมาถา", fName: "Baitoey Sasikrang", path: "./img/toeyS.jpg", quote: ".", alt: "ใบเตย" },
    { tName: "ศุภวิชญ์	ศรีปุงวิวัฒน์", fName: "Supawit Jeng", path: "./img/jeng.jpg", quote: ".", alt: "เจ๋ง" },
    { tName: "สหัสวรรษ	วิโรจน์เพชร", fName: "Sahatsawat Friend", path: "./img/friend.jpg", quote: "หน้าตาทรงโจร แต่อ่อนโยนต่อจุดซ่อนเร้น", alt: "เฟรนด์" },
    { tName: "สุภทัต	สิงห์คำฟู", fName: "Arm Supatat", path: "./img/arm.jpg", quote: ".", alt: "อาร์ม" },
    { tName: "สุรีย์พร	คำซอน", fName: "Ajarn Shilin", path: "./img/aj.jpg", quote: "Jon Kuwada", alt: "อาจารย์" },
    { tName: "อติกันต์	กันนาง", fName: "Atikan Kannang", path: "./img/pungpond.jpeg", quote: "หล่อ รวย นิสัยดี โทษทีไม่ใช่ผม", alt: "ปังปอนด์" },
    { tName: "อธิคม	เพชรธำรงกุล", fName: "Atikom Jeff", path: "./img/jeff.jpg", quote: "ถึงหน้าจะโหดแต่อยู่ในโหมดน่ารัก", alt: "เจฟ" }
];
// An unused variable for storing juniors informations.
/*
var freshMan = [
  {tName:,fName:}
];
*/
// Global variable for storing member container.
var container = document.querySelector("div.w3-row-padding.w3-center.w3-section");
// Action declared and called after the page has been loaded.
// In case of Javascript being disabled, we will load default page.
$(document).ready(function () {
    // Call method for clearing the container.
    clearContainer();
    // Load all "members" elements by default.
    searchForMember("");

    // Overwrite the default form behavior for search box.
    $(document).on('submit', '.search__box', function () {
        // Perform a searchForMember method call on received value.
        searchForMember($(this).children('.search__area').val());
        // Toggle search menu off.
        toggleSearchMenu();
        // Cancel the default "action" designation.
        return false;
    });

    // Overwrite default scroll teleport animation.
    var scrollTeleport = $('.scroll');
    // Adding event listener to "scrollTeleport".
    scrollTeleport.click(function (e) {
        // Preventing default teleport animation.
        e.preventDefault();
        // Assign animation properties to 'body' and 'html' at 750ms of maximum playback time.
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 750);
    });

    // Set constant for reference to nav bar and reference point.
    const navBar = document.querySelector('.nav__observation');
    const trigger = document.querySelector('.nav__reference');

    // Set margin delta between transition.
    const navBarOptions = {
        rootMargin: "0px 0px 0px 0px"
    };

    // Initiate a new oberver object to keep track of nav bar position.
    const navBarObserver = new IntersectionObserver((entries, navBarObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navBar.classList.remove('fixed');
            } else {
                navBar.classList.add('fixed');
            }
        });
    }, navBarOptions);

    // Assign event oberver target for oberver to look for.
    navBarObserver.observe(trigger);
});

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
/*
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
*/

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// This function looks for texts inside "members" variable and show all possible match(es).
function searchForMember(target) {
    // Call method for clearing the container.
    clearContainer();
    // For each element of member references as "item" and it sub-element as "i"
    members.forEach((item, i) => {
        // Look for text reference from "target" inside "item".
        if (item.tName.includes(target) || item.fName.includes(target) || item.alt.includes(target)) {
            // Execute the code.
            displayResult(item);
        }
    });
}

// This function will display member according to the search result.
function displayResult(result) {
    var img = document.createElement("img");
    img.setAttribute('src', result.path);
    img.setAttribute('style', "width:100%");
    img.setAttribute('onclick', "onClick(this)");
    img.setAttribute('alt', result.alt);
    img.classList.add("w3-hover-opacity");
    var element = document.createElement("div");
    element.classList.add("w3-col");
    element.classList.add("m3");
    element.appendChild(img);
    var elementChild = document.createElement("p");
    elementChild.innerHTML = result.tName;
    element.appendChild(elementChild);
    elementChild = document.createElement("p");
    elementChild.innerHTML = "Facebook: " + result.fName;
    element.appendChild(elementChild);
    elementChild = document.createElement("p");
    elementChild.innerHTML = result.quote;
    element.appendChild(elementChild);
    elementChild = document.createElement("p");
    elementChild.innerHTML = "น้องเทค: ";
    element.appendChild(elementChild);
    container.append(element);
}

// This function will clear all elements inside container.
function clearContainer() {
    container.innerHTML = "";
}

// This function will toggle search bar and background on and off.
function toggleSearchMenu() {
    $(".back__wall").toggle('deactivated');
    $(".search__box").toggle('deactivated');
}