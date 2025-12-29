import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHomeRobot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm3-1c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4-1h1v4h-1v3h-12v-3h-1v-4h1v-.5c0-1.379 1.122-2.5 2.5-2.5h3v-2h1v2h3c1.378 0 2.5 1.121 2.5 2.5zm-1-.5c0-.827-.673-1.5-1.5-1.5h-7c-.827 0-1.5.673-1.5 1.5v6.5h10zm7-2.514v14.014h-24v-14.014c0-.822.386-1.614 1.032-2.12l9.309-7.294c.977-.766 2.341-.766 3.317 0l9.31 7.294c.646.506 1.032 1.298 1.032 2.12zm-1 0c0-.517-.242-1.015-.648-1.333l-9.31-7.294c-.613-.48-1.469-.48-2.083 0l-9.31 7.294c-.407.318-.649.816-.649 1.333v13.014h22z"/></svg>
);
