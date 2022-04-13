import React from "react";

import { Button as BButton } from "react-bootstrap";

import { Button } from "primereact/button";

function UILibrary() {
  return (
    <div>
      UI Library
      <BButton> Hello there </BButton>
      <BButton variant="primary">Primary</BButton>
      <BButton variant="mario">Mario</BButton>
      <BButton variant="secondary">Secondary</BButton>
      <BButton variant="success">Success</BButton>{" "}
      <BButton variant="warning">Warning</BButton>{" "}
      <BButton variant="danger">Danger</BButton>{" "}
      <BButton variant="info">Info</BButton>{" "}
      <BButton variant="light">Light</BButton>{" "}
      <BButton variant="dark">Dark</BButton>{" "}
      <BButton variant="link">Link</BButton>
      <div></div>
      <div></div>
      <br />
      <Button label="Save" />
      <Button label="Click" icon="pi pi-check" />
      <Button label="Click" icon="pi pi-check" iconPos="right" />
      <Button icon="pi pi-check" iconPos="right" />
      <Button loading />
      <Button label="Submit" loading />
      <Button label="Submit" loading loadingIcon="pi pi-spin pi-sun" />
      <Button label="Primary" />
      <Button label="Secondary" className="p-button-secondary" />
      <Button label="Success" className="p-button-success" />
      <Button label="Info" className="p-button-info" />
      <Button label="Warning" className="p-button-warning" />
      <Button label="Danger" className="p-button-danger" />
      <Button label="Proceed" className="p-button-raised p-button-rounded" />
    </div>
  );
}

export default UILibrary;
