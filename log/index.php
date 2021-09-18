<!doctype html>
<html lang="en">
<head>
    <?php
    if (isset($_GET["ss"])) {
    } else {
        echo "<h1>Access denied</h1>";
        die();
    }
    ?>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Log CV</title>
    <link rel="shortcut icon" href="../assets/img/apple-touch-icon.png" type="image/x-icon">
    <link rel="apple-touch-icon" href="../assets/img/apple-touch-icon.png" type="image/x-icon">
    <link rel="manifest" href="manifest.json">
    <meta name="apple-mobile-web-app-status-bar" content="#263238">
    <meta name="theme-color" content="#263238">
    <link rel="stylesheet" href="../assets/mat/materialize.css">
    <script src="../assets/js/vue.js"></script>
    <style>
        body{background-color: #151515;}
        th{font-size: 12px; color: #bababa;}
        td{font-size: 12px; color: #bababa;}
    </style>
</head>
<body onload="body_load();">

<div id="divLog" class="container">
    <table class="centered">
<!--        <thead>-->
<!--        <tr>-->
<!--            <th>#</th>-->
<!--            <th>time</th>-->
<!--            <th>os</th>-->
<!--            <th>cnt</th>-->
<!--            <th>dn</th>-->
<!--            <th>ip</th>-->
<!--        </tr>-->
<!--        </thead>-->
        <tbody>
        <tr v-for="(l,item) in logs">
            <td style="color: #4f4f4f;">{{(logs.length-item)}}</td>
            <td>{{l.t}}</td>
            <td class="white-text">{{l.os}}</td>
            <td>{{l.cnt}}</td>
            <td>{{l.dn}}</td>
            <td>{{l.ip}}</td>
        </tr>
        </tbody>
    </table>
</div>

<script src="../assets/js/jquery-3.3.1.min.js"></script>
<script src="../assets/mat/materialize.js"></script>
<script>
    var log = new Vue({
        el: '#divLog',
        data: {logs: []},
        methods: {
            update_log: function (newLog) {
                this.logs = newLog;
            }
        }
    });

    function body_load() {
        setInterval(get_data, 1000);
    }

    function get_data() {
        let form_data = new FormData();
        form_data.append("data_my_value", "02628e7340b5b2c183553c1d3356e33f");
        ajax("set_log", form_data);
    }

    function func_call_back_set_log(d) {
        log.update_log(JSON.parse(d))
    }

    function ajax(call_back_func, form_data) {
        try {
            $.ajax({
                url: "../process.php",
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function (data) {
                    if (call_back_func.length > 0) {
                        window["func_call_back_" + call_back_func](data);
                    }
                },
                error: function (response) {
                    console.log("error " + call_back_func + " : " + response);
                }
            });
        } catch (err) {
            console.error("ajax : " + err.message);
        }
    }


</script>
</body>
