import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Contrast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 21h2v3h-2zm2-21h-2v3h2zm8 11v2h3v-2zm-18 0h-3v2h3zm-.192 8.778 1.414 1.414 2.122-2.121-1.414-1.414zm18.384-15.556-1.414-1.414-2.121 2.122 1.414 1.414zm-3.535 14.85 2.121 2.121 1.414-1.414-2.121-2.121zm-11.314-14.143-2.122-2.122-1.414 1.414 2.122 2.122zm12.657 7.071c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.14-7 7-7 7 3.14 7 7zm-2 0c0-2.757-2.243-5-5-5v10c2.757 0 5-2.243 5-5z"/></svg>
);
