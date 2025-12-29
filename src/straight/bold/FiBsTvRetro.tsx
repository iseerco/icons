import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTvRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,6h-5.151l3.721-3.722L16.95.157l-4.95,4.95L7.05.157l-2.121,2.121,3.721,3.722H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5h24v-14.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,15H3v-11.5c0-.276.224-.5.5-.5h17c.276,0,.5.224.5.5v11.5ZM5,11h9v8H5v-8Zm11,0h3v3h-3v-3Zm0,5h3v3h-3v-3Z"/>
</svg>

);
