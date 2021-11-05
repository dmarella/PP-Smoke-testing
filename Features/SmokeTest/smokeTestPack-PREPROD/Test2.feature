@Test2PREPROD @Smoketest_PRD40
Feature: SmokeTest

  Scenario: Creat PPM
    Given user log in to PreProduction Maximo System
    Then user clicks on 'GOTO' button
    When Clicks on 'Preventive Maintenance'link
    Then user presents with Preventive Maintenance search page
    And user search for PM
    And user clickS on PM
    When user 'Set PM Count' to 0
    And user change the Estimated date in Frequency Tab
    Then user able to save the PM
    And user able to Generate the Work Orders
    And user Copy the Work Order number
    When user search for the Work Order
    And user add the 'Assignment' details to WO
    Then user able to 'save' the Work Order
















