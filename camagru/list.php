<html>
<head>
    <style>
     #choix{
            overflow-x: scroll;
            overflow-y: hidden;
            height: 130px;
            white-space:nowrap
        }
        #choix img{
            width: 200px;
            height: 100px;
            position: relative;
        }
    </style>
</head>
<body>
    <div id = "choix">
        <?php
            $files = glob('./images/filtres/*.{jpg,png}', GLOB_BRACE);
            foreach($files as $file) {
                echo '<img src="' . $file . '"  onclick="preview(this)"/>';
            }
        ?>
    </div>
</body>
<script>
    function preview(image)
    {
        window.top.window.preview(image); // On appelle ici notre fonction de callback
    }
</script>
</html>