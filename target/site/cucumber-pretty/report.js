$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SmokeTest/smokeTestPack-PREPROD/Test9.feature");
formatter.feature({
  "line": 2,
  "name": "SmokeTest",
  "description": "",
  "id": "smoketest",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test9PREPROD"
    },
    {
      "line": 1,
      "name": "@Smoketest_PRD40"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Creating an new ServiceRequest",
  "description": "",
  "id": "smoketest;creating-an-new-servicerequest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user log in to PreProduction Maximo System",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on \u0027GOTO\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \u0027Service Desk\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on \u0027Service Requests(SP)\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user navigated to \u0027Service Requests(SP)\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on plus button to create a new Service Request form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user fill the new Service Request form",
  "rows": [
    {
      "cells": [
        "Name",
        "Customer",
        "Location",
        "summary",
        "classification",
        "details",
        "reportedByPhone",
        "reportedByEmail",
        "customerReference",
        "customerReference2"
      ],
      "line": 12
    },
    {
      "cells": [
        "SmokeTest-9",
        "C1000011",
        "L1001455",
        "Test SR creation",
        "QUOTEINSP \\ FABRIC \\ QUOTE2",
        "Test9",
        "07776023458",
        "test@email.com",
        "CUST123",
        "CUST456"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on \u0027Save ServiceRequest\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verifies the status of the newly created ServiceRequest",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user copy the SR Number",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on \u0027Work\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user verify the \u0027WorkOrder\u0027Number",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userLogInToPreProductionMaximoSystem()"
});
formatter.result({
  "duration": 14993378400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_GOTO_button()"
});
formatter.result({
  "duration": 2189435900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_Service_Desk_link()"
});
formatter.result({
  "duration": 177144300,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_Service_Requests_SP_link()"
});
formatter.result({
  "duration": 79158400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_navigated_to_Service_Requests_SP_page()"
});
formatter.result({
  "duration": 11255600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_plus_button_to_create_a_new_Service_Request_form()"
});
formatter.result({
  "duration": 2511465000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userFillTheNewServiceRequestFormForQuote(DataTable)"
});
formatter.result({
  "duration": 32011746200,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_clicks_on_Save_ServiceRequest_button()"
});
formatter.result({
  "duration": 1151302400,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.user_verifies_the_status_of_the_newly_created_ServiceRequest()"
});
formatter.result({
  "duration": 2529669500,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userCopyTheSRNumber()"
});
formatter.result({
  "duration": 2047289700,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userClicksOnWorkTab()"
});
formatter.result({
  "duration": 2067930000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userVerifyTheWorkOrderNumber()"
});
formatter.result({
  "duration": 30064610600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@id\u003d\u0027m6dfccb0d_tdrow_[C:0]_tgdet-ti[R:0]_img\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INT3244\u0027, ip: \u002710.206.37.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\dmarella\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0a23654d64540bb739c0c81bf47a47e\n*** Element info: {Using\u003dxpath, value\u003d//img[@id\u003d\u0027m6dfccb0d_tdrow_[C:0]_tgdet-ti[R:0]_img\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.automationtest.pages.WorkOrderPage.ClickonExpandWorkOrder(WorkOrderPage.java:76)\r\n\tat com.automation.stepDefinations.ServiceRequestCreationSteps.userVerifyTheWorkOrderNumber(ServiceRequestCreationSteps.java:126)\r\n\tat ✽.Then user verify the \u0027WorkOrder\u0027Number(SmokeTest/smokeTestPack-PREPROD/Test9.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the WorkOrder",
  "description": "",
  "id": "smoketest;verify-the-workorder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user clicks on \u0027Work\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user verify the \u0027WorkOrder\u0027Number",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user search for WorkOrder",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user add the labour details in \u0027Assignment\u0027 section",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on \u0027Workflow\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userClicksOnWorkTab()"
});
formatter.result({
  "duration": 2045325900,
  "status": "passed"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userVerifyTheWorkOrderNumber()"
});
formatter.result({
  "duration": 30055609500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@id\u003d\u0027m6dfccb0d_tdrow_[C:0]_tgdet-ti[R:0]_img\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INT3244\u0027, ip: \u002710.206.37.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\dmarella\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0a23654d64540bb739c0c81bf47a47e\n*** Element info: {Using\u003dxpath, value\u003d//img[@id\u003d\u0027m6dfccb0d_tdrow_[C:0]_tgdet-ti[R:0]_img\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.automationtest.pages.WorkOrderPage.ClickonExpandWorkOrder(WorkOrderPage.java:76)\r\n\tat com.automation.stepDefinations.ServiceRequestCreationSteps.userVerifyTheWorkOrderNumber(ServiceRequestCreationSteps.java:126)\r\n\tat ✽.Then user verify the \u0027WorkOrder\u0027Number(SmokeTest/smokeTestPack-PREPROD/Test9.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WorkOrderCreationSteps.userSearchForWorkOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WorkOrderCreationSteps.userAddTheLabourDetailsInAssignmentSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ServiceRequestCreationSteps.userClicksOnWorkflowButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Move WorkOrder to Completed Status",
  "description": "",
  "id": "smoketest;move-workorder-to-completed-status",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "user verify the status of the WorkOrder changes to \u0027Dispatch\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "WorkOrderCreationSteps.userVerifyTheStatusOfTheWorkOrderChangesToDispatch()"
});
formatter.result({
  "duration": 32202638000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027tamatch\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INT3244\u0027, ip: \u002710.206.37.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\dmarella\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0a23654d64540bb739c0c81bf47a47e\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027tamatch\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.automationtest.pages.HomePage.searchforWorkOrder(HomePage.java:94)\r\n\tat com.automation.stepDefinations.WorkOrderCreationSteps.userVerifyTheStatusOfTheWorkOrderChangesToDispatch(WorkOrderCreationSteps.java:78)\r\n\tat ✽.Then user verify the status of the WorkOrder changes to \u0027Dispatch\u0027(SmokeTest/smokeTestPack-PREPROD/Test9.feature:27)\r\n",
  "status": "failed"
});
});