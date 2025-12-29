import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMinusHexagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.415,9.746l-3.763-6.5c-.802-1.385-2.294-2.246-3.895-2.246h-7.545c-1.601,0-3.092.86-3.894,2.246L.556,9.746c-.806,1.391-.806,3.118,0,4.509l3.764,6.499c.802,1.386,2.293,2.246,3.894,2.246h7.545c1.601,0,3.093-.86,3.895-2.245l3.763-6.5c.806-1.391.806-3.119,0-4.509Zm-.865,4.007l-3.763,6.501c-.623,1.077-1.784,1.746-3.029,1.746h-7.545c-1.244,0-2.405-.669-3.028-1.747l-3.764-6.5c-.626-1.081-.626-2.425,0-3.506l3.764-6.5c.623-1.077,1.784-1.747,3.028-1.747h7.545c1.245,0,2.406.669,3.029,1.747l3.763,6.5c.626,1.082.626,2.425,0,3.506Zm-5.55-1.753c0,.276-.224.5-.5.5H7.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h9c.276,0,.5.224.5.5Z"/></svg>

);
