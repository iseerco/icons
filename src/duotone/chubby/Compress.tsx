import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Compress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2.021 9.153c-.552 0-1-.448-1-1s.448-1 1-1c4.268 0 5.125-1.972 5.125-5.153 0-.552.448-1 1-1s1 .448 1 1c0 3.071-.739 7.153-7.125 7.153z" opacity=".5"/><path d="m21.979 9.153c-6.386 0-7.125-4.082-7.125-7.153 0-.552.448-1 1-1s1 .448 1 1c0 3.181.857 5.153 5.125 5.153.552 0 1 .448 1 1s-.448 1-1 1z" opacity=".5"/><path d="m15.854 23c-.552 0-1-.447-1-1 0-3.071.739-7.153 7.125-7.153.552 0 1 .447 1 1s-.448 1-1 1c-4.268 0-5.125 1.972-5.125 5.153 0 .553-.448 1-1 1z" opacity=".5"/><path d="m8.146 23c-.552 0-1-.447-1-1 0-3.182-.857-5.153-5.125-5.153-.552 0-1-.447-1-1s.448-1 1-1c6.386 0 7.125 4.082 7.125 7.153 0 .553-.448 1-1 1z" opacity=".5"/></svg>
);
