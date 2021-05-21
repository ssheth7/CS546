$(document).ready(function() {
    var searchForm = $('#searchTerm'),
        showList = $('#showList'),
        linktoReload = $('#homeLink'),
        showDiv = $('#show');

    $.get("http://api.tvmaze.com/shows", function(data, status) {
        if (status === "success") {
            var shows = [];
            for (var i = 0; i < data.length; i++) {
                shows.push("<li><a href = " + data[i]._links.self.href + ">" + data[i].name + "</a></li>");
            }
            showList.append(shows.join(''));
            showList.show();

            $("#showList a").click(function(event) {
                event.preventDefault();
                showList.hide();
                let link = $(this).attr('href');

                $.get(link, function(data, status) {
                    if (status == "success") {

                        $('#show').empty();

                        showDiv.append("<h1>" + data.name + "</h1>");
                        if (data.image && data.image.medium) {
                            showDiv.append("<img src = " + data.image.medium + ">");
                        } else {
                            showDiv.append("<img src = /public/no_image.jpeg>");
                        }
                        showDiv.append("<dl id=\"attributes\"></dl>");
                        let elements = [];
                        let genres = [];
                        for (let i = 0; i < data.genres.length; i++) {
                            genres.push(`<li>${data.genres[i]}</li>`);
                        }
                        elements.push("<dt>Language</dt>");
                        if (data.language) {
                            elements.push(`<dd>${data.language}</dd>`);
                        } else {
                            elements.push(`<dd>N/A</dd>`);
                        }
                        elements.push("<dt>Genres</dt>");
                        if (genres) {
                            elements.push(`<ul></ul>`);
                        } else {
                            elements.push(`<dd>N/A</dd>`);
                        }
                        elements.push("<dt>Average Rating</dt>");
                        if (data.rating && data.rating.average) {
                            elements.push(`<dd>${data.rating.average}</dd>`);
                        } else {
                            elements.push(`<dd>N/A</dd>`);
                        }
                        elements.push("<dt>Network</dt>");
                        if (data.network && data.network.name) {
                            elements.push(`<dd>${data.network.name}</dd>`);
                        } else {
                            elements.push(`<dd>N/A</dd>`);
                        }
                        elements.push("<dt>Summary</dt>");
                        if (data.summary) {
                            let regex = /(&nbsp;|<([^>]+)>)/ig;
                            let sanitized = data.summary.replace(regex, "");
                            data.summary = sanitized;
                            elements.push(`<dd>${data.summary}</dd>`);
                        } else {
                            elements.push(`<dd>N/A</dd>`);
                        }
                        $("#attributes").append(elements.join(''));
                        if (genres) {
                            $("#attributes ul").append(genres.join(''));
                        }
                        showDiv.show();
                        linktoReload.show();
                    } else {
                        alert("Error connecting to api");
                    }
                });
            });
        } else {
            showList.append("<li><a> Failure to connect to api </a><li>");
        }
    });

    $("#submit").click(function(event) {
        event.preventDefault();
        let searchTerm = $("#search_term").val();
        if (!searchTerm || searchTerm.trim().length == 0) {
            alert("Invalid search Term");
        } else {
            $("#showList").empty();
            $.get("http://api.tvmaze.com/search/shows/?q=" + searchTerm, function(data, status) {
                if (status === "success") {
                    var shows = [];
                    for (let i = 0; i < data.length; i++) {
                        shows.push("<li><a href = " + data[i].show._links.self.href + ">" + data[i].show.name + "</a></li>");
                    }
                    showList.append(shows.join(''));
                    showList.show();
                    showDiv.hide();
                    showDiv.empty();
                    linktoReload.show();

                    $("#showList a").click(function(event) {
                        event.preventDefault();
                        showList.hide();
                        let link = $(this).attr('href');

                        $.get(link, function(data, status) {
                            if (status == "success") {
                                showDiv.append("<h1>" + data.name + "</h1>");
                                if (data.image && data.image.medium) {
                                    showDiv.append("<img src = " + data.image.medium + ">");
                                } else {
                                    showDiv.append("<img src = /public/no_image.jpeg>");
                                }
                                showDiv.append("<dl id=\"attributes\"></dl>");
                                let elements = [];
                                let genres = [];
                                for (let i = 0; i < data.genres.length; i++) {
                                    genres.push(`<li>${data.genres[i]}</li>`);
                                }
                                elements.push("<dt>Language</dt>");
                                if (data.language) {
                                    elements.push(`<dd>${data.language}</dd>`);
                                } else {
                                    elements.push(`<dd>N/A</dd>`);
                                }
                                elements.push("<dt>Genres</dt>");
                                if (genres) {
                                    elements.push(`<ul></ul>`);
                                } else {
                                    elements.push(`<dd>N/A</dd>`);
                                }
                                elements.push("<dt>Average Rating</dt>");
                                if (data.rating && data.rating.average) {
                                    elements.push(`<dd>${data.rating.average}</dd>`);
                                } else {
                                    elements.push(`<dd>N/A</dd>`);
                                }
                                elements.push("<dt>Network</dt>");
                                if (data.network && data.network.name) {
                                    elements.push(`<dd>${data.network.name}</dd>`);
                                } else {
                                    elements.push(`<dd>N/A</dd>`);
                                }
                                elements.push("<dt>Summary</dt>");
                                if (data.summary) {
                                    let regex = /(&nbsp;|<([^>]+)>)/ig;
                                    let sanitized = data.summary.replace(regex, "");
                                    data.summary = sanitized;
                                    elements.push(`<dd>${data.summary}</dd>`);
                                } else {
                                    elements.push(`<dd>N/A</dd>`);
                                }
                                $("#attributes").append(elements.join(''));
                                if (genres) {
                                    $("#attributes ul").append(genres.join(''));
                                }
                                showDiv.show();
                                linktoReload.show();
                            } else {
                                alert("Error connecting to api");
                            }
                        });
                    });
                } else {
                    alert("Could not connect tvmaze api");
                }
            });
        }
    });
});