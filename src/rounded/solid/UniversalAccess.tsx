import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UniversalAccess = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12,12-5.38,12-12S18.62,0,12,0Zm0,4c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm5.45,4.89l-3.45,1.72v3.53l1.87,3.36c.27,.48,.1,1.09-.39,1.36-.15,.09-.32,.13-.49,.13-.35,0-.69-.19-.87-.51l-1.94-3.49h-.37l-1.94,3.49c-.18,.33-.52,.51-.87,.51-.17,0-.33-.04-.49-.13-.48-.27-.66-.88-.39-1.36l1.87-3.36v-3.53l-3.45-1.72c-.49-.25-.69-.85-.45-1.34,.25-.49,.85-.69,1.34-.45l3.79,1.89h1.53l3.79-1.89c.49-.25,1.09-.05,1.34,.45,.25,.49,.05,1.09-.45,1.34Z"/></svg>

);
