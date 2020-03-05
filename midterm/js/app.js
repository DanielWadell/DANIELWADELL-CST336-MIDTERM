$("#query").on("click", function() {
    $.ajax({
        type: "GET",
        url: "https://openlibrary.org/api/books",
        dataType: "json",
        data: ({   
                "bibkeys": "ISBN:" + $("#ISBN").val(),
                "format":"json",
                "jscmd": "data"}),
        success: function(response) {
            $("#image").html("<img src=" + response["ISBN:" + $("#ISBN").val()].cover.medium + ">");
            $("#title").html("Title: " + response["ISBN:" + $("#ISBN").val()].title);
            $("#author").html("Author: " + response["ISBN:" + $("#ISBN").val()].authors[0].name);
            $("#publishedyear").html("Publish: " + response["ISBN:" + $("#ISBN").val()].publish_date);
            $("#publisher").html("Publisher: " + response["ISBN:" + $("#ISBN").val()].publishers[0].name);
            $("#code").html("ISBN: " + $("#ISBN").val());
            $("#pages").html("Pages: " + response["ISBN:" + $("#ISBN").val()].number_of_pages);

        },
        error: function(error) {
            console.log(error)
        }
    });
})

