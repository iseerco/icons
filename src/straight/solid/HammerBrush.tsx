import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HammerBrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.051,16c.162-.918.736-1.715,1.588-2.147l2.834-1.443c-.396-2.287-.974-5.824-.974-6.409,0-1.654,1.346-3,3-3s3,1.346,3,3c0,.585-.577,4.122-.974,6.409l2.835,1.444c.851.432,1.426,1.228,1.587,2.146h-12.897Zm-.051,2v6h3l1.192-4,1.321,4h7.487v-6h-13ZM11,0v1h-1V0h-6C1.791,0,0,1.791,0,4v1h4.983l-.483,14h4l-.483-14h1.983v-1h1v1h2V0h-2Z"/>
</svg>

);
