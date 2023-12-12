function validateForm() {
    var namePattern = /^[А-ЯҐЄІЇ][а-яґєії]{2,12} [А-ЯҐЄІЇ]\. [А-ЯҐЄІЇ]\.$/;
    var groupPattern = /^[А-ЯҐЄІЇ]{2}-\d{2}$/;
    var phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var idCardPattern = /^[А-ЯҐЄІЇ]{2} №\d{6}$/;
    var facultyPattern = /^[А-ЯҐЄІЇ]{4}$/;

    var nameField = document.getElementById("name");
    var name = nameField.value;

    var groupField = document.getElementById("group");
    var group = groupField.value;

    var phoneField = document.getElementById("phone");
    var phone = phoneField.value;

    var idCardField = document.getElementById("id_card");
    var idCard = idCardField.value;

    var facultyField = document.getElementById("faculty");
    var faculty = facultyField.value;

    var isValid = true;

    function setValidity(inputElement, isValid) {
        if (isValid) {
            inputElement.classList.remove("invalid-input");
            inputElement.classList.add("valid-input");
        } else {
            inputElement.classList.remove("valid-input");
            inputElement.classList.add("invalid-input");
        }
    }

    var testName = namePattern.test(name);
    var testGroup = groupPattern.test(group);
    var testPhone = phonePattern.test(phone);
    var testID = idCardPattern.test(idCard);
    var testFaculty = facultyPattern.test(faculty);

    setValidity(nameField, testName);
    setValidity(groupField, testGroup);
    setValidity(phoneField, testPhone);
    setValidity(idCardField, testID);
    setValidity(facultyField, testFaculty);

    if (!testName || !testGroup || !testPhone || !testID || !testFaculty) {
        isValid = false;
    }

    if (isValid) {
        var userInfo = "Внесені дані:\nПІБ: " + name + "\nГрупа: " + group +
                        "\nНомер телефону: " + phone + "\nID-card: " + idCard + "\nФакультет: " + faculty;
        alert(userInfo);
    }
    return isValid;
}