import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMartiniGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,0v1.5c0,1.686.712,3.303,1.955,4.441l8.545,8.198v6.86h-4.5v3h12v-3h-4.5v-6.86l8.529-8.185c1.252-1.139,1.971-2.763,1.971-4.455V0H0Zm19.981,3.764l-7.981,7.657L4.019,3.764l-.029-.027c-.236-.215-.435-.464-.59-.736h17.198c-.161.279-.367.536-.616.764Z"/>
</svg>

);
