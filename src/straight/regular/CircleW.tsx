import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleW = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm4.221-15.75h2.029l-1.5,10.577c-.115.605-.583,1.059-1.194,1.155-.607.095-1.199-.207-1.478-.716l-2.078-4.421-2.034,4.329c-.323.598-.91.906-1.526.808-.608-.096-1.076-.549-1.19-1.146l-1.5-10.585h2.03l.973,8.108,3.247-5.858,3.144,5.886,1.077-8.136Z"/></svg>

);
