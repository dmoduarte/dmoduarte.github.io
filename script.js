const projectDialogs = [
    {
        "id": "mbi-client-frontend-tech-modal",
        "title": "A Model-Driven Approach for Mobile Business Intelligence: Client side technologies",
        "items": [
            {
                "imgTitle": "Highcharts",
                "imgPath": "images/icons/highcharts.png"
            },
            {
                "imgTitle": "Angular JS",
                "imgPath": "images/icons/angularjs.png"
            },
            {
                "imgTitle": "Apache Cordova",
                "imgPath": "images/icons/ApacheCordova.png"
            },
            {
                "imgTitle": "SQLite",
                "imgPath": "images/icons/SQLite.png"
            }
        ]
    },
    {
        "id": "mbi-server-backend-tech-modal",
        "title": "A Model-Driven Approach for Mobile Business Intelligence: Server side technologies",
        "items": [
            {
                "imgTitle": "Spring framework",
                "imgPath": "images/icons/Spring.png"
            },
            {
                "imgTitle": "Java",
                "imgPath": "images/icons/Java.png"
            },
            {
                "imgTitle": "Eclipse Epsilon framework",
                "imgPath": "images/icons/epsilon.png"
            }
        ]
    },
    {
        "id": "mbi-screenshots-modal",
        "title": "A Model-Driven Approach for Mobile Business Intelligence: Screenshots",
        "items": [
            {
                "imgTitle": "Empty dashboard",
                "imgPath": "images/MobileBIEmptyDashboard.PNG",
                "caption": {
                    "title": "1 - Mobile BI Empty Dashboard",
                    "description": "Empty dashboard"
                }
            },
            {
                "imgTitle": "Widget repository",
                "imgPath": "images/WidgetRepository.PNG",
                "caption": {
                    "title": "2 - Mobile BI Widget Repository",
                    "description": "List of widgets installed in the mobile device, available to add in the dashboard"
                }
            },
            {
                "imgTitle": "Editor",
                "imgPath": "images/EditorAreaChartDoneExample.PNG",
                "caption": {
                    "title": "3 - Editor",
                    "description": "Editor for new widget configuration. After creation, those can be saved in the Widget Repository"
                }
            },
            {
                "imgTitle": "Final dashboard",
                "imgPath": "images/MobileBIDashboardAndWidgets.PNG",
                "caption": {
                    "title": "4 - Mobile BI Dashboard",
                    "description": "Mobile BI dashboard widgets position configuration with drag&drop"
                }
            }
        ]
    },
    {
        "id": "vacaciones-client-tech-modal",
        "title": "Vacaciones: Client side technologies",
        "items": [
            {
                "imgTitle": "Angular JS",
                "imgPath": "images/icons/angularjs.png"
            },
            {
                "imgTitle": "JQuery",
                "imgPath": "images/icons/jQurery.gif"
            },
            {
                "imgTitle": "HTML 5",
                "imgPath": "images/icons/HTML5.png"
            },
            {
                "imgTitle": "CSS 3",
                "imgPath": "images/icons/CSS3.png"
            }
        ]
    },
    {
        "id": "vacaciones-server-tech-modal",
        "title": "Vacaciones: Backend technologies",
        "items": [
            {
                "imgTitle": "Spring framework",
                "imgPath": "images/icons/Spring.png"
            },
            {
                "imgTitle": "Java",
                "imgPath": "images/icons/Java.png"
            },
            {
                "imgTitle": "Hibernate",
                "imgPath": "images/icons/hibernate.png"
            }
        ]
    },
    {
        "id": "mbids-tech-modal",
        "title": "Mobile BI Data Server: Server side technologies",
        "items": [
            {
                "imgTitle": "Node JS",
                "imgPath": "images/icons/nodejs.png"
            },
            {
                "imgTitle": "PostreSQL",
                "imgPath": "images/icons/postgres.png"
            }
        ]
    },
    {
        "id": "fsrs-tech-modal",
        "title": "File Server Replication and Synchronization: Server side technologies",
        "items": [
            {
                "imgTitle": "Java",
                "imgPath": "images/icons/Java.png"
            },
            {
                "imgTitle": "Dropbox",
                "imgPath": "images/icons/dropbox.png"
            }
        ]
    },
    {
        "id": "dw-tech-modal",
        "title": "Computer Added Design of Multidimensional Models: Technologies used",
        "items": [
            {
                "imgTitle": "Jgraph",
                "imgPath": "images/icons/jgraph.png"
            },
            {
                "imgTitle": "MySQL",
                "imgPath": "images/icons/mysql.png"
            }
        ]
    },
    {
        "id": "dw-screenshots-modal",
        "title": "Computer Added Design of Multidimensional Models: Screenshots",
        "items": [
            {
                "imgTitle": "First slide",
                "imgPath": "images/cadmdmthumbnail1.png",
                "caption": {
                    "title": "Presentation Phase",
                    "description": "Presentation of the model extracted from Database"
                }
            },
            {
                "imgTitle": "Second slide",
                "imgPath": "images/cadmdmthumbnail2.png",
                "caption": {
                    "title": "Classification Phase",
                    "description": "Presentation of the entities classification"
                }
            },
            {
                "imgTitle": "Third slide",
                "imgPath": "images/cadmdmthumbnail3.png",
                "caption": {
                    "title": "Collapsing Phase",
                    "description": "Final result: Star-Schema"
                }
            }
        ]
    }
]

$(document).ready(function () {
    generateTemplatedCode();
    initializePage();
});

const initializePage = function () {
    //init carousel
    $(".carousel").carousel();

    //add event handler to tab opener
    $(".tab-opener").on('click', function (e) {

        $(".topnavbutton.active").removeClass("active");
        $("#" + $(this).attr('id') + ".topnavbutton").addClass("active");
        $(".body>div.active").removeClass("active");
        $("." + $(this).data().tab).addClass("active");

    });

    const showMore = $("#show-more");

    //This handles the user-click on the mobile menu
    $('a[href="#show-more"]').on('click', function () {
        showMore.toggleClass("active");
    });
}

const registerTemplateHelpers = function () {
    if (!Handlebars) {
        console.error("Where is Handlebars? :O");
        return;
    }

    Handlebars.registerHelper('hasMultipleItems', function (items, options) {
        return items.length > 1;
    });

    Handlebars.registerHelper('isActive', function (index, options) {
        return index === 0 ? 'active' : '';
    });
}

const generateTemplatedCode = function () {
    registerTemplateHelpers();

    // Retrieve the template data from the HTML.
    const template = $('#images-modal-template').html();

    // Compile the template data into a function
    const templateScript = Handlebars.compile(template);

    // Insert the generated HTML into the page
    projectDialogs.forEach(function (dialogMeta) {
        $("#" + dialogMeta.id + "-container")
            .append(templateScript(dialogMeta));
    });

}