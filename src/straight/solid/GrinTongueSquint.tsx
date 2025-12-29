import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongueSquint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,16h2v.6c-.062,1.839-1.938,1.837-2,0Zm13-4A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12ZM7.9,9,6.375,10.219l1.25,1.562L11.1,9,7.625,6.219,6.375,7.781ZM17,14H7v2H9v.6c.133,4.495,5.869,4.49,6,0V16h2Zm-.9-5,1.524-1.219-1.25-1.562L12.9,9l3.476,2.781,1.25-1.562Z"/></svg>

);
