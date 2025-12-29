import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGrill = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.5v-.5H0v.5c0,4.915,2.455,8.996,6.222,11.056l-3.222,6.444h1.041l3.016-6.031c1.352,.603,2.848,.959,4.443,1.021v5.011h1v-5.011c1.595-.062,3.091-.418,4.443-1.021l3.016,6.031h1.041l-3.222-6.444c3.768-2.06,6.222-6.141,6.222-11.056Zm-12,11.5C5.787,18,1.234,13.404,1.009,7H22.991c-.226,6.404-4.778,11-10.991,11Zm.5-14h-1V0h1V4Zm4.5,0h-1V0h1V4Zm-9,0h-1V0h1V4Z"/></svg>

);
