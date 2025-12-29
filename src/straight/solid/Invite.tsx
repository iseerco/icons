import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Invite = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,23v1h-5v-1c0-.551.448-1,1-1h3c.552,0,1,.449,1,1Zm-16-1h-3c-.552,0-1,.449-1,1v1h5v-1c0-.551-.448-1-1-1ZM21,2h-3V0h-2v2h-8V0h-2v2h-3c-1.657,0-3,1.343-3,3v3h24v-3c0-1.657-1.343-3-3-3ZM0,10h24v13c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v1h-6v-1c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v-13Zm17,5.5c0,1.378,1.122,2.5,2.5,2.5s2.5-1.122,2.5-2.5-1.122-2.5-2.5-2.5-2.5,1.122-2.5,2.5Zm-15,0c0,1.378,1.122,2.5,2.5,2.5s2.5-1.122,2.5-2.5-1.122-2.5-2.5-2.5-2.5,1.122-2.5,2.5Z"/>
</svg>

);
