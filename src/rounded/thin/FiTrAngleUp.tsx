import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,18.172c-.127,0-.255-.048-.352-.145l-9.379-9.293c-.949-.949-2.593-.947-3.537-.002L.852,18.027c-.197.195-.513.191-.707-.004-.194-.195-.193-.513.003-.707l9.379-9.293c1.317-1.318,3.625-1.321,4.948.002l9.377,9.291c.196.194.198.512.004.707-.098.099-.227.148-.355.148Z"/>
</svg>

);
