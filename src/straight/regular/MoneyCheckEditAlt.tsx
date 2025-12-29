import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyCheckEditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,11h3.105c-.195,.145-.392,.288-.569,.465l-1.535,1.535h-1v-2ZM21,2H3C1.346,2,0,3.346,0,5V22H9v-2H2V5c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1v4.107c.714,.145,1.393,.462,2,.921V5c0-1.654-1.346-3-3-3ZM7,17h2c1.654,0,3-1.346,3-3h-2c0,.551-.448,1-1,1h-2c-.552,0-1-.449-1-1v-1h3v-2h-3v-1c0-.551,.448-1,1-1h2c.552,0,1,.449,1,1h2c0-1.654-1.346-3-3-3h-2c-1.654,0-3,1.346-3,3v1h-1v2h1v1c0,1.654,1.346,3,3,3ZM20,7h-6v2h6v-2Zm3.121,4.879c.566,.566,.879,1.32,.879,2.121s-.313,1.555-.879,2.122l-7.879,7.878h-4.242v-4.243l7.879-7.878c1.17-1.17,3.072-1.17,4.242,0Zm-1.121,2.121c0-.267-.104-.518-.293-.707-.391-.391-1.023-.39-1.414,0l-7.293,7.292v1.415h1.414l7.293-7.293c.189-.189,.293-.44,.293-.707Z"/></svg>

);
