<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Market</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://bootswatch.com/sandstone/bootstrap.min.css">
    <!--    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="/assets/css/style.css" rel="stylesheet">
    <script src="/assets/js/script.js"></script>
</head>
<body>
<header>
    <nav class="collapse navbar-collapse">
        <div class="container">
            <ul class="nav navbar-nav">
                <li><a><h4>Market</h4></a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a>LoginLogout</a></li>
            </ul>

        </div>
    </nav>
</header>
<div class="container main">

        <span class="">
            <button id="btnAdd" type="button" class="btn btn-primary btn-lg btn-block" aria-label="Left Align">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
        </span>

    <div class="post">
        <div class="col-md-2 col-sm-12">
            <img src="https://www.google.com.ua/intl/ru/adwords/images/illustrations/overview-costs-bg.png" class="img-responsive img-rounded" alt="Responsive image">
        </div>
        <div class="col-md-8 col-sm-12">
            <p class="lead">Text</p>
            <p>description
                sfklkfsdlkfksdlfjsdkfjsdlfksdjflksdfjdlskfjsdklfds
                dfkjlsdsddlj dflkdsjf lsdkfjdslk fsdflks djflsdfj sdlfjs dfsdfsd dsf sd fjdsf ds s wewepd sdfldk fjdslkfjs</p>
        </div>
        <button type="button" class="btn btn-primary" aria-label="Left Align">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-danger" aria-label="Left Align">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
    </div>

</div>



<div id="modalAdd" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                <p>One fine body&hellip;</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>

</body>
</html>