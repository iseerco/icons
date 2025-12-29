import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AustraliaCountryCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,3H3c-1.654,0-3,1.346-3,3v15H24V6c0-1.654-1.346-3-3-3Zm-10.828,13.006l-.309-1.406h-2.714l-.315,1.406h-1.677l1.475-6.419c.181-.884,.98-1.592,1.883-1.581,.926-.004,1.692,.673,1.895,1.627l1.448,6.373h-1.686Zm7.828-2.577c0,1.42-1.151,2.571-2.571,2.571s-2.571-1.151-2.571-2.571v-5.429h1.6v5.429c0,.536,.436,.971,.971,.971s.971-.436,.971-.971v-5.429h1.6v5.429Zm-9.15-3.441l.662,3.013h-2.004l.688-3.073c.096-.414,.567-.451,.654,.06Z"/>
</svg>

);
