import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCaretCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-1.354-6.611c.344,.389,.838,.611,1.354,.611s1.01-.223,1.351-.608l5.775-6.392H4.875l5.771,6.389Zm1.959-.663c-.312,.354-.894,.357-1.213-.003l-4.266-4.722h9.749l-4.269,4.726Z"/></svg>

);
