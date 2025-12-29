import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPointerLoading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.555,3.699c-.352-.464-.886-.776-1.466-.856-.567-.078-1.121,.062-1.631,.455L9.4,12.847l6.096,.646-3.029,5.97,3.834,1.919,3.125-6.076,4.573,4.18V5.023c0-.477-.159-.949-.445-1.324Zm-2.555,8.979l-2.003-1.831-2.398-.255,4.401-3.802v5.888ZM3,19.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Zm4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/>
</svg>

);
