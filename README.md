# Airfox
Airfox is a simple web browser / content fetcher based on Markdownee. It runs on Node.js.
## Process Flowchart
```mermaid
flowchart TD
    A[Find path delimiter]@{shape: in-out}
    B[Ask for URL]@{shape: manual-input}
    C[Fetch]
    D[Document]@{shape: doc}
    E[Generate ULID]
    F[Save]@{shape: disk}
    OS@{shape: terminal} --> A
    Time@{shape: terminal} --> E
    Randomness@{shape: terminal} --> E
    Z@{shape: stop}
    B --> C
    C --> D
    D --> F
    A --> F
    E --> F
    F --> Z
```
## Installation
run:
```bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
npm install playwright
npx playwright install firefox ffmpeg webkit
bash ./install.sh
node airfox.mjs
```
or on Windows:
```bat

curl https://nodejs.org/dist/v24.21.0/node-v24.21.0-x64.msi -o x64node.msi
curl https://nodejs.org/dist/v24.21.0/node-v24.21.0-arm64.msi -o arm64node.msi
x64node.msi # arm64node.msi if you are running an ARM system
follow the installer and select npm for the package manager
npm install playwright
npx playwright install firefox ffmpeg webkit
install.bat
node airfox.mjs
```
## License
MIT license.\
see `LICENSE`.
