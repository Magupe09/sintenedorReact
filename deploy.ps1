# Crear una nueva rama gh-pages
git checkout --orphan gh-pages

# Eliminar todos los archivos
git rm -rf .

# Copiar los archivos de dist
Copy-Item -Path "dist\*" -Destination "." -Recurse

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Deploy to GitHub Pages"

# Forzar push a la rama gh-pages
git push origin gh-pages --force

# Volver a la rama main
git checkout main 