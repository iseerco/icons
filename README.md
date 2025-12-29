# @iseer/icons

> Iseer's custom icon library with 8 variants (straight/rounded × regular/thin/bold/solid)

[![NPM](https://img.shields.io/npm/v/@iseer/icons.svg)](https://www.npmjs.com/package/@iseer/icons) [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A comprehensive React icon library featuring **37,000+ icons** across 8 style variants. Tree-shakeable, TypeScript-ready, and optimized for modern React applications with built-in dark mode support.

## 📦 Installation

```bash
npm install @iseer/icons
```

## 🚀 Quick Start

```tsx
import { Home, Search, Settings } from '@iseer/icons';

function App() {
  return (
    <div>
      <Home size={24} />
      <Search size={32} color="#ff0000" />
      <Settings className="text-blue-500" />
    </div>
  );
}
```

## 🎨 Icon Variants

### Visual Examples

<img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-home.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-search.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-settings.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-user.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-heart.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-star.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-bell.svg" width="48" height="48"> <img src="https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-shopping-cart.svg" width="48" height="48">

### Available Variants

| Variant | Icons | Import Path |
|---------|-------|-------------|
| **Straight Regular** | 4,663 | `@iseer/icons/straight/regular` |
| **Straight Thin** | 4,515 | `@iseer/icons/straight/thin` |
| **Straight Bold** | 4,665 | `@iseer/icons/straight/bold` |
| **Straight Solid** | 4,665 | `@iseer/icons/straight/solid` |
| **Rounded Regular** | 4,681 | `@iseer/icons/rounded/regular` |
| **Rounded Thin** | 4,498 | `@iseer/icons/rounded/thin` |
| **Rounded Bold** | 4,681 | `@iseer/icons/rounded/bold` |
| **Rounded Solid** | 4,639 | `@iseer/icons/rounded/solid` |
| **Total** | **37,007** | - |

## 📖 Usage

### Import from Main Package

```tsx
import { Home, ArrowRight, Settings } from '@iseer/icons';
```

### Import from Specific Variant (Smaller Bundle)

```tsx
// Rounded regular style
import { Home } from '@iseer/icons/rounded/regular';

// Straight bold style
import { ArrowRight } from '@iseer/icons/straight/bold';
```

### Component Props

```tsx
interface IconProps {
  size?: number | string;      // Default: 24
  color?: string;              // Default: 'currentColor'
  className?: string;
  // ...all standard SVG props
}
```

### Examples

```tsx
// Custom size and color
<Home size={32} color="#3b82f6" />

// With Tailwind classes
<Search className="w-6 h-6 text-gray-700 dark:text-gray-300" />

// With click handler
<Settings 
  size={24} 
  onClick={() => console.log('clicked')}
  className="cursor-pointer hover:text-blue-500"
/>

// Custom styling
<Bell 
  size={28}
  style={{ 
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
    transition: 'all 0.2s'
  }}
/>
```

## 🌙 Dark Mode Support

Icons use `currentColor` by default, automatically adapting to your theme:

```tsx
// Automatically adapts to light/dark mode
<div className="text-gray-900 dark:text-gray-100">
  <Home size={24} />
</div>

// Manual color control
<Home color={isDark ? '#ffffff' : '#000000'} />
```

## 🎯 Tree-Shaking

Only the icons you import are included in your bundle:

```tsx
// ✅ Good: Only Home icon bundled (~1-2KB)
import { Home } from '@iseer/icons';

// ✅ Better: Explicit variant import
import { Home } from '@iseer/icons/rounded/regular';

// ❌ Avoid: Imports entire library
import * as Icons from '@iseer/icons';
```

## 💡 TypeScript Support

Full TypeScript support with IntelliSense:

```tsx
import { Home, type IconProps } from '@iseer/icons';

const CustomIcon: React.FC<IconProps> = (props) => {
  return <Home {...props} />;
};
```

## ⚡ Performance

- **Bundle Size**: ~1-2KB per icon (after tree-shaking)
- **Tree-Shakeable**: Only imported icons are bundled
- **Zero Runtime Dependencies**: Pure React components
- **Optimized SVGs**: Minimal file size

## 🔍 Finding Icons

Browse all icons in the CDN:
```
https://edge.iseer.co/assets/icons/{variant}/{weight}/svg/{icon-name}.svg
```

Example:
```
https://edge.iseer.co/assets/icons/rounded/regular/svg/fi-rr-home.svg
```

## 📚 Common Icons Reference

| Icon | Import Name | Usage |
|------|-------------|-------|
| 🏠 Home | `Home` | `<Home />` |
| 🔍 Search | `Search` | `<Search />` |
| ⚙️ Settings | `Settings` | `<Settings />` |
| 👤 User | `User` | `<User />` |
| ❤️ Heart | `Heart` | `<Heart />` |
| ⭐ Star | `Star` | `<Star />` |
| 🔔 Bell | `Bell` | `<Bell />` |
| 🛒 Cart | `ShoppingCart` | `<ShoppingCart />` |
| ➡️ Arrow Right | `ArrowRight` | `<ArrowRight />` |
| ✉️ Mail | `Envelope` | `<Envelope />` |

## 🛠️ Best Practices

### 1. Import Only What You Need
```tsx
// ✅ Good
import { Home, Search } from '@iseer/icons';

// ❌ Bad
import * as Icons from '@iseer/icons';
```

### 2. Use Variant Imports for Smaller Bundles
```tsx
// ✅ Smaller bundle
import { Home } from '@iseer/icons/rounded/regular';
```

### 3. Leverage currentColor
```tsx
// ✅ Theme-aware
<Home className="text-primary" />

// Instead of
<Home color="#3b82f6" />
```

### 4. Consistent Sizing
```tsx
// Define size tokens
const sizes = { sm: 16, md: 24, lg: 32 };

<Home size={sizes.md} />
```

## 📝 License

This project is released under the [Apache License 2.0](LICENSE).

## 🔗 Resources

- **CDN Base**: `https://edge.iseer.co/assets/icons/`
- **Total Icons**: 37,007 across 8 variants
- **File Format**: SVG (24x24 viewBox)

---

Made with ❤️ by Iseer
