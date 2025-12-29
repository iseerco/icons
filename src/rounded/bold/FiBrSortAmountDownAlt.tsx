import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSortAmountDownAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,1H11.5c-.829,0-1.5,.672-1.5,1.5s.671,1.5,1.5,1.5h11c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/><path d="M18.5,7h-7c-.829,0-1.5,.672-1.5,1.5s.671,1.5,1.5,1.5h7c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/><path d="M14.5,13h-3c-.829,0-1.5,.672-1.5,1.5s.671,1.5,1.5,1.5h3c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5Z"/><path d="M9.172,18.414h-2.172V1.5c0-.828-.671-1.5-1.5-1.5s-1.5,.672-1.5,1.5V18.414H2c-.552,0-1,.448-1,1,0,.265,.105,.519,.293,.707l3.586,3.586c.391,.39,1.024,.39,1.414,0l3.586-3.586c.39-.391,.39-1.024,0-1.414-.187-.187-.442-.293-.707-.293Z"/></svg>

);
