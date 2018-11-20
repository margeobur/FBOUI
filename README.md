# FakeBankOnline UI
 Businesses often experience problems when they upgrade / replace their customer data system, or two companies merge and 
 suddenly find their customer data is split over two databases. Merging this data into one system would require expensive 
 modifications to one or both systems, or an entire new system would have to be built. In the process of merging there is
 a high chance of setbacks and disruptions which would add to the cost.

 One possible solution (the one explored in this project) is to have an inexpensive service which links the two data systems.
 The service has access to both databases. One of the two databases will be favoured as the one to use for new customers.
 All new customers are thus registered in that system. If any existing customers whose data is stored in the non-favoured
 database need to change their account state, they will be added as a new customer in the favoured database. That's where
 this system comes in. The customer is registered as new in the favoured database, but their information is kept in the old
 one. This system is used to make note of the link between their new and old data.

 In the future, if the customer's history needs to be viewed, they or an employee can use this system to find their old account
 information and view it. This way, all the information is still available but no modifications are needed to either database.

 As a case study I have chosen to build a mock system for a bank which has just acquired another. Bank mergers or acquisitions 
 are not uncommon and when they happen, the problem inevitibly arises that customers of the acquired bank are now part of the 
 acquiring bank but their data is in a separate system. This problem applies not only to banks but to any corporation with a
 large customer base: insurance companies, retail chains (with loyalty schemes), telecommunication companies, etc.
 