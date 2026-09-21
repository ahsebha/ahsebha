
function addSubject() {

    const subjects = document.getElementById("subjects");

    const row = document.createElement("div");

    row.className = "subject-row";

    row.innerHTML = `
        <input
            type="text"
            placeholder="اسم المادة"
            class="subject-name"
        >

        <input
            type="number"
            placeholder="الساعات"
            class="subject-hours"
            min="1"
            step="1"
        >

        <input
            type="number"
            placeholder="العلامة"
            class="subject-grade"
            min="0"
            max="100"
            step="0.01"
        >

        <button
            type="button"
            class="delete-button"
            onclick="removeSubject(this)"
        >
            حذف
        </button>
    `;

    subjects.appendChild(row);
}


function removeSubject(button) {

    const rows = document.querySelectorAll(".subject-row");

    if (rows.length === 1) {
        alert("يجب أن تبقى مادة واحدة على الأقل.");
        return;
    }

    button.parentElement.remove();
}


function calculateGPA() {

    // البيانات السابقة

    const previousGPA =
        parseFloat(document.getElementById("previousGPA").value);

    const previousHours =
        parseFloat(document.getElementById("previousHours").value);


    // التحقق من البيانات السابقة

    if (isNaN(previousGPA) || previousGPA < 0 || previousGPA > 100) {

        alert("أدخل المعدل التراكمي السابق بشكل صحيح.");

        return;
    }


    if (isNaN(previousHours) || previousHours < 0) {

        alert("أدخل عدد الساعات المقطوعة بشكل صحيح.");

        return;
    }


    // مواد الفصل الحالي

    const rows = document.querySelectorAll(".subject-row");

    let currentPoints = 0;
    let currentHours = 0;


    for (let row of rows) {

        const hours =
            parseFloat(row.querySelector(".subject-hours").value);

        const grade =
            parseFloat(row.querySelector(".subject-grade").value);


        if (isNaN(hours) || hours <= 0) {

            alert("تأكد من إدخال ساعات جميع المواد.");

            return;
        }


        if (isNaN(grade) || grade < 0 || grade > 100) {

            alert("تأكد أن علامات المواد بين 0 و100.");

            return;
        }


        currentPoints += grade * hours;

        currentHours += hours;
    }


    // النقاط السابقة

    const previousPoints =
        previousGPA * previousHours;


    // المعدل التراكمي الجديد

    const totalPoints =
        previousPoints + currentPoints;

    const totalHours =
        previousHours + currentHours;


    const newGPA =
        totalPoints / totalHours;


    // معدل الفصل الحالي

    const semesterGPA =
        currentPoints / currentHours;


    // عرض النتيجة

    const result =
        document.getElementById("result");


    result.style.display = "block";


    result.innerHTML = `
        <h2>نتيجتك 🎓</h2>

        <p>
            <strong>معدل الفصل الحالي:</strong>
            ${semesterGPA.toFixed(2)}
        </p>

        <p>
            <strong>المعدل التراكمي الجديد:</strong>
            ${newGPA.toFixed(2)}
        </p>

        <p>
            <strong>إجمالي الساعات بعد الفصل:</strong>
            ${totalHours}
        </p>
    `;
}

function calculatePercentOf() {

    const percent = parseFloat(
        document.getElementById("percent1").value
    );

    const number = parseFloat(
        document.getElementById("number1").value
    );

    const result = document.getElementById("result1");


    if (isNaN(percent) || isNaN(number)) {

        alert("أدخل النسبة والرقم أولاً.");

        return;
    }


    const answer = (percent / 100) * number;


    result.style.display = "block";

    result.innerHTML = `
        <h2>النتيجة</h2>
        <p>${percent}% من ${number} = <strong>${answer.toFixed(2)}</strong></p>
    `;
}


function calculateWhatPercent() {

    const value = parseFloat(
        document.getElementById("value2").value
    );

    const total = parseFloat(
        document.getElementById("total2").value
    );

    const result = document.getElementById("result2");


    if (isNaN(value) || isNaN(total)) {

        alert("أدخل القيمتين أولاً.");

        return;
    }


    if (total === 0) {

        alert("لا يمكن أن يكون المجموع صفرًا.");

        return;
    }


    const answer = (value / total) * 100;


    result.style.display = "block";

    result.innerHTML = `
        <h2>النتيجة</h2>
        <p>${value} من ${total} = <strong>${answer.toFixed(2)}%</strong></p>
    `;
}


function increasePercent() {

    calculateChange(true);
}


function decreasePercent() {

    calculateChange(false);
}


function calculateChange(isIncrease) {

    const number = parseFloat(
        document.getElementById("number3").value
    );

    const percent = parseFloat(
        document.getElementById("percent3").value
    );

    const result = document.getElementById("result3");


    if (isNaN(number) || isNaN(percent)) {

        alert("أدخل الرقم والنسبة أولاً.");

        return;
    }


    const change = number * (percent / 100);

    let answer;


    if (isIncrease) {

        answer = number + change;

    } else {

        answer = number - change;

    }


    result.style.display = "block";

    result.innerHTML = `
        <h2>النتيجة</h2>

        <p>
            الرقم الأصلي:
            <strong>${number}</strong>
        </p>

        <p>
            مقدار التغيير:
            <strong>${change.toFixed(2)}</strong>
        </p>

        <p>
            النتيجة النهائية:
            <strong>${answer.toFixed(2)}</strong>
        </p>
    `;
}


function calculateDiscount() {

    const originalPrice = parseFloat(
        document.getElementById("originalPrice").value
    );

    const discountPercent = parseFloat(
        document.getElementById("discountPercent").value
    );

    const result = document.getElementById("discountResult");


    if (isNaN(originalPrice) || originalPrice < 0) {

        alert("أدخل السعر الأصلي بشكل صحيح.");

        return;
    }


    if (
        isNaN(discountPercent) ||
        discountPercent < 0 ||
        discountPercent > 100
    ) {

        alert("أدخل نسبة خصم بين 0 و100.");

        return;
    }


    const discountAmount =
        originalPrice * (discountPercent / 100);


    const finalPrice =
        originalPrice - discountAmount;


    result.style.display = "block";


    result.innerHTML = `

        <h2>النتيجة 💰</h2>

        <p>
            السعر الأصلي:
            <strong>${originalPrice.toFixed(2)}</strong>
        </p>

        <p>
            قيمة الخصم:
            <strong>${discountAmount.toFixed(2)}</strong>
        </p>

        <p>
            السعر بعد الخصم:
            <strong>${finalPrice.toFixed(2)}</strong>
        </p>

    `;
}
function calculateLoan() {

    const loanAmount = parseFloat(
        document.getElementById("loanAmount").value
    );

    const annualRate = parseFloat(
        document.getElementById("annualRate").value
    );

    const loanYears = parseFloat(
        document.getElementById("loanYears").value
    );

    const result = document.getElementById("loanResult");


    if (isNaN(loanAmount) || loanAmount <= 0) {

        alert("أدخل مبلغ القرض بشكل صحيح.");

        return;
    }


    if (isNaN(annualRate) || annualRate < 0) {

        alert("أدخل نسبة الفائدة بشكل صحيح.");

        return;
    }


    if (isNaN(loanYears) || loanYears <= 0) {

        alert("أدخل مدة القرض بشكل صحيح.");

        return;
    }


    const months = loanYears * 12;

    const monthlyRate = annualRate / 100 / 12;


    let monthlyPayment;


    if (monthlyRate === 0) {

        monthlyPayment = loanAmount / months;

    } else {

        monthlyPayment =
            loanAmount *
            (
                monthlyRate *
                Math.pow(
                    1 + monthlyRate,
                    months
                )
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );
    }


    const totalPayment =
        monthlyPayment * months;


    const totalInterest =
        totalPayment - loanAmount;


    // تنسيق المبالغ بالدينار الأردني
    const formatJOD = (value) => {

        return new Intl.NumberFormat("ar-JO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value) + " دينار أردني";

    };


    result.style.display = "block";


    result.innerHTML = `

        <h2>النتيجة 💳</h2>

        <p>
            القسط الشهري:
            <strong>
                ${formatJOD(monthlyPayment)}
            </strong>
        </p>

        <p>
            إجمالي المبلغ المدفوع:
            <strong>
                ${formatJOD(totalPayment)}
            </strong>
        </p>

        <p>
            إجمالي الفائدة:
            <strong>
                ${formatJOD(totalInterest)}
            </strong>
        </p>

        <p>
            عدد الأقساط:
            <strong>
                ${months} قسط
            </strong>
        </p>

    `;
}

function calculateAge() {

    const birthDateValue =
        document.getElementById("birthDate").value;

    const result =
        document.getElementById("ageResult");


    if (!birthDateValue) {

        alert("اختر تاريخ ميلادك أولاً.");

        return;
    }


    const birthDate =
        new Date(birthDateValue + "T00:00:00");


    const today =
        new Date();


    if (birthDate > today) {

        alert("تاريخ الميلاد لا يمكن أن يكون في المستقبل.");

        return;
    }


    let years =
        today.getFullYear() - birthDate.getFullYear();

    let months =
        today.getMonth() - birthDate.getMonth();

    let days =
        today.getDate() - birthDate.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    // حساب عيد الميلاد القادم

    let nextBirthday =
        new Date(
            today.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
        );


    if (nextBirthday < today) {

        nextBirthday.setFullYear(
            today.getFullYear() + 1
        );
    }


    // حساب الأيام المتبقية

    const todayStart =
        new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );


    const nextBirthdayStart =
        new Date(
            nextBirthday.getFullYear(),
            nextBirthday.getMonth(),
            nextBirthday.getDate()
        );


    const millisecondsPerDay =
        1000 * 60 * 60 * 24;


    const daysUntilBirthday =
        Math.ceil(
            (nextBirthdayStart - todayStart)
            / millisecondsPerDay
        );


    result.style.display = "block";


    result.innerHTML = `

        <h2>عمرك الآن 🎂</h2>

        <p>
            <strong>${years}</strong> سنة،
            <strong>${months}</strong> شهر،
            <strong>${days}</strong> يوم
        </p>

        <hr>

        <p>
            🎉 عيد ميلادك القادم:
            <strong>
                ${nextBirthday.toLocaleDateString("ar-JO")}
            </strong>
        </p>

        <p>
            ⏳ باقي
            <strong>${daysUntilBirthday}</strong>
            يوم على عيد ميلادك القادم.
        </p>

    `;
}
function calculateFuel() {

    const distance = parseFloat(
        document.getElementById("distance").value
    );

    const fuelEfficiency = parseFloat(
        document.getElementById("fuelEfficiency").value
    );

    const fuelPrice = parseFloat(
        document.getElementById("fuelPrice").value
    );

    const result =
        document.getElementById("fuelResult");


    if (
        isNaN(distance) ||
        distance <= 0
    ) {

        alert("أدخل المسافة بشكل صحيح.");

        return;
    }


    if (
        isNaN(fuelEfficiency) ||
        fuelEfficiency <= 0
    ) {

        alert("أدخل استهلاك السيارة بشكل صحيح.");

        return;
    }


    if (
        isNaN(fuelPrice) ||
        fuelPrice <= 0
    ) {

        alert("أدخل سعر لتر البنزين بشكل صحيح.");

        return;
    }


    const fuelNeeded =
        distance / fuelEfficiency;


    const totalCost =
        fuelNeeded * fuelPrice;


    const formatJOD = (value) => {

        return new Intl.NumberFormat("ar-JO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value) + " دينار أردني";

    };


    result.style.display = "block";


    result.innerHTML = `

        <h2>نتيجة الرحلة ⛽</h2>

        <p>
            المسافة:
            <strong>
                ${distance.toFixed(1)} كم
            </strong>
        </p>

        <p>
            البنزين المطلوب:
            <strong>
                ${fuelNeeded.toFixed(2)} لتر
            </strong>
        </p>

        <p>
            تكلفة الرحلة:
            <strong>
                ${formatJOD(totalCost)}
            </strong>
        </p>

    `;
}

