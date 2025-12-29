import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCursor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.812,23.999l-5.04-9.512-4.772,5.318V1.502c0-.574.32-1.089.834-1.344.515-.255,1.118-.196,1.575.151l13.892,11.628-7.04.343,5.024,9.482-4.473,2.236Zm-4.827-11.246l5.254,9.915,2.683-1.342-5.281-9.968,6.058-.295L5.785,1.09c-.137-.104-.333-.122-.507-.036-.174.086-.278.254-.278.448v15.692l3.985-4.441Z"/>
</svg>

);
