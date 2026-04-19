# CAVAI — Landing Page

Primera plataforma de agentes IA autónomos en español para emprendedores y PyMEs latinas.

## Deploy en Vercel (5 minutos)

### 1. Sube a GitHub
```bash
cd cavai-landing
git init
git add .
git commit -m "CAVAI landing page"
git remote add origin https://github.com/joseangelcavi/cavai.git
git push -u origin main
```

### 2. Conecta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Selecciona el repo `joseangelcavi/cavai`
4. Framework: Next.js (auto-detectado)
5. Click "Deploy"

### 3. Conecta el dominio
1. En Vercel → Settings → Domains
2. Agrega `cavai.lat`
3. Configura los DNS en tu registrador:
   - Tipo A: `76.76.21.21`
   - Tipo CNAME: `cname.vercel-dns.com`

## Desarrollo local
```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Deploy: Vercel
