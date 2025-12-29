import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,12c.001.664-.255,1.294-.722,1.766l-3.918,4.081c-.098.102-.229.153-.36.153-.125,0-.249-.046-.347-.14-.199-.19-.205-.508-.014-.707l3.923-4.086c.163-.165.282-.358.355-.567H5.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h12.411c-.075-.208-.196-.398-.358-.559l-3.954-4.049c-.193-.197-.189-.514.008-.707.198-.192.515-.189.707.009l3.948,4.043c.469.462.732,1.096.737,1.763Z"/>
</svg>

);
