import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDrawSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,18.184V5.816c1.163-.413,2-1.512,2-2.816,0-1.657-1.343-3-3-3-1.304,0-2.403.837-2.816,2H5.816c-.413-1.163-1.512-2-2.816-2C1.343,0,0,1.343,0,3c0,1.304.837,2.403,2,2.816v12.367c-1.163.413-2,1.512-2,2.816,0,1.657,1.343,3,3,3,1.304,0,2.403-.837,2.816-2h12.367c.413,1.163,1.512,2,2.816,2,1.657,0,3-1.343,3-3,0-1.304-.837-2.403-2-2.816Zm-17,.595V5.221c.078-.07.151-.143.221-.221h13.557c.07.078.143.151.221.221v13.557c-.078.07-.151.143-.221.221H5.221c-.07-.078-.143-.151-.221-.221Z"/></svg>

);
