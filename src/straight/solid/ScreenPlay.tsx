import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScreenPlay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8,20c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2,.895-2,2-2Zm16,3v-2H11.859c.083,.321,.141,.653,.141,1s-.058,.679-.141,1h12.141Zm-19.859,0c-.083-.321-.141-.653-.141-1s.058-.679,.141-1H0v2H4.141ZM10.001,7.224v3.553l3.108-1.777-3.108-1.776ZM24,3v15H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-6.86,6L8.001,3.777V14.224l9.139-5.224Z"/>
</svg>

);
