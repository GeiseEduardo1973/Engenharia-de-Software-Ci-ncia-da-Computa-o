<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Média Escolares</title>
</head>
<body>
    <?php
    //implementação da função que calcula a média
    function calc_media($n1,$n2) {
        return ($n1 + $n2)/2;
    }
    //definindo o array que contém os daos do aluno
    $aluno = array("João", 8.8,9.4);

    //cahamando a função que calcula a média
    $media = calc_media($aluno[1], $aluno[2]);

    //imprimindo os dados na tela
    echo $aluno[0]." tem média igual a ".$media;
    ?>
</body>
</html>