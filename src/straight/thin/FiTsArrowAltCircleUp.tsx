import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm1.269-16.463c-.612-.681-1.791-.682-2.403-.002l-5,5.465h5.635v6h1v-6h5.769l-5-5.463Zm-1.664,.671l.003-.003c.237-.263,.676-.267,.92,.003l3.469,3.792h-7.862l3.469-3.792Z"/></svg>

);
