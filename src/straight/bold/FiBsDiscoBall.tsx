import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiscoBall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,14A10,10,0,1,0,13.5,4.125V3H16V0H8V3h2.5V4.125A10.006,10.006,0,0,0,2,14Zm7.167,6.4V16.684a25.02,25.02,0,0,1-3.87-.675,6.942,6.942,0,0,1,0-4.021,25.14,25.14,0,0,1,3.869-.672V7.605a6.935,6.935,0,0,1,5.666,0v3.71a24.968,24.968,0,0,1,3.87.677,6.942,6.942,0,0,1,0,4.021,25.331,25.331,0,0,1-3.869.671V20.4a6.935,6.935,0,0,1-5.666,0Z"/><path d="M14.833,16.684V11.315c-.938-.093-1.9-.148-2.833-.148s-1.895.056-2.833.149v5.368c.938.094,1.9.149,2.833.149S13.9,16.778,14.833,16.684Z"/></svg>

);
