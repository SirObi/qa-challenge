### Ticket 1
Title: Failed test: Adding cards (automated test)

Timestamp: 14:37, 21.09.2017    
Priority: High   
Env: Staging  
Browser: Safari  
Device: iPhone 6 (QA1), iOS 11.1.0  
Build: 1.9.1 (156)  

ER:  
_Given_ I am viewing main page  
&nbsp;&nbsp;And I can see the option 'Add new card'  
*When* I select the option 'Add new card'  
*Then* I can see an empty card  
&nbsp;&nbsp;And I can add a title  
&nbsp;&nbsp;And I can add a description  
&nbsp;&nbsp;And I can submit the new card  

AR:  
'Add new card' is not visible

&nbsp;  
&nbsp;  


### Ticket 2    
Title: Submit button not aligned in 'Add card' form  

Timestamp: 14:39, 21.09.2017         Priority: Medium  
Browser: Chrome, Safari, Firefox  
Device: Macbook Air 17"  
Build: 1.9.1 (156)  

Steps:  
1. Go to main page  
2. Click 'Add new card'  

'Submit' button is not aligned with input fields (see designs)  
!Screenshot-128d!  

&nbsp;  
&nbsp;  


### Ticket 3
Title: Card title should be filled in automatically if not set by user  
Build: 1.9.1 (156)  

Timestamp: 14:39, 21.09.2017         Priority: Medium  

Currently, the user is able to submit a card without setting    
the title.  
As a result, the id of the 'delete' button for the newly created   
card will be null. This can break our automated tests.  

Proposed solution:  
If title is not set by user, each new card should be created  
with an automatically generated title, e.g. ('New todo', 'New todo 2' etc.)    
