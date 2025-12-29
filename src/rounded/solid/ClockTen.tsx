import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockTen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,12c0,.357-.19,.688-.5,.866-.155,.089-.327,.134-.5,.134s-.345-.045-.5-.134l-3.464-2c-.479-.276-.642-.888-.366-1.366s.888-.644,1.366-.366l1.964,1.134V6c0-.553,.448-1,1-1s1,.447,1,1v6Z"/></svg>

);
