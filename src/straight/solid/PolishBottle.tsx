import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PolishBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,8h-6V0h6V8Zm-1,8h-4v2h4v-2Zm5.207-5.032c-.566-.615-1.371-.968-2.207-.968H7c-1.715-.031-3.168,1.551-2.988,3.267l1.084,10.733h13.809l1.085-10.751c.069-.833-.216-1.665-.782-2.28Zm-3.207,9.032H8v-6h8v6Z"/>
</svg>

);
