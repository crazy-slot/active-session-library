# Active Session Library (ASL)

Active Session Library (ASL) is responsible for monitoring user activity and executing a callback when the user is not active in a given period of time.

A component for React. This library works with React.
#### peerDependencies
react version >= 16

### Installation
Inside your project directory, install ***Active Session Library (ASL)*** by running either of the following:
```shell
npm i active-session-library
```
Or
```shell
yarn add active-session-library
```

### Usage

```tsx
import { ActiveSessionProvider } from 'active-session-library';

<ActiveSessionProvider 
    timeout={60000}
    postAction={() => {console.log('postAction ...');}}
    preAction={() => {console.log('preAction ...');}}
    isEnabled
>
	<div>Secured Page</div>
</ActiveSessionProvider>
```

### Examples

- `with-nextjs`: a [Next.js](https://github.com/crazy-slot/active-session-library/blob/main/examples/with-nextjs) app
- `with-create-react-app`: a [create-react-app](https://github.com/crazy-slot/active-session-library/blob/main/examples/with-create-react-app) app

### API
Active Session Library (ASL) exports its `IActiveSessionProviderProps` interface for working in Typescript projects. 

All the props you will need are outlined below:

|  **Props** 	|   **Type**  	| **Required** 	| **Default value** 	| **Description**                                                              	|
|:----------:	|:-----------:	|:------------:	|:-----------------:	|------------------------------------------------------------------------------	|
|   timeout  	|    number   	|     true     	|         -         	| Activity Timeout in milliseconds                                             	|
| postAction 	| () => void; 	|     true     	|         -         	| It will be called when the user becomes inactive, and the timeout is reached 	|
|  isEnabled 	|   boolean   	|     false    	|        true       	| Enable/Disable the active session feature                                    	|
|  preAction 	| () => void; 	|     false    	|         -         	| It will be called when the component mounts                                  	|
|  children  	|  ReactNode  	|     false    	|         -         	| Your components / pages                                                      	|

### Changelog
To see what has updated in a given version of ***Active Session Library (ASL)***, 
you can check the [changelog file](https://github.com/crazy-slot/active-session-library/blob/main/packages/active-session-library/CHANGELOG.md).

### License
[MIT](https://github.com/crazy-slot/active-session-library/blob/main/packages/active-session-library/LICENSE)