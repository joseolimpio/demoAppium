Feature: Open the Calculator app on Android

  Scenario: Install and open the calculator app
    Given I have the calculator APK
    When I install and open the app
    Then The calculator should be displayed
