<?php
$url = $_POST['webhook_url'];
$headers = [ 'Content-Type: application/json; charset=utf-8' ];
$POST = [ 'username' => $_POST['username'], 'content' => '', 'avatar_url' => $_POST['avatar_url'], "embeds" => [
        [
            // Set the title for your embed
            "title" => $_POST['title'],
 
            // The type of your embed, will ALWAYS be "rich"
            "type" => "rich",
 
            // A description for your embed
            "description" => $_POST['description'],
 
            // The URL of where your title will be a link to
            "url" => $_POST['title_url'],
 
            /* A timestamp to be displayed below the embed, IE for when an an article was posted
             * This must be formatted as ISO8601
             */
             "timestamp" => $_POST['data'],
 
            // The integer color to be used on the left side of the embed
            "color" => hexdec( substr($_POST['color'], 1)),
 
            // Footer object
            "footer" => [
                "text" => $_POST['footer_text'],
                "icon_url" => $_POST['footer_img']
            ],
 
            // Image object
            "image" => [
                "url" => $_POST['image']
            ],
 
            // Thumbnail object
            "thumbnail" => [
                "url" => $_POST['thumbnail']
            ],
            // Field array of objects
            "fields" => [
                // Field 1
                [
                    "name" => $_POST['field_name1'],
                    "value" => $_POST['field_value1'],
                    "inline" => false
                ]
            ]
        ]
    ]
 ];
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($POST));
$response   = curl_exec($ch);
var_dump($_POST); die();
if (isset($_SERVER["HTTP_REFERER"])) {
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    }