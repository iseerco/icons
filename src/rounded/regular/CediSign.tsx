import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CediSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.19,16.12c-.49-.25-1.09-.06-1.35,.43-1.1,2.13-3.27,3.45-5.66,3.45h-.18V4h.18c2.43,0,4.62,1.35,5.7,3.54,.25,.49,.85,.7,1.34,.45,.49-.25,.7-.85,.45-1.34-1.42-2.87-4.3-4.65-7.49-4.65h-.18V1c0-.55-.45-1-1-1s-1,.45-1,1v1.01c-4.44,.19-8,3.87-8,8.35v3.27c0,4.49,3.56,8.16,8,8.35v1.01c0,.55,.45,1,1,1s1-.45,1-1v-1h.18c3.14,0,5.99-1.74,7.43-4.53,.25-.49,.06-1.09-.43-1.35Zm-15.19-2.49v-3.27c0-3.39,2.66-6.16,6-6.35v15.98c-3.34-.19-6-2.97-6-6.35Z"/></svg>

);
