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

npx playwright install firefox ffmpeg webkit
bash ./install.sh
node airfox.mjs
```
or on Windows:
```bat

npx playwright install firefox ffmpeg webkit
install.bat
node airfox.mjs
```
## License
MIT license.\
see `LICENSE`.
