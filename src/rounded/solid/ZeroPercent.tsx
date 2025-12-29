import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZeroPercent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M8.9,10.5v3c0,.496-.404,.9-.9,.9s-.9-.404-.9-.9v-3c0-.496,.404-.9,.9-.9s.9,.404,.9,.9Zm15.1,1.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-13.5-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5v3c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-3Zm2.25-.019c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25-1.25,.56-1.25,1.25,.56,1.25,1.25,1.25Zm.765,5.137l4.178-6.4c.347-.532-.034-1.237-.67-1.237-.27,0-.522,.136-.67,.363l-4.178,6.4c-.347,.532,.034,1.237,.67,1.237,.27,0,.522-.136,.67-.363Zm4.985-.887c0-.69-.56-1.25-1.25-1.25s-1.25,.56-1.25,1.25,.56,1.25,1.25,1.25,1.25-.56,1.25-1.25Z"/>
</svg>

);
