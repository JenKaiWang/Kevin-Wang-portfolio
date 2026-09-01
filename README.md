
# Kevin Website

This is Kevin Wang's portfolio website. The original design project is available in Figma:
https://www.figma.com/design/rH5IFCpMSNUSw7tmRJdKkg/Kevin-website

## Open the Website Locally

This project uses Vite, React, and npm.

### Option 1: If Node.js is installed normally

1. Open PowerShell.
2. Go to the project folder:

```powershell
cd "C:\Users\Kevin\Desktop\Kevin Wang Profolio"
```

3. Install dependencies:

```powershell
npm install
```

4. Start the local website:

```powershell
npm run dev
```

5. Open the local URL shown in the terminal. It is usually:

```text
http://localhost:5173
```

### Option 2: Using the portable Node.js included in this folder

Use this option on Kevin's current computer if `node` or `npm` is not recognized.

1. Open PowerShell.
2. Go to the project folder:

```powershell
cd "C:\Users\Kevin\Desktop\Kevin Wang Profolio"
```

3. Temporarily add the portable Node.js folder to PowerShell:

```powershell
$env:Path = "C:\Users\Kevin\Desktop\Kevin Wang Profolio\.tools\node-v24.17.0-win-x64;$env:Path"
```

4. Install dependencies, if `node_modules` is missing:

```powershell
.\.tools\node-v24.17.0-win-x64\npm.cmd install
```

5. Start the website:

```powershell
.\.tools\node-v24.17.0-win-x64\npm.cmd run dev -- --host 127.0.0.1 --port 5173
```

6. Open this URL in your browser:

```text
http://127.0.0.1:5173
```

## Build Check

To make sure the site can be built for production, run:

```powershell
npm run build
```

If you are using the portable Node.js setup, run this first in the same PowerShell window:

```powershell
$env:Path = "C:\Users\Kevin\Desktop\Kevin Wang Profolio\.tools\node-v24.17.0-win-x64;$env:Path"
```
