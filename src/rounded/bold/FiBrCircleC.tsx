import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleC = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm-2.25-10.068v2.137c0,1.223.941,2.182,2.144,2.182h.409c.535,0,1.051-.196,1.45-.551.618-.553,1.567-.496,2.117.123.551.619.496,1.567-.123,2.118-.949.846-2.172,1.311-3.444,1.311h-.409c-2.836,0-5.144-2.325-5.144-5.182v-2.137c0-2.857,2.308-5.182,5.144-5.182h.409c1.324,0,2.585.5,3.55,1.407.604.567.633,1.517.065,2.12-.567.604-1.517.632-2.12.065-.406-.382-.938-.592-1.495-.592h-.409c-1.202,0-2.144.958-2.144,2.182Z"/></svg>

);
