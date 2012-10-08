// Yusra Ahmed
// Project 2: Web App Part 2
// VFW Term 1210

window.addEventListener("DOMContentLoaded", function() {

    function getId(id) {
        var element = document.getElementById(id)
        return element
    };

        //Save Data
    var save = getId("save");

        //Display Data Link
    var displayData = getId("displaydata");

        //Clear Link
    var clear = getId("clearstoreddata");

        //Meat
    var tu = getId("turkey"),
        //tusl = getId("turkeyslices"),
        ch = getId("chicken"),
        //chsl = getId("chickenslices"),
        pa = getId("pastrami"),
        //pasl = getId("pastramislices"),
        bb = getId("beefbacon"),
        //bbsl = getId("beefbaconslices"),
        nm = getId("nomeat")
    ;
        //Anything Else
    var tm = getId("tomatoes"),
        //tmsl = getId("tomatoslices"),
        pi = getId("pickles"),
        //pisl = getId("pickleslices"),
        on = getId("onions"),
        //onsl = getId("onionslices"),
        le = getId("lettuce"),
        no = getId("no")
    ;
        //Cheese
    var ac = getId("americancheese"),
        //acsl = getId("americanslices"),
        mjc = getId("montereyjackcheese"),
        //mjcsl = getId("montereyjackslices"),
        pc = getId("parmesancheese"),
        //pcsl = getId("parmesanslices"),
        nc = getId("nocheese")
    ;
        //Condiments
    var mayo = getId("mayo"),
        ke = getId("ketchup"),
        must = getId("mustard"),
        hs = getId("hotsauce")
        noCon = getId("nocondiments")
    ;
        //Delivery
    var del = getId("delivery")
        pu = getId("pickup"),
        h = getId("house"),
        st = getId("street"),
        city = getId("city"),
        zip = getId("zip"),
        notes = getId("notes")
    ;
        //Define sandwich variables
    var bcValue,
        delValue,
        meat,
        other,
        cheese,
        condiment,
        breadColor
    ;
    
    function toggleDisplay(n){
        switch(n){
            case "on":
                getId("sandwichForm").style.display = "none";
                clear.style.display = "inline";
                displayData.style.display = "none";
                getId("addsandwich").style.display = "inline";
                break;
            case "off":
                getId("sandwichForm").style.display = "block";
                clear.style.display = "inline";
                displayData.style.display = "inline";
                getId("addsandwich").style.display = "none";
                getId("sandwich").style.display = "none";
                break;
            default:
                return false;
        }
    }
    
    function storeData(){
        var id = Math.floor(Math.random()*1000001);
        selectedBreadColor();
        selectDelivery();
        var sandwich = {};
            sandwich.bcolor         = ["White or Whole Wheat:", bcValue];
            sandwich.breadtype      = ["Type of Bread:", getId("bread").value];
            sandwich.meat           = ["Meat(s):", meat];
            sandwich.anyelse        = ["Other Thing(s):", other];
            sandwich.cheese         = ["Cheese(s):", cheese];
            sandwich.condiments     = ["Condiment(s):", condiment];
            sandwich.delivery       = ["Prefer to get food by:", delValue];
            sandwich.house          = ["House Number:", h.value];
            sandwich.street         = ["Street:", st.value];
            sandwich.city           = ["City:", city.value];
            sandwich.zip            = ["Zip Code:", zip.value];
            sandwich.requests       = ["Delivery Requests:", notes.value];
        localStorage.setItem(id, JSON.stringify(sandwich));
        alert("Saved!");
    };
    
    function getData() {
        toggleDisplay("on");
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "sandwich");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        for (var i=0, j=localStorage.length; i<j;i++) {
            var makeli = document.createElement("li");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeli.appendChild(makeSubList);
            for (var n in obj){
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
            }
        }
    };
    
    function clearData() {
        if (localStorage.length === 0) {
            alert("Nothing to clear!")
        } else {
            localStorage.clear();
            alert("Data Cleared!");
            window.location.reload();
            return false;
        }
    }
    
    function getCon() {
        if(mayo.checked){
            condiment = mayo.value
        } if (ke.checked){
            condiment = ke.value
        } if (must.checked){
            condiment = must.value
        } if (hs.checked){
            condiment = hs.value
        }if (noCon.checked) {
            condiment = noCon.value
        }
    }
    
    function getCheese() {
        if(ac.checked){
            cheese = ac.value
        } if (mjc.checked){
            cheese = mjc.value
        } if (pc.checked){
            cheese = pc.value
        } if (nc.checked) {
            cheese = nc.value
        }
    }
    
    function getElse() {
        if(tm.checked){
            other = tm.value
        } if (pi.checked){
            other = pi.value
        } if (on.checked){
            other = on.value
        } if (le.checked) {
            other = le.value
        } if (no.checked) {
            other = no.value
        }
    }
    
    function getMeat() {
        if(tu.checked){
            meat = tu.value
        } if (ch.checked){
            meat = ch.value
        } if (pa.checked){
            meat = pa.value
        } if (bb.checked) {
            meat = bb.value
        }
    }
    
    function selectDelivery(){
        var delivered = document.forms[0].delivery;
        for(var i=0; i<delivered.length; i++) {
            if (delivered[i].checked){
                delValue = delivered[i].value;
            }
        }
    }
    
    function selectedBreadColor(){
        breadColor = document.forms[0].bread;
        for(var i=0; i<breadColor.length; i++) {
            if (breadColor[i].checked){
                bcValue = breadColor[i].value;
            }
        }
    }
   
    function makeBread(){
        var form = document.getElementsByTagName("form"),
            selectLi = getId("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "bread");
        for (var i=0, j=breadType.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = breadType[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    };

        // Bread Type Select Field
    var breadType = ["Hero", "Roll", "Bagel", "Sliced Bread", "Hamburger Buns"];

    //function tuslRange() {
    //    if (tu.checked) {
    //        tusl.removeAttribute("disabled", "disabled")
    //    } else {
    //        tusl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function chslRange() {
    //    if (ch.checked) {
    //        chsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        chsl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function paslRange() {
    //    if (pa.checked) {
    //        pasl.removeAttribute("disabled", "disabled")
    //    } else {
    //        pasl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function bbslRange() {
    //    if (bb.checked) {
    //        bbsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        bbsl.setAttribute("disabled", "disabled")
    //    }
    //};

    function noMeat() {
        if (nm.checked) {
            tu.setAttribute("disabled", "disabled"),
            //tusl.setAttribute("disabled", "disabled"),
            ch.setAttribute("disabled", "disabled"),
            //chsl.setAttribute("disabled", "disabled"),
            pa.setAttribute("disabled", "disabled"),
            //pasl.setAttribute("disabled", "disabled"),
            bb.setAttribute("disabled", "disabled")
            //bbsl.setAttribute("disabled", "disabled")
        } else {
            tu.removeAttribute("disabled", "disabled"),
            ch.removeAttribute("disabled", "disabled"),
            pa.removeAttribute("disabled", "disabled"),
            bb.removeAttribute("disabled", "disabled")
        }
    };
    
    //function tmslRange() {
    //    if (tm.checked) {
    //        tmsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        tmsl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function pislRange() {
    //    if (pi.checked) {
    //        pisl.removeAttribute("disabled", "disabled")
    //    } else {
    //        pisl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function onslRange() {
    //    if (on.checked) {
    //        onsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        onsl.setAttribute("disabled", "disabled")
    //    }
    //};
    
    function nothing() {
        if (no.checked) {
            tm.setAttribute("disabled", "disabled"),
            //tmsl.setAttribute("disabled", "disabled"),
            pi.setAttribute("disabled", "disabled"),
            //pisl.setAttribute("disabled", "disabled"),
            on.setAttribute("disabled", "disabled"),
            //onsl.setAttribute("disabled", "disabled"),
            le.setAttribute("disabled", "disabled")
        } else {
            tm.removeAttribute("disabled", "disabled"),
            pi.removeAttribute("disabled", "disabled"),
            on.removeAttribute("disabled", "disabled"),
            le.removeAttribute("disabled", "disabled")
        }
    };
    
    //function acslRange() {
    //    if (ac.checked) {
    //        acsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        acsl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function mjcslRange() {
    //    if (mjc.checked) {
    //        mjcsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        mjcsl.setAttribute("disabled", "disabled")
    //    }
    //};
    //
    //function pcslRange() {
    //    if (pc.checked) {
    //        pcsl.removeAttribute("disabled", "disabled")
    //    } else {
    //        pcsl.setAttribute("disabled", "disabled")
    //    }
    //};
    
    function noCheese() {
        if (nc.checked) {
            ac.setAttribute("disabled", "disabled"),
            //acsl.setAttribute("disabled", "disabled"),
            mjc.setAttribute("disabled", "disabled"),
            //mjcsl.setAttribute("disabled", "disabled"),
            pc.setAttribute("disabled", "disabled")
            //pcsl.setAttribute("disabled", "disabled")
        } else {
            ac.removeAttribute("disabled", "disabled"),
            mjc.removeAttribute("disabled", "disabled"),
            pc.removeAttribute("disabled", "disabled")
        }
    };

    function noCondiments() {
        if (noCon.checked) {
            mayo.setAttribute("disabled", "disabled"),
            ke.setAttribute("disabled", "disabled"),
            must.setAttribute("disabled", "disabled"),
            hs.setAttribute("disabled", "disabled")
        } else {
            mayo.removeAttribute("disabled", "disabled"),
            ke.removeAttribute("disabled", "disabled"),
            must.removeAttribute("disabled", "disabled"),
            hs.removeAttribute("disabled", "disabled")
        }
    };
    
    function pickUp() {
        if (pu.checked) {
            h.setAttribute("disabled", "disabled"),
            st.setAttribute("disabled", "disabled"),
            city.setAttribute("disabled", "disabled"),
            zip.setAttribute("disabled", "disabled"),
            notes.setAttribute("disabled", "disabled")
        } else if (del.checked){
            h.removeAttribute("disabled", "disabled"),
            st.removeAttribute("disabled", "disabled"),
            city.removeAttribute("disabled", "disabled"),
            zip.removeAttribute("disabled", "disabled"),
            notes.removeAttribute("disabled", "disabled")
        }
    };
    
    makeBread();
    //tu.addEventListener("click", tuslRange);
    //ch.addEventListener("click", chslRange);
    //pa.addEventListener("click", paslRange);
    //bb.addEventListener("click", bbslRange);
    nm.addEventListener("click", noMeat);
    //tm.addEventListener("click", tmslRange);
    //pi.addEventListener("click", pislRange);
    //on.addEventListener("click", onslRange);
    no.addEventListener("click", nothing);
    //ac.addEventListener("click", acslRange);
    //mjc.addEventListener("click", mjcslRange);
    //pc.addEventListener("click", pcslRange);
    nc.addEventListener("click", noCheese);
    noCon.addEventListener("click", noCondiments);
    pu.addEventListener("click", pickUp);
    del.addEventListener("click", pickUp);
    displayData.addEventListener("click", getData);
    save.addEventListener("click", storeData);
    clear.addEventListener("click", clearData);
    tu.addEventListener("click", getMeat);
    ch.addEventListener("click", getMeat);
    pa.addEventListener("click", getMeat);
    bb.addEventListener("click", getMeat);
    nm.addEventListener("click", getMeat);
    tm.addEventListener("click", getElse);
    pi.addEventListener("click", getElse);
    on.addEventListener("click", getElse);
    le.addEventListener("click", getElse);
    no.addEventListener("click", getElse);
    ac.addEventListener("click", getCheese);
    mjc.addEventListener("click", getCheese);
    pc.addEventListener("click", getCheese);
    nc.addEventListener("click", getCheese);
    mayo.addEventListener("click", getCon);
    ke.addEventListener("click", getCon);
    must.addEventListener("click", getCon);
    hs.addEventListener("click", getCon);
    noCon.addEventListener("click", getCon);
    
});