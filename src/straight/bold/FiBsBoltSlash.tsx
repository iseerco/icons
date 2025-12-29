import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBoltSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.795,15.674l2.219-3.074c.605-.91.659-2.074.143-3.038-.517-.963-1.517-1.562-2.61-1.562h-3.158L16.411,0h-4.193l-4.236,5.861L2.161.039.04,2.16l21.8,21.801,2.121-2.121-6.166-6.166Zm-.324-4.674l-1.825,2.525-2.525-2.525h4.35Zm-2.642,8.778l-3.052,4.222h-4.193l2.023-8h-3.132c-1.102,0-2.109-.604-2.632-1.577-.516-.96-.463-2.118.137-3.022l1.036-1.435,9.812,9.812Z"/>
</svg>

);
