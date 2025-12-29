import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stroopwafel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.059,9.419l2.586,2.586-2.586,2.586-2.586-2.586,2.586-2.586Zm11.993,2.581c0,6.617-5.383,12-12,12S.051,18.617.051,12,5.434,0,12.051,0s12,5.383,12,12Zm-6.578.005l2.293-2.293-1.414-1.414-2.293,2.293-2.586-2.586,2.293-2.293-1.414-1.414-2.293,2.293-2.293-2.293-1.414,1.414,2.293,2.293-2.586,2.586-2.293-2.293-1.414,1.414,2.293,2.293-2.293,2.293,1.414,1.414,2.293-2.293,2.586,2.586-2.293,2.293,1.414,1.414,2.293-2.293,2.293,2.293,1.414-1.414-2.293-2.293,2.586-2.586,2.293,2.293,1.414-1.414-2.293-2.293Z"/></svg>

);
