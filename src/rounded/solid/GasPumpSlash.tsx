import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GasPumpSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.758,9H0V4.242ZM0,11v8a5.006,5.006,0,0,0,5,5h6a5,5,0,0,0,4.866-3.891L6.758,11ZM24,6.977a5.955,5.955,0,0,0-1.753-4.149L19.707.293a1,1,0,0,0-1.414,1.414L20,3.414V6a2,2,0,0,0,2,2V18a1,1,0,0,1-1,1h-.586L16,14.586V11H12.414l-2-2H16V5a5.006,5.006,0,0,0-5-5H5A4.972,4.972,0,0,0,2.248.834L1.707.293A1,1,0,0,0,.293,1.707l22,22a1,1,0,0,0,1.414-1.414L22.174,20.76A3,3,0,0,0,24,18S24,6.985,24,6.977Z"/></svg>

);
