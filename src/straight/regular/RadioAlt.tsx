import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RadioAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,6h-11.94L21.332,1.959l-.625-1.899L2.572,6.031c-1.452.208-2.572,1.46-2.572,2.969v15h24v-15c0-1.654-1.346-3-3-3Zm0,2c.552,0,1,.448,1,1v1H2v-1c0-.552.448-1,1-1h18ZM2,22v-10h20v10H2Zm2-8h7v2h-7v-2Zm0,4h7v2h-7v-2Zm12.5-4.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
