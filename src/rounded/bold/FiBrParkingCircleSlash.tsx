import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrParkingCircleSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,14.5v3c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-3c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5Zm14-2.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12ZM12,3c-1.941,0-3.74,.618-5.212,1.667l1.592,1.592c.821-.789,1.932-1.259,3.12-1.259h1.5c2.757,0,5,2.243,5,5,0,1.58-.753,3.02-1.935,3.944l3.268,3.268c1.049-1.472,1.667-3.271,1.667-5.212,0-4.962-4.037-9-9-9Zm3,7c0-1.103-.897-2-2-2h-1.5c-.376,0-.729,.141-.998,.381l3.403,3.403c.653-.334,1.096-1.017,1.096-1.783Zm-3,11c1.941,0,3.74-.618,5.212-1.667L4.667,6.788c-1.049,1.472-1.667,3.271-1.667,5.212,0,4.962,4.037,9,9,9Z"/></svg>

);
