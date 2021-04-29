# Code Dermatology
Uses images in a Google Drive folder to generate a grid like the board game "Codenames" for a game-based learning assignment in a Dermatology class.

For this project I was working with a Dermatology professor that had images stored in UF cloud storage (Dropbox and Google Drive). She wanted to create a website where students could see a random array of a subset of the images that were in the cloud storage. To facilitate this, I used Google Apps Scripts to generate a grid of images by using the Google Apps API, the Google Apps Script service, and Google Sites. The code pulls a random set of images within a specific Google Drive folder in order to place the images on the Google Site.

The script and API is granted access to files within a specific Google Drive folder in order to generate a random website for students to view as part of an assignment. Students can only access the site by authenticating with their UF Google account, but the website itself, the app script, and the API does not get access to any visitor data (student data) whatsoever.
