//Aktivera formulär på Bootstrap-page
document.getElementById("addButton").addEventListener("click", function() {
    var nameEl = document.getElementById("firstname");
    var ageEl = document.getElementById("age");
    var messageEl = document.getElementById("message");
    var genderEls = document.getElementsByName("gender");
    var errorEl = document.getElementById("errorDiv");

    var genderChecked = false;
    for (var i = 0; i < genderEls.length; i++) {
        if (genderEls[i].checked) {
            genderChecked = true;
            break;
        }
    }

    if (!nameEl.value || !ageEl.value || !messageEl.value || !genderChecked) {
        errorEl.style.display = "block";
        return;
    }

    errorEl.style.display = "none";

    var name = nameEl.value;
    var age = ageEl.value;
    var favoriteFramework = messageEl.value;

    var gender = "";
    for (var j = 0; j < genderEls.length; j++) {
        if (genderEls[j].checked) {
            gender = genderEls[j].value;
            break;
        }
    }

    var table = document.getElementById("frameworkTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    newRow.innerHTML = `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${favoriteFramework}</td>
            <td>${gender}</td>
        </tr>
    `;

    document.getElementById("frameworkForm").reset();
});
