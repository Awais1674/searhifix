let searchUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
let apiLink = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles="



function setup() {
    noCanvas();
    userQuery = select('#Query');


    document.getElementById("submit").addEventListener("click", function() {
        goWiki();
    });


    function goWiki() {
        let queryTerm = userQuery.value();
        let url = searchUrl + queryTerm;
        loadJSON(url, gotSearch, 'jsonp');
    }


    function gotSearch(data) {
        let title = data[1][0];
        title = title.replace(/\s+/g, '_');

        // li creator
        let items = data[1]
        ul = document.createElement('ul');

        document.getElementById('titles').appendChild(ul);
        items.forEach(function(item) {
            let li = document.createElement('li');
            let myLi = document.getElementsByTagName("li");
            for (let i = 0; i < myLi.length; i++)
                myLi[i].id = `q${i}`;
            ul.appendChild(li);
            li.innerHTML += item;
        });

        // clear div section
        document.getElementById('Query').addEventListener('click', function() { clearli() })

        function clearli() {
            document.getElementById('titles').innerHTML = "";
            document.getElementById('Query').value = "";
            document.getElementById('data-title').innerText = "";
            document.getElementById('data').innerText = "";
        }
        // post creator 



        // #1
        document.getElementById("q0").addEventListener("click", function() {
            postCreate0();
        });
        // #2
        document.getElementById("q1").addEventListener("click", function() {
            postCreate1();
        });
        // #3
        document.getElementById("q2").addEventListener("click", function() {
            postCreate2();
        });
        // #4
        document.getElementById("q3").addEventListener("click", function() {
            postCreate3();
        });
        // #5
        document.getElementById("q4").addEventListener("click", function() {
            postCreate4();
        });
        // #6
        document.getElementById("q5").addEventListener("click", function() {
            postCreate5();
        });
        // #7
        document.getElementById("q6").addEventListener("click", function() {
            postCreate6();
        });
        // #8
        document.getElementById("q7").addEventListener("click", function() {
            postCreate7();
        });
        // #9
        document.getElementById("q8").addEventListener("click", function() {
            postCreate8();
        });
        // #10
        document.getElementById("q9").addEventListener("click", function() {
            postCreate9();
        });
        // #1
        function postCreate0() {
            let searchTerm = document.getElementById('Query').value;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm

                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract


                    })
            }
        }
        // #2
        function postCreate1() {
            let searchTerm = document.getElementById('q1').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")
            if (Query) {
                let searchUrl1 = apiLink + searchTerm

                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract
                    })
            }
        }
        // #3
        function postCreate2() {
            let searchTerm = document.getElementById('q2').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract

                    })
            }
        }
        // #4
        function postCreate3() {
            let searchTerm = document.getElementById('q3').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract

                    })
            }
        }
        // #5
        function postCreate4() {
            let searchTerm = document.getElementById('q4').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract

                    })
            }
        }
        // #6
        function postCreate5() {
            let searchTerm = document.getElementById('q5').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract


                    })
            }
        }
        // #7
        function postCreate6() {
            let searchTerm = document.getElementById('q6').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract



                    })
            }
        }
        // #8
        function postCreate7() {
            let searchTerm = document.getElementById('q7').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract


                    })
            }
        }
        // #9
        function postCreate8() {
            let searchTerm = document.getElementById('q8').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract



                    })
            }
        }
        // #10
        function postCreate9() {
            let searchTerm = document.getElementById('q9').innerText;
            searchTerm = searchTerm.replace(/\s+/g, "_")

            if (Query) {
                let searchUrl1 = apiLink + searchTerm


                fetch(searchUrl1)
                    .then(Response => Response.json())
                    .then(Response => {
                        Response = Response.query.pages;
                        var pageid = Object.keys(Response)[0];
                        var extract = Response[pageid].extract;
                        document.getElementById('data-title').innerText = searchTerm;
                        document.getElementById('data').innerText = extract



                    })
            }
        }



    }
}

// styling
document.getElementById("titles").addEventListener("click", function() {
    styles1();
});
document.getElementById("submit").addEventListener("click", function() {
    styles2();
});



function styles1() {
    let x = document.getElementById('titles');
    x.style.display = "none"
}

function styles2() {
    let x = document.getElementById('titles');
    x.style.display = "block"

}