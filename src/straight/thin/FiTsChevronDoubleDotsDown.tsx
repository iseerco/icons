import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChevronDoubleDotsDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 9c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm1 5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0-8c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0-4c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0 17c.428 0 .831-.167 1.12-.457l7.721-7.177-.681-.732-7.734 7.189c-.228.229-.611.241-.865-.013l-7.721-7.176-.681.732 7.708 7.164c.302.303.705.47 1.133.47zm10.656-5.863-10.23 9.687c-.228.229-.614.238-.861-.01l-10.221-9.677-.688.727 10.211 9.667c.302.303.705.47 1.133.47s.831-.167 1.123-.46l10.221-9.677z"/></svg>
);
