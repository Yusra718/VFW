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
        tusl = getId("turkeyslices"),
        ch = getId("chicken"),
        chsl = getId("chickenslices"),
        pa = getId("pastrami"),
        pasl = getId("pastramislices"),
        bb = getId("beefbacon"),
        bbsl = getId("beefbaconslices"),
        nm = getId("nomeat")
    ;
        //Anything Else
    var tm = getId("tomatoes"),
        tmsl = getId("tomatoslices"),
        pi = getId("pickles"),
        pisl = getId("pickleslices"),
        on = getId("onions"),
        onsl = getId("onionslices"),
        le = getId("lettuce"),
        no = getId("no")
    ;
        //Cheese
    var ac = getId("americancheese"),
        acsl = getId("americanslices"),
        mjc = getId("montereyjackcheese"),
        mjcsl = getId("montereyjackslices"),
        pc = getId("parmesancheese"),
        pcsl = getId("parmesanslices"),
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
    var addressForm = getId("address"),
        del = getId("delivery"),
        pu = getId("pickup"),
        h = getId("house"),
        st = getId("street"),
        city = getId("city"),
        zip = getId("zip"),
        notes = getId("notes")
    ;
        //Define sandwich variables for values
    var bcValue,
        delValue,
        meat = [],
        other = [],
        cheese = [],
        condiment = [],
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
            condiment.push(mayo.value)
        } if (ke.checked){
            condiment.push(ke.value)
        } if (must.checked){
            condiment.push(must.value)
        } if (hs.checked){
            condiment.push(hs.value)
        }if (noCon.checked) {
            condiment.push(noCon.value)
        }
    }
    
    function getCheese() {
        if(ac.checked){
            cheese.push(ac.value)
        } if (mjc.checked){
            cheese.push(mjc.value)
        } if (pc.checked){
            cheese.push(pc.value)
        } if (nc.checked) {
            cheese.push(nc.value)
        }
    }
    
    function getElse() {
        if(tm.checked){
            other.push(tm.value)
        } if (pi.checked){
            other.push(pi.value)
        } if (on.checked){
            other.push(on.value)
        } if (le.checked) {
            other.push(le.value)
        } if (no.checked) {
            other.push(no.value)
        }
    }
    
    function getMeat() {
        if(tu.checked){
            meat.push(tu.value)
        } if (ch.checked){
            meat.push(ch.value)
        } if (pa.checked){
            meat.push(pa.value)
        } if (bb.checked) {
            meat.push(bb.value)
        } if (nm.checked){
            meat.push(nm.value)
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

    function tuslRange() {
       if (tu.checked) {
           tusl.style.display = "inline"
       } else {
           tusl.style.display = "none"
       }
    };
    
    function chslRange() {
       if (ch.checked) {
           chsl.style.display = "inline"
       } else {
           chsl.style.display = "none"
       }
    };
    
    function paslRange() {
       if (pa.checked) {
           pasl.style.display = "inline"
       } else {
           pasl.style.display = "none"
       }
    };
    
    function bbslRange() {
       if (bb.checked) {
           bbsl.style.display = "inline"
       } else {
           bbsl.style.display = "none"
       }
    };

    function noMeat() {
        if (nm.checked) {
            tu.setAttribute("disabled", "disabled"),
            ch.setAttribute("disabled", "disabled"),
            pa.setAttribute("disabled", "disabled"),
            bb.setAttribute("disabled", "disabled")
        } else {
            tu.removeAttribute("disabled", "disabled"),
            ch.removeAttribute("disabled", "disabled"),
            pa.removeAttribute("disabled", "disabled"),
            bb.removeAttribute("disabled", "disabled")
        }
    };
    
    function tmslRange() {
       if (tm.checked) {
           tmsl.style.display = "inline"
       } else {
           tmsl.style.display = "none"
       }
    };
    
    function pislRange() {
       if (pi.checked) {
           pisl.style.display = "inline"
       } else {
           pisl.style.display = "none"
       }
    };
    
    function onslRange() {
       if (on.checked) {
           onsl.style.display = "inline"
       } else {
           onsl.style.display = "none"
       }
    };
    
    function nothing() {
        if (no.checked) {
            tm.setAttribute("disabled", "disabled"),
            pi.setAttribute("disabled", "disabled"),
            on.setAttribute("disabled", "disabled"),
            le.setAttribute("disabled", "disabled")
        } else {
            tm.removeAttribute("disabled", "disabled"),
            pi.removeAttribute("disabled", "disabled"),
            on.removeAttribute("disabled", "disabled"),
            le.removeAttribute("disabled", "disabled")
        }
    };
    
    function acslRange() {
       if (ac.checked) {
           acsl.style.display = "inline"
       } else {
           acsl.style.display = "none"
       }
    };
    
    function mjcslRange() {
       if (mjc.checked) {
           mjcsl.style.display = "inline"
       } else {
           mjcsl.style.display = "none"
       }
    };
    
    function pcslRange() {
       if (pc.checked) {
           pcsl.style.display = "inline"
       } else {
           pcsl.style.display = "none"
       }
    };
    
    function noCheese() {
        if (nc.checked) {
            ac.setAttribute("disabled", "disabled"),
            mjc.setAttribute("disabled", "disabled"),
            pc.setAttribute("disabled", "disabled")
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
            h.style.display = "none",
            st.style.display = "none",
            city.style.display = "none",
            zip.style.display = "none",
            notes.style.display = "none",
            addressForm.style.display = "none"
        } else if (del.checked){
            h.style.display = "inline-block",
            st.style.display = "inline-block",
            city.style.display = "inline-block",
            zip.style.display = "inline-block",
            notes.style.display = "inline-block",
            addressForm.style.display = "inline-block"
        }
    };
    
    makeBread();
    tu.addEventListener("click", tuslRange);
    ch.addEventListener("click", chslRange);
    pa.addEventListener("click", paslRange);
    bb.addEventListener("click", bbslRange);
    nm.addEventListener("click", noMeat);
    tm.addEventListener("click", tmslRange);
    pi.addEventListener("click", pislRange);
    on.addEventListener("click", onslRange);
    no.addEventListener("click", nothing);
    ac.addEventListener("click", acslRange);
    mjc.addEventListener("click", mjcslRange);
    pc.addEventListener("click", pcslRange);
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