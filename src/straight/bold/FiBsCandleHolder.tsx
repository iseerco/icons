import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCandleHolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,4c0-1.105,2-4,2-4,0,0,2,2.895,2,4s-.895,2-2,2-2-.895-2-2Zm18,15.5c0,2.481-2.019,4.5-4.5,4.5H0v-3h2v-10.5c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v10.5h5.5c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5c-.37,0-.725.136-1,.382l-2.001-2.235c.826-.739,1.892-1.146,3-1.146,2.481,0,4.5,2.019,4.5,4.5Zm-19,1.5h6v-10.5c0-.276-.224-.5-.5-.5h-5c-.276,0-.5.224-.5.5v10.5Z"/></svg>

);
