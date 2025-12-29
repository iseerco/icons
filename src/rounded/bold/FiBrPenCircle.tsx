import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPenCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.647,10.268l3.086,3.086-2.377,2.377c-.813.813-1.915,1.269-3.064,1.269h-.79c-.276,0-.5-.224-.5-.5v-.791c0-1.149.457-2.252,1.269-3.064l2.377-2.377Zm3.129-3.129l-1.008,1.008,3.086,3.086,1.008-1.008c.852-.852.852-2.234,0-3.086s-2.234-.852-3.086,0Zm10.225,4.861c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.963-4.037-9-9-9S3,7.037,3,12s4.037,9,9,9,9-4.037,9-9Z"/>
</svg>

);
