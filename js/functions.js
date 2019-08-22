var selectinpu = document.getElementById("selections");
var control = 0;
selectinpu.onchange = function () {
    clr();

    switch (selectinpu.value) {
        case "1":
            temp = '<div class="form-group"><label class="">Enter The Number You want to print </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "2":
            temp = '<div class="form-group"><label class="">Enter The Number You want to check </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "3":
            temp = '<div class="form-group"><label class="">Enter The First Number </label><input type="number" id="first" class="form-control" /><label class="">Enter The second Number </label><input type="number" id="second" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "4":
            temp = '<div class="form-group"><label class="">Enter The Number You want to check </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "5":
            temp = '<div class="form-group"><label class="">Enter The First Number </label><input type="number" id="first" class="form-control" /><label class="">Enter The second Number </label><input type="number" id="second" class="form-control" /><label class="">Enter The Third Number </label><input type="number" id="third" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "6":
            temp = '<div class="form-group"><label class="">Enter The Number You want to check </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "7":
            temp = '<div class="form-group"><label class="">Enter The Character You want to check </label><input type="Text" maxlength="1" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "8":
            temp = '<div class="form-group"><label class="">Enter The Number </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "9":
            temp = '<div class="form-group"><label class="">Enter The Number You want to print Its Multiplication Table </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "10":
            temp = '<div class="form-group"><label class="">Enter The Number You want to print </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "11":
            temp = '<div class="form-group"><label class="">Enter The Number </label><input type="number" id="first" class="form-control" /><label class="">Enter The Power </label><input type="number" id="second" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "12":
            temp = '<div class="form-group"><label class="">Enter The First Number </label><input type="number" id="1" class="form-control" /><label class="">Enter The second Number </label><input type="number" id="2" class="form-control" /><label class="">Enter The Third Number </label><input type="number" id="3" class="form-control" /><label class="">Enter The Forth Number </label><input type="number" id="4" class="form-control" /><label class="">Enter The 5th Number </label><input type="number" id="5" class="form-control" /><label class="">Enter The 6th Number </label><input type="number" id="6" class="form-control" /><label class="">Enter The 7th Number </label><input type="number" id="7" class="form-control" /><label class="">Enter The 8th Number </label><input type="number" id="8" class="form-control" /><label class="">Enter The 9th Number </label><input type="number" id="9" class="form-control" /><label class="">Enter The 10th Number </label><input type="number" id="10" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "13":
            temp = '<div class="form-group"><label class="">Enter The First Number </label><input type="number" id="1" class="form-control" /><label class="">Enter The second Number </label><input type="number" id="2" class="form-control" /><label class="">Enter The Third Number </label><input type="number" id="3" class="form-control" /><label class="">Enter The Forth Number </label><input type="number" id="4" class="form-control" /><label class="">Enter The 5th Number </label><input type="number" id="5" class="form-control" /><label class="">Enter The 6th Number </label><input type="number" id="6" class="form-control" /><label class="">Enter The 7th Number </label><input type="number" id="7" class="form-control" /><label class="">Enter The 8th Number </label><input type="number" id="8" class="form-control" /><label class="">Enter The 9th Number </label><input type="number" id="9" class="form-control" /><label class="">Enter The 10th Number </label><input type="number" id="10" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "14":
            temp = '<div class="form-group"><label class="">Enter The Number </label><input type="number" id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "15":
            temp = '<div class="form-group"><label class="">Enter The First Number </label><input type="number" id="1" class="form-control" /><label class="">Enter The second Number </label><input type="number" id="2" class="form-control" /><label class="">Enter The Third Number </label><input type="number" id="3" class="form-control" /><label class="">Enter The Forth Number </label><input type="number" id="4" class="form-control" /><label class="">Enter The 5th Number </label><input type="number" id="5" class="form-control" /><label class="">Enter The 6th Number </label><input type="number" id="6" class="form-control" /><label class="">Enter The 7th Number </label><input type="number" id="7" class="form-control" /><label class="">Enter The 8th Number </label><input type="number" id="8" class="form-control" /><label class="">Enter The 9th Number </label><input type="number" id="9" class="form-control" /><label class="">Enter The 10th Number </label><input type="number" id="10" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "16":
            temp = '<div class="form-group"><label class="">Enter The Character You want to check </label><input type="Text"  id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;
        case "17":
            temp = '<div class="form-group"><label class="">Enter The Character You want to check </label><input type="Text"  id="first" class="form-control" /><button id="submit" class="btn btn-primary my-4">Submit</button> </div>';
            document.getElementById("inputs").innerHTML = temp;
            control = 1;
            check();
            break;

    }


}


//__________________________________________________________________________
function check() {
    if (control === 1) {
        document.getElementById("submit").onclick = function () {
            switch (selectinpu.value) {
                case "1":
                    pro1();
                    break;
                case "2":
                    pro2();
                    break;
                case "3":
                    pro3();
                    break;
                case "4":
                    pro4();
                    break;
                case "5":
                    pro5();
                    break;
                case "6":
                    pro6();
                    break;
                case "7":
                    pro7();
                    break;
                case "8":
                    pro8();
                    break;
                case "9":
                    pro9();
                    break;
                case "10":
                    pro10();
                    break;
                case "11":
                    pro11();
                    break;
                case "12":
                    pro12();
                    break;
                case "13":
                    pro13();
                    break;
                case "14":
                    pro14();
                    break;
                case "15":
                    pro15();
                    break;
                case "16":
                    pro16();
                    break;
                case "17":
                    pro17();
                    break;
            }
        }
    }
    //________________________________________________________________________________

    function pro1() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        document.getElementById("Final").innerHTML = val;
    }
    //________________________________________________________________________________
    function pro2() {
        temp2 = '<div class="form-group"><label class="">Your Number Is divided by 3 And 4 : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        if (val % 3 == 0 & val % 4 == 0) {
            document.getElementById("Final").innerHTML = "Yes";
        } else {
            document.getElementById("Final").innerHTML = "No";
        }
    }
    //________________________________________________________________________________

    function pro3() {
        temp2 = '<div class="form-group"><label class="">Max Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        val2 = document.getElementById("second").value;
        if (val === val2) {
            document.getElementById("Final").innerHTML = "The Numbers Are Equal";
        } else {
            document.getElementById("Final").innerHTML = Math.max(val, val2);
        }
        /* if (val > val2){document.getElementById("Final").innerHTML = val ;}
         else if (val2 > val) {document.getElementById("Final").innerHTML = val2 ;}
         else if (val === val2){document.getElementById("Final").innerHTML = "The Numbers Are Equal" ;}
         else {document.getElementById("Final").innerHTML = "check The Numbers You Entered" ;}*/
    }
    //________________________________________________________________________________

    function pro4() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        if (val > 0) {
            document.getElementById("Final").innerHTML = "Positive";
        } else if (val < 0) {
            document.getElementById("Final").innerHTML = "Negitive";
        } else {
            document.getElementById("Final").innerHTML = "0";
        }
    }
    //________________________________________________________________________________

    function pro5() {
        temp2 = '<div class="form-group"><label class="">Max Number Is : </label><label id="Final"></label><br><label class=""> And Min Number Is : </label><label id="Final2"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        val2 = document.getElementById("second").value;
        val3 = document.getElementById("third").value;
        if (val === val2 === val3) {
            document.getElementById("Final").innerHTML = "The Numbers Are Equal";
        } else {
            document.getElementById("Final").innerHTML = Math.max(val, val2, val3);
            document.getElementById("Final2").innerHTML = Math.min(val, val2, val3);

        }
    }

    //________________________________________________________________________________

    function pro6() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        if (val % 2 == 0) {
            document.getElementById("Final").innerHTML = "Even";
        } else if (val % 2 != 0) {
            document.getElementById("Final").innerHTML = "Odd";
        } else {
            document.getElementById("Final").innerHTML = "There Was An Erro In The Number You Entered";
        }
    }
    //________________________________________________________________________________

    function pro7() {
        temp2 = '<div class="form-group"><label class="">Your Character Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u" || val === "A" || val === "E" || val === "I" || val === "O" || val === "U") {
            document.getElementById("Final").innerHTML = "Vowel";
        } else {
            document.getElementById("Final").innerHTML = "Consonant";
        }

    }
    //________________________________________________________________________________

    function pro8() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        var x = [];

        for (var i = 1; i <= val; i++) {
            x[i - 1] = i;

        }
        document.getElementById("Final").innerHTML = x;

    }
    //________________________________________________________________________________

    function pro9() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        var x = [];

        for (var i = 1; i <= 12; i++) {
            x[i - 1] = i * val;

        }
        document.getElementById("Final").innerHTML = x;

    }

    //________________________________________________________________________________

    function pro10() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        var x = [];

        for (var i = 1; i <= val; i++) {
            if (i % 2 == 0) {
                x[i - 1] = i;
            }

        }
        document.getElementById("Final").innerHTML = x;

    }

    //________________________________________________________________________________

    function pro11() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        val2 = document.getElementById("second").value;
        var x = 1;
        for (var i = 0; i < val2; i++) {
            x *= val
        }
        document.getElementById("Final").innerHTML = x;

    }
    //________________________________________________________________________________

    function pro12() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        var x = [];
        var avg = 0
        for (var i = 1; i <= 10; i++) {
            var m = String(i);
            x[i - 1] = document.getElementById(m).value;
            avg += Number(x[i - 1]);
        }
        document.getElementById("Final").innerHTML = avg / 10;

    }
    //________________________________________________________________________________

    function pro13() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        var x = [];
        var y = [];
        for (var i = 1; i <= 10; i++) {
            var m = String(i);
            x[i - 1] = document.getElementById(m).value;
            y[11 - i] = x[i - 1];
        }
        document.getElementById("Final").innerHTML = y;

    }
    //________________________________________________________________________________

    function pro14() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        switch (val) {
            case "1":
                document.getElementById("Final").innerHTML = "Enter A number Bigger than 1";
                break;
            default:
                var con = 0;
                for (var i = 2; i <= val; i++) {
                    if (val % i == 0) {
                        con += 1;
                    }
                }
                if (con > 1) {
                    document.getElementById("Final").innerHTML = "Negitive (Not Prime)";
                } else {
                    document.getElementById("Final").innerHTML = "Prime";
                }

                break;

        }
    }
    //________________________________________________________________________________

    function pro15() {
        temp2 = '<div class="form-group"><label class="">Your Number Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        var x = [];
        var sumation = 0
        for (var i = 1; i <= 10; i++) {
            var m = String(i);
            x[i - 1] = document.getElementById(m).value;
            sumation += Number(x[i - 1]);
        }
        document.getElementById("Final").innerHTML = sumation;
    }
    //________________________________________________________________________________

    function pro16() {
        temp2 = '<div class="form-group"><label class="">Your Character Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        var calc = 0;

        for (var i = 0; i < val.length; i++) {
            if (val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u" || val[i] === "A" || val[i] === "E" || val[i] === "I" || val[i] === "O" || val[i] === "U") {
                calc++;
            }
        }
        document.getElementById("Final").innerHTML = calc;

    }
    //________________________________________________________________________________

    function pro17() {
        temp2 = '<div class="form-group"><label class="">Your Character Is : </label><label id="Final"></label></div>';
        document.getElementById("results").innerHTML = temp2;
        val = document.getElementById("first").value;
        var vow = "";
        for (var i = 0; i < val.length; i++) {
            if (val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u" || val[i] === "A" || val[i] === "E" || val[i] === "I" || val[i] === "O" || val[i] === "U") {

            } else {
                vow += val[i];
            }
        }
        document.getElementById("Final").innerHTML = vow;
    }
}
//________________________________________________________________________________

function clr() {

    document.getElementById("results").innerHTML = "";



}
