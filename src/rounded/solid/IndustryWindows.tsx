import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndustryWindows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.318,7.12c-.42-.2-.907-.146-1.313,.181l-3.005,3.699v-2.797c.001-.466-.259-.882-.68-1.084-.42-.2-.907-.146-1.313,.181l-3.006,3.701v-2.797c.001-.466-.259-.882-.68-1.084-.42-.2-.907-.146-1.313,.181l-3.723,3.711L6.336,1.577c-.197-.914-1.02-1.577-1.954-1.577H2C.895,0,0,.895,0,2V19c0,2.761,2.239,5,5,5h14c2.761,0,5-2.239,5-5V8.204c0-.466-.261-.882-.682-1.084Zm-13.318,10.88c0,.552-.448,1-1,1h-1c-.552,0-1-.448-1-1v-1c0-.552,.448-1,1-1h1c.552,0,1,.448,1,1v1Zm5,0c0,.552-.448,1-1,1h-1c-.552,0-1-.448-1-1v-1c0-.552,.448-1,1-1h1c.552,0,1,.448,1,1v1Zm5,0c0,.552-.448,1-1,1h-1c-.552,0-1-.448-1-1v-1c0-.552,.448-1,1-1h1c.552,0,1,.448,1,1v1Z"/></svg>

);
