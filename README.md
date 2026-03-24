# Investment Calculator Mini App

Static Telegram Mini App for cascade reinvestment modeling.

## Features
- RU / EN / UZ interface
- Initial investment
- Annual return
- Cycle length in months
- Projection horizon
- Reinvestment percentage
- Recurring monthly contribution
- Manual extra contributions by month
- Monthly table, chart, CSV export

## Local preview
Open `index.html` in a browser.

## Deploy to Vercel
1. Create a new Vercel project.
2. Upload this folder or connect a GitHub repo.
3. Deploy as a static site.
4. Copy the production URL.

## Connect to Telegram
In @BotFather:
1. `/mybots`
2. Select `@moneycalbot`
3. `Bot Settings` -> `Menu Button`
4. Set text like `Open Calculator`
5. Set your Vercel URL

Optional:
- Configure Main Mini App in BotFather
- Configure splash screen and previews

## Security
The bot token should be kept in environment variables if you later add a backend.
This static version does not need the token to work.
update
