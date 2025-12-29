import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrIdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.79 16c-.539 0-.925-.512-.746-.999.43-1.166 1.591-2.001 2.956-2.001 1.365 0 2.526.835 2.956 2.001.179.486-.207.999-.746.999zm2.21-4c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm16 4.5v-9c0-3.033-2.468-5.5-5.5-5.5h-13c-3.033 0-5.5 2.467-5.5 5.5v9c0 3.032 2.467 5.5 5.5 5.5h13c3.032 0 5.5-2.468 5.5-5.5zm-5.5-11.5c1.379 0 2.5 1.122 2.5 2.5v9c0 1.379-1.121 2.5-2.5 2.5h-13c-1.378 0-2.5-1.121-2.5-2.5v-9c0-1.378 1.122-2.5 2.5-2.5zm.5 4.5c0-.829-.672-1.5-1.5-1.5h-3c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5h3c.828 0 1.5-.671 1.5-1.5zm-1 5c0-.828-.672-1.5-1.5-1.5h-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h2c.828 0 1.5-.672 1.5-1.5z"/></svg>
);
