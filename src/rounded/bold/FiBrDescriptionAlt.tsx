import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDescriptionAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,13c0,1.657-1.343,3-3,3s-3-1.343-3-3,1.343-3,3-3,3,1.343,3,3Zm-3,5c-1.657,0-3,1.343-3,3s1.343,3,3,3,3-1.343,3-3-1.343-3-3-3Zm-6.5-6.5H1.5c-.828,0-1.5.671-1.5,1.5s.672,1.5,1.5,1.5h13c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Zm0,8H1.5c-.828,0-1.5.671-1.5,1.5s.672,1.5,1.5,1.5h13c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Zm9.5-15v.5c0,1.654-1.346,3-3,3H3c-1.654,0-3-1.346-3-3v-.5C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5Zm-2.998.5l-.002-.5c0-.827-.673-1.5-1.5-1.5H4.5c-.827,0-1.5.673-1.5,1.5v.5h18.002Z"/>
</svg>

);
