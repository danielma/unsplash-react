import React from "react";
import ReactDOM from "react-dom";
import UnsplashReact, {
  withDefaultProps,
  Base64Uploader,
  ExternalLocationUploader,
  BlobUploader,
  InsertIntoApplicationUploader,
} from "../src/";

function Base64Example() {
  return (
    <form
      method="POST"
      action="https://httpbin.org/post"
      encType="multipart/form-encoded"
    >
      <div style={{ height: "350px" }}>
        <UnsplashReact
          accessKey={process.env.UNSPLASH_ACCESS_KEY!}
          applicationName="unsplash_react"
          Uploader={withDefaultProps(Base64Uploader, { name: "group[image]" })}
          columns={3}
          photoRatio={3 / 2}
          preferredSize={{ width: 1024, height: 768 }}
        />
      </div>

      <input
        type="submit"
        value="Send base64 data to httpbin.org"
        style={{ marginTop: "2rem", fontSize: "2em" }}
      />
    </form>
  );
}

interface AWSExampleState {
  uploadResponseJson: { done: boolean } | null;
}

class AWSExample extends React.Component<object, AWSExampleState> {
  state: AWSExampleState = { uploadResponseJson: null };

  handleFinishedUploading = (response: Response) => {
    response
      .json()
      .then(() => this.setState({ uploadResponseJson: { done: true } }));
  };

  render() {
    const { uploadResponseJson } = this.state;
    return (
      <div>
        {uploadResponseJson && (
          <pre>{JSON.stringify(uploadResponseJson, null, 4)}</pre>
        )}
        <div style={{ height: "350px" }}>
          <UnsplashReact
            accessKey={process.env.UNSPLASH_ACCESS_KEY!}
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
    );
  }
}

interface AjaxExampleState {
  uploadResponseJson: { done: boolean } | null;
}

class AjaxExample extends React.Component<object, AjaxExampleState> {
  state: AjaxExampleState = { uploadResponseJson: null };

  handleBlobLoaded = (blob: Blob) => {
    const formData = new FormData();
    formData.append("file", blob, "image.jpg");

    return fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then(() => this.setState({ uploadResponseJson: { done: true } }));
  };

  render() {
    const { uploadResponseJson } = this.state;
    return (
      <div>
        {uploadResponseJson && (
          <pre>{JSON.stringify(uploadResponseJson, null, 4)}</pre>
        )}
        <div style={{ height: "350px" }}>
          <UnsplashReact
            accessKey={process.env.UNSPLASH_ACCESS_KEY!}
            applicationName="unsplash_react"
            Uploader={withDefaultProps(BlobUploader, {
              onBlobLoaded: this.handleBlobLoaded,
            })}
            columns={2}
            photoRatio={1}
          />
        </div>
      </div>
    );
  }
}

interface InsertIntoApplicationExampleState {
  imageUrl: string | null;
}

class InsertIntoApplicationExample extends React.Component<
  object,
  InsertIntoApplicationExampleState
> {
  state: InsertIntoApplicationExampleState = { imageUrl: null };

  handleFinishedUploading = (imageUrl: string) => {
    this.setState({ imageUrl });
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <div style={{ height: "350px", width: "450px" }}>
          <UnsplashReact
            accessKey={process.env.UNSPLASH_ACCESS_KEY!}
            applicationName="unsplash_react"
            Uploader={InsertIntoApplicationUploader}
            photoRatio={16 / 9}
            preferredSize={{ width: 800, height: 450 }}
            onFinishedUploading={this.handleFinishedUploading}
          />
        </div>

        <div>{imageUrl && <img src={imageUrl} />}</div>
      </div>
    );
  }
}

type ExampleType = "base64" | "aws" | "ajax" | "insert_into_application";

const EXAMPLE_TYPES: ExampleType[] = [
  "base64",
  "aws",
  "ajax",
  "insert_into_application",
];

interface ExampleComponentState {
  exampleType: ExampleType;
}

class ExampleComponent extends React.Component<object, ExampleComponentState> {
  state: ExampleComponentState = {
    exampleType: "base64",
  };

  handleExampleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ exampleType: e.target.value as ExampleType });
  };

  render() {
    const { exampleType } = this.state;
    return (
      <div
        style={{
          width: exampleType === "insert_into_application" ? "" : "450px",
        }}
      >
        <div
          style={{
            paddingBottom: "1rem",
            marginBottom: "1rem",
            borderBottom: "2px solid gray",
          }}
        >
          <label htmlFor="example-selector" style={{ marginRight: "1rem" }}>
            Example:
          </label>
          <select id="example-selector" onChange={this.handleExampleTypeChange}>
            {EXAMPLE_TYPES.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
        {exampleType === "base64" ? (
          <Base64Example />
        ) : exampleType === "aws" ? (
          <AWSExample />
        ) : exampleType === "ajax" ? (
          <AjaxExample />
        ) : exampleType === "insert_into_application" ? (
          <InsertIntoApplicationExample />
        ) : (
          <div>Unknown example {this.state.exampleType}</div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById("root"));
