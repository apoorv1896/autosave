# autosave
here i have created this project using html css java
## Step 1  Create a html file 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auto Save Textarea</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <h1>Auto Save Textarea</h1>
        <textarea id="myTextarea" rows="10" cols="50" placeholder="Start typing here..."></textarea>

    </div>
    <div id="box">

    </div>
    <script src="./script.js"></script>
</body>
</html>

## step 2 create css file
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

h1 {
    color: #333;
    font-size: 28px;
    margin-bottom: 20px;
}

textarea {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 2px solid #ddd;
    border-radius: 5px;
    resize: vertical;
    min-height: 200px;
}

textarea:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}

#box{
    width: 50%;
    color: #0f0e0e;
    height: 20%;
}

## Step 3 create js file
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

h1 {
    color: #333;
    font-size: 28px;
    margin-bottom: 20px;
}

textarea {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 2px solid #ddd;
    border-radius: 5px;
    resize: vertical;
    min-height: 200px;
}

textarea:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}

#box{
    width: 50%;
    color: #0f0e0e;
    height: 20%;
}
