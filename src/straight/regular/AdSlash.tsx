import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AdSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.414 21h1.586v-15c0-1.654-1.346-3-3-3h-16.586l-3.007-3-1.407 1.407 6.426 6.433c-.374.527-.487 1.106-.487 1.106l-1.939 8.054h2.053l.464-2h2.967l.464 2h2.053l-1.922-7.983s-.182-1.634-1.598-1.95l-2.066-2.066h14.586c.552 0 1 .449 1 1v13h-1.586l-2.506-2.506c1.24-.68 2.092-1.982 2.092-3.494v-2c0-2.206-1.794-4-4-4h-3v10h2.586l7.007 7 1.407-1.407-1.586-1.593zm-15.434-8 .906-3.91c.023-.118.203-.118.227 0l.906 3.91zm8.02-4h1c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-1zm-.243 10 2 2h-16.757v-15c0-.507.138-.977.361-1.396l1.639 1.639v12.757z"/></svg>
);
