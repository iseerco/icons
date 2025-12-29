import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HtmlFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2 22h18v2h-20v-21c0-1.654 1.346-3 3-3h9.414l7.586 7.586v2.414h-2v-1h-7v-7h-8c-.552 0-1 .449-1 1zm11-15h3.586l-3.586-3.586zm11 11.4v1.6h-3v-8h1.6v6.4zm-10.5-6.4v1.6h-1.2v6.4h-1.6v-6.4h-1.2v-1.6zm2.103 8h-1.603l.435-7c.037-.705.405-1 .847-1 .293 0 .566.242.721.64l.997 2.56.997-2.56c.155-.398.428-.64.721-.64.442 0 .81.295.847 1l.435 7h-1.603l-.213-3.431-1.184 3.038-1.183-3.037zm-7.003-8v8h-1.6v-3.2h-1.4v3.2h-1.6v-8h1.6v3.2h1.4v-3.2z"/></svg>
);
