# -contact-numbers-online
## setup the project
___
### - the environment variables <b> example </b> (.env file)

```json
NODE_ENV=
DB_USER= 
DB_PASSWORD=
HASH_SALT=
HASH_KEY=
TOKEN_SECRET=
TEST_DB_NAME=
``` 

___
### - install Dependencies 

```sh
npm install yarn -g
yarn install

``` 
___

### The scripts needed to test/start/build my application

| todo                       | run                           |
| :------------------------- | :---------------------------- |
| test                       | yarn test|         
| start                      | yarn start <br> yarn watch     |
| build                      | yarn build                 |

### the endpoints

| endpoint                                  | what's it doing ?                                                        |
| :---------------------------------------- | :----------------------------------------------------------------------- |
| [get]/                                         | show hello massage        |
| [post]/user/login                         | login user py id and password   |
| [get]/contact/                        | get all contactlist  [token required]    |
| [get]/contact/:lId/lim                | get #(lim) contactlist item after (lId)  [token required]    |
| [post]/contact/     | create a new contact [token required]     |
| [put]/contact/    | update contact  [token required] |
| [delete]/contact/:_id |  delete contact from contact list [token required] |
| any other paths                           | response  with 404 not found                                    |


### other functionality
.
