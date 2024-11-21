const e=document.getElementById("tBody"),t=document.getElementById("grid-name"),d=document.getElementById("grid-state"),r=document.getElementById("message"),a=document.getElementsByName("gender"),l=document.getElementById("errorDiv");document.querySelector("form").addEventListener("submit",function(n){if(n.preventDefault(),!t.value||!d.value||!r.value||![...a].some(e=>e.checked)){l.style.display="block";return}l.style.display="none";let o=t.value,s=d.value,c=r.value,m="";for(let e of a)if(e.checked){m=e.value;break}let u=`
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${o}
            </th>
            <td class="px-6 py-4">
                ${s}
            </td>
            <td class="px-6 py-4">
                ${c}
            </td>
            <td class="px-6 py-4">
                ${m}
            </td>
        </tr>
    `;e.innerHTML+=u,document.querySelector("form").reset()});
//# sourceMappingURL=tailwind.2179cc83.js.map
