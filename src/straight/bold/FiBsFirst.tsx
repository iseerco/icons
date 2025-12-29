import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFirst = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.969,6.996l-3,.008.005,1.996h-1.969l-.005-2.004-3,.008.005,1.996h-2.005v3h2.013l.005,2h-2.018v3h2.026l.005,2.004,3-.008-.005-1.996h1.969l.005,2.004,3-.008-.005-1.996h2.005v-3h-2.013l-.005-2h2.018v-3h-2.026l-.005-2.004Zm-2.982,7.004h-1.969l-.005-2h1.969l.005,2ZM22,2v20h-3V7.069l-2.012,2.063-2.148-2.094,4.913-5.039h2.247Z"/>
</svg>

);
