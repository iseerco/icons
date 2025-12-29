import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm5.768-9.552c.308,.304,.308,.8,0,1.104l-4.243,4.188c-.566,.559-1.525,.158-1.525-.638v-2.602H7.5c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h4.5v-2.602c0-.795,.959-1.197,1.525-.638l4.243,4.188Z"/></svg>

);
