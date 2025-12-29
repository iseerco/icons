import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonPilates = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,19H11.73l5.005-4.838,5.701-2.762c.496-.241,.704-.839,.464-1.336-.241-.497-.84-.704-1.337-.464l-5.845,2.832c-.095,.046-.183,.107-.259,.181l-3.96,3.887-4.924-5.5h6.424c.553,0,1-.448,1-1s-.447-1-1-1H5c-.015,0-.027,.008-.042,.009-.66-.012-1.326,.192-1.876,.635-.623,.502-1.003,1.218-1.071,2.015-.068,.797,.186,1.566,.712,2.165l4.527,5.176H1c-.553,0-1,.447-1,1s.447,1,1,1H23c.553,0,1-.447,1-1s-.447-1-1-1ZM1,5.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Z"/>
</svg>

);
