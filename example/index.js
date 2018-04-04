import React from "react"
import ReactDOM from "react-dom"
import UnsplashReact, {
  withDefaultProps,
  Base64Uploader,
  ExternalLocationUploader,
  BlobUploader,
} from "../src/"

function Base64Example() {
  return (
    <form method="POST" action="https://httpbin.org/post" encType="multipart/form-encoded">
      <div style={{ height: "350px" }}>
        <UnsplashReact
          accessKey={process.env.UNSPLASH_ACCESS_KEY}
          applicationName="unsplash_react"
          Uploader={withDefaultProps(Base64Uploader, { name: "group[image]" })}
          columns={3}
          photoRatio={3 / 2}
        />
      </div>

      <input
        type="submit"
        value="Send base64 data to httpbin.org"
        style={{ marginTop: "2rem", fontSize: "2em" }}
      />
    </form>
  )
}

class AWSExample extends React.Component {
  state = { uploadResponseJson: null }

  handleFinishedUploading = response => {
    response.json().then(() => this.setState({ uploadResponseJson: { done: true } }))
  }

  render() {
    const { uploadResponseJson } = this.state
    return (
      <div>
        {uploadResponseJson && <pre>{JSON.stringify(uploadResponseJson, null, 4)}</pre>}
        <div style={{ height: "350px" }}>
          <UnsplashReact
            accessKey={process.env.UNSPLASH_ACCESS_KEY}
            applicationName="unsplash_react"
            Uploader={withDefaultProps(ExternalLocationUploader, {
              name: "file",
              uploadUrl: "https://httpbin.org/post",
            })}
            columns={4}
            photoRatio={4 / 2}
            onFinishedUploading={this.handleFinishedUploading}
          />
        </div>
      </div>
    )
  }
}

class AjaxExample extends React.Component {
  state = { uploadResponseJson: null }

  handleBlobLoaded = blob => {
    const formData = new FormData()
    formData.append("file", blob, "image.jpg")

    return fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then(r => r.json())
      .then(() => this.setState({ uploadResponseJson: { done: true } }))
  }

  render() {
    const { uploadResponseJson } = this.state
    return (
      <div>
        {uploadResponseJson && <pre>{JSON.stringify(uploadResponseJson, null, 4)}</pre>}
        <div style={{ height: "350px" }}>
          <UnsplashReact
            accessKey={process.env.UNSPLASH_ACCESS_KEY}
            applicationName="unsplash_react"
            Uploader={withDefaultProps(BlobUploader, {
              onBlobLoaded: this.handleBlobLoaded,
            })}
            columns={2}
            photoRatio={1}
          />
        </div>
      </div>
    )
  }
}

const EXAMPLE_TYPES = ["base64", "aws", "ajax"]

class ExampleComponent extends React.Component {
  state = {
    exampleType: "base64",
  }

  handleExampleTypeChange = e => {
    this.setState({ exampleType: e.target.value })
  }

  render() {
    const { exampleType } = this.state
    return (
      <div style={{ width: "450px" }}>
        <div
          style={{ paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "2px solid gray" }}
        >
          <label htmlFor="example-selector" style={{ marginRight: "1rem" }}>
            Example:
          </label>
          <select id="example-selector" onChange={this.handleExampleTypeChange}>
            {EXAMPLE_TYPES.map(e => <option key={e}>{e}</option>)}
          </select>
        </div>
        {exampleType === "base64" ? (
          <Base64Example />
        ) : exampleType === "aws" ? (
          <AWSExample />
        ) : exampleType === "ajax" ? (
          <AjaxExample />
        ) : (
          <div>Unknown example {this.state.exampleType}</div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById("root"))
