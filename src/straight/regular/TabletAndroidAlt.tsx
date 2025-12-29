import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabletAndroidAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3ZM6,2h12c.552,0,1,.449,1,1v13H5V3c0-.551.448-1,1-1Zm-1,20v-4h14v4H5Zm5-3h4v2h-4v-2Z"/>
</svg>

);
