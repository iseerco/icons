import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHouseBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.657,7.419L14.157,.768c-1.271-.994-3.043-.992-4.314,0L1.342,7.42c-.853,.669-1.342,1.674-1.342,2.756v13.824H24V10.176c0-1.082-.489-2.087-1.343-2.757Zm-1.657,13.581H3V10.176c0-.154,.07-.299,.192-.394L11.692,3.131c.182-.143,.436-.143,.615,0l8.499,6.65c.123,.096,.193,.24,.193,.395v10.824Z"/></svg>

);
