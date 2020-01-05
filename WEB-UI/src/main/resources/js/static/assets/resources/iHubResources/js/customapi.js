function login(){var a="";var b="";actuate.authenticate(iportalURL,getReqOpts(),a,b,null,authCallback,loginerrcallback)}function authCallback(){window.location=landingPage}function loginerrcallback(a){loginForm.password.value="";alert("The user name or password you entered is incorrect")}function logout(){actuate.logout(iportalURL,getReqOpts(),logoutCallback,logouterrcallback)}function logoutCallback(){window.location=logoutPage}function logouterrcallback(a){alert(a.getMessage())}function getReqOpts(){var a=new actuate.RequestOptions();a.setRepositoryType(actuate.RequestOptions.REPOSITORY_ENCYCLOPEDIA);a.setVolume(volumeName);return a}function initReport(a,b){rptName="/Applications/Account Statement/Report Designs/Account Statement.rptdesign";eIV=false;toolBar=null;wd=null;ht=null;if(isNaN(wd)||typeof(wd)=="undefined"||wd==null){rptWd="1200"}else{rptWd=wd}if(isNaN(ht)||typeof(ht)=="undefined"||ht==null){rptHt="1400"}else{rptHt=ht}actuate.load("viewer");if(a.length<=4){actuate.initialize(iportalURL,getReqOpts(),null,null,reportCallback,reportErrCallback)}else{if(b.length<=4){actuate.initialize(iportalURL,getReqOpts(),a,null,reportCallback,reportErrCallback)}else{actuate.initialize(iportalURL,getReqOpts(),a,b,reportCallback,reportErrCallback)}}}function reportCallback(){actuViewer=new actuate.Viewer("dashboardpane");var a=new actuate.viewer.UIOptions();actuViewer.setUIOptions(a);if(isNaN(toolBar)||typeof(toolBar)=="undefined"||toolBar==null||toolBar==true){a.enableToolBar(true)}else{a.enableToolBar(false)}if(rptName.includes("/")){actuViewer.setReportName(rptName)}else{actuViewer.setReportName(rptPath+rptName)}actuViewer.setWidth(window.innerWidth-20);actuViewer.setHeight(window.innerHeight-60);if(!eIV||eIV=="true"){actuViewer.submit(function(){actuViewer.enableIV()})}else{actuViewer.submit()}}function reportErrCallback(a){alert(a.getMessage())}function initDashBoard(a,c,b){dsbName="Customer_Analysis";wd=1400;ht=1600;edit=false;showTab=true;if(isNaN(wd)||typeof(wd)=="undefined"||wd==null){dsbWd="1200"}else{dsbWd=wd}if(isNaN(ht)||typeof(ht)=="undefined"||ht==null){dsbHt="1400"}else{dsbHt=ht}if(!edit||edit=="true"){editDashboard=edit}else{editDashboard="false"}if(!showTab||showTab=="false"){showTabNav=showTab}else{showTabNav="true"}actuate.load("dashboard");if(a.length<=4){actuate.initialize(b,getReqOpts(),null,null,dashBoardCallback,dashBoardErrCallback)}else{if(c.length<=4){actuate.initialize(b,getReqOpts(),a,null,dashBoardCallback,dashBoardErrCallback)}else{actuate.initialize(b,getReqOpts(),a,c,dashBoardCallback,dashBoardErrCallback)}}}function dashBoardCallback(){var a=new actuate.Dashboard("dashboardpane");if(dsbName.includes("/")){a.setDashboardName(dsbName+".dashboard")}else{a.setDashboardName(dsbpath+dsbName+".dashboard")}if(editDashboard==""||editDashboard=="false"){a.setIsDesigner(false)}else{a.setIsDesigner(true)}if(showTabNav=="false"){a.showTabNavigation(false)}else{a.showTabNavigation(true)}a.setWidth(window.innerWidth-20);a.setHeight(window.innerHeight-60);a.submit(function(){$("button:contains('Hide')").click()})}function dashBoardErrCallback(a){alert(a.getMessage())}function initReportExplr(a,b){actuate.load("executereport");actuate.load("viewer");actuate.load("parameter");actuate.initialize(iportalURL,getReqOpts(),a,b,rptExplrCallback,rptExplrErrCallback)}function rptExplrCallback(){var a=new actuate.ReportExplorer();a.setResultDef(["Name","FileType","TimeStamp","Version"]);a.setSearch(setFileSearch());a.getFolderItems(rptPath,getReportList)}function rptExplrErrCallback(a){alert(a.getMessage())}function setFileSearch(){var b=new actuate.reportexplorer.FileSearch();var a=new Array();var c=new actuate.reportexplorer.FileCondition();c.setField("FileType");c.setMatch("rptdesign");a.push(c);b.setConditionArray(a);return b}function getReportList(c,b){files=[];for(var a=0;a<c.getItemList().length;a++){files.push([]);files[a].push(new Array(3));fileName=c.getItemList()[a].getName();modDate=c.getItemList()[a].getTimeStamp();files[a][0]=fileName.substring(0,fileName.indexOf("."));files[a][1]=c.getItemList()[a].getVersion();files[a][2]=modDate.substring(0,modDate.indexOf("T"))}reportList(files)}function reportList(c){var a=c.length;var d='<table class="tblAltCol">';d+='<tr><td>List of Reports</td><td style="text-align:center;"> Modified Date</td><td style="text-align:center;"> Version</td></tr>';for(var b=0;b<c.length;b++){d+="<tr>";d+="<td><a href='#' onclick=\"paramCallback('"+c[b][0]+"')\">"+c[b][0]+"</a></td>";d+='<td style="text-align:center;">'+c[b][2]+"</td>";d+='<td style="text-align:center;">'+c[b][1]+"</td>";d+="</tr>"}d+="</table>";document.getElementById("reportList").innerHTML=d}function iHubComp(a){url="";if(a=="BRS"){url=brsPath}else{if(a=="DSB"){url=dsbPath}}document.getElementById("iHubComp").src=url}function showReportAccountStatement(b){actuate.load("viewer");var a=new actuate.RequestOptions();a.setRepositoryType("Enterprise");a.setVolume("Default Volume");a.setCustomParameters({});actuate.initialize(b,getReqOpts(),null,null,accountStatementInit)}function accountStatementInit(){viewer1=new actuate.Viewer("dashboardpane");viewer1.setReportDesign("/Applications/Account Statement/Report Designs/Account Statement.rptdesign");var e={parmAccountNo:"",parmFromDate:"12/1/2018",parmToDate:"12/1/2018"};var c=[];for(var b in e){var d=new actuate.viewer.impl.ParameterValue();d.setName(b);if(e[b]!=null){d.setValue(e[b])}else{d.setValueIsNull(true)}c.push(d)}viewer1.setParameterValues(c);var a=new actuate.viewer.UIOptions();a.enableToolBar(true);viewer1.setUIOptions(a);viewer1.setWidth(window.innerWidth-500);viewer1.setHeight(window.innerHeight-60);viewer1.submit(function(){viewer1.downloadReport("pdf",null,null);$("button:contains('Hide')").click()})};