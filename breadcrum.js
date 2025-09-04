document.addEventListener("DOMContentLoaded", () => {

const breadcrumb = document.getElementById("breadcrumb");
const path = window.location.pathname.split("/").filter(Boolean);

let html = `<a href="/" class="text-white">หน้าแรก</a>`;
let link = "";

path.forEach((item, index) => {
  link += "/" + item;
  if (index === path.length - 1) {
    html += `<span class="mx-2"> › </span> <span class="text-gray-400">${decodeURIComponent(item.replace(/-/g, ' '))}</span>`;
  } else {
    html += `<span class="mx-2"> › </span> <a href="${link}" class="text-white hover:underline">${decodeURIComponent(item.replace(/-/g, ' '))}</a>`;
  }
});

breadcrumb.innerHTML = html;

});