Feature: Adding cards
  As a User
  I want do be able to create my own cards
  So that I can store important thoughts online

Given I am viewing main page
  And I can see the option 'Add new card'
When I select the option 'Add new card'
Then I can see an empty card
  And I can add a title
  And I can add a description
  And I can submit the new card
