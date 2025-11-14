# 🎨 Complete Typography & Content Editing System

## Overview

Your project now has a **3-layer editing system** for complete creative control:

### 🎯 Layer 1: Global Typography Control
**CSS Variables** power all typography classes across your entire site.

### 🎛️ Layer 2: Hacker Control Panel (Editor-Only)
**Live sliders** to adjust typography in real-time while editing.

### 📝 Layer 3: Content Management System
**Editable text fields** for instant content updates without touching code.

---

## 🚀 How to Use

### Typography Control Panel

1. **Open the panel**: Click the "🎨 TYPOGRAPHY" button in the top-right corner
2. **Expand controls**: Click the down arrow to see all options
3. **Choose a tab**: Title, Subtitle, Body, Caption, or Spacing
4. **Adjust sliders**: See changes applied instantly across the entire site
5. **Actions**:
   - **Reset**: Return all values to defaults
   - **Export**: Copy settings as JSON to clipboard
   - **Import**: Paste JSON to apply saved settings
   - **Hide**: Click the eye icon to hide the panel

**Settings Available:**
- **Title**: Font size, weight, line-height, letter-spacing, margins
- **Subtitle**: Font size, weight, line-height, letter-spacing, margins  
- **Body**: Font size, weight, line-height, letter-spacing, paragraph spacing
- **Caption**: Font size, weight, line-height, letter-spacing (for links/tags)
- **Spacing**: Section spacing, block spacing

### Content Editor Panel

1. **Open the panel**: Click the "📝 CONTENT" button in the top-right corner
2. **Filter by page**: Click "All Pages" or select a specific page
3. **Search**: Use the search bar to find specific fields
4. **Edit content**: Simply type in the input fields
5. **Changes save automatically** to localStorage
6. **Actions**:
   - **Reset All**: Clear all edits and restore defaults
   - **Export**: Copy all content as JSON
   - **Import**: Paste JSON to restore content

**Content Types:**
- **Heading**: Short titles and headings
- **Text**: Single-line captions and labels
- **Textarea**: Multi-line paragraphs and descriptions

---

## 🛠️ For Developers: Making Content Editable

### Quick Start

```tsx
import { EditableHeading, EditableParagraph, EditableCaption } from '@/components/EditableText';

// Example: Editable heading
<EditableHeading
  id="unique-id"
  defaultValue="Your Default Text"
  label="Field Label"
  page="Home"
  section="Hero"
  as="h2"
  className="bible-title"
/>

// Example: Editable paragraph
<EditableParagraph
  id="intro-text"
  defaultValue="Your paragraph content here..."
  label="Introduction Text"
  page="About"
  section="Intro"
  as="p"
  className="bible-body"
/>
```

### Props Explained

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `id` | string | Unique identifier (must be unique across entire site) | ✅ Yes |
| `defaultValue` | string | The default text content | ✅ Yes |
| `label` | string | Label shown in Content Editor panel | ✅ Yes |
| `page` | string | Page name for organization (e.g., "Home", "About") | ✅ Yes |
| `section` | string | Section name within page (e.g., "Hero", "Manifesto") | No |
| `as` | string | HTML element to render (h1-h6, p, span, div) | No |
| `className` | string | CSS classes to apply | No |

### Component Variants

```tsx
// For headings (titles, subtitles)
<EditableHeading {...props} />

// For paragraphs (body text)
<EditableParagraph {...props} />

// For captions (short text, links)
<EditableCaption {...props} />

// Generic component with type control
<EditableText {...props} type="textarea" />
```

### Advanced Usage: Custom Render

```tsx
<EditableText
  id="custom-render"
  defaultValue="Custom text"
  label="Custom Field"
  page="Home"
>
  {(value) => (
    <div className="custom-wrapper">
      <span className="prefix">→ </span>
      {value}
    </div>
  )}
</EditableText>
```

---

## 📐 Typography Classes Reference

All classes now use CSS variables for live control:

### Core Classes
- `.bible-title` - Main titles (21.33px, bold, uppercase)
- `.bible-subtitle` - Subtitles (20px, semi-bold, uppercase)
- `.bible-body` - Body text (17.33px, regular, justified)
- `.bible-link` - Links and captions (14.67px)
- `.bible-lang-tag` - Language tags (17.33px, red)

### Spacing Classes
- `.bible-section-spacing` - Space between sections
- `.bible-block-spacing` - Space before new blocks

### CSS Variables
All typography is controlled by these variables:

```css
/* Title Variables */
--tvn-title-font-size: 21.33px
--tvn-title-font-weight: 700
--tvn-title-line-height: 1.2
--tvn-title-letter-spacing: 0
--tvn-title-margin-top: 48px
--tvn-title-margin-bottom: 20px

/* Subtitle Variables */
--tvn-subtitle-font-size: 20px
--tvn-subtitle-font-weight: 600
--tvn-subtitle-line-height: 1.3
/* ... and so on */
```

---

## 💾 Data Storage

### Typography Settings
- Stored in: **CSS variables** on `document.documentElement`
- Persistence: Settings are **NOT saved** between sessions (by design)
- Export/Import: Use the Export button to save settings as JSON

### Content Edits
- Stored in: **localStorage** (`tvn-content-editor`)
- Persistence: **Automatically saved** and restored between sessions
- Export/Import: Use Export/Import buttons to backup or share content

### Clear All Data

```javascript
// Clear typography (refresh page to reset)
// Just close and reopen the panel

// Clear content edits
localStorage.removeItem('tvn-content-editor');
// Or use "Reset All" button in Content Editor panel
```

---

## 🎯 Workflow Examples

### Scenario 1: Adjust Typography for Better Readability

1. Open Typography Control Panel
2. Go to "Body" tab
3. Increase font-size from 17.33px to 18px
4. Increase line-height from 1.6 to 1.7
5. See changes instantly across entire site
6. Export settings to save your configuration

### Scenario 2: Quick Content Update

1. Open Content Editor Panel
2. Filter to "Home" page
3. Search for "manifesto"
4. Edit the text directly
5. Changes save automatically

### Scenario 3: Create Consistent Theme

1. Adjust typography in Control Panel
2. Export typography settings
3. Make content edits in Editor Panel
4. Export content
5. Share both JSON files with team
6. Team imports to replicate exact setup

---

## 🔒 Editor-Only Features

Both panels are marked "Editor Only" and designed for your editing workflow. They:
- ✅ Are visible only to you during development
- ✅ Don't appear in production builds
- ✅ Can be hidden with a single click
- ✅ Work independently and don't interfere with each other

---

## 🚨 Important Notes

1. **IDs Must Be Unique**: Each editable field needs a unique `id` prop
2. **Typography Not Persistent**: Typography settings reset on page refresh (export to save)
3. **Content Is Persistent**: Content edits save automatically to localStorage
4. **Mobile Responsive**: The original mobile-responsive behavior is preserved
5. **No Breaking Changes**: All existing pages work exactly as before
6. **Backward Compatible**: Non-editable content still works normally

---

## 📊 Current Implementation

**Pages with editable content:**
- ✅ Home (Index) - Subtitle, Transmission title, Manifesto title & intro

**Ready to extend to:**
- Autor
- Dissertacao  
- Videos
- All other pages

**Typography classes converted:**
- ✅ bible-title
- ✅ bible-subtitle
- ✅ bible-body
- ✅ bible-link
- ✅ bible-lang-tag
- ✅ bible-section-spacing
- ✅ bible-block-spacing

---

## 🎉 Next Steps

1. **Try the panels** - Open both and explore the controls
2. **Make edits** - Adjust typography and content
3. **Export your settings** - Save your configurations
4. **Extend to more pages** - Add `EditableText` components to other pages
5. **Customize further** - Add color controls, responsive breakpoints, or presets

---

## 💡 Tips & Tricks

- **Keyboard shortcut idea**: Add Ctrl+E to toggle Content Editor
- **Presets**: Create saved typography configurations for different moods
- **Batch edit**: Use search to find and edit similar content
- **Responsive**: Add separate controls for mobile, tablet, desktop
- **Database**: Upgrade from localStorage to Supabase for multi-device sync
- **Color controls**: Extend the system to manage color schemes
- **Animation controls**: Add sliders for transition speeds and effects

---

**Built with:** React, TypeScript, CSS Variables, localStorage API
**Compatibility:** All modern browsers
**License:** Part of THEVØIDN13 project

🎨 Happy editing!
