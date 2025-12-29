import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrH1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,5.5v13c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-5.5h-6v5.5c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5V5.5c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5v4.5h6v-4.5c0-.828.671-1.5,1.5-1.5s1.5.672,1.5,1.5Zm7.074-1.386c-.562-.233-1.206-.104-1.635.325l-3,3c-.586.586-.586,1.535,0,2.121s1.535.586,2.121,0l.439-.439v9.379c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5V5.5c0-.606-.365-1.153-.926-1.386Z"/></svg>

);
