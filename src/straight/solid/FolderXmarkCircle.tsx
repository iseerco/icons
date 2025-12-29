import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderXmarkCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.243,13.757c-2.343-2.343-6.142-2.343-8.485,0-2.343,2.343-2.343,6.142,0,8.485,2.343,2.343,6.142,2.343,8.485,0,2.343-2.343,2.343-6.142,0-8.485Zm-.707,6.364l-1.414,1.414-2.121-2.121-2.121,2.121-1.414-1.414,2.121-2.121-2.121-2.121,1.414-1.414,2.121,2.121,2.121-2.121,1.414,1.414-2.121,2.121,2.121,2.121Zm-10.457,1.879H0V8H24v4.721c-1.466-1.665-3.607-2.721-6-2.721-4.418,0-8,3.582-8,8,0,1.459,.397,2.822,1.079,4ZM24,6H0V3C0,1.346,1.346,0,3,0h5.236l4,2h8.764c1.654,0,3,1.346,3,3v1Z"/>
</svg>

);
