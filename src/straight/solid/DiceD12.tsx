import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD12 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.841,7.321,2.459,4.626,11,6.779v4.6L6.257,13.753ZM12,13.118,7.257,15.49,10.5,24h3l3.242-8.511Zm9.53-8.51L13,6.777v4.6l4.736,2.368,5.376-6.507ZM5.125,15.514,0,9.428v5.849l3.271,5.452L8.25,23.716Zm13.752-.006L15.75,23.716l4.979-2.987L24,15.277V9.306ZM12,4.969,20.117,2.9,15.277,0H8.723L3.862,2.917Z"/></svg>

);
