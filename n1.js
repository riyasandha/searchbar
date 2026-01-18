let users = [
    {
        name: "Aarohi",
        pic: "https://images.unsplash.com/photo-1765202709666-ac9c49a4bcc5?w=500&auto=format&fit=crop&q=60",
        bio: "half dream, half fire",
    },
    {
        name: "Kavya",
        pic: "https://plus.unsplash.com/premium_photo-1765480293059-522528d7fa43?w=500&auto=format&fit=crop&q=60",
        bio: "art in human form",
    },
    {
        name: "Sara",
        pic: "https://images.unsplash.com/photo-1765498068281-67e9971c0b98?w=500&auto=format&fit=crop&q=60",
        bio: "healing in her own rhythm",
    },
    {
        name: "Anvi",
        pic: "https://images.unsplash.com/photo-1764377848067-aefbce306f80?w=500&auto=format&fit=crop&q=60",
        bio: "sunshine wrapped in mystery",
    },
    {
        name: "Tara",
        pic: "https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?w=500&auto=format&fit=crop&q=60",
        bio: "chaos, but make it beautiful",
    },
    {
        name: "Diya",
        pic: "https://images.unsplash.com/photo-1765484233141-f272add365f5?w=500&auto=format&fit=crop&q=60",
        bio: "a poem she never finished",
    }
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");
const msg = document.querySelector(".msg");

function show(arr) {
  cardsContainer.innerHTML = "";

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer";
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blurredLayer, content);
    cardsContainer.appendChild(card);
  });
}

// initial render
show(users);

inp.addEventListener("input", () => {
  const value = inp.value.trim().toLowerCase();

  if (value === "") {
    msg.classList.add("hidden");
    show(users);
    return;
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );

  if (filteredUsers.length === 0) {
    cardsContainer.innerHTML = "";
    msg.classList.remove("hidden");
  } else {
    msg.classList.add("hidden");
    show(filteredUsers);
  }
});

//saare users show karaana
// filter karna har baarinput karne pe
// show karna filtered users