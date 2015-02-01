


$(document).on("pagecreate", function (event, ui) {
   // alert("Create")
    if (gdd) {
        if (gdd.utils) {
            if (gdd.utils.appReady()) {
                gdd.utils.activePage.view.create()
            }
        }
       
    }

});

$(document).on("pagecontainershow", function (event, ui) {
    //alert("Show")
    if (gdd) {
        if (gdd.utils) {
            if (gdd.utils.appReady()) {
                
                gdd.utils.applyModuleVisibility();

                gdd.utils.activePage.view.show()

                if (gdd.utils.previousPage) {

                    var exclArray = new Array
                    exclArray.push("pg_gmap");
                    exclArray.push("pg_index");

                    if (exclArray.indexOf(gdd.utils.previousPage.id) === -1) {
                     
                        $(".btnBackToPrevPage").off().on(gdd.click(), function () {

                            gdd.loadPage(gdd.utils.previousPage, true, "slide")
                        })
                    } else {
                    
                        $(".btnBackToPrevPage").off().on(gdd.click(), function () {
                            gdd.loadPage(gdd.pages.profile, true, "slide")
                        })
                    }
                } else {
                    $(".btnBackToPrevPage").off().on(gdd.click(), function () {
                        gdd.loadPage(gdd.pages.home, true, "slide")
                    })
                }
                
               

                $(".btnOpenAppMenu").off().on(gdd.click(), function () {
                    //var image = document.getElementById('imgFbMainMenuPanel');
                    //image.onerror = function () {
                    //    $("#imgFbMainMenuPanel").attr("src", 'http://graph.facebook.com/3/picture?type=small')                 
                    //};

                    //$("#imgFbMainMenuPanel").attr("src", gdd.session.fbSm())

                    $("#appMenuPanel").panel("toggle");
                })

                $(".btnGoHome").off().on(gdd.click(), function () {
                    gdd.loadPage(gdd.pages.home, true, "slide")
                })

                $(".btnGoNews").off().on(gdd.click(), function () {
                    gdd.loadPage(gdd.pages.news, false, "slide")
                })

                

                //$(".btnGoMessages").off().on(gdd.click(), function () {
                //    alert("Pending")
                //    gdd.loadPage(gdd.pages.groups, false, "slide")
                //})

                //$(document).off().on("swipeleft", function () {
                //    $("#appMenuPanel").panel("open");
                //});
                //$(document).off().on("swiperight", function () {
                //    $("#appMenuPanel").panel("close");
                //});
                
                $("#btnAppMenuGoGive").off().on(gdd.click(), function () {
                    //$("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.give, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })
                
                
                $("#btnAppMenuGoMissions").off().on(gdd.click(), function () {
                    //$("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.missions, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })

                $("#btnAppMenuGoFindAChurch").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.findachurch, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })

                $("#btnAppMenuGoProfile").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.profile, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })

                $("#btnAppMenuGoHome").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.home, false, "slide")
                   // });
                   // $("#appMenuPanel").panel("close");                    
                })

                $("#btnAppMenuGoLists").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.lists, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })

                

                $("#btnAppMenuGoEvents").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.events, false, "slide")
                    //});
                   // $("#appMenuPanel").panel("close");
                })

                $("#btnAppMenuGoMessages").off().on(gdd.click(), function () {
                    //$("#appMenuPanel").panel("close");
                    //gdd.loadPage(gdd.pages.messages, false, "slide")
                    //$("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.messages, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })
                

                $("#btnAppMenuGoGroups").off().on(gdd.click(), function () {
                   // gdd.loadPage(gdd.pages.groups, false, "slide")
                    //$("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.groups, false, "slide")
                   // });
                    //$("#appMenuPanel").panel("close");
                })

                
                
               

                $("#btnAppMenuGoSettings").off().on(gdd.click(), function () {
                    $("#appMenuPanel").one("panelclose", function (event, ui) {
                        $("#appSettingsPanel").panel("toggle");
                    });
                    $("#appMenuPanel").panel("close");
                })

                

                $("#btnSettingsMenuSession").off().on(gdd.click(), function () {
                   // $("#appSettingsPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.sessionInfo, false, "slide")

                    //});
                    //$("#appSettingsPanel").panel("close");
                })

                $("#btnSettingsMenuSignOut").off().on(gdd.click(), function () {
                   // $("#appSettingsPanel").one("panelclose", function (event, ui) {
                        gdd.session.signOut()

                    //});
                    //$("#appSettingsPanel").panel("close");
                })
                
                

                $("#btnSettingsMenuAbout").off().on(gdd.click(), function () {
                    //$("#appSettingsPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.about, false, "slide")

                    //});
                    //$("#appSettingsPanel").panel("close");
                })

                $("#btnSettingsMenuGoSwitchDb").off().on(gdd.click(), function () {
                    //$("#appSettingsPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.portals, false, "slide")

                    //});
                    //$("#appSettingsPanel").panel("close");
                })

                $("#btnSettingsMenuGoMngSecProfile").off().on(gdd.click(), function () {
                   // $("#appSettingsPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.managePermissions, false, "slide")

                   // });
                    //$("#appSettingsPanel").panel("close");
                })


                $("#btnSettingsMenuGoSecProfile").off().on(gdd.click(), function () {
                    //$("#appSettingsPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.secProfile, false, "slide")

                   // });
                    //$("#appSettingsPanel").panel("close");
                })

                $("#btnSettingsMenuGoMainMenu").off().on(gdd.click(), function () {
                    $("#appSettingsPanel").one("panelclose", function (event, ui) {
                        $("#appMenuPanel").panel("toggle");
                    });
                    $("#appSettingsPanel").panel("close");
                })


                $("#btnAppMenuGoPeople").off().on(gdd.click(), function () {
                    //$("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.pages.people.view.clb = null;
                        gdd.loadPage(gdd.pages.people, false, "slide")
                   // });
                    //$("#appMenuPanel").panel("close");
                })

                $("#btnAppMenuGoSermons").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.sermons, false, "slide")
                   // });
                   // $("#appMenuPanel").panel("close");
                })

                
                
                $("#btnAppMenuGoNews").off().on(gdd.click(), function () {
                    //$("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.news, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })

                $("#btnAppMenuGoSubs").off().on(gdd.click(), function () {
                   // $("#appMenuPanel").one("panelclose", function (event, ui) {
                        gdd.loadPage(gdd.pages.subs, false, "slide")
                    //});
                    //$("#appMenuPanel").panel("close");
                })

            
                $(".pgContent").on("swipeleft", function () {
                    if (gdd.utils.activePage.id != "pg_index") {
                        $("#appMenuPanel").panel("open");
                    }
                   
                });

                $("#appMenuPanel").on("swiperight", function () {
                    $("#appMenuPanel").panel("close");
                });

               

                $("#appSettingsPanel").on("swiperight", function () {
                    $("#appSettingsPanel").panel("close");
                });

                


               


                


            }
        }

    }
   

    //if (gdd) {
    //    if (gdd.appInitialized) {
    //        if (!gdd.activePage) {
    //            gdd.activePage = gdd.pages.index;
    //        }

    //        gdd.activePage.view.show();


    //        $(".headerMenuHome").off().on("tap", function () {

    //            gdd.changePage(gdd.pages.home, { transition: "flip", reverse: true })

    //        })
    //    }
    //}

  
});

$(document).on("pagebeforeshow", function (event) {
    if (gdd) {
        if (gdd.utils) {
            if (gdd.utils.appReady()) {
                gdd.utils.activePage.view.beforeShow()
            }
        }

    }

  

    //if (gdd) {
    //    if (gdd.appInitialized) {

    //    }
    //}
});

$(document).on("pagebeforehide", 'div:jqmData(role="page")', function (event, ui) {

    if (gdd) {
        if (gdd.utils) {
            if (gdd.utils.appReady()) {
                var pg = gdd.pages.getPageById($(ui.prevPage)[0].id)
               

                pg.view.beforeHide()
            }
        }

    }


    

    //if (gdd) {
    //    if (gdd.appInitialized) {

    //    }
    //}

});