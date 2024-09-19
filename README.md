Starting and setting up the URLs and vite config for the App:



server:
-> npm start

.enf file needed for the server:

PORT_URL=7171

MONGO_URL=mongodb://localhost:27017/mern-chat-app

JWT_SECRET_KEY=B0sQ6eLSePsKSVE7hHTyuWB6Mg15z+aMsL4nnXxzJzk=

NODE_ENV=development

REACT_CORS_URL=http://localhost:5173



client:
-> npm run dev

.enf file needed for the client:

VITE_APP_URL=http://localhost:7171




vite config updated:

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/server": {
        target: "http://localhost:7171",
        changeOrigin: true,
        secure: false,
      },
    }
  }
})