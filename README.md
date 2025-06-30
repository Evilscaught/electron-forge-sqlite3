# Electron + Forge + SQLite3 

# Getting Started

## Environment
```
Node Version:   22.14.0
NPM Version:    10.9.2 # Shouldn't matter but I'm putting it out here
Python Version: 3.10.5 # If I recall correctly SQLite3 might need this
NVM Version:    0.40.3
```

## Starting the application
```
npm install
npm run start
```
When the application starts you should see:
<img width="1267" alt="Capture d’écran 2025-06-28 à 11 45 42 AM" src="https://github.com/user-attachments/assets/42951f3d-df1b-44fb-9878-1275031697b5" />

## Reproducing the SQLite3 Error
Run the following commands
```
  npm run package
  npm run make
```
Those commands should compile and package the program. <br />
Once you've done that, navigate to the newly created directory where you'll find the executables <br />
For example, on my set-up the executable was created at `@project-directory/out/electron-forge-sqlite3-darwin-arm64/electron-forge-sqlite3` but this might vary slightly depending on the operating system.

Once the executable is located, run it and you should get the following error (or something similar):

```
A JavaScript error occurred in the main process
Uncaught Exception:
Error: Please install sqlite package manually
at z._loadDialectModule (/Users/evilscaught/Documents/electron-forge-sqlite3/out/electron-forge-sqlite3-darwin-arm64/electron-forge-sqlite3.app/

...
```
<img width="550" alt="Capture d’écran 2025-06-28 à 11 47 06 AM" src="https://github.com/user-attachments/assets/20114633-8cd3-44c4-a6ca-f58f2f203acc" />


# Environment used in setting up this project
Shouldn't matter in getting started with this project but it's worth mentioning
```
Operating System: MacOS Sequoia 15.5
Model:            Macbook M1 Pro
```
