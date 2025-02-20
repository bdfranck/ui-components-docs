import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useEffect, useState } from "react";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";

import { GoAText, GoATab, GoATabs } from "@abgov/react-components";


// == Page props ==

// const componentName = "Text";
// const description = "Add text with consistent styles to create structure and hierarchy on the page.";
// type CastingType = {
//   // add any required props here
//   [key: string]: unknown;
// };


export default function TextPage() {
  const [textProps, setTextProps] = useState({});

  const [textBindings, setTextBindings] = useState<ComponentBinding[]>([
    {
      label: "As",
      type: "list",
      name: "as",
      options: [ "h1", "h2", "h3", "h4", "h5", "span", "div", "p" ],
      value: "h1",
    },
    {
      label: "Max width",
      type: "string",
      name: "maxWidth",
      value: ""
    },
    {
      label: "Size",
      type: "string",
      name: "size",
      value: ""
    },
    {
      label: "Color",
      type: "string",
      name: "color",
      value: ''
    }
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "as",
      type: "h1 | h2 | h3 | h4 | h5 | span | div | p",
      description: "The element to use.",
      defaultValue: "span"
    },
    {
     name: "maxWidth",
     type: "string",
     description: "Sets the max width.",
     
    }
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setTextBindings(bindings);
    setTextProps(props);
  }

  return (
    <>
      <ComponentHeader
        name="Text"
        category={Category.FEEDBACK_AND_ALERTS}
        description="This is a description."
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={textBindings} onChange={onSandboxChange}>
            
            <GoAText {...textProps}>
              This is example text.
            </GoAText>

          </Sandbox>
          <ComponentProperties properties={componentProperties} />
          
          <h2 id="examples" className="hidden" aria-hidden="true">Examples</h2>

          <h3 id="example-1">
            Example 1
          </h3>
          <Sandbox>
            <GoAText>This is example text</GoAText>
          </Sandbox>
        </GoATab>
        
        <GoATab
          heading={
            <>
              Design guidelines
            </>
          }
        ></GoATab>
      </GoATabs>
    </>
  );
}
