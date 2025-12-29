import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleQuartersAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm0,3c1.941,0,3.741.618,5.212,1.667l-5.212,5.212-5.212-5.212c1.472-1.049,3.271-1.667,5.212-1.667ZM3,12c0-1.941.618-3.741,1.667-5.212l5.212,5.212-5.212,5.212c-1.049-1.472-1.667-3.271-1.667-5.212Zm9,9c-1.941,0-3.741-.618-5.212-1.667l5.212-5.212,5.212,5.212c-1.472,1.049-3.271,1.667-5.212,1.667Zm7.333-3.788l-5.212-5.212,5.212-5.212c1.049,1.472,1.667,3.271,1.667,5.212s-.618,3.741-1.667,5.212Z"/></svg>

);
