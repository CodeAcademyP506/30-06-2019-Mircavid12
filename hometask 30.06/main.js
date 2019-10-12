$("#mybtn").click(function () {
    var myarray = [];
    var myname = $("#name").val();
    var mysurname = $("#surname").val();
    var mymail = $("#mail").val();
    var myage = $("#age").val();
    var mycity = $("myoptions").val();

    if (myname == "" || mysurname == "" || mymail == "" || mycity == 0 || Number(myage) < 12 || Number(myage) > 100)
        alert("Incorrect inputs!");

        $("table tbody tr").each(function (index, tr) {
            myarray.push($(tr).find("td").first().text().toLowerCase());
        })
 
    if (myarray.indexOf(myname.toLowerCase()) == -1 && myarray.indexOf(mysurname.toLowerCase()) == -1 && myarray.indexOf(mymail.toLowerCase()) == -1 && myname != "" && mysurname != "" && mymail != "" && Number(myage) > 11 && Number(myage) < 101) {

        var myarray = "<tr><td>"
            + myname + "</td><td>"
            + mysurname + "</td><td>"
            + myage + "</td><td>"
            + mycity + "</td><td><button>Delete</button></td></tr>"

        $("table tbody").append(myarray)   
    }

})

$("table").on("click", "button", function () {
    $(this).parent().parent().remove();
})