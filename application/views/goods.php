        <span class="">
            <button id="btnMain" type="button" class="btn btn-primary btn-lg btn-block" aria-label="Left Align">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
        </span>

        <!--        post-->
        <?php foreach ($result as $row) {

//            echo '<pre>';
//            print_r($row);
//            echo '</pre>';

            ?>

        <div class="post" id="<?=$row->id?>">
            <div class="col-md-2 col-sm-12">
                <img src="https://www.google.com.ua/intl/ru/adwords/images/illustrations/overview-costs-bg.png" class="img-responsive img-rounded" alt="Responsive image">
            </div>
            <div class="col-md-8 col-sm-12 descr">
                <p class="lead" data-name="name"><?=$row->name;?></p>
                <p data-name="text"><?=$row->text;?></p>
            </div>
            <button type="button" class="btn btn-primary edit" aria-label="Left Align">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            </button>
            <button type="button" class="btn btn-danger remove" aria-label="Left Align">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
        </div>


        <?php } ?>

    </div>





</body>
</html>