# unsplash-react

React components to get unsplash images in your app!

<img width="465" alt="image" src="screenshots/main.png">

## Install

Add this to your `package.json` dependencies

```json
{
  "dependencies": {
    "unsplash-react": "danielma/unsplash-react"
  }
}
```

## Usage

```jsx
import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react"

const MY_ACCESS_KEY = "UNSPLASH_KEY_FROM_UNSPLASH"

export default function UnsplashUploader() {
  return (
    <UnsplashReact
      accessKey={MY_ACCESS_KEY}
      Uploader={withDefaultProps(Base64Uploader, { name: "event[logo_upload_id]" })}
    />
  )
}
```
