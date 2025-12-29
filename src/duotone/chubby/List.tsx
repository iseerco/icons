import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const List = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3.166 2.914c-1.377 0-2.166.796-2.166 2.185s.789 2.185 2.166 2.185 2.165-.796 2.165-2.185-.789-2.185-2.165-2.185z" opacity=".5"/><path d="m22 6.099h-13.255c-.553 0-1-.448-1-1s.447-1 1-1h13.255c.553 0 1 .448 1 1s-.447 1-1 1z"/><path d="m3.166 9.815c-1.377 0-2.166.796-2.166 2.185s.789 2.185 2.166 2.185 2.165-.796 2.165-2.185-.789-2.185-2.165-2.185z" opacity=".5"/><path d="m22 13h-13.255c-.553 0-1-.448-1-1s.447-1 1-1h13.255c.553 0 1 .448 1 1s-.447 1-1 1z"/><path d="m3.166 16.716c-1.377 0-2.166.796-2.166 2.185s.789 2.185 2.166 2.185 2.165-.796 2.165-2.185-.789-2.185-2.165-2.185z" opacity=".5"/><path d="m22 19.901h-13.255c-.553 0-1-.448-1-1s.447-1 1-1h13.255c.553 0 1 .448 1 1s-.447 1-1 1z"/></svg>
);
