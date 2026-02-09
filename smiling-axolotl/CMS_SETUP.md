# Decap CMS Setup Guide

## Overview
This project uses Decap CMS (formerly Netlify CMS) to manage the Projects section dynamically. The CMS allows non-technical users to add, edit, and remove projects without touching code.

## Accessing the CMS

Once deployed on Netlify, you can access the CMS at:
```
https://your-site.netlify.app/admin/
```

For local development:
```
http://localhost:5173/admin/
```

## Setup Steps

### 1. Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Identity**
3. Click **Enable Identity**
4. Under **Registration preferences**, select "Invite only" (recommended)
5. Under **External providers**, you can enable OAuth providers like GitHub, Google, etc.

### 2. Enable Git Gateway

1. In the same Identity settings page
2. Scroll to **Services** > **Git Gateway**
3. Click **Enable Git Gateway**

### 3. Invite Users

1. Go to the **Identity** tab in your Netlify dashboard
2. Click **Invite users**
3. Enter email addresses of team members who should have CMS access
4. They'll receive an invitation email to set up their account

## Managing Projects

### Project Fields

Each project has the following fields:

- **Title** (required): The name of the project/game
- **Image** (required): Upload an image or select from media library
- **Tags** (required): Select 1-3 tags from:
  - `OWNERSHIP` - Projects you own
  - `PARTNERSHIP` - Collaborative projects
  - `THIRD-PARTY` - Client/external projects
  - `GAME-JAM` - Game jam entries
- **Description** (required): Detailed description (shown in modal)
- **Link** (optional): URL to the project (e.g., Roblox game link)

### Adding a New Project

1. Log in to the CMS (`/admin/`)
2. Click on **Projects** in the left sidebar
3. Click **New Projects**
4. Fill in all required fields:
   - Enter a title
   - Upload an image (recommended: 16:9 aspect ratio)
   - Select 1-3 tags
   - Write a description
   - Add a link (optional)
5. Click **Publish** > **Publish now**

### Editing a Project

1. Go to **Projects** in the CMS
2. Click on the project you want to edit
3. Make your changes
4. Click **Publish** > **Publish now**

### Deleting a Project

1. Go to **Projects** in the CMS
2. Click on the project you want to delete
3. Click **Delete entry** (red button at the top)
4. Confirm the deletion

## File Structure

```
smiling-axolotl/
├── public/
│   ├── admin/
│   │   ├── index.html          # CMS interface page
│   │   └── config.yml          # CMS configuration
│   └── images/
│       └── projects/           # Uploaded project images
├── src/
│   ├── components/
│   │   └── ProjectsSection.vue # Component that displays projects
│   └── data/
│       └── projects/           # JSON files for each project
│           ├── project-1.json
│           └── ...
```

## How It Works

1. **Content Management**: When you create/edit a project in the CMS, Decap commits a JSON file to your Git repository
2. **Build Process**: When changes are pushed, Netlify automatically rebuilds your site
3. **Dynamic Loading**: The `ProjectsSection.vue` component reads all JSON files from `src/data/projects/` and displays them in the carousel
4. **No Code Changes**: All project management happens through the CMS UI - no code editing required!

## Image Guidelines

For best results with project images:

- **Aspect Ratio**: 16:9 (e.g., 1920x1080, 1280x720)
- **Format**: SVG, PNG, or JPG
- **Size**: Keep under 1MB for faster loading
- **Content**: Use high-quality screenshots or promotional images

## Tag Color System

Tags are automatically styled with specific colors:

- 🔵 **OWNERSHIP**: Blue (#2898ff)
- 🟡 **PARTNERSHIP**: Yellow (#FAC020)
- 🔴 **THIRD-PARTY**: Red (#FF4757)
- 🟣 **GAME-JAM**: Purple (#9b59b6)

## Troubleshooting

### Can't access /admin/
- Make sure Netlify Identity is enabled
- Check that you're logged in
- Clear browser cache and try again

### Changes not appearing on the site
- Check that you clicked "Publish" (not just "Save")
- Wait for Netlify to rebuild (usually 1-2 minutes)
- Check the Netlify deploy logs for errors

### Image upload not working
- Ensure the image file size is reasonable (< 5MB)
- Check that the file format is supported (PNG, JPG, SVG, GIF)
- Verify you have Git Gateway enabled

## Local Development

To test the CMS locally with authentication:

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Run the development server with Netlify:
   ```bash
   netlify dev
   ```

3. Access the CMS at `http://localhost:8888/admin/`

**Note**: For local development without authentication, you can use the [Decap CMS Proxy Server](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository).

## Support

For more information about Decap CMS, visit:
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
