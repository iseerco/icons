import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Roadmap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M4,22c0,1.105-.895,2-2,2s-2-.895-2-2,.895-2,2-2,2,.895,2,2Zm6.5-6c0,1.105,.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm9.5-1h-3.626c.082,.32,.126,.655,.126,1s-.044,.68-.126,1h3.626c1.103,0,2,.897,2,2s-.897,2-2,2H5.874c.082,.32,.126,.655,.126,1s-.044,.68-.126,1h14.126c2.206,0,4-1.794,4-4s-1.794-4-4-4Zm0-10l4-2.5L20,0h-2V10h2V5ZM6,16.949v.051h2.626c-.082-.32-.126-.655-.126-1s.044-.68,.126-1h-2.126c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5h9.5v-2H6.5c-2.481,0-4.5,2.019-4.5,4.5,0,2.31,1.756,4.197,4,4.449Z"/>
</svg>

);
