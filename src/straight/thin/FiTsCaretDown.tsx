import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCaretDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.977,16c-.565,0-1.102-.238-1.479-.658l-5.803-6.342h14.555l-5.805,6.346c-.363.403-.888.644-1.436.654h-.033Zm-5.011-6l4.273,4.67c.194.217.505.329.753.33.274-.005.528-.121.713-.326l4.276-4.674H6.965Z"/>
</svg>

);
