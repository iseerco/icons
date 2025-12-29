import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GuaraniSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.39,12.21c-.58-.77-1.46-1.21-2.41-1.21h-5.98V4.06c2.65,.32,4.97,1.94,6.18,4.39,.25,.49,.84,.7,1.34,.45,.49-.25,.7-.85,.45-1.34-1.55-3.13-4.55-5.17-7.97-5.51V1c0-.55-.45-1-1-1s-1,.45-1,1v1.05C5.96,2.56,2.01,6.83,2.01,12s3.95,9.45,8.99,9.95v1.05c0,.55,.45,1,1,1s1-.45,1-1v-1.05c4.1-.41,7.73-3.27,8.87-7.11,.27-.91,.1-1.87-.47-2.63Zm-17.38-.21c0-4.07,3.05-7.44,6.99-7.94v15.87c-3.93-.49-6.99-3.86-6.99-7.94Zm15.94,2.27c-.89,3.01-3.72,5.27-6.95,5.66v-6.94h5.98c.32,0,.62,.15,.81,.41,.19,.25,.25,.57,.16,.87Z"/></svg>

);
