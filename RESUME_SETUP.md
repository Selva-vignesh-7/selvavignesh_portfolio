# Dynamic Resume System Setup

This portfolio now includes a dynamic resume system that automatically fetches the latest resume from GitHub releases. Here's how to set it up:

## 1. Create a GitHub Repository for Resume

1. Create a new repository named `resume` in your GitHub account
2. Make it public so the API can access it
3. Go to the repository settings and enable GitHub Pages if needed

## 2. Upload Your Resume

1. Create a new release in your `resume` repository
2. Tag it with a version number (e.g., `v1.0.0`, `v1.1.0`)
3. Upload your resume PDF as an asset with the exact filename: `Selvavignesh_GR_Resume.pdf`
4. Publish the release

## 3. Update Configuration (if needed)

The system is configured to work with:
- **GitHub Username**: `Selva-vignesh-7`
- **Repository Name**: `resume`
- **Resume Filename**: `Selvavignesh_GR_Resume.pdf`

If you need to change these, update the constants in `src/lib/resume.ts`:

```typescript
const GITHUB_USERNAME = "YourUsername";
const RESUME_REPO = "resume";
const RESUME_FILENAME = "YourResume.pdf";
```

## 4. How It Works

### Automatic Updates
- The system fetches the latest release from your GitHub repository
- It caches the data for 5 minutes to avoid excessive API calls
- Users always get the most recent version of your resume

### Fallback System
- If GitHub is unavailable, it falls back to the local `/resume.pdf` file
- This ensures the download always works

### Features
- **Dynamic Download**: Always downloads the latest version
- **Version Display**: Shows current version and last update date
- **Loading States**: Provides feedback during download
- **Error Handling**: Graceful fallback if GitHub is unavailable

## 5. Updating Your Resume

To update your resume:

1. Update your resume PDF
2. Create a new release in your `resume` repository
3. Increment the version tag (e.g., `v1.0.0` → `v1.1.0`)
4. Upload the new PDF with the same filename
5. Publish the release

The portfolio will automatically detect and serve the new version!

## 6. Benefits

- **Always Current**: Users always get your latest resume
- **Version Control**: Track changes with GitHub releases
- **No Manual Updates**: No need to update the portfolio code
- **Professional**: Shows you're up-to-date with modern practices
- **Reliable**: Fallback system ensures it always works

## 7. API Rate Limits

GitHub API has rate limits, but the system includes:
- 5-minute caching to reduce API calls
- Error handling for rate limit scenarios
- Fallback to local resume if needed

## 8. Security

- Uses GitHub's public API (no authentication needed)
- Only fetches release data, not repository contents
- Secure download URLs from GitHub's CDN

This system makes your portfolio more professional and ensures visitors always have access to your most current resume!
