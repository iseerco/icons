import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFaceDisappointed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-7c1.965,0,3.532,1.149,3.599,1.198l-.597,.803c-.014-.01-1.376-1.001-3.002-1.001s-2.988,.991-3.002,1.001l-.597-.803c.066-.049,1.634-1.198,3.599-1.198Zm-1.83-3.972l-4,1.442-.34-.941,4-1.442,.34,.941Zm4-.941l4,1.442-.34,.941-4-1.442,.34-.941Z"/></svg>

);
