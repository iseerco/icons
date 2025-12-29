import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHandDryer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.5 12v-5h1v5zm4.5-1v-4h-1v4zm-7 0v-4h-1v4zm12-11h-1v4h-16v-4h-1v5h18zm.5 14h-10.858c-1.21 0-2.221.822-2.533 1.933l-3.742-4.112c-.887-1.018-2.568-1.095-3.548-.166-1.012.923-1.094 2.505-.183 3.527l7.857 8.818h1.34l-8.45-9.484c-.548-.615-.499-1.567.11-2.122.592-.558 1.6-.513 2.135.1l4.509 4.955c.306.936 1.118 1.664 2.138 1.809l5.661.737.129-.991-5.654-.737c-.804-.115-1.41-.813-1.41-1.625 0-.905.737-1.642 1.642-1.642h10.858c.827 0 1.5.673 1.5 1.5v7.5h1v-7.5c0-1.378-1.122-2.5-2.5-2.5z"/></svg>
);
