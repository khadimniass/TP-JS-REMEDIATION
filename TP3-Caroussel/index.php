<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>caroussel</title>
</head>

<body>
    <div class="section">
        <div class="slider">
            <div class="slide">
                <input type="radio" name="radio1" id="radio1">
                <input type="radio" name="radio1" id="radio2">
                <input type="radio" name="radio1" id="radio3">
                <input type="radio" name="radio1" id="radio4">
                <input type="radio" name="radio1" id="radio4">
                <!-- st = items -->
                <div class="items">
                    <img src="imgs/emb1.jpg" alt="">
                </div>
                <div class="items">
                    <img src="imgs/emb2.jpg" alt="">
                </div>
                <div class="items">
                    <img src="imgs/p2.jpg" alt="">
                </div>
                <div class="items">
                    <img src="imgs/pizza.jpg" alt="">
                </div>
                <div class="items">
                    <img src="imgs/soupe.jpg" alt="">
                </div>
                <!-- end items -->
                <div class="nav-auto">
                    <div class="a-b1"></div>
                    <div class="a-b2"></div>
                    <div class="a-b3"></div>
                    <div class="a-b4"></div>
                    <div class="a-b5"></div>
                </div>
            </div>
            <div class="nav-m">
                <label for="radio1"></label>
                <label for="radio2"></label>
                <label for="radio3"></label>
                <label for="radio4"></label>
                <label for="radio5"></label>
            </div>
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>