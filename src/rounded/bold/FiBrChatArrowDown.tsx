import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChatArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.293,12.7l-.732.732h0L17.975,9.842a3.585,3.585,0,0,0-4.948,0l-.174.173a.5.5,0,0,1-.707,0l-4.1-4.1A1.5,1.5,0,0,0,5.927,8.037l4.1,4.1a3.584,3.584,0,0,0,4.948,0l.174-.173a.5.5,0,0,1,.707,0l3.585,3.585h0l-.733.733a1,1,0,0,0,.707,1.707H22.5a1.5,1.5,0,0,0,1.5-1.5V13.4A1,1,0,0,0,22.293,12.7Z"/><path d="M22.5,21H5.5A2.5,2.5,0,0,1,3,18.5V1.5a1.5,1.5,0,0,0-3,0v17A5.506,5.506,0,0,0,5.5,24h17a1.5,1.5,0,0,0,0-3Z"/></svg>

);
