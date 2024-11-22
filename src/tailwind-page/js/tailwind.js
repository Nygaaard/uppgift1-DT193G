//Aktivera formulär på Tailwind-page
const tBodyEl = document.getElementById("tBody");

const gridNameEl = document.getElementById("grid-name");
const gridStateEl = document.getElementById("grid-state");
const messageEl = document.getElementById("message");
const genderEls = document.getElementsByName("gender");

const errorEl = document.getElementById("errorDiv");

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (!gridNameEl.value || !gridStateEl.value || !messageEl.value || ![...genderEls].some(el => el.checked)) {
        errorEl.style.display = "block";
        return;
    }

    errorEl.style.display = "none";

    const name = gridNameEl.value;
    const age = gridStateEl.value;
    const favoriteFramework = messageEl.value;

    let gender = "";
    for (const genderEl of genderEls) {
        if (genderEl.checked) {
            gender = genderEl.value;
            break;
        }
    }

    const newRow = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${name}
            </th>
            <td class="px-6 py-4">
                ${age}
            </td>
            <td class="px-6 py-4">
                ${favoriteFramework}
            </td>
            <td class="px-6 py-4">
                ${gender}
            </td>
        </tr>
    `;

    tBodyEl.innerHTML += newRow;

    document.querySelector("form").reset();
});
