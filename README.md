# Lucas & Sophia — GitHub Pages Wedding Invitation

A self-contained romantic wedding invitation reconstructed from the supplied HAR export.

## Included

- Animated opening screen
- Extracted DreamsInvite gift-box image
- Extracted DreamsInvite logo
- Extracted `love_me_like_you_do.mp3`
- Background music with play/pause control
- Cinematic hero section
- Love story
- Wedding events
- Countdown
- Photo-gallery placeholders
- RSVP button
- Google Maps link
- Responsive mobile layout
- No build system required

## GitHub Pages

1. Create a new GitHub repository.
2. Upload **all files and folders** from this directory.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. Your invitation will be available at the GitHub Pages URL.

## Customize

Edit `index.html` to change:

- Couple names
- Date and venue
- Event times
- RSVP email
- Story text

Edit `script.js` to change the countdown date.

For photographs, put your images in `assets/` and replace the three `.photo` blocks in `index.html`.

## Important HAR limitation

The supplied HAR contains only 9 captured network entries. It includes the music file and two PNG assets, but it does **not** contain the original HTML, CSS, JavaScript, photographs, fonts, or most page resources. Therefore this repository is a faithful **reconstruction using the assets actually embedded in the HAR**, not a byte-for-byte copy of the original DreamsInvite page.
