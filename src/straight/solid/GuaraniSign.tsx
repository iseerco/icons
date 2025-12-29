import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GuaraniSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.39,12.21c-.58-.77-1.46-1.21-2.41-1.21h-5.98V4.07c2.65,.33,4.97,1.93,6.18,4.38l1.79-.89c-1.55-3.13-4.55-5.15-7.97-5.49V0h-2V2.05C5.96,2.56,2.01,6.83,2.01,12s3.95,9.45,8.99,9.95v2.05h2v-2.06c4.09-.41,7.73-3.27,8.87-7.1,.27-.91,.1-1.87-.47-2.63Zm-17.38-.21c0-4.07,3.06-7.43,6.99-7.93v15.86c-3.93-.49-6.99-3.86-6.99-7.93Zm15.94,2.27c-.89,3.01-3.73,5.25-6.95,5.64v-6.92h5.98c.32,0,.62,.15,.81,.41,.19,.25,.25,.57,.16,.87Z"/></svg>

);
