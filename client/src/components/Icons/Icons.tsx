import { CSSProperties } from "react";

import { ClassName } from "../../constants";

interface IconProps {
  color?: string;
  fullSize?: boolean;
}

interface RotateProps {
  rotate?: "90deg" | "180deg" | "270deg";
}

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: "0",
  width: "1em",
  height: "1em",
};

const getStyle = (props: IconProps) => {
  let style: CSSProperties = {};
  if (props.color) {
    style.color = props.color;
  }
  if (props.fullSize) {
    style.width = "100%";
    style.height = "100%";
  }

  return style;
};

export const Arrow = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  );
};

export const PointedArrow = (props: IconProps & RotateProps) => {
  return (
    <svg
      {...defaultProps}
      viewBox="0 0 20 20"
      style={{ ...getStyle(props), rotate: props.rotate }}
    >
      <path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const DoubleArrow = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 320 512" style={getStyle(props)}>
      <path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path>
    </svg>
  );
};

export const Warning = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
    </svg>
  );
};

export const Close = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 512 512" style={getStyle(props)}>
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
    </svg>
  );
};

export const External = (props: IconProps) => {
  return (
    <svg
      {...defaultProps}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={getStyle(props)}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export const Clear = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <defs></defs>
      <path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"></path>
    </svg>
  );
};

export const Tick = (props: IconProps) => {
  return (
    <svg
      {...defaultProps}
      baseProfile="tiny"
      viewBox="0 0 24 24"
      style={getStyle(props)}
    >
      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
    </svg>
  );
};

export const Github = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 496 512" style={getStyle(props)}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
  );
};

export const Copy = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
    </svg>
  );
};

export const Sad = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      <circle cx="8.5" cy="10.5" r="1.5"></circle>
      <circle cx="15.493" cy="10.493" r="1.493"></circle>
      <path d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3z"></path>
    </svg>
  );
};

export const Refresh = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
    </svg>
  );
};

export const Error = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>
  );
};

export const Info = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
    </svg>
  );
};

export const Clock = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path>
    </svg>
  );
};

export const ThreeDots = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 16 16" style={getStyle(props)}>
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
    </svg>
  );
};

export const Checkmark = (props: IconProps) => {
  return (
    <svg
      {...defaultProps}
      viewBox="0 0 512 512"
      className={ClassName.ICON_CHECKMARK}
      style={getStyle(props)}
    >
      <path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z"></path>
    </svg>
  );
};

export const Plus = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 12 16" style={getStyle(props)}>
      <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
    </svg>
  );
};

export const PlusFilled = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
    </svg>
  );
};

export const MinusFilled = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path>
    </svg>
  );
};

export const Upload = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 512 512" style={getStyle(props)}>
      <path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM288 276v76h-64v-76h-68l100-100 100 100h-68z"></path>
    </svg>
  );
};

export const Rename = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18.41 5.8L17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"></path>
    </svg>
  );
};

export const Trash = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 448 512" style={getStyle(props)}>
      <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
    </svg>
  );
};

export const ImportFile = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 512 512" style={getStyle(props)}>
      <path d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path>
    </svg>
  );
};

export const ExportFile = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path d="M11 16h2V7h3l-4-5-4 5h3z"></path>
      <path d="M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"></path>
    </svg>
  );
};

export const ImportWorkspace = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1000 1000" style={getStyle(props)}>
      <g>
        <path d="M827.6,730.8c0,34.8-23.2,58-58,58H189.8c-34.8,0-58-29-58-58V429.3c0-23.2,11.6-40.6,29-52.2c17.4-46.4,40.6-87,69.6-127.6H184c-98.6,0-174,81.2-174,179.8v301.5c0,98.6,75.4,179.8,174,179.8h579.9c98.6,0,174-81.2,174-179.8V493.1l-116,87v150.8H827.6z M897.2,122c-174-81.2-382.7-5.8-463.9,174l-52.2-23.2c-17.4-11.6-46.4-5.8-58,5.8c-11.6,5.8-17.4,11.6-17.4,23.2c-5.8,11.6-5.8,23.2-5.8,34.8l58,289.9c5.8,17.4,17.4,34.8,34.8,40.6c17.4,5.8,34.8,5.8,52.2,0l255.1-139.2c11.6-5.8,17.4-17.4,23.2-29c5.8-5.8,5.8-17.4,5.8-29c0-23.2-11.6-40.6-34.8-52.2l-52.2-23.2c63.8-139.2,208.8-220.4,347.9-203C966.8,162.5,937.8,139.4,897.2,122z" />
      </g>
    </svg>
  );
};

export const Wrench = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 24 24" style={getStyle(props)}>
      <path fill="none" d="M0 0h24v24H0z" clipRule="evenodd"></path>
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path>
    </svg>
  );
};

export const RunAll = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 16 16" style={getStyle(props)}>
      <path d="M2.78 2L2 2.41v12l.78.42 9-6V8l-9-6zM3 13.48V3.35l7.6 5.07L3 13.48z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 14.683l8.78-5.853V8L6 2.147V3.35l7.6 5.07L6 13.48v1.203z"
      ></path>
    </svg>
  );
};

export const Airdrop = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 512 512" style={getStyle(props)}>
      <path d="M511.9 175c-9.1-75.6-78.4-132.4-158.3-158.7C390 55.7 416 116.9 416 192h28.1L327.5 321.5c-2.5-.6-4.8-1.5-7.5-1.5h-48V192h112C384 76.8 315.1 0 256 0S128 76.8 128 192h112v128h-48c-2.7 0-5 .9-7.5 1.5L67.9 192H96c0-75.1 26-136.3 62.4-175.7C78.5 42.7 9.2 99.5.1 175c-1.1 9.1 6.8 17 16 17h8.7l136.7 151.9c-.7 2.6-1.6 5.2-1.6 8.1v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-2.9-.9-5.4-1.6-8.1L487.1 192h8.7c9.3 0 17.2-7.8 16.1-17z"></path>
    </svg>
  );
};

export const Triangle = (props: IconProps & RotateProps) => {
  return (
    <svg
      {...defaultProps}
      viewBox="0 0 512 512"
      style={{ ...getStyle(props), rotate: props.rotate }}
    >
      <path d="M256 32L20 464h472L256 32z"></path>
    </svg>
  );
};

export const TestTube = (props: IconProps) => {
  return (
    <svg
      {...defaultProps}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={getStyle(props)}
    >
      <desc></desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124"></path>
      <path d="M7 13h8"></path>
      <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z"></path>
      <path d="M15 3l6 6"></path>
    </svg>
  );
};

export const TestPaper = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 297 297" style={getStyle(props)}>
      <g>
        <g>
          <path d="m206.51,32c-0.269-17.718-14.706-32-32.487-32h-49.379c-17.781,0-32.219,14.282-32.487,32h-42.657v265h198v-265h-40.99zm-81.866-16h49.189 0.19c9.099,0 16.5,7.402 16.5,16.5s-7.401,16.5-16.5,16.5h-49.379c-9.099,0-16.5-7.402-16.5-16.5s7.401-16.5 16.5-16.5zm23.856,239h-66v-16h66v16zm0-50h-66v-16h66v16zm0-49h-66v-16h66v16zm0-50h-66v-16h66v16zm43.768,160.029l-19.541-16.204 10.213-12.316 7.793,6.462 12.19-13.362 11.82,10.783-22.475,24.637zm0-50l-19.541-16.204 10.213-12.316 7.793,6.462 12.19-13.362 11.82,10.783-22.475,24.637zm0-49l-19.541-16.204 10.213-12.316 7.793,6.462 12.19-13.362 11.82,10.783-22.475,24.637zm0-50l-19.541-16.204 10.213-12.316 7.793,6.462 12.19-13.362 11.82,10.783-22.475,24.637z" />
        </g>
      </g>
    </svg>
  );
};

export const NewFile = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z"></path>
    </svg>
  );
};

export const NewFolder = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 1024 1024" style={getStyle(props)}>
      <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM632 577c0 3.8-3.4 7-7.5 7H540v84.9c0 3.9-3.2 7.1-7 7.1h-42c-3.8 0-7-3.2-7-7.1V584h-84.5c-4.1 0-7.5-3.2-7.5-7v-42c0-3.8 3.4-7 7.5-7H484v-84.9c0-3.9 3.2-7.1 7-7.1h42c3.8 0 7 3.2 7 7.1V528h84.5c4.1 0 7.5 3.2 7.5 7v42z"></path>
    </svg>
  );
};

export const QuestionMark = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 16 16" style={getStyle(props)}>
      <path d="M3 4.075a.423.423 0 0 0 .43.44H4.9c.247 0 .442-.2.475-.445.159-1.17.962-2.022 2.393-2.022 1.222 0 2.342.611 2.342 2.082 0 1.132-.668 1.652-1.72 2.444-1.2.872-2.15 1.89-2.082 3.542l.005.386c.003.244.202.44.446.44h1.445c.247 0 .446-.2.446-.446v-.188c0-1.278.487-1.652 1.8-2.647 1.086-.826 2.217-1.743 2.217-3.667C12.667 1.301 10.393 0 7.903 0 5.645 0 3.17 1.053 3.001 4.075zm2.776 10.273c0 .95.758 1.652 1.8 1.652 1.085 0 1.832-.702 1.832-1.652 0-.985-.747-1.675-1.833-1.675-1.04 0-1.799.69-1.799 1.675z"></path>
    </svg>
  );
};

export const QuestionMarkOutlined = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 16 16" style={getStyle(props)}>
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path>
    </svg>
  );
};

export const Rust = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 32 32" style={getStyle(props)}>
      <path d="M15.124,5.3a.832.832,0,1,1,.832.832h0a.831.831,0,0,1-.832-.832M5.2,12.834a.832.832,0,1,1,.832.832h0a.832.832,0,0,1-.832-.832m19.856.039a.832.832,0,1,1,.832.832.831.831,0,0,1-.832-.832h0M7.605,14.013a.76.76,0,0,0,.386-1l-.369-.835H9.074v6.545H6.144a10.247,10.247,0,0,1-.332-3.911Zm6.074.161V12.245h3.458c.179,0,1.261.206,1.261,1.016,0,.672-.83.913-1.513.913ZM8.958,24.561a.832.832,0,1,1,.832.832.831.831,0,0,1-.832-.832h0m12.331.039a.832.832,0,1,1,.832.832.832.832,0,0,1-.832-.832h0m.257-1.887a.758.758,0,0,0-.9.584l-.418,1.949a10.249,10.249,0,0,1-8.545-.041l-.417-1.949a.759.759,0,0,0-.9-.583h0l-1.721.37a10.233,10.233,0,0,1-.89-1.049h8.374c.095,0,.158-.017.158-.1V18.928c0-.086-.063-.1-.158-.1h-2.45V16.947h2.649a1.665,1.665,0,0,1,1.629,1.412c.105.413.336,1.757.494,2.187.157.483.8,1.447,1.482,1.447h4.323a10.243,10.243,0,0,1-.949,1.1Zm4.65-7.821a10.261,10.261,0,0,1,.022,1.779H25.167c-.105,0-.148.069-.148.172v.483c0,1.136-.641,1.384-1.2,1.447-.535.06-1.128-.224-1.2-.551a3.616,3.616,0,0,0-1.671-2.808c1.03-.654,2.1-1.619,2.1-2.911A3.292,3.292,0,0,0,21.44,9.8a4.559,4.559,0,0,0-2.2-.724H8.367A10.246,10.246,0,0,1,14.1,5.84l1.282,1.344a.758.758,0,0,0,1.072.026h0l1.434-1.372a10.248,10.248,0,0,1,7.015,5l-.982,2.217a.761.761,0,0,0,.386,1Zm2.448.036-.033-.343,1.011-.943a.42.42,0,0,0-.013-.595.428.428,0,0,0-.121-.081L28.2,12.483l-.1-.334.806-1.12a.422.422,0,0,0-.13-.581.43.43,0,0,0-.133-.055l-1.363-.222-.164-.306.573-1.257a.419.419,0,0,0-.236-.544.426.426,0,0,0-.146-.029l-1.383.048L25.7,7.819l.318-1.347a.421.421,0,0,0-.343-.487.435.435,0,0,0-.144,0L24.183,6.3l-.266-.219L23.966,4.7a.421.421,0,0,0-.431-.411.426.426,0,0,0-.141.028l-1.257.573-.306-.164-.222-1.363a.421.421,0,0,0-.5-.318.43.43,0,0,0-.133.055l-1.121.806-.333-.1-.483-1.293a.421.421,0,0,0-.555-.215.442.442,0,0,0-.12.08L17.418,3.39l-.343-.033L16.347,2.18a.421.421,0,0,0-.688,0l-.728,1.177-.343.033-.943-1.012a.421.421,0,0,0-.595.015.442.442,0,0,0-.08.12L12.483,3.8l-.333.1-1.12-.8a.422.422,0,0,0-.581.13.43.43,0,0,0-.055.133l-.222,1.363-.306.164L8.608,4.317a.421.421,0,0,0-.544.239.444.444,0,0,0-.028.144l.048,1.383L7.818,6.3,6.471,5.984a.421.421,0,0,0-.487.343.435.435,0,0,0,0,.144L6.3,7.819l-.218.265L4.7,8.036a.422.422,0,0,0-.383.573L4.89,9.866l-.164.306-1.363.222a.42.42,0,0,0-.318.5.43.43,0,0,0,.055.133l.806,1.12-.1.334-1.293.483a.421.421,0,0,0-.215.555.414.414,0,0,0,.081.121l1.011.943-.033.343-1.177.728a.421.421,0,0,0,0,.688l1.177.728.033.343-1.011.943a.421.421,0,0,0,.015.595.436.436,0,0,0,.119.08l1.293.483.1.334L3.1,20.972a.421.421,0,0,0,.131.581.43.43,0,0,0,.133.055l1.363.222.164.307-.573,1.257a.422.422,0,0,0,.24.545.438.438,0,0,0,.143.028l1.383-.048.219.266-.317,1.348a.42.42,0,0,0,.341.486.4.4,0,0,0,.146,0L7.818,25.7l.266.218L8.035,27.3a.419.419,0,0,0,.429.41.413.413,0,0,0,.143-.028l1.257-.573.306.164.222,1.362a.421.421,0,0,0,.5.319.407.407,0,0,0,.133-.055l1.12-.807.334.1.483,1.292a.422.422,0,0,0,.556.214.436.436,0,0,0,.119-.08l.943-1.011.343.034.728,1.177a.422.422,0,0,0,.588.1.413.413,0,0,0,.1-.1l.728-1.177.343-.034.943,1.011a.421.421,0,0,0,.595-.015.436.436,0,0,0,.08-.119l.483-1.292.334-.1,1.12.807a.421.421,0,0,0,.581-.131.43.43,0,0,0,.055-.133l.222-1.362.306-.164,1.257.573a.421.421,0,0,0,.544-.239.438.438,0,0,0,.028-.143l-.048-1.384.265-.218,1.347.317a.421.421,0,0,0,.487-.34.447.447,0,0,0,0-.146L25.7,24.183l.218-.266,1.383.048a.421.421,0,0,0,.41-.431.4.4,0,0,0-.028-.142l-.573-1.257.164-.307,1.363-.222a.421.421,0,0,0,.319-.5.434.434,0,0,0-.056-.135l-.806-1.12.1-.334,1.293-.483a.42.42,0,0,0,.215-.554.414.414,0,0,0-.081-.121l-1.011-.943.033-.343,1.177-.728a.421.421,0,0,0,0-.688Z" />
    </svg>
  );
};

export const Python = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 32 32" style={getStyle(props)}>
      <defs>
        <linearGradient
          id="a"
          x1="-133.268"
          y1="-202.91"
          x2="-133.198"
          y2="-202.84"
          gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#387eb8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="-133.575"
          y1="-203.203"
          x2="-133.495"
          y2="-203.133"
          gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffe052" />
          <stop offset="1" stopColor="#ffc331" />
        </linearGradient>
      </defs>
      <path
        d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z"
        style={{ fill: "url(#a)" }}
      />
      <path
        d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z"
        style={{ fill: "url(#b)" }}
      />
    </svg>
  );
};

export const TypeScript = (props: IconProps & { isTest?: boolean }) => {
  return (
    <svg {...defaultProps} viewBox="0 0 32 32" style={getStyle(props)}>
      <path
        d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
        style={{ fill: props.isTest ? "#e37933" : "#007acc" }}
      />
    </svg>
  );
};

export const JavaScript = (props: IconProps & { isTest?: boolean }) => {
  return (
    <svg {...defaultProps} viewBox="0 0 32 32" style={getStyle(props)}>
      <path
        d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z"
        style={{ fill: props.isTest ? "#e37933" : "#f5de19" }}
      />
    </svg>
  );
};

export const Json = (props: IconProps) => {
  return (
    <svg {...defaultProps} viewBox="0 0 16 16" style={getStyle(props)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        color="#f5de19"
        d="M6 2.984V2h-.09c-.313 0-.616.062-.909.185a2.33 2.33 0 0 0-.775.53 2.23 2.23 0 0 0-.493.753v.001a3.542 3.542 0 0 0-.198.83v.002a6.08 6.08 0 0 0-.024.863c.012.29.018.58.018.869 0 .203-.04.393-.117.572v.001a1.504 1.504 0 0 1-.765.787 1.376 1.376 0 0 1-.558.115H2v.984h.09c.195 0 .38.04.556.121l.001.001c.178.078.329.184.455.318l.002.002c.13.13.233.285.307.465l.001.002c.078.18.117.368.117.566 0 .29-.006.58-.018.869-.012.296-.004.585.024.87v.001c.033.283.099.558.197.824v.001c.106.273.271.524.494.753.223.23.482.407.775.53.293.123.596.185.91.185H6v-.984h-.09c-.2 0-.387-.038-.563-.115a1.613 1.613 0 0 1-.457-.32 1.659 1.659 0 0 1-.309-.467c-.074-.18-.11-.37-.11-.573 0-.228.003-.453.011-.672.008-.228.008-.45 0-.665a4.639 4.639 0 0 0-.055-.64 2.682 2.682 0 0 0-.168-.609A2.284 2.284 0 0 0 3.522 8a2.284 2.284 0 0 0 .738-.955c.08-.192.135-.393.168-.602.033-.21.051-.423.055-.64.008-.22.008-.442 0-.666-.008-.224-.012-.45-.012-.678a1.47 1.47 0 0 1 .877-1.354 1.33 1.33 0 0 1 .563-.121H6zm4 10.032V14h.09c.313 0 .616-.062.909-.185.293-.123.552-.3.775-.53.223-.23.388-.48.493-.753v-.001c.1-.266.165-.543.198-.83v-.002c.028-.28.036-.567.024-.863-.012-.29-.018-.58-.018-.869 0-.203.04-.393.117-.572v-.001a1.502 1.502 0 0 1 .765-.787 1.38 1.38 0 0 1 .558-.115H14v-.984h-.09c-.196 0-.381-.04-.557-.121l-.001-.001a1.376 1.376 0 0 1-.455-.318l-.002-.002a1.415 1.415 0 0 1-.307-.465v-.002a1.405 1.405 0 0 1-.118-.566c0-.29.006-.58.018-.869a6.174 6.174 0 0 0-.024-.87v-.001a3.537 3.537 0 0 0-.197-.824v-.001a2.23 2.23 0 0 0-.494-.753 2.331 2.331 0 0 0-.775-.53 2.325 2.325 0 0 0-.91-.185H10v.984h.09c.2 0 .387.038.562.115.174.082.326.188.457.32.127.134.23.29.309.467.074.18.11.37.11.573 0 .228-.003.452-.011.672-.008.228-.008.45 0 .665.004.222.022.435.055.64.033.214.089.416.168.609a2.285 2.285 0 0 0 .738.955 2.285 2.285 0 0 0-.738.955 2.689 2.689 0 0 0-.168.602c-.033.21-.051.423-.055.64a9.15 9.15 0 0 0 0 .666c.008.224.012.45.012.678a1.471 1.471 0 0 1-.877 1.354 1.33 1.33 0 0 1-.563.121H10z"
      ></path>
    </svg>
  );
};
