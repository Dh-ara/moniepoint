const testimonials = [
  {
    text: "Using Moniepoint for the last few months has been pure bliss for us as a business. Our customers are able to come in and have seamless transactions done in seconds, and that is a very great strategy for us as a business to strengthen our relationship with our consumers.",
    author: "Anita Ukpong",
    role: "Marketing Manager, The Good Beach",
    thumbnail: "/Image/anita.jpg",
    youtube: "https://www.youtube.com/embed/dAQt_Jf12_Q?si=zmOfMVi4URkFZ4qQ"
  },
  {
    text: "Moniepoint has empowered my staff to serve our customers better. It has also empowered our customers to get their transactions done quicker, and most importantly, aids seamless business.",
    author: "Tobi Hamilton",
    role: "Founder, The House",
    thumbnail: "/Image/womanvideo.jpg",
    youtube: "https://www.youtube.com/embed/SdVnlo5Opco?si=rJOfeTMJPjwGDrk6"
  },
  {
    text: "I was robbed and found my shop open one fateful morning. I needed some money to cover up for the loss, and my business relationship manager mentioned the Moniepoint Loan to me. I needed it, and they gave me. Moniepoint has been a big help to my business. Without them, business will not be able to function.",
    author: "Mr Joseph",
    role: "Business Owner",
    thumbnail: "/Image/manvideo.jpg",
    youtube: "https://www.youtube.com/embed/VPMcbBKTu-o?si=ZQkVakwp4D06y554"
  },
  {
    text: "Moniepoint is exceptional! Imagine someone walking into your store, and telling you they want to use Moniepoint. Moniepoint is, and has been the best.",
    author: "Mrs Nsisong",
    role: "Co-Founder, Uyai Beauty Hub",
    thumbnail: "/Image/nsisong.jpg",
    youtube: "https://www.youtube.com/embed/UkpSnqfB7VA?si=qPmUfjd4L-8wVcir"
  }
];

let currentIndex = 0;
const textEl = document.getElementById('testimonial-text');
const authorEl = document.getElementById('testimonial-author');
const thumbEls = document.querySelectorAll('.thumb');
const thumbnailImg = document.getElementById('testimonial-thumbnail');
const videoTrigger = document.getElementById('video-trigger');
const modal = document.getElementById('video-modal');
const iframe = document.getElementById('video-frame');
const closeModal = document.getElementById('close-modal');

function updateTestimonial(index) {
  const t = testimonials[index];
  textEl.textContent = t.text;
  authorEl.innerHTML = `<strong>${t.author}</strong><br><span>${t.role}</span>`;
  thumbnailImg.src = t.thumbnail;
  
  thumbEls.forEach((el, i) => el.classList.toggle('active', i === index));
}

function showModal(index) {
  iframe.src = testimonials[index].youtube + "?autoplay=1";
  modal.style.display = "block";
}

function closeModalWindow() {
  iframe.src = "";
  modal.style.display = "none";
}

thumbEls.forEach(el => {
  el.addEventListener('click', () => {
    currentIndex = parseInt(el.dataset.index);
    updateTestimonial(currentIndex);
  });
});

videoTrigger.addEventListener('click', () => {
  showModal(currentIndex);
});

closeModal.addEventListener('click', closeModalWindow);

window.addEventListener('click', e => {
  if (e.target === modal) closeModalWindow();
});

// Auto-rotate
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
}, 10000);
