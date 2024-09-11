function getData() {
  const data = fetch('data.json').then(res => res.json())
  return data
}


async function friendListsElement() {
  const friendLists = document.getElementById("friend_list");
  const data = await getData()
  const lists = `
    ${data.map(i => `
      <li>
        <figure class="card">
          <div class="card_image">
            <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
          </div>
          <figcaption class="card_content">
            <span>Nama : ${i.nama}</span>
            <span>NIM : ${parseInt(i.nim)}</span>
            <span>TTL : ${i.ttl}</span>
            <span>Alamat : ${i.alamat}</span>
            <span>NoHP : ${i.no}</span>
          </figcaption>
        </figure>
      </li>
    `).join("")}
  `;

  return friendLists.innerHTML = lists
}

friendListsElement()