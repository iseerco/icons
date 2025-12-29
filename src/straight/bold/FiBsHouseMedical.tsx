import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHouseMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.657,7.395L14.157,.743c-1.271-.992-3.044-.992-4.313,0L1.342,7.396c-.853,.669-1.342,1.674-1.342,2.756v13.849H24V10.151c0-1.082-.489-2.087-1.343-2.757Zm-1.657,13.605H3V10.151c0-.154,.07-.299,.192-.394L11.692,3.106c.182-.143,.435-.143,.616,0l8.499,6.65c.123,.096,.193,.24,.193,.395v10.849Zm-7.5-8.5h3.5v3h-3.5v3.5h-3v-3.5h-3.5v-3h3.5v-3.5h3v3.5Z"/></svg>

);
