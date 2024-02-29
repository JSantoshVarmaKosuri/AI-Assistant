/** @jsx jsx */
import { useState } from "react";

import { css, jsx } from "@emotion/react";

import { Box, xcss } from "@atlaskit/primitives";
import Textfield from "@atlaskit/textfield";

import {
  fontSize as getFontSize,
  gridSize as getGridSize,
} from "@atlaskit/theme/constants";

import InlineEdit from "@atlaskit/inline-edit";
import { token } from "@atlaskit/tokens";

export interface IInlineWrapper {
  text: string;
  emit: (value: string) => void;
  placeholder: string;
}

const containerStyles = xcss({
  paddingBlockStart: "space.100",
  paddingInlineEnd: "space.100",
  paddingBlockEnd: "space.600",
});

const fontSize = getFontSize();
const gridSize = getGridSize();

/*
  As inline edit allows for a custom input component, styling of `ReadViewContainer` needs to be shipped with the component.
  This keeps `editView` and `readView` components aligned when switching between the two. In this particular case, these
  styles ensure `readView` is in sync with the TextField.
  */
const readViewContainerStyles = xcss({
  display: "flex",
  maxWidth: "100%",
  minHeight: `${(gridSize * 2.5) / fontSize}em`,
  paddingBlock: "space.050",
  paddingInline: "space.050",
  fontSize: `${fontSize}px`,
  lineHeight: `${(gridSize * 2.5) / fontSize}`,
  wordBreak: "break-word",
});

const InlineWrapper = (props: IInlineWrapper) => {
  const [editValue, setEditValue] = useState(props.text);

  return (
    <Box xcss={containerStyles}>
      <InlineEdit
        defaultValue={editValue}
        label=""
        editView={({ errorMessage, ...fieldProps }) => (
          <Textfield {...fieldProps} autoFocus/>
        )}
        readView={() => (
          <Box xcss={readViewContainerStyles} testId="read-view">
            {editValue || props.placeholder}
          </Box>
        )}
        onConfirm={(value) => {
          setEditValue(value);
          props.emit(value);
        }}
      />
    </Box>
  );
};

export default InlineWrapper;
