Feature: Test chat between two users

  Scenario Outline: Two users are chatting

    Given I see that both users are one page
    When I see that both users are chosen their nickname
    And I see that both useres are connected
    And I see that both users see themselves
    Then I see that user 1 sends a message
    And  I see that user 2 recieved message
    And I see that user 2 sends a message
    And  I see that user 1 recieved message
    And I see that both users are disconnected
