@echo off
title Create GCSS Framework

echo.
echo ============================================
echo        Creating Final GCSS Structure
echo ============================================
echo.

REM Root folders
mkdir css
mkdir themes
mkdir js
mkdir php
mkdir docs
mkdir examples
mkdir images
mkdir fonts

REM CSS folders
mkdir css\layout
mkdir css\components
mkdir css\utilities

REM JS folders
mkdir js\components
mkdir js\utilities

REM PHP folders
mkdir php\includes
mkdir php\components

REM Theme folders
mkdir themes\villa
mkdir themes\business
mkdir themes\coastal
mkdir themes\earth
mkdir themes\equestrian
mkdir themes\minimal

REM Root files
type nul > index.php
type nul > README.md
type nul > TODO.md

REM Main CSS files
type nul > css\gcss.css
type nul > css\reset.css
type nul > css\variables.css
type nul > css\typography.css

REM Layout CSS
type nul > css\layout\container.css
type nul > css\layout\grid.css
type nul > css\layout\flex.css
type nul > css\layout\header.css
type nul > css\layout\footer.css
type nul > css\layout\sidebar.css

REM Component CSS
type nul > css\components\buttons.css
type nul > css\components\cards.css
type nul > css\components\forms.css
type nul > css\components\navbar.css
type nul > css\components\hero.css
type nul > css\components\gallery.css
type nul > css\components\modal.css
type nul > css\components\tables.css
type nul > css\components\alerts.css
type nul > css\components\badges.css
type nul > css\components\breadcrumbs.css
type nul > css\components\tabs.css
type nul > css\components\accordion.css

REM Utility CSS
type nul > css\utilities\helpers.css
type nul > css\utilities\spacing.css
type nul > css\utilities\animations.css

REM Themes
type nul > themes\villa\light.css
type nul > themes\villa\dark.css

type nul > themes\business\light.css
type nul > themes\business\dark.css

type nul > themes\coastal\light.css
type nul > themes\coastal\dark.css

type nul > themes\earth\light.css
type nul > themes\earth\dark.css

type nul > themes\equestrian\light.css
type nul > themes\equestrian\dark.css

type nul > themes\minimal\light.css
type nul > themes\minimal\dark.css

REM JavaScript
type nul > js\app.js
type nul > js\components\accordion.js
type nul > js\components\gallery.js
type nul > js\components\modal.js
type nul > js\components\navbar.js
type nul > js\components\tabs.js

REM PHP includes
type nul > php\includes\header.php
type nul > php\includes\footer.php
type nul > php\includes\navbar.php
type nul > php\includes\functions.php

echo.
echo ============================================
echo        GCSS Structure Created
echo ============================================
echo.

pause