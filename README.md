# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# balu-site


Kako da se azurira u buduce:

1. odes na server na ovaj folder: cd ~/apps/balu-site/
2. uradis git pull, znaci skidas sa github-a
3. npm install
4. npm run build
5. mkdir -p /home/krle/html/balu-site   -za prvi put
6. mkdir -p /home/krle/html/balu-site   -za prvi put
7. cp -r dist/* /home/krle/html/balu-site/   --> kopiras u html folder jer je on mountovan

a za ubuduce 

Kako da se ažurira ubuduće
1. Odeš na server u projekat:
2. cd ~/apps/balu-site
Povuceš izmene sa GitHub-a:
3. git pull
Instaliraš nove pakete ako ih ima:
4. npm install
Napraviš novi build:
5. npm run build
Osiguraš da postoji folder za sajt, MADA TO NE MORA SVAKI PUT, SAMO PRVI PUT
6. mkdir -p /home/krle/html/balu-site
Obrišeš stari build:
7. rm -rf /home/krle/html/balu-site/*
Prekopiraš novi build u html folder koji je mountovan u nginx docker:
8. cp -r dist/* /home/krle/html/balu-site/