<?php

$url = "https://discord.com/api/webhooks/840679074216411226/sLJcG47GFoG-oOAZelFqFyBqh98d1rRe6OcnGgfLmrYRwZMbwV9fbtR04yz0FqFhy5MR";
$headers = [ 'Content-Type: application/json; charset=utf-8' ];
$POST = [ 'username' => $_POST['username'], 'content' => $_POST['content'], 'avatar_url' => $_POST['avatar_url'], "embeds" => [
        [
            // Set the title for your embed
            "title" => "tytuł",

            // The type of your embed, will ALWAYS be "rich"
            "type" => "rich",

            // A description for your embed
            "description" => "opis",

            // The URL of where your title will be a link to
            "url" => "https://www.google.com/",

            /* A timestamp to be displayed below the embed, IE for when an an article was posted
             * This must be formatted as ISO8601
             */
            "timestamp" => "2018-03-10T19:15:45-05:00",

            // The integer color to be used on the left side of the embed
            "color" => hexdec( "FFFFFF" ),

            // Footer object
            "footer" => [
                "text" => "Google TM",
                "icon_url" => "https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg"
            ],

            // Image object
            "image" => [
                "url" => "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            ],

            // Thumbnail object
            "thumbnail" => [
                "url" => "https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU_400x400.jpg"
            ],

            // Author object
            "author" => [
                "name" => "Alphabet",
                "url" => "https://www.abc.xyz"
            ],

            // Field array of objects
            "fields" => [
                // Field 1
                [
                    "name" => "Data A",
                    "value" => "Value A",
                    "inline" => false
                ],
                // Field 2
                [
                    "name" => "Data B",
                    "value" => "Value B",
                    "inline" => true
                ],
                // Field 3
                [
                    "name" => "Data C",
                    "value" => "Value C",
                    "inline" => true
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

if (isset($_SERVER["HTTP_REFERER"])) {
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    }
