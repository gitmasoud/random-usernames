#.



This API Documents our AZ API definition and will serve as documentation for future developers when they come in to and will be easy for the to pick up the system quicker once gone through this documentation.

The example JSON response we want is as as follows:
{
     "location":  {
          "fname": "Doe",
          "lname": "J Jon",
        "age": 35
        }
}

 Location Response - Represents a Location Response
| Element | Description | Type | Notes |
| --- | --- | --- | --- |
| Id | Location Id | int32 | single number |
| Location | Location Name | string | single line |
| Title | Event Name | string | single line |
| Event Date | Event Start Date | Date | single line |
| Event End Date | End Date | Date | single line |
| Event Status | Live or Not Live  | Boolean | single line |

 Location Request - Represents a Location Request
| Element | Description | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| Id | Location Id | int32 | Required | single number |
| Location | Location Name | string | Required | single line |
| Title | Event Name | string | Optional | single line. Must be a live location. Default is Ocean Point. 
| Event Date | Event Start Date | Date | No |single line. Format will be as follows: DD-MM-YYYY e.g. 29-12-2006. Optionally you can use MM-DD-YYYY e.g. 12-29-2000.
| Event End Date | End Date | Date | No | single line |
| Event Status | Live or Not Live  | Boolean | No | single line |

|col1|col2|
|--|--|

Authentication
Please note this API can only be consumed and queried if you a member of SHarePoint Online. In terms of Authenticating users, we don't have to do anything else - once you're logged in to your SPO website then SPO Web services Authorize you, then auto authenticate.

If you not logged in before you consuming this API you should log in or will be prompted to login.

URL Syntax and Params
Sample Request to get all Locations on the site `VisitScotland/locations`
```
https://visitscotland.sharepoint.com/sites/VisitScotland/locations/_api/web/lists/GetByTitle('Locations')/items
```

Param in above example
`
GetByTitle('Locations')/items
`

To get full list without Params the Request is:
```
https://visitscotland.sharepoint.com/sites/VisitScotland/locations/_api/web/lists/Locations
```

References:
[1] - [Stripe] - https://stripe.com/docs/api
