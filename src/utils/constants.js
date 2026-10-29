/**
 * Constants used throughout the application
 * Centralizes magic numbers and configuration values
 */

// Canonical site address — every absolute URL (canonical, sitemap, robots,
// structured data, footer) is built from this, so the domain lives in one place.
const SITE_URL = "https://chromebook-unlocked.github.io";
const SITE_HOST = "chromebook-unlocked.github.io";

// Google Analytics 4 measurement ID (see src/utils/analytics.js).
const GA_MEASUREMENT_ID = "G-D02VL7XL64";

// Game and content constants
const MAX_RECENT_GAMES = 25; // Maximum games to show in "Recently Played"
const NEWLY_ADDED_GAMES_COUNT = 12; // Number of newest games to show in "Newly Added"
const RECOMMENDED_GAMES_COUNT = 42; // Total number of recommended games on game page (7 rows x 6 columns)
const MAX_RELATED_GAMES = 5; // Maximum related games in recommendations before adding random games

// Lazy loading constants
const EAGER_LOAD_CARDS = 4; // First N cards to eagerly load in each category
const EAGER_LOAD_RECENT = 6; // First N cards to eagerly load in recently played

// Home page lazy loading constants
const INITIAL_ROWS = 4; // Number of rows to render on initial page load
const ROWS_PER_LOAD = 3; // Number of rows to load when user scrolls near bottom
const SCROLL_THRESHOLD = 300; // Pixels from bottom to trigger loading more rows

// Category display constants
const MIN_CATEGORY_SIZE = 4; // Minimum games in category to show on homepage

// Default thumbnail filenames (in order of preference)
const DEFAULT_THUMBNAILS = ["thumbnail.webp", "thumbnail.png", "thumbnail.jpg"];

// Build progress reporting
const PROGRESS_REPORT_INTERVAL = 10; // Report progress every N games

// Game iframe sandbox. Omits allow-top-navigation so embedded games cannot
// redirect the host page. allow-same-origin is kept because games live on this
// origin and need localStorage/IndexedDB for saves; that means the sandbox is
// a guard against stray engine behaviour, not an isolation boundary.
const GAME_FRAME_SANDBOX = "allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-modals allow-downloads allow-orientation-lock";

module.exports = {
  SITE_URL,
  SITE_HOST,
  GA_MEASUREMENT_ID,
  MAX_RECENT_GAMES,
  NEWLY_ADDED_GAMES_COUNT,
  RECOMMENDED_GAMES_COUNT,
  MAX_RELATED_GAMES,
  EAGER_LOAD_CARDS,
  EAGER_LOAD_RECENT,
  INITIAL_ROWS,
  ROWS_PER_LOAD,
  SCROLL_THRESHOLD,
  MIN_CATEGORY_SIZE,
  DEFAULT_THUMBNAILS,
  PROGRESS_REPORT_INTERVAL,
  GAME_FRAME_SANDBOX
};
