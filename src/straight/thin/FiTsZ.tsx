import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H3.97c-.811,0-1.507-.466-1.817-1.215-.31-.749-.146-1.569,.427-2.143L20.715,2.649c.285-.285,.363-.679,.208-1.053-.155-.373-.488-.597-.893-.597H2V0H20.03c.811,0,1.507,.466,1.817,1.215,.31,.749,.146,1.569-.427,2.143L3.285,21.351c-.285,.285-.363,.679-.208,1.053,.155,.373,.488,.597,.893,.597H22v1Z"/></svg>

);
