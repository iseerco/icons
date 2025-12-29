import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.973,18c-.704,0-1.378-.301-1.848-.824L1.729,8H22.216l-8.401,9.183c-.464,.517-1.138,.817-1.842,.817ZM6.271,10l5.337,5.833c.131,.146,.285,.167,.365,.167s.234-.021,.359-.16l5.343-5.84H6.271Z"/></svg>

);
