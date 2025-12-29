import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenNib = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.707,8.707l-2.293,2.293L13,2.586,15.293.293c.391-.391,1.023-.391,1.414,0l7,7c.391.391.391,1.023,0,1.414ZM11.19,3.604l-4.605,1.703c-1.488.551-2.637,1.791-3.073,3.317L.111,20.545c-.18.612-.134,1.254.109,1.821l7.848-7.848c-.044-.165-.068-.339-.068-.518,0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2c-.179,0-.353-.024-.518-.068l-7.848,7.848c.335.144.696.219,1.061.219.251,0,.504-.035.751-.108l11.884-3.377c1.521-.432,2.76-1.574,3.315-3.054l1.746-4.655L11.19,3.604Z"/></svg>

);
