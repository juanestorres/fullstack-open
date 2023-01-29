```mermaid
sequenceDiagram
    participant browser
    participant server
    Note right of browser: The browser saves the new note into notes
    Note right of browser: The browser clears the form content
    Note right of browser: The browser redraws notes to shows the new one.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    
  ```
