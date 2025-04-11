Feature: login for mercury newtours

Scenario: login
    Given providing valid url
    When providing valid username an password
    Then click login button

@smoke
Scenario: login teste dois
    Given providing valid url
    When providing valid username as "mercury" an password as "mercury"
    Then click login button
