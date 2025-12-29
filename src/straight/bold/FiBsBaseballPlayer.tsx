import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBaseballPlayer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5 3.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm-5.5 3.5c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zm15.187-6.942-2.682 1.346 3.814 7.597h-3.521l-4.311-1.782c-.757-.313-1.62-.301-2.367.031-.748.333-1.333.967-1.607 1.737l-5.327 15.013h3.183l2.471-6.962 3.16 2.237v4.725h3v-6.275l-3.175-2.247 1.637-4.611 2.74 1.133h7.798v-2.355z"/></svg>
);
