import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,3v8h-4V2h3c.552,0,1,.448,1,1Zm-11,10v9h-3v-9h3Zm-3-2V2h3v9h-3Zm5,2h3v9h-3v-9Zm0-2V2h3v9h-3ZM3,2h3v9H2V3c0-.552.448-1,1-1Zm-1,11h4v9H2v-9Zm16,9v-9h4v9h-4Z"/>
</svg>

);
