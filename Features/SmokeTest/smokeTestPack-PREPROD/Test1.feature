@Test1PREPROD @Smoketest_PRD40
Feature: SmokeTest

  Scenario: Creating an new ServiceRequest
    Given user log in to PreProduction Maximo System
    Then user clicks on 'GOTO' button
    Then user clicks on 'Service Desk' link
    And user clicks on 'Service Requests(SP)' link
    Then user navigated to 'Service Requests(SP)' page
    And user clicks on plus button to create a new Service Request form
    And user fill the new Service Request form
      | Name        | Customer | Location | summary          | classification                                  | details | reportedByPhone | reportedByEmail | customerReference | customerReference2 |
      | SmokeTest-1 | C1000011 | L1001455 | Smoke Testing | REACTIVE \ BUILDING FABRIC \ GLAZING \ GLASSEXT | Test6   | 07776023458     | test@email.com  | 123               | 7345               |
    And user clicks on 'Save ServiceRequest' button
    And user copy the SR Number
    And user clicks on 'Route Workflow' button and accept the alert

  Scenario: Verify the WorkOrder
    When user clicks on 'Work' tab
    Then user verify the 'WorkOrder'Number
    And user search for WorkOrder
    And user add the labour details in 'Assignment' section
    And user clicks on 'Workflow' button

  Scenario: Move WorkOrder to Completed Status
    Then user verify the status of the WorkOrder changes to 'Dispatch'

  Scenario: Creating an PurchaseOrder
    Then user clicks on 'GOTO' button
    And user clicks on 'Purchasing' link
    And user clicks on 'Purchase Orders' link
    Then user clicks on plus button to create a new Purchase Order
    And user fill the new Purchase Order Details

  Scenario: Link WO and PO
    Then user click on 'POLines'Tab
    Then user add the NewRow
    And user fill the PurchaseOrder Lines
    Then user workflow the PurchaseOrder
    And user submit the PurchaseOrder for Approval process
    And user verify the status of the PurchaseOrder submitted

  Scenario: Receipt PO
    Then user navigate to 'Reciving' page
    And user search for PO
    And user Receipt the PO








