magick montage -geometry +0+0 -background none -tile 1x ghost-idle-forward.png ghost-idle-backward.png ghost-walk-forward.png ghost-walk-backward.png ghost-interact-forward.png ghost-interact-backward.png ghost-sheet.png
magick convert ghost-sheet.png -resize 20% ghost-sheet.png
mv ghost-sheet.png ../ghost-sheet.png
