Answer to the question number one ....


getElementById
একটা নির্দিষ্ট id-এর ভিত্তিতে HTML এলিমেন্ট খুঁজে বের করে।


getElementsByClassName
যেসব এলিমেন্টের একই class আছে, তাদের সব খুঁজে বের করে।


querySelector
CSS সিলেক্টর ব্যবহার করে প্রথম যে এলিমেন্ট মেলে, সেটি ফেরায়।


querySelectorAll
CSS সিলেক্টর ব্যবহার করে সব মিল থাকা এলিমেন্ট খুঁজে বের করে।




answer to the question number two....

let elem = document.createElement("tagName");
elem.textContent = "Text";

elem.className = "class-name";
let parent = document.getElementById("parentId");
parent.appendChild(elem);
parent.append(elem);




answer to the question number three 

 যখন একটা ভিতরের জিনিসে (যেমন button) ক্লিক করো, তখন সেই ক্লিকটা শুধু ওই জিনিসে না থেকে, ধীরে ধীরে বাইরের দিকের জিনিসগুলোতেও পৌঁছে যায়। ভিতর থেকে বাইরে ইভেন্ট ছড়ায় – একে বলে    bubbling |



answer to the question number four...

Event Delegation হলো এমন একটা টেকনিক, যেখানে অনেক child এলিমেন্টের জন্য আলাদা করে ইভেন্ট না বসিয়ে, তাদের parent এলিমেন্টে একটা ইভেন্ট বসানো হয় — আর সেই parent এলিমেন্ট child-এ ঘটা ইভেন্ট ধরতে পারে।


answer to the question number five...



