
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/tetrapuzzle/id6475216396";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/5a/ad/51/5aad51f0-73ae-dffd-9ddc-ed9423bf35c5/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/d4/ee/2c/d4ee2c98-e21a-7b22-be02-b4e2d583b30c/0f46c111-a2ee-46c2-a042-d2ae438c601b_IOS-Description_12.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/6f/05/2d/6f052d57-4e4d-0351-ebf3-c9eca8cfec7f/1cd60ced-7cca-4d86-b475-10fb4de7ecd5_IOS-Description_13.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/1a/39/f1/1a39f1d9-2379-efb1-7065-9e8856d1e597/bd00d997-92eb-4f5d-a953-63906ba7bc69_IOS-Description_14.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

