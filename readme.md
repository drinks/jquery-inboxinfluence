## jQuery Inbox Influence

A jQuery/javascript library for interacting with the Sunlight Foundation's [Influence Explorer text API](http://inbox.influenceexplorer.com/api)

+ Requires jQuery
+ prefers v1.5+, for the promise API

### Usage:

    › ie = InboxInfluence;
    › ie.apiKey = 'myValidKey';
    › ie.contextualize('some text that has entities I want to extract').success(function(data){
          console.log(data);
      });
    
    » Object

