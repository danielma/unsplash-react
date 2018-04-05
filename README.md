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

## Props

name                  | type                       | required | default | description
--------------------- | -------------------------- | -------- | ------- | -----------
`accessKey`           | `string`                   | ☑      | n/a     | Access key from the [Unsplash developer site](https://unsplash.com/oauth/applications)
`applicationName`     | `string`                   | ☑      | n/a     | Application name for [UTM tracking](https://medium.com/unsplash/unsplash-api-guidelines-28e0216e6daa)
`columns`             | `number`                   | ☐       | 3       | Number of columns to show in search results
`defaultSearch`       | `string`                   | ☐       | `""`    | A default search string. If not set, `react-unsplash` will show popular photos from Unsplash
`highlightColor`      | `string`                   | ☐       | <span style="background-color: #00adf0; color: white">#00adf0</span> | The highlight color for images when they have been selected and downloaded
`onFinishedUploading` | `func`                     | ☐       | no-op   | A callback, for when the photo has finished uploading. Responds with the download response from the uploader (eg, the `response` with the `blob()`)
`photoRatio`          | `number`                   | ☐       | `3 / 2` | The `width/height` ratio for displaying search results
`preferredSize`       | `shape({ width, height })` | ☐       | n/a     | Your application's preferred width and height for downloaded images. If not set, `react-unsplash` will download full size images
`Uploader`            | Component                  | ☐       | `Base64Uploader` | The component used to upload photos from Unsplash to your application.

