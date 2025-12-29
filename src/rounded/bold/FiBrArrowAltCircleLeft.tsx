import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm6-9c0,.829-.671,1.5-1.5,1.5h-4.5v2.628c0,.786-.948,1.182-1.507,.63l-4.261-4.206c-.308-.304-.308-.8,0-1.104l4.261-4.206c.559-.552,1.507-.156,1.507,.63v2.628h4.5c.829,0,1.5,.671,1.5,1.5Z"/></svg>

);
