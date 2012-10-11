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
            sandwich.bcolor         = ["White/Whole Wheat:", bcValue];
            sandwich.breadtype      = ["Type of Bread:", getId("bread").value];
            sandwich.meat           = ["Meat(s):", meat];
            sandwich.anyelse        = ["Other Thing(s):", other];
            sandwich.cheese         = ["Cheese(s):", cheese];
            sandwich.condiments     = ["Condiment(s):", condiment];
            sandwich.delivery       = ["Get food by:", delValue];
            sandwich.house          = ["House Number:", h.value];
            sandwich.street         = ["Street:", st.value];
            sandwich.city           = ["City:", city.value];
            sandwich.zip            = ["Zip Code:", zip.value];
            sandwich.requests       = ["Requests/Notes:", notes.value];
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
            var links = document.createElement("li");
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
                makeSubList.appendChild(links);
            }
            makeLinks(localStorage.key(i), links);
        }
    };

    function makeLinks(key, links){
        var edit = document.createElement("a");
        edit.href = "#";
        edit.key = key;
        var editText = "Edit Sandwich";
        edit.addEventListener("click", editSandwich);
        edit.innerHTML = editText;
        links.appendChild(edit);
        edit.style.display = "inline-block"

        var deletion = document.createElement("a");
        deletion.href = "#";
        deletion.key = key;
        var deleteText = "Delete Sandwich";
        //deletion.addEventListener("click", deleteSandwich);
        deletion.innerHTML = deleteText;
        links.appendChild(deletion);
        deletion.style.display = "inline-block"
    }

    // function editSandwich(){
    //     var value = localStorage.getItem(this.key);
    //     var sandwich = JSON.parse(value);

    //     toggleDisplay("off");

        

    // }

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

    // condiment values
        // mayo
    function mayoValue(){
        if(mayo.checked){
            condiment.push(mayo.value)
        }
    }
        // ketchup
    function ketchupValue(){
        if (ke.checked){
            condiment.push(ke.value)
        }
    }
        // mustard
    function mustardValue(){
        if (must.checked){
            condiment.push(must.value)
        }
    }
        // hot sauce
    function hotSauceValue(){
        if (hs.checked){
            condiment.push(hs.value)
        }
    }
        // no condiment
    function noCondimentsValue(){
        if (noCon.checked) {
            condiment.push(noCon.value)
        }
    }

    // getting cheese values
        // american cheese
    function americanValue(){
        if(ac.checked){
            cheese.push(ac.value)
        }
    }
        // monterey jack cheese
    function montereyJackValue(){
        if (mjc.checked){
            cheese.push(mjc.value)
        }
    }
        // parmesan cheese
    function parmesanValue(){
        if (pc.checked){
            cheese.push(pc.value)
        }
    }
        // no cheese
    function noCheeseValue(){
        if (nc.checked) {
            cheese.push(nc.value)
        }
    }
    
    // getting veggie values
        //tomato
    function tomatoValue(){
        if(tm.checked){
            other.push(tm.value)
        }
    }
        //pickle
    function pickleValue(){
        if (pi.checked){
            other.push(pi.value)
        }
    }
        //onion
    function onionValue() {
        if (on.checked){
            other.push(on.value)
        }
    }
        //lettuce
    function lettuceValue(){
        if (le.checked) {
            other.push(le.value)
        }
    }
        //no thanks
    function noValue(){
        if (no.checked) {
            other.push(no.value)
        }
    }
    
    //getting meat values
            //turkey
    function turkeyValue() {
        if(tu.checked){
            meat.push(tu.value)
        }
    }
            //chicken
    function chickenValue(){
        if(ch.checked){
            meat.push(ch.value)
        }
    }
            //pastrami
    function pastramiValue(){
        if(pa.checked){
            meat.push(pa.value)
        }
    }
            //beef bacon
    function beefbaconValue(){
        if(bb.checked){
            meat.push(bb.value)
        }
    }
            //no meat
    function noMeatValue(){
        if(nm.checked){
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
    tu.addEventListener("click", turkeyValue);
    ch.addEventListener("click", chickenValue);
    pa.addEventListener("click", pastramiValue);
    bb.addEventListener("click", beefbaconValue);
    nm.addEventListener("click", noMeatValue);
    tm.addEventListener("click", tomatoValue);
    pi.addEventListener("click", pickleValue);
    on.addEventListener("click", onionValue);
    le.addEventListener("click", lettuceValue);
    no.addEventListener("click", noValue);
    ac.addEventListener("click", americanValue);
    mjc.addEventListener("click", montereyJackValue);
    pc.addEventListener("click", parmesanValue);
    nc.addEventListener("click", noCheeseValue);
    mayo.addEventListener("click", mayoValue);
    ke.addEventListener("click", ketchupValue);
    must.addEventListener("click", mustardValue);
    hs.addEventListener("click", hotSauceValue);
    noCon.addEventListener("click", noCondimentsValue);
    
});