import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RightFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.115,9.875L13,.071V7H5v10H13v6.952l10.117-9.824c.57-.567,.883-1.323,.883-2.126,0-.804-.314-1.56-.885-2.126ZM3,22h6v2H3c-1.654,0-3-1.346-3-3V3C0,1.346,1.346,0,3,0h6V2H3c-.551,0-1,.449-1,1V21c0,.552,.449,1,1,1Z"/>
</svg>

);
