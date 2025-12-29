import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Binary = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,4c0-2.21-1.79-4-4-4S4,1.79,4,4v3c0,2.21,1.79,4,4,4s4-1.79,4-4v-3Zm-2,3c0,1.1-.9,2-2,2s-2-.9-2-2v-3c0-1.1,.9-2,2-2s2,.9,2,2v3Zm6,6c-2.21,0-4,1.79-4,4v3c0,2.21,1.79,4,4,4s4-1.79,4-4v-3c0-2.21-1.79-4-4-4Zm2,7c0,1.1-.9,2-2,2s-2-.9-2-2v-3c0-1.1,.9-2,2-2s2,.9,2,2v3Zm-2.58-15l-1.43-1.4,3.51-3.6h1.51V11h-2V3.37l-1.58,1.63Zm-6.42,8v11h-2v-7.63l-1.58,1.63-1.43-1.4,3.51-3.6h1.51Z"/></svg>

);
