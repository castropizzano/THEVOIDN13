# CHANGELOG

All notable changes to THEVØIDN13 project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.3] - 2025-11-21

### Philosophy
- **Language without persistence**: Documented radical choice to NOT store language preference
- Language always defaults to PT, user can toggle to EN each session
- Choice resets when browser closes - zero sessionStorage for language
- Added CHOICE 6 to PHILOSOPHY.md explaining philosophical justification

### Fixed
- **CRITICAL**: Removed false claims in Transparency.tsx about `sessionStorage.setItem('language')`
- Updated ARCHITECTURE.md to reflect ephemeral language choice (not stored)
- Aligned all documentation with actual code behavior
- Improved LanguageContext.tsx comments for clarity

### Security
- Reduced storage footprint: Only `antiSurveillanceBannerDismissed` in sessionStorage
- Language toggle is now 100% in-memory (React state only)
- Zero language tracking across sessions

### Technical Details
- **Files Modified**: 5 (`Transparency.tsx`, `ARCHITECTURE.md`, `PHILOSOPHY.md`, `LanguageContext.tsx`, `VERSION`, `CHANGELOG.md`)
- **Lines Changed**: ~100 (documentation alignment)
- **Storage Reduction**: 1 sessionStorage key eliminated

---

## [2.1.2] - 2025-11-20

### Removed
- **OracleMindMapIntegration.tsx** (224 lines)
  - Deleted entire component file due to information redundancy
  - ProcessTimeline and ProcessAnalysis already provide equivalent information
  - Simplified single-journey UX by removing unnecessary complexity
  
- **Premature Action Buttons**
  - Removed action buttons from middle of Creative Oracle results section (lines 580-607)
  - Buttons were interrupting the user's reading flow
  - Relocated to end of journey for better UX sequencing

### Added
- **Explanatory Tooltips System** (`src/components/CreativeOracle.tsx`)
  - Created `SectionHeader` helper component for standardized tooltips
  - Added Info icons (ℹ️) with contextual explanations (PT/EN) for:
    - `[ARCHETYPE_DISTRIBUTION_CHART]` - Radar Chart explanation
    - `[PROCESS_TIMELINE]` - Creative process stages timeline
    - `[COMPATIBILITY_MATRIX]` - Archetype collaboration matrix
    - `[PROCESS_ANALYSIS]` - Detailed process performance analysis
    - `[PERSONALIZED_ADVICE]` - Customized recommendations
  - Implemented using `@/components/ui/tooltip` with Radix UI
  - Bilingual support via `useLanguage()` hook

- **Enhanced Action Buttons Layout**
  - New final section with visual separator (`border-t-2 border-primary/50`)
  - Contextual message: "Fim da análise. Escolha sua próxima ação" (PT/EN)
  - Larger button size (`size="lg"`) for improved accessibility
  - `CLOSE()` button highlighted with `variant="default"`
  - Centered flex layout with responsive stacking

### Changed
- **CreativeOracle.tsx Simplification**
  - Reduced from 639 to ~420 lines (34% reduction)
  - Removed import: `import { OracleMindMapIntegration } from ...`
  - Added imports: `Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`, `Info`
  - Improved information hierarchy: Questions → Results → Actions
  - Linear flow without mid-journey distractions

- **VERSION**
  - Updated from `2.1.1` to `2.1.2`

- **RELEASE_NOTES.md**
  - Added comprehensive v2.1.2 release documentation
  - Documented UX improvements and code reduction metrics

### Technical Details
- **Files Modified**: 3 (`CreativeOracle.tsx`, `VERSION`, `RELEASE_NOTES.md`)
- **Files Deleted**: 1 (`OracleMindMapIntegration.tsx`)
- **Lines of Code**: -443 net (reduction)
- **Bundle Size Impact**: Reduced by ~8KB (gzipped)

---

## [2.1.1] - 2025-11-20

### Removed
- **Pollinations.AI References** (Complete cleanup across 13 files)
  - `src/components/PollinationsAIBadge.tsx` (deleted component)
  - All documentation references to image generation feature
  - False claims about AI still generation capabilities
  - 186+ obsolete documentation lines removed

### Changed
- **PrivacyPolicyDialog.tsx**
  - Removed Section 4 about "Gerador de Stills Cinematográficos"
  - Updated data flow description to reflect actual architecture
  - Cleaned up false technical claims

- **Transparency.tsx**
  - Removed Cinematic Stills Generator section
  - Updated AI feature documentation
  - Fixed misleading infrastructure descriptions

- **Footer.tsx**
  - Removed `<PollinationsAIBadge />` component
  - Simplified badge layout (Surveillance Free + Technical Transparency)

- **useTranslation.tsx**
  - Cleaned obsolete translation keys for still generator
  - Removed unused `TranslationKey` entries

### Fixed
- **Documentation Integrity**
  - Aligned documentation with actual codebase capabilities
  - Removed contradictions between promises and implementation
  - Maintained technical transparency philosophy

### Technical Details
- **Files Modified**: 13
- **Lines Removed**: 186+
- **Components Deleted**: 1 (`PollinationsAIBadge.tsx`)

---

## [2.1.0] - 2025-11-20

### Security & Privacy - BREAKING CHANGES

- **Database Consolidation**
  - Reduced from **13 tables to 1 table**
  - Deleted all surveillance and tracking infrastructure
  - Security score improved: **92/100 → 98/100** (LGPD/GDPR compliant)

#### Deleted Tables (12 total):
1. `page_views` - Page visit tracking
2. `search_queries` - Search behavior tracking  
3. `section_engagement` - User interaction tracking
4. `contact_messages` - Contact form data collection
5. `newsletter_subscribers` - Email list collection
6. `profiles` - User profile system
7. `user_roles` - Authentication roles
8. `content_settings` - Unused CMS configuration
9. `media_assets` - Unused media management
10. `page_sections` - Unused CMS sections
11. `section_contents` - Unused CMS content
12. `video_settings` - Unused video configuration

#### Kept Tables (1 total):
- `prompts` - AI prompt library (public read-only, no RLS policies for INSERT/UPDATE/DELETE)

### Added

- **Documentation Consolidation**
  - `PROJECT_STATUS.md` - Consolidated 37 temporary audit files
  - `VERSION` - Semantic versioning file (format: `MAJOR.MINOR.PATCH`)
  - `RELEASE_NOTES.md` - User-facing release documentation
  - Enhanced badges system in `README.md` (shields.io)

- **Creative Oracle Enhancements**
  - Integration with Mind Map visualization
  - Evolution Analysis with temporal tracking
  - Contextual Quotes from "Invisible Masters" references
  - Personalized Advice system based on archetype
  - Mind Map personalization based on dominant archetype

- **Privacy Architecture**
  - Zero cookies policy (only sessionStorage)
  - Zero tracking scripts (no analytics, no pixels)
  - Zero data collection (no forms, no authentication)
  - `AntiSurveillanceBanner` component with dismissal logic
  - `SurveillanceFreeBadge` component with policy dialog
  - `TechnicalTransparencyBadge` component with transparency page link

### Changed

- **Bilingual System**
  - Complete PT-BR / EN-US implementation
  - `BilingualSection` and `BilingualContent` components
  - `useLanguage()` hook with context provider
  - Bible v13 typography system integration

- **Performance Optimizations**
  - Lazy loading for heavy components
  - Code splitting for route-based chunks
  - Optimized image loading with `OptimizedImage` component
  - PWA configuration with service worker caching

- **Documentation Updates**
  - Fixed date inconsistencies (standardized to 2025-11-20)
  - Corrected Puter.js → Pollinations.AI references
  - Updated privacy policy for accuracy
  - Consolidated scattered audit documents

### Removed

- **Temporary Files** (37 total)
  - Draft audit reports in `docs/archive/audits/`
  - Obsolete guides in `docs/archive/guides/`
  - Temporary reports in `docs/archive/reports/`

- **Surveillance Infrastructure**
  - Google Analytics integration
  - Plausible Analytics references
  - Contact form collection logic
  - Newsletter subscription system
  - User authentication system (Supabase Auth)

### Migration Guide

**From v2.0.x to v2.1.0:**

No breaking changes for end users. For developers:

1. **Database Changes**
   - If you had custom queries to deleted tables, they will fail
   - Only `prompts` table remains (read-only public access)
   - All RLS policies for user-specific data have been removed

2. **Code Changes**
   - Remove any references to deleted components
   - Update imports if using removed utilities
   - No authentication system available

3. **Environment Variables**
   - No changes required
   - Supabase connection still active (for prompts table only)

### Technical Details
- **Architecture**: 98% Static / 2% Backend
- **Backend**: Lovable Cloud (Supabase-based)
- **Database**: PostgreSQL 15.6 (Supabase)
- **Edge Functions**: Deno 1.37.0
- **Files Modified**: 50+
- **Database Migrations**: 12 DROP TABLE statements
- **Security Scan**: 3 critical issues resolved

---

## [2.0.0] - 2025-11-13

### Added - Initial Production Release

- **Core Pages**
  - `Index.tsx` - Home page with hero, features, mind map, oracle
  - `Dissertacao.tsx` - Academic dissertation page with interviews
  - `Autor.tsx` - Author biography and creative process
  - `Videos.tsx` - Video portfolio with Vimeo integration
  - `Transparency.tsx` - Technical transparency documentation
  - `NotFound.tsx` - 404 error page
  - `StyleGuide.tsx` - Typography and design system guide

- **Interactive Tools**
  - Creative Oracle with archetype analysis (13 questions)
  - Mind Map visualization (Creative-Ops ecosystem)
  - Prompt Library (AI prompts database)
  - Comic Generator (Pollinations.AI integration) *(removed in v2.1.1)*
  - Global Search functionality
  - Audio players (bilingual manifesto, project narration)
  - PDF viewers (academic documents, interviews)

- **Components Library**
  - 50+ reusable React components
  - Radix UI integration (25+ primitives)
  - Custom design system with Bible v13 typography
  - Responsive layouts with Tailwind CSS
  - Accessibility features (ARIA labels, keyboard navigation)

- **Backend Infrastructure**
  - Lovable Cloud integration (Supabase-based)
  - 13 database tables *(reduced to 1 in v2.1.0)*
  - Edge Functions (Deno runtime)
  - Row Level Security (RLS) policies *(removed in v2.1.0)*
  - Authentication system *(removed in v2.1.0)*

- **Design System**
  - Bible v13 typography (sacred spacing, canonical rhythm)
  - Dark theme with accent colors
  - Monospace font stack (JetBrains Mono, Fira Code)
  - Consistent spacing system (TVNSpacing component)
  - Responsive breakpoints (mobile-first)

- **Documentation**
  - `README.md` - Project overview and technical details
  - `LICENSE.md` - CC BY-NC-SA 4.0 license
  - `CITATION.cff` - Academic citation metadata
  - `METHODOLOGY.md` - Research methodology
  - `PHILOSOPHY.md` - Conceptual framework
  - `COPYRIGHT.md` - Co-creation ethics
  - `HOW_TO_CITE.md` - Citation guidelines
  - `REFERENCES.md` - Complete bibliography
  - `ARCHITECTURE.md` - System architecture
  - `TECH_STACK.md` - Technology stack details

- **Deployment**
  - Custom domain: `thevoidn13.com`
  - Lovable hosting (CDN)
  - GitHub repository: `castropizzano/THEVØIDN13`
  - Automated CI/CD pipeline

### Technical Specifications (v2.0.0)
- **Frontend**: React 18.3.1, TypeScript 5.5, Vite 5.3
- **Styling**: Tailwind CSS 3.4, Radix UI 1.x
- **Backend**: Supabase (PostgreSQL 15.6), Deno 1.37
- **Build Size**: ~850KB (gzipped)
- **Performance**: 95+ Lighthouse score
- **Browser Support**: Modern browsers (ES2020+)

---

## [1.x] - Development Phase (2024-2025)

### [1.5.0] - Content Integration

- Added academic documentation (Memorial Acadêmico)
- Integrated interview transcriptions (LowZine, Black Media, etc.)
- Added brand assets (LowMovie™, LowPressure™)
- Implemented video portfolio structure
- Created audio player components

### [1.0.0] - Initial Structure

- Basic site structure with React Router
- Design system foundation (Tailwind config)
- Navigation components (Header, Footer)
- Core UI components (Button, Card, Dialog)
- Project configuration (Vite, TypeScript, ESLint)

---

## Version History Summary

| Version | Release Date | Type | Changes | Impact |
|---------|-------------|------|---------|--------|
| 2.1.2 | 2025-11-20 | Patch | Oracle simplification, tooltips | UX improvement |
| 2.1.1 | 2025-11-20 | Patch | Documentation cleanup | Integrity fix |
| 2.1.0 | 2025-11-20 | Minor | Database consolidation, privacy | Security fix |
| 2.0.0 | 2025-11-13 | Major | Production release | Initial release |
| 1.5.0 | 2025-01-05 | Minor | Content integration | Feature addition |
| 1.0.0 | 2024-11-01 | Major | Initial structure | Project start |

---

## Versioning Convention

THEVØIDN13 follows [Semantic Versioning 2.0.0](https://semver.org/):

**MAJOR.MINOR.PATCH**

- **MAJOR**: Breaking changes, significant architecture shifts
- **MINOR**: New features, non-breaking changes  
- **PATCH**: Bug fixes, documentation updates

### Examples:
- `2.1.0` → Added Creative Oracle integration (new feature)
- `2.0.1` → Fixed typo in documentation (bug fix)
- `3.0.0` → Removed authentication system (breaking change)

---

## Changelog Maintenance

This file is maintained manually and updated with each release. For detailed commit history, see the [GitHub repository](https://github.com/castropizzano/THEVØIDN13).

**Last Updated**: November 20, 2025  
**Current Version**: 2.1.2  
**License**: CC BY-NC-SA 4.0
