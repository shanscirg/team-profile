let start = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
    <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
    <script src="jquery-3.4.1.min.js"></script>
    <title>Document</title>
</head>     
<body>
    <div class="wrapper">
        <div class="photo-header">
            <p><img id="prof-img"
                src="https://img.freepik.com/free-vector/team-metaphor_41910-355.jpg?size=626&ext=jpg"></img></p>
            <h1>My Team</h1>
        </div>
        <div class="container">
        <div class="row">
            <div class='col'>`

let middle = function (team) {
    let string = [];
    let card = [];
    for (let i = 0; i < team.length; i++) {
        string.push(team[i]);
        if (i % 2 === 0 && i !== 0) {
            card.push(
                `
                </div>
                <div class='col'>`)
        } else if (i % 4 === 0 && i !== 0) {
            card.push(
                '   <div class="row">');
        }
        if (string[i].title === "Manager"){
            card.push(
                `
                <div class='card'>
                    <h2>${string[i].name}</h2>
                    <h3>${string[i].title}</h3>
                    <h4>ID#: ${string[i].id}</h4>
                    <h4>Email: <a href="mailto:${string[i].email}">${string[i].email}</a></h4>
                    <h4>Office: ${string[i].officeNumber}</h4>
                </div>`)
        } else if (string[i].title === "Intern"){
            card.push(
                `
                <div class='card'>
                    <h2>${string[i].name}</h2>
                    <h3>${string[i].title}</h3>
                    <h4>ID#: ${string[i].id}</h4>
                    <h4>Email:  <a href="mailto:${string[i].email}">${string[i].email}</a></h4>
                    <h4>School: ${string[i].school}</h4>
                </div>`)
        } else if (string[i].title === "Engineer"){
            card.push(
                `
                <div class='card'>
                    <h2>${string[i].name}</h2>
                    <h3>${string[i].title}</h3>
                    <h4>ID#: ${string[i].id}</h4>
                    <h4>Email: <a href="mailto:${string[i].email}">${string[i].email}</a></h4>
                    <h4>GitHub: <a href="https://github.com/${string[i].github}">${string[i].github}</a></h4>
                </div>`)
        }
    }
    return card.join("");
}

let end = `
</div>    
</div>
</div>
<div class="wrapper"></div>
</body>
<style>
    @page {
        margin: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
    }

    html,
    body,
    .wrapper {
        height: 85%;
    }

    .wrapper {
        background-color: #D38CFF;
        padding-top: 100px;
        text-align: center;
    }

    body {
        background-color: white;
        -webkit-print-color-adjust: exact !important;
        font-family: 'Cabin', sans-serif;
    }

    main {
        background-color: #E9EDEE;
        height: auto;
        padding-top: 30px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'BioRhyme', serif;
        margin: 0;
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 2.5em;
    }

    h3 {
        font-size: 2em;
    }

    h4 {
        font-size: 1.5em;
    }

    h5 {
        font-size: 1.3em;
    }

    h6 {
        font-size: 1.2em;
    }

    p {
        margin-bottom: 5px;
    }

    .photo-header {
        position: relative;
        margin: 0 auto;
        margin-bottom: -50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: purple;
        color: yellow;
        padding: 10px;
        width: 95%;
        border-radius: 6px;
    }

    #prof-img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: -75px;
        border: 6px solid purple;
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
    }

    .photo-header h1,
    .photo-header h2 {
        width: 100%;
        text-align: center;
    }

    .container {
        padding: 50px;
        padding-left: 100px;
        padding-right: 100px;
        text-align: center;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .card h3 {
        color: yellow;
    }

    .card {
        padding: 20px;
        border-radius: 6px;
        background-color: #BC50FF;
        color: #780000;
        margin: 20px;
    }

    .col {
        flex: 1;
        text-align: center;
    }

    #bio {
        margin-top: 5%;
        text-align: center;
        padding-top: 5%;
    }

    a {
        text-decoration: underline;
        color: inherit;
        font-weight: bold;
    }

    a:hover {
        color: yellow;
    }

    @media print {
        body {
            zoom: .75;
        }
    }
</style>

</html>`

const generateHTML = function (team) {
    const html = start + middle(team) + end;
    return html;
}

module.exports = {
    generateHTML: generateHTML
}