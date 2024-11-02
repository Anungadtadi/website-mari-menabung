function calculateSavings() {
    var installment = parseInt(document.getElementById("installmentAmount").value);
    var target = parseInt(document.getElementById("targetAmount").value);
    var frequency = document.getElementById("savingsFrequency").value;

    if (!installment || !target || !frequency) {
        alert("Mohon isi semua bidang!");
        return;
    }

    var totalSaved = 0;
    var period = 0;

    if (frequency === "harian") {
        while (totalSaved < target) {
            totalSaved += installment;
            period++;
        }
        var resultText = "Dengan angsuran harian Rp" + installment.toLocaleString() +
            ", Anda akan mencapai target Rp" + target.toLocaleString() + " dalam " + period + " hari.";
    } else if (frequency === "bulanan") {
        while (totalSaved < target) {
            totalSaved += installment;
            period++;
        }
        var resultText = "Dengan angsuran bulanan Rp" + installment.toLocaleString() +
            ", Anda akan mencapai target Rp" + target.toLocaleString() + " dalam " + period + " bulan.";
    }

    document.getElementById("savingsOutput").innerHTML = resultText;
    document.getElementById("result").style.display = "block";

    generateChecklist(period, frequency);
}

function generateChecklist(period, frequency) {
    var savingsChecklist = document.getElementById("savingsChecklist");
    savingsChecklist.innerHTML = "";
    var totalItems = period;

    for (var i = 1; i <= totalItems; i++) {
        var checkboxDiv = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "item" + i;
        checkbox.name = "item" + i;
        checkbox.addEventListener("change", checkAllChecked);

        var label = document.createElement("label");
        label.htmlFor = "item" + i;
        label.innerText = (frequency === "harian" ? "Hari " : "Bulan ") + i;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        savingsChecklist.appendChild(checkboxDiv);
    }
}

function checkAllChecked() {
    var checkboxes = document.querySelectorAll('#savingsChecklist input[type="checkbox"]');
    var allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
        alert("Selamat kamu telah berhasil menabung, saatnya menikmati hasil dari kesabaranmu");
    }
}
