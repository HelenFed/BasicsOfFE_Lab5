<!DOCTYPE html>
<html lang="uk">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Basics of front-end, Lab5">
        <title>Федосєєва Олена Денисівна, ІО-11, Л.Р.#5, Варіант: 62</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $group = $_POST["group"];
            $phone = $_POST["phone"];
            $idCard = $_POST["id_card"];
            $faculty = $_POST["faculty"];
            $displayInfo = true;
        }
        ?>

        <div class="form-container">
            <div class="form-title">Форма для заповнення</div>

            <form action="index.php" method="post" onsubmit="return validateForm()">
                <input type="text" name="name" id="name" required placeholder="ПІБ">
                <input type="text" name="group" id="group" required placeholder="Група">
                <input type="text" name="phone" id="phone" required placeholder="Телефон">
                <input type="text" name="id_card" id="id_card" required placeholder="ID-card">
                <input type="text" name="faculty" id="faculty" required placeholder="Факультет">

                <button type="submit">Підтвердити</button>
            </form>

            <?php if ($displayInfo): ?>
                <div class="displayed-info">
                    <h2>Введена інформація:</h2>
                    <p>ПІБ: <?php echo $name; ?></p>
                    <p>Група: <?php echo $group; ?></p>
                    <p>Телефон: <?php echo $phone; ?></p>
                    <p>ID-card: <?php echo $idCard; ?></p>
                    <p>Факультет: <?php echo $faculty; ?></p>
                </div>
            <?php endif; ?>
        </div>

        <div class="table-container">
            <div class="table-title">Пронумерована таблиця</div>
            <table id="colorTable"></table>
        </div>

        <script src="data.js"></script>
        <script src="table.js"></script>
    </body>
</html>