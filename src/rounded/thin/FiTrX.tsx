import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.649,12L21.886,.818c.176-.213,.146-.528-.067-.704-.211-.176-.526-.147-.704,.067L12,11.215,2.886,.182c-.178-.215-.493-.243-.704-.067-.213,.176-.243,.491-.067,.704L11.351,12,2.114,23.182c-.176,.213-.146,.528,.067,.704,.212,.175,.527,.147,.704-.067L12,12.785l9.114,11.033c.177,.214,.493,.242,.704,.067,.213-.176,.243-.491,.067-.704L12.649,12Z"/></svg>

);
