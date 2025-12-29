import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsContrast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.5 21h1v3h-1zm1-21h-1v3h1zm8.5 11.5v1h3v-1zm-21 1h3v-1h-3zm3.161 7.632.707.707 2.122-2.121-.707-.707zm14.85-14.849.707.707 2.121-2.122-.707-.707zm0 13.435 2.121 2.121.707-.707-2.121-2.121zm-12.021-13.435-2.122-2.122-.707.707 2.122 2.122zm13.01 6.717c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.14-7 7-7 7 3.14 7 7zm-1 0c0-3.309-2.691-6-6-6v12c3.309 0 6-2.691 6-6z"/></svg>
);
