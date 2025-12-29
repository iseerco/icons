import { SVGProps } from 'react';

/**
 * Props for icon components
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size (width and height)
   * @default 24
   */
  size?: number | string;
  
  /**
   * Icon color (uses currentColor by default for theme support)
   * @default 'currentColor'
   */
  color?: string;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}

export type IconComponent = React.FC<IconProps>;
